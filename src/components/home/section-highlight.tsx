import React from "react";
import { motion } from "framer-motion";

interface SectionHighlightProps {
    backgroundClass: string;
    title: string;
    description: string;
    imageSrc?: string;
}

export const SectionHighlight: React.FC<SectionHighlightProps> = ({
                                                                      backgroundClass,
                                                                      title,
                                                                      description,
                                                                      imageSrc = "/images/chat-skeleton-screen.png",
                                                                  }) => {
    return (
        <motion.div
            className={`md:flex w-full space-x-11 rounded-xl items-center py-[60px] px-6 space-y-6 md:space-y-0 md:py-[120px] md:px-12 ${backgroundClass} bg-gradient-to-b`}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.h3 
                    className="font-semibold text-4xl text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {title}
                </motion.h3>
                <motion.p 
                    className="text-white/60 text-lg mt-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {description}
                </motion.p>
            </motion.div>
            <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <motion.img
                    className="w-full md:w-[375px]"
                    src={imageSrc}
                    alt="illustration"
                    whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                    }}
                />
            </motion.div>
        </motion.div>
    );
};
