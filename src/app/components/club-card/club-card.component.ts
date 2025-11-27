import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ClubMapComponent } from '@app/components/club-map/club-map.component';
import { Club } from '@app/models';

@Component({
  selector: 'lcc-club-card',
  templateUrl: './club-card.component.html',
  styleUrls: ['./club-card.component.scss'],
  imports: [ClubMapComponent, CommonModule, MatIconModule],
})
export class ClubCardComponent {
  @Input({ required: true }) club!: Club;
}
