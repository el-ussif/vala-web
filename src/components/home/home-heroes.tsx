import Link from "next/link";
import {Button} from "@/components/ui/button";
import {HeaderNavigation} from "@/components/layout/header-navigation";
import {CallActionButton} from "@/components/home/call-action-button";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInDown, slideInFromBottom } from "@/hooks/useScrollAnimation";

export const HomeHeroes = () => {
    const navLinks = [
        {
            label: "Product",
            link: "#",
            isExternal: false
        },
        {
            label: "Feautres",
            link: "#",
            isExternal: false
        },
        {
            label: "Recruter",
            link: "#",
            isExternal: false
        },
    ]

    return (
        <div className="w-full relative h-screen overflow-hidden">
            {/* Video Background */}
            <motion.video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full z-1 object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <source src="/videos/home-heorose-bg.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </motion.video>

            {/* Dark overlay for better text contrast */}
            <motion.div 
                className="absolute h-screen w-full inset-0 z-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                <svg className="h-full 2xl:h-auto" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1440" height="900" fill="url(#paint0_linear_1_11)"/>
                    <rect width="1440" height="900" fill="url(#paint1_linear_1_11)"/>
                    <rect width="1440" height="900" fill="url(#paint2_linear_1_11)"/>
                    <defs>
                        <linearGradient id="paint0_linear_1_11" x1="1305" y1="-135" x2="135" y2="1035"
                                        gradientUnits="userSpaceOnUse">
                            <stop offset="0.33" stopOpacity="0"/>
                            <stop offset="0.65" stopOpacity="0.8"/>
                            <stop offset="0.82"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1_11" x1="720" y1="0" x2="720" y2="900"
                                        gradientUnits="userSpaceOnUse">
                            <stop offset="0.64" stopOpacity="0"/>
                            <stop offset="0.98"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_1_11" x1="720" y1="0" x2="720" y2="900"
                                        gradientUnits="userSpaceOnUse">
                            <stop offset="0.02"/>
                            <stop offset="0.21" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
                {/* Header/Navigation */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <HeaderNavigation/>
                </motion.div>

                {/* Hero Content */}
                <motion.div 
                    className="flex-1 flex items-end max-w-[775px] pb-[125px] justify-start"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="text-white space-y-6">
                        <motion.h2 
                            className="text-4xl md: text-4xl md:text-6xl font-semibold"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Meet Vala. Your private AI guide for military life.
                        </motion.h2>
                        <motion.p 
                            className="text-xl md:text-2xl text-white/60 mx-auto"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            Support at every step , from enlistment to life after service.
                        </motion.p>
                        <motion.div
                            initial={{ y: 30, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <CallActionButton/>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 }}
                >
                    <motion.div
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="w-1 h-3 bg-white/60 rounded-full mt-2"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
