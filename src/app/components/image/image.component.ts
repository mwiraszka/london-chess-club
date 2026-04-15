import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';

import { Image, Url } from '@app/models';
import { calculateAspectRatio } from '@app/utils';

type DisplayMode = 'none' | 'thumbnail' | 'main' | 'fallback';

const FALLBACK_SRC: Url = 'assets/fallback-image.png';
const TRANSPARENT_PIXEL: Url =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * Renders an image with progressive loading, blur-up transition, shimmer
 * placeholder, and a deterministic fallback chain (main -> thumbnail ->
 * fallback asset). Accepts a full `Image` model; for static assets or data
 * URLs use a plain `<img>` element instead.
 */
@Component({
  selector: 'lcc-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  public readonly image = input.required<Image | null>();
  public readonly priority = input<boolean>(false);

  public readonly loaded = output<void>();

  public readonly currentSrc = signal<Url>(TRANSPARENT_PIXEL);
  public readonly blurred = signal<boolean>(false);
  public readonly displayMode = signal<DisplayMode>('none');

  public readonly aspectRatio = computed<string | null>(() => {
    const img = this.image();
    if (!img?.mainWidth || !img?.mainHeight) {
      return null;
    }
    return calculateAspectRatio(img.mainWidth, img.mainHeight);
  });

  public readonly showShimmer = computed<boolean>(() => this.displayMode() === 'none');
  public readonly caption = computed<string>(() => this.image()?.caption ?? '');

  private readonly destroyRef = inject(DestroyRef);

  private mainFailed = false;
  private thumbnailFailed = false;
  private currentPreloader: HTMLImageElement | null = null;

  constructor() {
    effect(() => {
      const img = this.image();
      this.resolveSource(img);
    });

    this.destroyRef.onDestroy(() => this.cancelPreload());
  }

  protected onImgLoad(): void {
    this.loaded.emit();
  }

  protected onImgError(): void {
    const img = this.image();
    if (!img) {
      this.displayMode.set('fallback');
      this.currentSrc.set(FALLBACK_SRC);
      this.blurred.set(false);
      return;
    }

    const mode = this.displayMode();

    if (mode === 'main') {
      this.mainFailed = true;
      if (img.thumbnailUrl && !this.thumbnailFailed) {
        this.displayMode.set('thumbnail');
        this.currentSrc.set(img.thumbnailUrl);
        this.blurred.set(false);
        return;
      }
    } else if (mode === 'thumbnail') {
      this.thumbnailFailed = true;
      if (img.mainUrl && !this.mainFailed) {
        this.displayMode.set('main');
        this.currentSrc.set(img.mainUrl);
        this.blurred.set(false);
        return;
      }
    }

    this.displayMode.set('fallback');
    this.currentSrc.set(FALLBACK_SRC);
    this.blurred.set(false);
  }

  private resolveSource(img: Image | null): void {
    this.cancelPreload();
    this.mainFailed = false;
    this.thumbnailFailed = false;

    if (!img) {
      this.displayMode.set('fallback');
      this.currentSrc.set(FALLBACK_SRC);
      this.blurred.set(false);
      return;
    }

    const { mainUrl, thumbnailUrl } = img;

    if (!mainUrl && !thumbnailUrl) {
      this.displayMode.set('none');
      this.currentSrc.set(TRANSPARENT_PIXEL);
      this.blurred.set(false);
      return;
    }

    if (mainUrl && thumbnailUrl) {
      this.displayMode.set('thumbnail');
      this.currentSrc.set(thumbnailUrl);
      this.blurred.set(true);
      this.preloadMain(mainUrl);
      return;
    }

    if (mainUrl) {
      this.displayMode.set('main');
      this.currentSrc.set(mainUrl);
      this.blurred.set(false);
      return;
    }

    this.displayMode.set('thumbnail');
    this.currentSrc.set(thumbnailUrl!);
    this.blurred.set(false);
  }

  private preloadMain(mainUrl: Url): void {
    const preloader = new window.Image();
    this.currentPreloader = preloader;

    preloader.onload = () => {
      if (this.currentPreloader !== preloader) {
        return;
      }
      this.currentPreloader = null;
      this.displayMode.set('main');
      this.currentSrc.set(mainUrl);
      this.blurred.set(false);
    };

    preloader.onerror = () => {
      if (this.currentPreloader !== preloader) {
        return;
      }
      this.currentPreloader = null;
      this.mainFailed = true;
      this.blurred.set(false);
    };

    preloader.src = mainUrl;
  }

  private cancelPreload(): void {
    if (!this.currentPreloader) {
      return;
    }
    this.currentPreloader.onload = null;
    this.currentPreloader.onerror = null;
    this.currentPreloader = null;
  }
}
