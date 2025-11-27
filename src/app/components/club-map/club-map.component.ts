import { Loader } from '@googlemaps/js-api-loader';

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

import { Club } from '@app/models';

import { environment } from '@env';

@Component({
  selector: 'lcc-club-map',
  template: `
    <a
      [href]="club.mapUrl"
      rel="noopener noreferrer"
      target="_blank">
      <div [id]="club.id + '-location'"></div>
    </a>
  `,
  styles: `
    :host {
      width: 100%;
      min-width: 280px;
      border-radius: 3px;
      border: 3px solid #ffffff22;

      &:hover {
        border-color: var(--lcc-color--link);
      }
    }

    div {
      width: 100%;
      height: 100%;
      border-radius: 3px;

      ::ng-deep .gm-style > div {
        cursor: pointer !important;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClubMapComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) club!: Club;

  private loader!: Loader;

  constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {
    this.loader = new Loader({
      apiKey: environment.googleMapsApiKey,
      version: 'weekly',
    });
  }

  public ngAfterViewInit(): void {
    this.initMap();
  }

  private async initMap(): Promise<void> {
    const mapOptions: google.maps.MapOptions = {
      cameraControl: false,
      center: this.club.location,
      clickableIcons: false,
      draggable: false,
      keyboardShortcuts: false,
      mapId: `${this.club.id}-location`,
      mapTypeControl: false,
      zoom: 15,
    };

    const mapElement: HTMLDivElement = this.elementRef.nativeElement.querySelector(
      `#${this.club.id}-location`,
    );

    const map = await this.loader
      .importLibrary('maps')
      .then(({ Map }) => new Map(mapElement, mapOptions))
      .catch(error => console.error(`[LCC] Error creating Google Maps map: ${error}`));

    if (map) {
      this.loader
        .importLibrary('marker')
        .then(({ AdvancedMarkerElement }) => {
          new AdvancedMarkerElement({
            map,
            position: this.club.location,
          });
        })
        .catch(error =>
          console.error(`[LCC] Error creating Google Maps advanced marker: ${error}`),
        );
    }
  }
}
