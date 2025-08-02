import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, scaleIn, staggerContainer } from "@/hooks/useScrollAnimation";
import type { Variants } from 'framer-motion';

export const ExternalApps = () => {
    const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 150 });
    const { ref: appsRef, isInView: appsInView } = useScrollAnimation({ threshold: 100 });

    const apps = [
        {
            image: "/images/google.png",
            link: "#"
        },
        {
            image: "/images/google-calendar.png",
            link: "#"
        },
        {
            image: "/images/gmail.png",
            link: "#"
        },
        {
            image: "/images/calendar.png",
            link: "#"
        },
        {
            image: "/images/google-drive.png",
            link: "#"
        },
        {
            image: "/images/postman.png",
            link: "#"
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const appVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }
    };

    return (
        <>
            <div className="w-full container mx-auto">
                <div className="max-w-screen-lg mx-auto px-2 md:px-20">
                    {/* Header Section */}
                    <motion.div
                        ref={headerRef}
                        initial={{ opacity: 0, y: 60 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <motion.h2 
                            className="font-bold text-4xl md:text-6xl text-center mt-32"
                            initial={{ opacity: 0, y: 30 }}
                            animate={headerInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {"Built to work with your everyday apps."}
                        </motion.h2>
                        <motion.div 
                            className="text-lg text-center mt-11 max-w-[570px] mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={headerInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="">
                                Vala connects with your calendar and productivity tools so you can stay organized without
                                juggling a dozen tabs.
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Apps Grid */}
                    <motion.div
                        ref={appsRef}
                        className="grid-cols-3 md:grid-cols-4 grid gap-10 max-w-[415px] mx-auto border border-white/40 rounded-3xl px-7 py-9 mt-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate={appsInView ? "visible" : "hidden"}
                        whileHover={{ 
                            scale: 1.02,
                            borderColor: "rgba(255, 255, 255, 0.6)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        {apps.map((item, key) => (
                            <motion.div
                                key={key}
                                variants={appVariants}
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href={item?.link}>
                                    <motion.img 
                                        src={item?.image} 
                                        className="w-[64px] h-[64px]" 
                                        alt=""
                                        whileHover={{ 
                                            filter: "brightness(1.2)",
                                            transition: { duration: 0.2 }
                                        }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    )
}
