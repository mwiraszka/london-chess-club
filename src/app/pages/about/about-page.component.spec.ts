import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MetaAndTitleService } from '@app/services';
import { query } from '@app/utils';

import { AboutPageComponent } from './about-page.component';

describe('AboutPageComponent', () => {
  let fixture: ComponentFixture<AboutPageComponent>;
  let component: AboutPageComponent;

  let metaAndTitleService: MetaAndTitleService;

  let updateDescriptionSpy: jest.SpyInstance;
  let updateTitleSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageComponent],
      providers: [
        {
          provide: MetaAndTitleService,
          useValue: {
            updateTitle: jest.fn(),
            updateDescription: jest.fn(),
          },
        },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;

    metaAndTitleService = TestBed.inject(MetaAndTitleService);

    updateDescriptionSpy = jest.spyOn(metaAndTitleService, 'updateDescription');
    updateTitleSpy = jest.spyOn(metaAndTitleService, 'updateTitle');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initialization', () => {
    it('should set meta title and description', () => {
      component.ngOnInit();

      expect(updateTitleSpy).toHaveBeenCalledTimes(1);
      expect(updateTitleSpy).toHaveBeenCalledWith('About');
      expect(updateDescriptionSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('template rendering', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should render page header', () => {
      expect(query(fixture.debugElement, 'lcc-page-header')).toBeTruthy();
    });

    it('should render all grid sections as expansion panels', () => {
      const sections = [
        '.where-and-when-section',
        '.first-visit-section',
        '.parking-section',
        '.club-regulations-section',
        '.membership-fee-section',
        '.ratings-section',
        '.supplies-section',
        '.rules-section',
        '.tournaments-section',
        '.leadership-section',
      ];

      sections.forEach(selector => {
        const element = query(fixture.debugElement, selector);
        expect(element).toBeTruthy();
        expect(element.name).toBe('lcc-expansion-panel');
      });
    });

    it('should toggle expansion panel content when clicked', () => {
      const firstSection = query(fixture.debugElement, '.where-and-when-section');
      const header = query(firstSection, '.expansion-header');

      expect(query(firstSection, '.expansion-content')).toBeFalsy();

      header.triggerEventHandler('click');
      fixture.detectChanges();

      expect(query(firstSection, '.expansion-content')).toBeTruthy();

      header.triggerEventHandler('click');
      fixture.detectChanges();

      expect(query(firstSection, '.expansion-content')).toBeFalsy();
    });
  });
});
