'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { Variants } from 'framer-motion';

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    type?: 'word' | 'character' | 'line';
}

export const AnimatedText = ({ 
    text, 
    className = "", 
    delay = 0, 
    duration = 0.5,
    type = 'word'
}: AnimatedTextProps) => {
    const { ref, isInView } = useScrollAnimation({ threshold: 100 });

    const words = text.split(' ');
    const characters = text.split('');

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: type === 'word' ? 0.1 : 0.02,
                delayChildren: delay
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }
    };

    if (type === 'character') {
        return (
            <motion.div
                ref={ref}
                className={className}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={itemVariants}
                        className="inline-block"
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </motion.div>
        );
    }

    if (type === 'word') {
        return (
            <motion.div
                ref={ref}
                className={className}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        variants={itemVariants}
                        className="inline-block mr-2"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        );
    }

    // Default line animation
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {text}
        </motion.div>
    );
}; 