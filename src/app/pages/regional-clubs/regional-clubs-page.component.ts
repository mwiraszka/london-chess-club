import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { RegionalClubCardComponent } from '@app/components/regional-club-card/regional-club-card.component';
import { REGIONAL_CLUBS } from '@app/constants/regional-clubs';
import { MetaAndTitleService } from '@app/services';

@Component({
  selector: 'lcc-regional-clubs-page',
  template: `
    <lcc-page-header
      title="Regional Clubs"
      icon="diversity_3">
    </lcc-page-header>

    @for (club of REGIONAL_CLUBS; track club.name) {
      <lcc-regional-club-card [club]="club"></lcc-regional-club-card>
    }
  `,
  styles: [
    `
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 8px;

      @include respond-to('gt-md') {
        grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
      }

      @include respond-to('gt-lg') {
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      }
    `,
  ],
  imports: [CommonModule, PageHeaderComponent, RegionalClubCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionalClubsPageComponent implements OnInit {
  public readonly REGIONAL_CLUBS = REGIONAL_CLUBS;

  constructor(private readonly metaAndTitleService: MetaAndTitleService) {}

  public ngOnInit(): void {
    this.metaAndTitleService.updateTitle('Regional Clubs');
    this.metaAndTitleService.updateDescription(
      'Discover other chess clubs in the region.',
    );
  }
}
