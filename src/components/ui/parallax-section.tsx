'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
    offset?: number;
}

export const ParallaxSection = ({ 
    children, 
    speed = 0.5, 
    className = "",
    offset = 0
}: ParallaxSectionProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [offset, offset - (100 * speed)]);

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ y }}
        >
            {children}
        </motion.div>
    );
};

interface ParallaxImageProps {
    src: string;
    alt: string;
    speed?: number;
    className?: string;
}

export const ParallaxImage = ({ 
    src, 
    alt, 
    speed = 0.3, 
    className = "" 
}: ParallaxImageProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <motion.div
            ref={ref}
            className={`overflow-hidden ${className}`}
        >
            <motion.img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                style={{ y, scale }}
            />
        </motion.div>
    );
}; 