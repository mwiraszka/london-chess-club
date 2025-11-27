import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { RegionalClub } from '@app/models';

@Component({
  selector: 'lcc-regional-club-card',
  templateUrl: './regional-club-card.component.html',
  styleUrls: ['./regional-club-card.component.scss'],
  imports: [CommonModule, MatIconModule],
})
export class RegionalClubCardComponent {
  @Input({ required: true }) club!: RegionalClub;
}
