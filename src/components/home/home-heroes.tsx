import Link from "next/link";
import {Button} from "@/components/ui/button";
import {HeaderNavigation} from "@/components/layout/header-navigation";
import {CallActionButton} from "@/components/home/call-action-button";

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
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full z-1 object-cover"
            >
                <source src="/videos/home-heorose-bg.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            {/* Dark overlay for better text contrast */}
            <div className="absolute h-screen w-full inset-0 z-2">
                <svg className="h-full 2xl:h-auto" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1440" height="900" fill="url(#paint0_linear_1_11)"/>
                    <rect width="1440" height="900" fill="url(#paint1_linear_1_11)"/>
                    <rect width="1440" height="900" fill="url(#paint2_linear_1_11)"/>
                    <defs>
                        <linearGradient id="paint0_linear_1_11" x1="1305" y1="-135" x2="135" y2="1035"
                                        gradientUnits="userSpaceOnUse">
                            <stop offset="0.33" stop-opacity="0"/>
                            <stop offset="0.65" stop-opacity="0.8"/>
                            <stop offset="0.82"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1_11" x1="720" y1="0" x2="720" y2="900"
                                        gradientUnits="userSpaceOnUse">
                            <stop offset="0.64" stop-opacity="0"/>
                            <stop offset="0.98"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_1_11" x1="720" y1="0" x2="720" y2="900"
                                        gradientUnits="userSpaceOnUse">
                            <stop offset="0.02"/>
                            <stop offset="0.21" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>


            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
                {/* Header/Navigation */}
                <HeaderNavigation/>

                {/* Hero Content (add your main hero content here) */}
                <div className="flex-1 flex items-end max-w-[775px] pb-[125px] justify-start">
                    <div className="text-white space-y-6">
                        <h2 className="text-4xl md: text-4xl md:text-6xl font-semibold">
                            Meet Vala. Your private AI guide for military life.
                        </h2>
                        <p className="text-xl md:text-2xl text-white/60  mx-auto">
                            Support at every step , from enlistment to life after service.
                        </p>
                        <CallActionButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}
