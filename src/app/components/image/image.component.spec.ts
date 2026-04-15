import { Component, DebugElement, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Image } from '@app/models';

import { ImageComponent } from './image.component';

const FALLBACK_SRC = 'assets/fallback-image.png';
const MAIN_URL = 'https://example.com/main.jpg';
const THUMBNAIL_URL = 'https://example.com/thumb.jpg';

const makeImage = (overrides: Partial<Image> = {}): Image => ({
  id: 'img-1',
  filename: 'test.jpg',
  caption: 'Test caption',
  album: 'album-1',
  albumCover: false,
  albumOrdinality: '1',
  modificationInfo: {
    createdBy: 'Tester',
    dateCreated: '2025-01-01T00:00:00Z',
    lastEditedBy: 'Tester',
    dateLastEdited: '2025-01-01T00:00:00Z',
  },
  ...overrides,
});

@Component({
  template: `<lcc-image [image]="image()" />`,
  imports: [ImageComponent],
})
class HostComponent {
  public readonly image = signal<Image | null>(null);
}

describe('ImageComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  let componentDebug: DebugElement;
  let component: ImageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;

    fixture.detectChanges();

    componentDebug = fixture.debugElement.query(By.directive(ImageComponent));
    component = componentDebug.componentInstance;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('source resolution', () => {
    it('should show fallback when image is null', () => {
      host.image.set(null);
      fixture.detectChanges();

      expect(component.displayMode()).toBe('fallback');
      expect(component.currentSrc()).toBe(FALLBACK_SRC);
    });

    it('should show shimmer when image has no URLs', () => {
      host.image.set(makeImage());
      fixture.detectChanges();

      expect(component.displayMode()).toBe('none');
      expect(component.showShimmer()).toBe(true);
    });

    it('should show main URL directly when only main is present', () => {
      host.image.set(makeImage({ mainUrl: MAIN_URL }));
      fixture.detectChanges();

      expect(component.displayMode()).toBe('main');
      expect(component.currentSrc()).toBe(MAIN_URL);
      expect(component.blurred()).toBe(false);
    });

    it('should show thumbnail URL when only thumbnail is present', () => {
      host.image.set(makeImage({ thumbnailUrl: THUMBNAIL_URL }));
      fixture.detectChanges();

      expect(component.displayMode()).toBe('thumbnail');
      expect(component.currentSrc()).toBe(THUMBNAIL_URL);
      expect(component.blurred()).toBe(false);
    });

    it('should show blurred thumbnail when both URLs are present', () => {
      host.image.set(makeImage({ mainUrl: MAIN_URL, thumbnailUrl: THUMBNAIL_URL }));
      fixture.detectChanges();

      expect(component.displayMode()).toBe('thumbnail');
      expect(component.currentSrc()).toBe(THUMBNAIL_URL);
      expect(component.blurred()).toBe(true);
    });
  });

  describe('aspect ratio', () => {
    it('should compute aspect ratio from image dimensions', () => {
      host.image.set(makeImage({ mainUrl: MAIN_URL, mainWidth: 1920, mainHeight: 1080 }));
      fixture.detectChanges();

      expect(component.aspectRatio()).toBe('16 / 9');
    });

    it('should return null when dimensions are missing', () => {
      host.image.set(makeImage({ mainUrl: MAIN_URL }));
      fixture.detectChanges();

      expect(component.aspectRatio()).toBeNull();
    });
  });

  describe('error handling', () => {
    it('should fall back to thumbnail when main fails', () => {
      host.image.set(makeImage({ mainUrl: MAIN_URL, thumbnailUrl: THUMBNAIL_URL }));
      fixture.detectChanges();
      component.displayMode.set('main');
      component.currentSrc.set(MAIN_URL);

      component['onImgError']();

      expect(component.displayMode()).toBe('thumbnail');
      expect(component.currentSrc()).toBe(THUMBNAIL_URL);
    });

    it('should fall back to main when thumbnail fails', () => {
      host.image.set(makeImage({ mainUrl: MAIN_URL, thumbnailUrl: THUMBNAIL_URL }));
      fixture.detectChanges();
      component.displayMode.set('thumbnail');
      component.currentSrc.set(THUMBNAIL_URL);

      component['onImgError']();

      expect(component.displayMode()).toBe('main');
      expect(component.currentSrc()).toBe(MAIN_URL);
    });

    it('should fall back to fallback asset after both URLs fail', () => {
      host.image.set(makeImage({ mainUrl: MAIN_URL, thumbnailUrl: THUMBNAIL_URL }));
      fixture.detectChanges();
      component.displayMode.set('main');

      component['onImgError']();
      component['onImgError']();

      expect(component.displayMode()).toBe('fallback');
      expect(component.currentSrc()).toBe(FALLBACK_SRC);
    });

    it('should fall back to fallback asset when image is null', () => {
      host.image.set(null);
      fixture.detectChanges();

      component['onImgError']();

      expect(component.displayMode()).toBe('fallback');
      expect(component.currentSrc()).toBe(FALLBACK_SRC);
    });
  });

  describe('loaded output', () => {
    it('should emit loaded when the img element fires load', () => {
      host.image.set(makeImage({ mainUrl: MAIN_URL }));
      fixture.detectChanges();
      const emitSpy = jest.fn();
      component.loaded.subscribe(emitSpy);

      componentDebug.query(By.css('img')).triggerEventHandler('load', {});

      expect(emitSpy).toHaveBeenCalledTimes(1);
    });
  });
});
