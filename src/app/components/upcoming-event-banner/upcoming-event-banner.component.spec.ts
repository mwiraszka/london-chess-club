import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MOCK_EVENTS } from '@app/mocks/events.mock';
import { formatDate, query, queryAll, queryTextContent } from '@app/utils';

import { UpcomingEventBannerComponent } from './upcoming-event-banner.component';

describe('UpcomingEventBannerComponent', () => {
  let fixture: ComponentFixture<UpcomingEventBannerComponent>;
  let component: UpcomingEventBannerComponent;
  let clearBannerSpy: jest.SpyInstance;

  beforeAll(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingEventBannerComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingEventBannerComponent);
    component = fixture.componentInstance;

    clearBannerSpy = jest.spyOn(component.clearBanner, 'emit');

    component.nextEvent = MOCK_EVENTS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('template rendering', () => {
    describe('banner message', () => {
      it('should contain the title and date of the next event', () => {
        const bannerText = queryTextContent(fixture.debugElement, '.banner-message');

        expect(bannerText).toContain(MOCK_EVENTS[0].title);
        expect(bannerText).toContain(formatDate(MOCK_EVENTS[0].eventDate));
      });

      it('should have navigatable class when not on schedule page', () => {
        const bannerMessage = query(fixture.debugElement, '.banner-message');
        expect(bannerMessage.nativeElement.classList.contains('navigatable')).toBe(true);
      });
    });

    describe('marquee animation', () => {
      it('should render marquee content template', () => {
        const marqueeContent = query(fixture.debugElement, '.marquee-content');
        expect(marqueeContent).toBeTruthy();
      });

      it('should render single instance of content when not animating', () => {
        component['shouldAnimate'] = false;
        fixture.detectChanges();

        const marqueeItems = queryAll(fixture.debugElement, '.marquee-item');
        expect(marqueeItems.length).toBe(1);
      });

      it('should render duplicate content when animating', () => {
        component['shouldAnimate'] = true;
        component['changeDetectorRef'].markForCheck();
        fixture.detectChanges();

        const marqueeItems = queryAll(fixture.debugElement, '.marquee-item');
        expect(marqueeItems.length).toBe(2);
      });

      it('should apply animate class when shouldAnimate is true', () => {
        component['shouldAnimate'] = true;
        component['changeDetectorRef'].markForCheck();
        fixture.detectChanges();

        const marqueeContent = query(fixture.debugElement, '.marquee-content');
        expect(marqueeContent.nativeElement.classList.contains('animate')).toBe(true);
      });

      it('should not apply animate class when shouldAnimate is false', () => {
        component['shouldAnimate'] = false;
        fixture.detectChanges();

        const marqueeContent = query(fixture.debugElement, '.marquee-content');
        expect(marqueeContent.nativeElement.classList.contains('animate')).toBe(false);
      });
    });

    describe('close button', () => {
      it('should display a close icon', () => {
        expect(query(fixture.debugElement, 'mat-icon')).toBeTruthy();
      });

      it('should emit a clear banner event when clicked', () => {
        query(fixture.debugElement, '.close-button').nativeElement.dispatchEvent(
          new MouseEvent('click'),
        );
        fixture.detectChanges();

        expect(clearBannerSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('lifecycle hooks', () => {
    it('should setup resize observer on init', () => {
      expect(window.ResizeObserver).toHaveBeenCalled();
    });

    it('should disconnect resize observer on destroy', () => {
      const mockObserver = (window.ResizeObserver as jest.Mock).mock.results[0].value;

      component.ngOnDestroy();

      expect(mockObserver.disconnect).toHaveBeenCalled();
    });
  });
});
