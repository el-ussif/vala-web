'use client';

import {useState} from 'react';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import {AnimatePresence, motion, useScroll, useTransform} from 'framer-motion';
import {Button} from '@/components/ui/button';
import {CallActionButton} from '@/components/home/call-action-button';
import {Env} from "@/constants/env";
import {SmoothScrollLink} from '@/components/ui/smooth-scroll-link';

export const HeaderNavigation = () => {
    const navLinks = [
        { label: 'Product', link: '/#product', isExternal: false },
        { label: 'Features', link: '/#features', isExternal: false },
        {
            label: 'Recruiter',
            link: Env.NEXT_PUBLIC_RECRUITER_LINK??'https://masskodehq.notion.site/vala-ai-recruiter-program',
            isExternal: true
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    const background = useTransform(scrollY, [0, 100], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)']);
    const blur = useTransform(scrollY, [0, 100], ['0px', '12px']);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full z-50"
                style={{
                    background,
                    backdropFilter: blur,
                    WebkitBackdropFilter: blur,
                    transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
                }}
            >
                <header className="flex justify-between items-center py-4 px-0 px-4 container mx-auto">
                    <div className="flex items-center space-x-8 md:space-x-16">
                        <Link href="/">
                            <h1 className="font-genos text-white text-3xl md:text-[48px] font-bold">
                                Vala
                            </h1>
                        </Link>

                        <nav className="hidden md:flex items-center mt-2 space-x-13">
                            {navLinks.map((item, key) => (
                                item.isExternal ? (
                                    <Link
                                        key={key}
                                        href={item.link}
                                        target="_blank"
                                        className="text-white hover:text-primary transition-all duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <SmoothScrollLink
                                        key={key}
                                        href={item.link}
                                        className="text-white hover:text-primary transition-all duration-300"
                                    >
                                        {item.label}
                                    </SmoothScrollLink>
                                )
                            ))}
                        </nav>
                    </div>

                    <div className="hidden md:block">
                        <CallActionButton />
                    </div>

                    <div className="md:hidden flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
                        </Button>
                    </div>
                </header>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-0 left-0 w-full h-full z-50 backdrop-blur-md bg-black/60 p-6 flex flex-col gap-6"
                    >
                        <div className="flex justify-between items-center">
                            <h1 className="font-genos text-white text-3xl font-bold">Vala</h1>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                <X className="text-white" />
                            </Button>
                        </div>

                        <nav className="flex flex-col gap-4 mt-6">
                            {navLinks.map((item, key) => (
                                item.isExternal ? (
                                    <Link
                                        key={key}
                                        href={item.link}
                                        onClick={() => setIsOpen(false)}
                                        target="_blank"
                                        className="text-white text-lg hover:underline"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <SmoothScrollLink
                                        key={key}
                                        href={item.link}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-lg hover:underline"
                                    >
                                        {item.label}
                                    </SmoothScrollLink>
                                )
                            ))}
                        </nav>

                        <div className="mt-auto">
                            <CallActionButton />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
