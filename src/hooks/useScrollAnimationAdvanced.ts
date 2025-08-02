import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import type { Variants } from 'framer-motion';

export interface ScrollAnimationAdvancedConfig {
  threshold?: number;
  once?: boolean;
  amount?: number;
  triggerOnScrollUp?: boolean;
  triggerOnScrollDown?: boolean;
}

export const useScrollAnimationAdvanced = (config: ScrollAnimationAdvancedConfig = {}) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isCurrentlyInView, setIsCurrentlyInView] = useState(false);

  const isInView = useInView(ref, {
    once: false, // Toujours false pour permettre les répétitions
    amount: config.amount ?? 0.3,//eslint-disable-next-line
    margin: `0px 0px -${config.threshold ?? 100}px 0px` as any
  });

  // Détecter quand l'élément entre et sort du viewport
  useEffect(() => {
    if (isInView && !isCurrentlyInView) {
      // L'élément vient d'entrer dans le viewport
      setIsCurrentlyInView(true);
      setHasAnimated(true);
    } else if (!isInView && isCurrentlyInView) {
      // L'élément vient de sortir du viewport
      setIsCurrentlyInView(false);
    }
  }, [isInView, isCurrentlyInView]);

  // Déterminer si l'animation doit être déclenchée
  const shouldAnimate = isInView || (hasAnimated && config.once);

  return {
    ref,
    isInView: shouldAnimate,
    isCurrentlyInView,
    hasAnimated
  };
};

// Variants d'animation avec support pour les deux directions
export const createDirectionalVariants = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 60
): Variants => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0, scale: 0.95 };
      case 'down':
        return { y: -distance, opacity: 0, scale: 0.95 };
      case 'left':
        return { x: -distance, opacity: 0, scale: 0.95 };
      case 'right':
        return { x: distance, opacity: 0, scale: 0.95 };
      default:
        return { y: distance, opacity: 0, scale: 0.95 };
    }
  };

  return {
    hidden: getInitialPosition(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };
};

// Variants prédéfinis avec support directionnel
export const fadeInUpAdvanced = createDirectionalVariants('up');
export const fadeInDownAdvanced = createDirectionalVariants('down');
export const fadeInLeftAdvanced = createDirectionalVariants('left');
export const fadeInRightAdvanced = createDirectionalVariants('right');

export const staggerContainerAdvanced: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const scaleInAdvanced: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};
