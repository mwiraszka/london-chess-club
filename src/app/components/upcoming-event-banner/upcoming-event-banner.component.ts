import { filter, map } from 'rxjs';

import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  computed,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

import { Event } from '@app/models';
import { FormatDatePipe, KebabCasePipe } from '@app/pipes';

@Component({
  selector: 'lcc-upcoming-event-banner',
  template: `
    <div
      class="container"
      [ngClass]="nextEvent.type | kebabCase">
      <div class="banner-message-container">
        <a
          class="banner-message"
          [class.navigatable]="!isOnSchedulePage()"
          [routerLink]="!isOnSchedulePage() ? '/schedule' : null"
          [attr.role]="isOnSchedulePage() ? 'text' : 'link'"
          #bannerMessage>
          <div
            class="marquee-content"
            #marqueeContent
            [class.animate]="shouldAnimate"
            [style.animation-duration.s]="animationDuration">
            <ng-container *ngTemplateOutlet="bannerContent" />
            @if (shouldAnimate) {
              <ng-container *ngTemplateOutlet="bannerContent" />
            }
          </div>

          <ng-template #bannerContent>
            <span class="marquee-item">
              <span>Next event:</span>
              <span>
                <b>{{ nextEvent.title }}</b>
              </span>
              <span>on</span>
              <span>
                <b>{{ nextEvent.eventDate | formatDate }}</b>
              </span>
            </span>
          </ng-template>
        </a>

        <button
          class="close-button lcc-icon-button"
          (click)="clearBanner.emit()">
          <mat-icon>close</mat-icon>
        </button>
      </div>
    </div>
  `,
  styleUrl: './upcoming-event-banner.component.scss',
  imports: [CommonModule, FormatDatePipe, KebabCasePipe, MatIconModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingEventBannerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bannerMessage', { read: ElementRef })
  bannerMessageRef!: ElementRef<HTMLElement>;

  @ViewChild('marqueeContent', { read: ElementRef })
  marqueeContentRef!: ElementRef<HTMLElement>;

  @Input({ required: true }) public nextEvent!: Event;

  @Output() public clearBanner = new EventEmitter<void>();

  protected shouldAnimate = false;
  protected animationDuration = 20;
  protected isOnSchedulePage = computed(() => this.currentUrl() === '/schedule');

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: this.router.url },
  );

  private resizeObserver?: ResizeObserver;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly router: Router,
  ) {}

  public ngAfterViewInit(): void {
    // Do not scroll for first 2 seconds to allow user to read the start of the message
    setTimeout(() => {
      this.resizeObserver = new ResizeObserver(() => {
        this.checkOverflow();
      });
      this.resizeObserver.observe(this.bannerMessageRef.nativeElement);
    }, 2000);
  }

  public ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  private checkOverflow(): void {
    const containerWidth = this.bannerMessageRef.nativeElement.offsetWidth;
    const contentWidth = this.marqueeContentRef.nativeElement.scrollWidth;

    // Calculate actual content width accounting for duplicates if present
    const singleItemWidth = this.shouldAnimate ? contentWidth / 2 : contentWidth;

    this.shouldAnimate = singleItemWidth > containerWidth;

    if (this.shouldAnimate) {
      // Calculate duration based on content width: ~50 pixels per second for smooth scrolling
      this.animationDuration = singleItemWidth / 50;
    }

    this.changeDetectorRef.markForCheck();
  }
}
