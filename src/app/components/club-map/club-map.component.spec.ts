import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCC_CLUB } from '@app/constants/clubs';
import { query } from '@app/utils';

import { ClubMapComponent } from './club-map.component';

describe('ClubMapComponent', () => {
  let component: ClubMapComponent;
  let fixture: ComponentFixture<ClubMapComponent>;

  let initMapSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubMapComponent);
    component = fixture.componentInstance;
    component.club = LCC_CLUB;

    // @ts-expect-error Private class member
    initMapSpy = jest.spyOn(component, 'initMap').mockResolvedValue();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initialization', () => {
    it('should initialize the loader in ngOnInit', () => {
      component.ngOnInit();

      // @ts-expect-error Private class member
      expect(component.loader).toBeDefined();
    });

    it('should call initMap on ngAfterViewInit', () => {
      component.ngAfterViewInit();

      expect(initMapSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('template rendering', () => {
    it('should render an anchor element with the correct href', () => {
      fixture.detectChanges();

      const anchor = query(fixture.debugElement, 'a');
      expect(anchor).toBeTruthy();
      expect(anchor?.nativeElement.getAttribute('href')).toBe(LCC_CLUB.mapUrl);
    });

    it('should render the club map div element with dynamic id', () => {
      fixture.detectChanges();

      expect(query(fixture.debugElement, `#${LCC_CLUB.id}-location`)).toBeTruthy();
    });
  });
});
