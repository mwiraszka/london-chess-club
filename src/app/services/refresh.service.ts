import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { isTouchDevice } from '@app/utils';

@Injectable({
  providedIn: 'root',
})
export class RefreshService {
  public isRefreshing$ = new BehaviorSubject<boolean>(false);

  private readonly PULL_THRESHOLD = 80;
  private readonly MAX_PULL_DISTANCE = 120;
  private readonly RESISTANCE = 0.5;

  private touchStartY = 0;
  private currentPullDistance = 0;
  private mainElement: HTMLElement | null = null;

  private boundOnTouchStart = this.onTouchStart.bind(this);
  private boundOnTouchMove = this.onTouchMove.bind(this);
  private boundOnTouchEnd = this.onTouchEnd.bind(this);

  public initialize(mainElement: HTMLElement): void {
    if (!isTouchDevice()) {
      return;
    }

    this.mainElement = mainElement;
    this.mainElement.addEventListener('touchstart', this.boundOnTouchStart, {
      passive: true,
    });
    this.mainElement.addEventListener('touchmove', this.boundOnTouchMove, {
      passive: false,
    });
    this.mainElement.addEventListener('touchend', this.boundOnTouchEnd, {
      passive: true,
    });
  }

  public destroy(): void {
    if (!this.mainElement) {
      return;
    }

    this.mainElement.removeEventListener('touchstart', this.boundOnTouchStart);
    this.mainElement.removeEventListener('touchmove', this.boundOnTouchMove);
    this.mainElement.removeEventListener('touchend', this.boundOnTouchEnd);
  }

  public completeRefresh(): void {
    this.currentPullDistance = 0;
    this.isRefreshing$.next(false);
  }

  private onTouchStart(event: TouchEvent): void {
    if (
      this.isRefreshing$.value ||
      !this.mainElement ||
      this.mainElement.scrollTop !== 0
    ) {
      return;
    }

    this.touchStartY = event.touches[0].clientY;
  }

  private onTouchMove(event: TouchEvent): void {
    if (
      this.isRefreshing$.value ||
      !this.mainElement ||
      this.touchStartY === 0 ||
      this.mainElement.scrollTop !== 0
    ) {
      return;
    }

    const touchY = event.touches[0].clientY;
    const pullDistance = touchY - this.touchStartY;

    if (pullDistance > 0) {
      event.preventDefault();
      this.currentPullDistance = Math.min(
        pullDistance * this.RESISTANCE,
        this.MAX_PULL_DISTANCE,
      );
    }
  }

  private onTouchEnd(): void {
    if (this.isRefreshing$.value || this.touchStartY === 0) {
      return;
    }

    this.touchStartY = 0;

    if (this.currentPullDistance >= this.PULL_THRESHOLD) {
      this.isRefreshing$.next(true);
    }

    this.currentPullDistance = 0;
  }
}
