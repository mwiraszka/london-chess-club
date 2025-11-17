import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import moment from 'moment-timezone';
import { Observable, combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from '@app/components/footer/footer.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { NavigationBarComponent } from '@app/components/navigation-bar/navigation-bar.component';
import { PullToRefreshIndicatorComponent } from '@app/components/pull-to-refresh-indicator/pull-to-refresh-indicator.component';
import { UpcomingEventBannerComponent } from '@app/components/upcoming-event-banner/upcoming-event-banner.component';
import { Event, IsoDate } from '@app/models';
import {
  PullToRefreshService,
  RoutingService,
  TouchEventsService,
  UserActivityService,
} from '@app/services';
import { AppActions, AppSelectors } from '@app/store/app';
import { EventsSelectors } from '@app/store/events';

@UntilDestroy()
@Component({
  selector: 'app-root',
  template: `
    @if (viewModel$ | async; as vm) {
      <lcc-pull-to-refresh-indicator></lcc-pull-to-refresh-indicator>

      @if (vm.isLoading) {
        <div class="lcc-loader"><div></div></div>
      }

      @if (vm.showUpcomingEventBanner && vm.nextEvent) {
        <lcc-upcoming-event-banner
          [nextEvent]="vm.nextEvent"
          (clearBanner)="onClearBanner()">
        </lcc-upcoming-event-banner>
      }

      <lcc-header></lcc-header>

      <lcc-navigation-bar></lcc-navigation-bar>

      <main cdkScrollable>
        <router-outlet></router-outlet>
        <lcc-footer></lcc-footer>
      </main>
    }
  `,
  styleUrl: './app.component.scss',
  imports: [
    CdkScrollableModule,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    NavigationBarComponent,
    PullToRefreshIndicatorComponent,
    RouterOutlet,
    UpcomingEventBannerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public viewModel$?: Observable<{
    bannerLastCleared: IsoDate | null;
    isDarkMode: boolean;
    isLoading: boolean;
    nextEvent: Event | null;
    showUpcomingEventBanner: boolean;
  }>;

  constructor(
    @Inject(DOCUMENT) private readonly _document: Document,
    private readonly pullToRefreshService: PullToRefreshService,
    private readonly routingService: RoutingService,
    private readonly store: Store,
    private readonly touchEventsService: TouchEventsService,
    private readonly userActivityService: UserActivityService,
  ) {
    moment.tz.setDefault('America/Toronto');
  }

  public ngOnInit(): void {
    this.initNavigationListenerForScrollingBackToTop();
    this.pullToRefreshService.initialize();
    this.touchEventsService.listenForTouchEvents();
    this.userActivityService.monitorSessionExpiry();
    this.initPullToRefreshListener();

    this.viewModel$ = combineLatest([
      this.store.select(AppSelectors.selectBannerLastCleared),
      this.store.select(AppSelectors.selectIsDarkMode),
      this.store.select(AppSelectors.selectIsLoading),
      this.store.select(EventsSelectors.selectNextEvent),
      this.store.select(AppSelectors.selectShowUpcomingEventBanner),
    ]).pipe(
      untilDestroyed(this),
      map(
        ([
          bannerLastCleared,
          isDarkMode,
          isLoading,
          nextEvent,
          showUpcomingEventBanner,
        ]) => ({
          bannerLastCleared,
          isDarkMode,
          isLoading,
          nextEvent,
          showUpcomingEventBanner,
        }),
      ),
      tap(({ isDarkMode }) =>
        this._document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light'),
      ),
    );
  }

  public onClearBanner(): void {
    this.store.dispatch(AppActions.upcomingEventBannerCleared());
  }

  private initPullToRefreshListener(): void {
    this.pullToRefreshService.isRefreshing$
      .pipe(
        untilDestroyed(this),
        filter(isRefreshing => isRefreshing),
      )
      .subscribe(() => {
        this.store.dispatch(AppActions.pullToRefreshRequested());
      });
  }

  private initNavigationListenerForScrollingBackToTop(): void {
    this.routingService.fragment$
      .pipe(
        untilDestroyed(this),
        filter(fragment => !fragment),
      )
      .subscribe(() => {
        const mainElement = this._document.querySelector('main');
        if (mainElement) {
          mainElement.scrollTo({ top: 0 });
        }
      });
  }
}
