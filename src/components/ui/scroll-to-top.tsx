'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface ScrollToTopProps {
    threshold?: number;
    className?: string;
}

export const ScrollToTop = ({ threshold = 400, className = "" }: ScrollToTopProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollToTop } = useSmoothScroll();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > threshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [threshold]);

    const handleClick = () => {
        scrollToTop({
            duration: 600,
            easing: 'easeOut'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={handleClick}
                    className={`fixed bottom-8 right-8 z-50 p-3 bg-primary text-black rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    aria-label="Retour en haut de la page"
                >
                    <ChevronUp size={30} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
