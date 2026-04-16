import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subject, timer } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

import { Image } from '@app/models';

@UntilDestroy()
@Component({
  selector: 'lcc-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrl: './photo-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { tabindex: '0' },
})
export class PhotoCarouselComponent implements OnInit {
  @Input({ required: true }) public photos!: Partial<Image>[];

  public currentIndex = 0;

  private readonly autoCycleSubject$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly elementRef: ElementRef<HTMLElement>,
  ) {}

  public ngOnInit(): void {
    this.autoCycleSubject$
      .pipe(
        startWith(null),
        switchMap(() => timer(4000, 4000)),
        untilDestroyed(this),
      )
      .subscribe(() => {
        this.currentIndex = (this.currentIndex + 1) % this.photos.length;
        this.changeDetectorRef.markForCheck();
      });
  }

  @HostListener('keydown.arrowleft')
  public onPreviousPhoto(): void {
    this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
    this.autoCycleSubject$.next();
    this.changeDetectorRef.markForCheck();
  }

  @HostListener('keydown.arrowright')
  @HostListener('keydown.enter')
  public onNextPhoto(): void {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
    this.autoCycleSubject$.next();
    this.changeDetectorRef.markForCheck();
    this.elementRef.nativeElement.focus();
  }

  public onSelectPhoto(index: number): void {
    this.currentIndex = index;
    this.autoCycleSubject$.next();
    this.elementRef.nativeElement.focus();
  }
}
