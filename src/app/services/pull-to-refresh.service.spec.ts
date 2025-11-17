import { TestBed } from '@angular/core/testing';

import * as deviceUtils from '@app/utils';

import { PullToRefreshService } from './pull-to-refresh.service';

describe('PullToRefreshService', () => {
  let service: PullToRefreshService;
  let mockMainElement: HTMLElement;

  beforeEach(() => {
    mockMainElement = document.createElement('main');
    document.body.appendChild(mockMainElement);

    TestBed.configureTestingModule({
      providers: [PullToRefreshService],
    });

    service = TestBed.inject(PullToRefreshService);
  });

  afterEach(() => {
    service.destroy();
    document.body.removeChild(mockMainElement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initialize', () => {
    it('should set up touch event listeners on touch devices', () => {
      const addEventListenerSpy = jest.spyOn(mockMainElement, 'addEventListener');
      jest.spyOn(deviceUtils, 'isTouchDevice').mockReturnValue(true);

      service.initialize(mockMainElement);

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'touchstart',
        expect.any(Function),
        { passive: true },
      );
      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'touchmove',
        expect.any(Function),
        { passive: false },
      );
      expect(addEventListenerSpy).toHaveBeenCalledWith('touchend', expect.any(Function), {
        passive: true,
      });
    });

    it('should not initialize on non-touch devices', () => {
      const addEventListenerSpy = jest.spyOn(mockMainElement, 'addEventListener');
      jest.spyOn(deviceUtils, 'isTouchDevice').mockReturnValue(false);

      service.initialize(mockMainElement);

      expect(addEventListenerSpy).not.toHaveBeenCalled();
    });

    it('should not initialize if main element not provided', () => {
      const addEventListenerSpy = jest.spyOn(mockMainElement, 'addEventListener');
      jest.spyOn(deviceUtils, 'isTouchDevice').mockReturnValue(true);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      service.initialize(null as any);

      expect(addEventListenerSpy).not.toHaveBeenCalled();
    });
  });

  describe('destroy', () => {
    it('should remove event listeners', () => {
      const removeEventListenerSpy = jest.spyOn(mockMainElement, 'removeEventListener');
      jest.spyOn(deviceUtils, 'isTouchDevice').mockReturnValue(true);

      service.initialize(mockMainElement);
      service.destroy();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'touchstart',
        expect.any(Function),
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'touchmove',
        expect.any(Function),
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'touchend',
        expect.any(Function),
      );
    });

    it('should handle destroy when not initialized', () => {
      expect(() => service.destroy()).not.toThrow();
    });
  });

  describe('completeRefresh', () => {
    it('should reset state and emit values', () => {
      const pullDistanceSpy = jest.fn();
      const isRefreshingSpy = jest.fn();

      service.pullDistance$.subscribe(pullDistanceSpy);
      service.isRefreshing$.subscribe(isRefreshingSpy);

      service.completeRefresh();

      expect(pullDistanceSpy).toHaveBeenCalledWith(0);
      expect(isRefreshingSpy).toHaveBeenCalledWith(false);
    });
  });

  describe('touch gestures', () => {
    beforeEach(() => {
      jest.spyOn(deviceUtils, 'isTouchDevice').mockReturnValue(true);
      service.initialize(mockMainElement);
      Object.defineProperty(mockMainElement, 'scrollTop', {
        value: 0,
        writable: true,
        configurable: true,
      });
    });

    it('should track pull distance when pulling down from top', () => {
      const pullDistanceSpy = jest.fn();
      service.pullDistance$.subscribe(pullDistanceSpy);

      const touchStartEvent = new TouchEvent('touchstart', {
        touches: [{ clientY: 100 } as Touch],
      });
      mockMainElement.dispatchEvent(touchStartEvent);

      const touchMoveEvent = new TouchEvent('touchmove', {
        touches: [{ clientY: 200 } as Touch],
      });
      mockMainElement.dispatchEvent(touchMoveEvent);

      // Pull of 100px with 0.5 resistance = 50px
      expect(pullDistanceSpy).toHaveBeenCalledWith(50);
    });

    it('should apply resistance and cap at maximum pull distance', () => {
      const pullDistanceSpy = jest.fn();
      service.pullDistance$.subscribe(pullDistanceSpy);

      const touchStartEvent = new TouchEvent('touchstart', {
        touches: [{ clientY: 100 } as Touch],
      });
      mockMainElement.dispatchEvent(touchStartEvent);

      // Pull 300px which exceeds max of 120px (after resistance)
      const touchMoveEvent = new TouchEvent('touchmove', {
        touches: [{ clientY: 400 } as Touch],
      });
      mockMainElement.dispatchEvent(touchMoveEvent);

      // Should be capped at 120px max
      expect(pullDistanceSpy).toHaveBeenCalledWith(120);
    });

    it('should trigger refresh when pulled past threshold', () => {
      const isRefreshingSpy = jest.fn();
      service.isRefreshing$.subscribe(isRefreshingSpy);

      const touchStartEvent = new TouchEvent('touchstart', {
        touches: [{ clientY: 100 } as Touch],
      });
      mockMainElement.dispatchEvent(touchStartEvent);

      // Pull 180px = 90px after resistance (exceeds 80px threshold)
      const touchMoveEvent = new TouchEvent('touchmove', {
        touches: [{ clientY: 280 } as Touch],
      });
      mockMainElement.dispatchEvent(touchMoveEvent);

      const touchEndEvent = new TouchEvent('touchend');
      mockMainElement.dispatchEvent(touchEndEvent);

      expect(isRefreshingSpy).toHaveBeenCalledWith(true);
    });

    it('should not trigger refresh when pulled below threshold', () => {
      const pullDistanceSpy = jest.fn();
      const isRefreshingSpy = jest.fn();
      service.pullDistance$.subscribe(pullDistanceSpy);
      service.isRefreshing$.subscribe(isRefreshingSpy);

      const touchStartEvent = new TouchEvent('touchstart', {
        touches: [{ clientY: 100 } as Touch],
      });
      mockMainElement.dispatchEvent(touchStartEvent);

      // Pull 100px = 50px after resistance (below 80px threshold)
      const touchMoveEvent = new TouchEvent('touchmove', {
        touches: [{ clientY: 200 } as Touch],
      });
      mockMainElement.dispatchEvent(touchMoveEvent);

      const touchEndEvent = new TouchEvent('touchend');
      mockMainElement.dispatchEvent(touchEndEvent);

      expect(isRefreshingSpy).not.toHaveBeenCalledWith(true);
      expect(pullDistanceSpy).toHaveBeenCalledWith(0);
    });

    it('should not track pull when not at top of scroll', () => {
      const pullDistanceSpy = jest.fn();
      service.pullDistance$.subscribe(pullDistanceSpy);

      Object.defineProperty(mockMainElement, 'scrollTop', {
        value: 50,
        writable: true,
        configurable: true,
      });

      const touchStartEvent = new TouchEvent('touchstart', {
        touches: [{ clientY: 100 } as Touch],
      });
      mockMainElement.dispatchEvent(touchStartEvent);

      const touchMoveEvent = new TouchEvent('touchmove', {
        touches: [{ clientY: 200 } as Touch],
      });
      mockMainElement.dispatchEvent(touchMoveEvent);

      expect(pullDistanceSpy).not.toHaveBeenCalled();
    });

    it('should not track pull when already refreshing', () => {
      service['isRefreshing'] = true;

      const touchStartEvent = new TouchEvent('touchstart', {
        touches: [{ clientY: 100 } as Touch],
      });
      mockMainElement.dispatchEvent(touchStartEvent);

      expect(service['touchStartY']).toBe(0);
    });

    it('should ignore pull-up gestures', () => {
      const pullDistanceSpy = jest.fn();
      service.pullDistance$.subscribe(pullDistanceSpy);

      const touchStartEvent = new TouchEvent('touchstart', {
        touches: [{ clientY: 200 } as Touch],
      });
      mockMainElement.dispatchEvent(touchStartEvent);

      // Pull up (negative distance)
      const touchMoveEvent = new TouchEvent('touchmove', {
        touches: [{ clientY: 100 } as Touch],
      });
      mockMainElement.dispatchEvent(touchMoveEvent);

      expect(pullDistanceSpy).not.toHaveBeenCalled();
    });
  });
});
