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
  styleUrl: './regional-clubs-page.component.scss',
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
