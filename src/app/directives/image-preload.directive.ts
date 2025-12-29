import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import { Image } from '@app/models';
import { calculateAspectRatio } from '@app/utils';

/**
 * 1. Provides fallback for broken images (courtesy of Subhan Naeem)
 * 2. Sets aspect ratio to prevent layout shift (when dimensions provided)
 * 3. Respects existing CSS aspect-ratio (doesn't override fixed ratios in grids)
 * 4. Progressive loading with blur-up technique
 */
@Directive({
  selector: 'img[image]',
  host: {
    '(error)': 'onImageError()',
    '(load)': 'onImageLoad()',
    '[src]': 'currentSrc',
    '[alt]': 'image?.caption',
  },
})
export class ImagePreloadDirective implements OnInit, OnChanges {
  readonly FALLBACK_SRC = 'assets/fallback-image.png';

  @Input({ required: true }) image?: Partial<Image> | null;

  @HostBinding('style.aspect-ratio') aspectRatio?: string;
  @HostBinding('style.transition') transition = 'filter 0.3s ease, opacity 0.3s ease';
  @HostBinding('style.filter') filter = 'none';
  @HostBinding('style.opacity') opacity = '1';
  @HostBinding('style.background') background = 'none';

  public currentSrc?: string | null;

  private skeletonElement?: HTMLElement;

  constructor(
    private readonly elementRef: ElementRef<HTMLImageElement>,
    private readonly renderer: Renderer2,
  ) {}

  public ngOnInit(): void {
    this.updateImage();
  }

  public ngOnChanges(changes: SimpleChanges<ImagePreloadDirective>): void {
    if (changes.image) {
      this.updateImage();
    }
  }

  protected onImageLoad(): void {
    this.removeShimmerEffect();

    const mainUrl = this.image?.mainUrl;
    const thumbnailUrl = this.image?.thumbnailUrl;

    // If thumbnail URL is currently displayed but the main URL exists, load it
    if (thumbnailUrl && this.currentSrc === thumbnailUrl && mainUrl) {
      // Display a blur effect during the transition
      this.filter = 'blur(3px)';

      const fullImage = new window.Image();

      fullImage.src = mainUrl;
      fullImage.onload = () => {
        // Only update if we are still showing the same thumbnail and the main URL is still the same
        if (this.currentSrc === thumbnailUrl && this.image?.mainUrl === mainUrl) {
          this.currentSrc = mainUrl;
          this.filter = 'none';
        }
      };
      fullImage.onerror = () => {
        if (this.currentSrc === thumbnailUrl) {
          this.filter = 'none';
        }
      };
    } else {
      this.filter = 'none';
    }
  }

  protected onImageError(): void {
    if (this.skeletonElement) {
      return;
    }

    this.removeShimmerEffect();
    this.filter = 'none';

    // Try alternative URLs if current one failed
    if (this.currentSrc === this.image?.mainUrl) {
      this.currentSrc = this.image?.thumbnailUrl || this.FALLBACK_SRC;
    } else if (this.currentSrc === this.image?.thumbnailUrl) {
      this.currentSrc = this.image?.mainUrl || this.FALLBACK_SRC;
    } else {
      this.currentSrc = this.FALLBACK_SRC;
    }
  }

  protected updateImage(): void {
    if (!this.image) {
      this.removeShimmerEffect();
      this.currentSrc = this.FALLBACK_SRC;
      this.filter = 'none';
      return;
    }

    if (this.image?.mainWidth && this.image?.mainHeight) {
      this.setAspectRatio(this.image.mainWidth, this.image.mainHeight);
    }

    const { mainUrl, thumbnailUrl } = this.image;

    if (mainUrl || thumbnailUrl) {
      this.removeShimmerEffect();

      // If we are already showing the thumbnail and the main URL just became available,
      // transition to it with a blur.
      if (thumbnailUrl && this.currentSrc === thumbnailUrl && mainUrl) {
        this.currentSrc = mainUrl;
        this.filter = 'blur(3px)';
        return;
      }

      this.currentSrc = mainUrl || thumbnailUrl;
      this.filter = 'none';
    } else {
      this.displayShimmerEffect();
    }
  }

  private displayShimmerEffect(): void {
    // Clean up any existing shimmer first
    this.removeShimmerEffect();

    this.background = 'var(--lcc-color--contentPlaceholder-background)';

    // Use the data URI for a transparent 1x1 pixel image to hide the broken image icon
    this.currentSrc =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    const shimmer = this.renderer.createElement('div');

    this.renderer.addClass(shimmer, 'lcc-content-placeholder');
    this.renderer.setStyle(shimmer, 'position', 'absolute');
    this.renderer.setStyle(shimmer, 'top', '0');
    this.renderer.setStyle(shimmer, 'left', '0');
    this.renderer.setStyle(shimmer, 'width', '100%');
    this.renderer.setStyle(shimmer, 'height', '100%');
    this.renderer.setStyle(shimmer, 'pointer-events', 'none');

    const parentElement = this.elementRef.nativeElement.parentElement;
    if (parentElement) {
      this.renderer.setStyle(parentElement, 'position', 'relative');
      this.renderer.setStyle(parentElement, 'overflow', 'hidden');
      this.renderer.appendChild(parentElement, shimmer);
    }
    this.skeletonElement = shimmer;
  }

  private removeShimmerEffect(): void {
    if (!this.skeletonElement) {
      return;
    }

    const parentElement = this.elementRef.nativeElement.parentElement;

    if (parentElement && parentElement.contains(this.skeletonElement)) {
      this.renderer.removeChild(parentElement, this.skeletonElement);
      this.renderer.removeStyle(parentElement, 'overflow');
    }

    // Make sure the image is visible
    this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
    this.skeletonElement = undefined;
    this.background = '';
  }

  private setAspectRatio(width: number, height: number): void {
    this.aspectRatio = calculateAspectRatio(width, height);

    this.elementRef.nativeElement.setAttribute('width', width.toString());
    this.elementRef.nativeElement.setAttribute('height', height.toString());
  }
}
