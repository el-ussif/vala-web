import { useCallback } from 'react';

interface SmoothScrollOptions {
  duration?: number;
  easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
  offset?: number;
}

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((
    elementId: string, 
    options: SmoothScrollOptions = {}
  ) => {
    const {
      duration = 800,
      easing = 'easeInOut',
      offset = 100 // Compense la hauteur du header fixe
    } = options;

    const element = document.getElementById(elementId);
    if (!element) {
      console.warn(`Element with id "${elementId}" not found`);
      return;
    }

    const targetPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOut = (t: number): number => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const easeIn = (t: number): number => {
      return t * t;
    };

    const easeOut = (t: number): number => {
      return t * (2 - t);
    };

    const getEasingFunction = (easingType: string) => {
      switch (easingType) {
        case 'easeIn':
          return easeIn;
        case 'easeOut':
          return easeOut;
        case 'easeInOut':
        default:
          return easeInOut;
      }
    };

    const easingFunction = getEasingFunction(easing);

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easingFunction(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  const scrollToTop = useCallback((options: SmoothScrollOptions = {}) => {
    const { duration = 600, easing = 'easeOut' } = options;
    
    const startPosition = window.pageYOffset;
    let startTime: number | null = null;

    const easeOut = (t: number): number => {
      return t * (2 - t);
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeOut(progress);

      window.scrollTo(0, startPosition * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  return {
    scrollToElement,
    scrollToTop
  };
}; 