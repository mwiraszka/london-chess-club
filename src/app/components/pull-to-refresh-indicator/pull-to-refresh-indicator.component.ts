import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PullToRefreshService } from '@app/services';

@UntilDestroy()
@Component({
  selector: 'lcc-pull-to-refresh-indicator',
  template: `
    @if (viewModel$ | async; as vm) {
      <div
        class="pull-indicator"
        [class.active]="vm.pullDistance > 0"
        [class.refreshing]="vm.isRefreshing"
        [style.transform]="'translateY(' + vm.pullDistance + 'px)'">
        <div
          class="spinner"
          [class.spinning]="vm.isRefreshing">
        </div>
      </div>
    }
  `,
  styleUrl: './pull-to-refresh-indicator.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PullToRefreshIndicatorComponent implements OnInit {
  public viewModel$?: Observable<{
    pullDistance: number;
    isRefreshing: boolean;
  }>;

  constructor(private readonly pullToRefreshService: PullToRefreshService) {}

  public ngOnInit(): void {
    this.viewModel$ = combineLatest([
      this.pullToRefreshService.pullDistance$,
      this.pullToRefreshService.isRefreshing$,
    ]).pipe(
      untilDestroyed(this),
      map(([pullDistance, isRefreshing]) => ({
        pullDistance,
        isRefreshing,
      })),
    );
  }
}
