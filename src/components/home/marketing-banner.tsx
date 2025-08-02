import PillBadge from "@/components/custom-ui/pill-badge";
import {CallActionButton} from "@/components/home/call-action-button";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, scaleIn, staggerContainer } from "@/hooks/useScrollAnimation";

export const MarketingBanner = () => {
    const { ref: imageRef, isInView: imageInView } = useScrollAnimation({ threshold: 200 });
    const { ref: textRef, isInView: textInView } = useScrollAnimation({ threshold: 150 });
    const { ref: buttonRef, isInView: buttonInView } = useScrollAnimation({ threshold: 100 });

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const pillVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <div className="w-full flex items-center justify-center overflow-hidden">
            <div className="container w-full px-2 md:px-0">
                {/* Image Section */}
                <motion.div 
                    ref={imageRef}
                    className="mt-0 md:mt-[105px] px-4 md:px-0 w-full"
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={imageInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <motion.img 
                        className="w-full mx-auto md:w-[690px]" 
                        src="/images/ai-agent.png" 
                        alt="AI Agent"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    ref={textRef}
                    className="mt-20 md:mt-[128px] mx-auto max-w-[830px] text-center justify-center flex flex-wrap gap-x-1 gap-y-2 text-lg leading-relaxed"
                    variants={textVariants}
                    initial="hidden"
                    animate={textInView ? "visible" : "hidden"}
                >
                    <motion.span 
                        className="text-2xl"
                        variants={pillVariants}
                    >
                        Prepare for your
                    </motion.span>
                    
                    <motion.div variants={pillVariants}>
                        <PillBadge
                            bgColor="bg-purple-1/[.36]"
                            iconBg="bg-purple-1"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1_28" style={{
                                    maskType: "alpha"
                                }} maskUnits="userSpaceOnUse" x="0" y="0"
                                      width="25" height="24">
                                    <rect x="0.000488281" width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_1_28)">
                                    <path
                                        d="M7.97549 17L12.0005 15.175L16.0255 17L16.4005 16.625L12.0005 6L7.60049 16.625L7.97549 17ZM12.0005 22C10.6172 22 9.31715 21.7375 8.10049 21.2125C6.88382 20.6875 5.82549 19.975 4.92549 19.075C4.02549 18.175 3.31299 17.1167 2.78799 15.9C2.26299 14.6833 2.00049 13.3833 2.00049 12C2.00049 10.6167 2.26299 9.31667 2.78799 8.1C3.31299 6.88333 4.02549 5.825 4.92549 4.925C5.82549 4.025 6.88382 3.3125 8.10049 2.7875C9.31715 2.2625 10.6172 2 12.0005 2C13.3838 2 14.6838 2.2625 15.9005 2.7875C17.1172 3.3125 18.1755 4.025 19.0755 4.925C19.9755 5.825 20.688 6.88333 21.213 8.1C21.738 9.31667 22.0005 10.6167 22.0005 12C22.0005 13.3833 21.738 14.6833 21.213 15.9C20.688 17.1167 19.9755 18.175 19.0755 19.075C18.1755 19.975 17.1172 20.6875 15.9005 21.2125C14.6838 21.7375 13.3838 22 12.0005 22Z"
                                        fill="white"/>
                                </g>
                            </svg>}
                            label="PCS Moves"
                        />
                    </motion.div>
                    
                    <motion.span 
                        className="text-2xl"
                        variants={pillVariants}
                    >
                        , manage your
                    </motion.span>
                    
                    <motion.div variants={pillVariants}>
                        <PillBadge
                            bgColor="bg-green-1/[.36]"
                            iconBg="bg-green-1"
                            icon={<svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1_44" style={{
                                    maskType: "alpha"
                                }} maskUnits="userSpaceOnUse" x="0" y="0"
                                      width="25" height="24">
                                    <rect x="0.169922" width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_1_44)">
                                    <path
                                        d="M12.1699 2C13.0033 2 13.7116 2.29167 14.2949 2.875C14.8783 3.45833 15.1699 4.16667 15.1699 5C15.1699 5.83333 14.8783 6.54167 14.2949 7.125C13.7116 7.70833 13.0033 8 12.1699 8C11.3366 8 10.6283 7.70833 10.0449 7.125C9.46159 6.54167 9.16992 5.83333 9.16992 5C9.16992 4.16667 9.46159 3.45833 10.0449 2.875C10.6283 2.29167 11.3366 2 12.1699 2ZM12.1699 9C12.9533 9 13.7283 9.09167 14.4949 9.275C15.2616 9.45833 15.9533 9.71667 16.5699 10.05C17.2033 10.3667 17.7116 10.7417 18.0949 11.175C18.4783 11.6083 18.6699 12.0833 18.6699 12.6V18.4C18.6699 18.6833 18.6033 18.9625 18.4699 19.2375C18.3366 19.5125 18.1533 19.7667 17.9199 20C17.6866 20.2333 17.4158 20.45 17.1074 20.65C16.7991 20.85 16.4533 21.0333 16.0699 21.2V18.95C16.0699 18.3167 15.6324 17.8 14.7574 17.4C13.8824 17 13.0199 16.8 12.1699 16.8C11.3366 16.8 10.5324 16.9708 9.75742 17.3125C8.98242 17.6542 8.50326 18.1 8.31992 18.65C8.95326 18.9 9.60326 19.075 10.2699 19.175C10.9366 19.275 11.6199 19.3333 12.3199 19.35H13.1699V21.95C13.0533 21.9833 12.9324 22 12.8074 22H12.4199C11.8199 22 11.1324 21.9333 10.3574 21.8C9.58242 21.6667 8.84492 21.4583 8.14492 21.175C7.44492 20.8917 6.85742 20.5208 6.38242 20.0625C5.90742 19.6042 5.66992 19.05 5.66992 18.4V12.6C5.66992 12.0833 5.86159 11.6083 6.24492 11.175C6.62826 10.7417 7.12826 10.3667 7.74492 10.05C8.37826 9.71667 9.07826 9.45833 9.84492 9.275C10.6116 9.09167 11.3866 9 12.1699 9ZM12.1699 15C12.7199 15 13.1908 14.8042 13.5824 14.4125C13.9741 14.0208 14.1699 13.55 14.1699 13C14.1699 12.45 13.9741 11.9792 13.5824 11.5875C13.1908 11.1958 12.7199 11 12.1699 11C11.6199 11 11.1491 11.1958 10.7574 11.5875C10.3658 11.9792 10.1699 12.45 10.1699 13C10.1699 13.55 10.3658 14.0208 10.7574 14.4125C11.1491 14.8042 11.6199 15 12.1699 15Z"
                                        fill="#1C1B1F"/>
                                </g>
                            </svg>
                            }
                            label="Family Life"
                        />
                    </motion.div>
                    
                    <motion.span 
                        className="text-2xl"
                        variants={pillVariants}
                    >
                        plan your
                    </motion.span>
                    
                    <motion.div variants={pillVariants}>
                        <PillBadge
                            bgColor="bg-orange-1/[.36]"
                            iconBg="bg-orange-1"
                            icon={<svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1_59" style={{
                                    maskType: "alpha"
                                }} maskUnits="userSpaceOnUse" x="0" y="0"
                                      width="25" height="24">
                                    <rect x="0.500244" width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_1_59)">
                                    <path
                                        d="M7.50024 2H17.5002V9.85C17.5002 10.2333 17.4169 10.575 17.2502 10.875C17.0836 11.175 16.8502 11.4167 16.5502 11.6L13.0002 13.7L13.7002 16H17.5002L14.4002 18.2L15.6002 22L12.5002 19.65L9.40024 22L10.6002 18.2L7.50024 16H11.3002L12.0002 13.7L8.45024 11.6C8.15024 11.4167 7.91691 11.175 7.75024 10.875C7.58358 10.575 7.50024 10.2333 7.50024 9.85V2ZM11.5002 4V11.05L12.5002 11.65L13.5002 11.05V4H11.5002Z"
                                        fill="white"/>
                                </g>
                            </svg>
                            }
                            label="Veteran Transition"
                        />
                    </motion.div>
                    
                    <motion.span 
                        className="text-2xl"
                        variants={pillVariants}
                    >
                        and explore your path with
                    </motion.span>
                    
                    <motion.div variants={pillVariants}>
                        <PillBadge
                            bgColor="bg-skyblue-1/[.36]"
                            iconBg="bg-skyblue-1"
                            icon={<svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1_77" style={{
                                    maskType: "alpha"
                                }} maskUnits="userSpaceOnUse" x="0" y="0"
                                      width="25" height="24">
                                    <rect x="0.500244" width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_1_77)">
                                    <path
                                        d="M12.5002 22C11.1169 22 9.81691 21.7375 8.60024 21.2125C7.38358 20.6875 6.32524 19.975 5.42524 19.075C4.52524 18.175 3.81274 17.1167 3.28774 15.9C2.76274 14.6833 2.50024 13.3833 2.50024 12C2.50024 10.6167 2.76274 9.31667 3.28774 8.1C3.81274 6.88333 4.52524 5.825 5.42524 4.925C6.32524 4.025 7.38358 3.3125 8.60024 2.7875C9.81691 2.2625 11.1169 2 12.5002 2C13.8836 2 15.1836 2.2625 16.4002 2.7875C17.6169 3.3125 18.6752 4.025 19.5752 4.925C20.4752 5.825 21.1877 6.88333 21.7127 8.1C22.2377 9.31667 22.5002 10.6167 22.5002 12C22.5002 13.3833 22.2377 14.6833 21.7127 15.9C21.1877 17.1167 20.4752 18.175 19.5752 19.075C18.6752 19.975 17.6169 20.6875 16.4002 21.2125C15.1836 21.7375 13.8836 22 12.5002 22ZM12.5002 20C13.4336 20 14.3127 19.8542 15.1377 19.5625C15.9627 19.2708 16.7169 18.8583 17.4002 18.325L15.9752 16.9C15.4919 17.25 14.9544 17.5208 14.3627 17.7125C13.7711 17.9042 13.1502 18 12.5002 18C10.8336 18 9.41691 17.4167 8.25024 16.25C7.08358 15.0833 6.50024 13.6667 6.50024 12C6.50024 10.3333 7.08358 8.91667 8.25024 7.75C9.41691 6.58333 10.8336 6 12.5002 6C14.1669 6 15.5836 6.58333 16.7502 7.75C17.9169 8.91667 18.5002 10.3333 18.5002 12C18.5002 12.65 18.4002 13.275 18.2002 13.875C18.0002 14.475 17.7252 15.0167 17.3752 15.5L18.8002 16.925C19.3336 16.2417 19.7502 15.4833 20.0502 14.65C20.3502 13.8167 20.5002 12.9333 20.5002 12C20.5002 9.76667 19.7252 7.875 18.1752 6.325C16.6252 4.775 14.7336 4 12.5002 4C10.2669 4 8.37524 4.775 6.82524 6.325C5.27524 7.875 4.50024 9.76667 4.50024 12C4.50024 14.2333 5.27524 16.125 6.82524 17.675C8.37524 19.225 10.2669 20 12.5002 20ZM12.5002 16C12.8669 16 13.2211 15.9542 13.5627 15.8625C13.9044 15.7708 14.2252 15.6333 14.5252 15.45L13.0002 13.925C12.9169 13.9583 12.8336 13.9792 12.7502 13.9875C12.6669 13.9958 12.5836 14 12.5002 14C11.9502 14 11.4794 13.8042 11.0877 13.4125C10.6961 13.0208 10.5002 12.55 10.5002 12C10.5002 11.45 10.6961 10.9792 11.0877 10.5875C11.4794 10.1958 11.9502 10 12.5002 10C13.0502 10 13.5211 10.1958 13.9127 10.5875C14.3044 10.9792 14.5002 11.45 14.5002 12C14.5002 12.1 14.4961 12.1958 14.4877 12.2875C14.4794 12.3792 14.4586 12.4667 14.4252 12.55L15.9252 14.05C16.1086 13.75 16.2502 13.4292 16.3502 13.0875C16.4502 12.7458 16.5002 12.3833 16.5002 12C16.5002 10.9 16.1086 9.95833 15.3252 9.175C14.5419 8.39167 13.6002 8 12.5002 8C11.4002 8 10.4586 8.39167 9.67524 9.175C8.89191 9.95833 8.50024 10.9 8.50024 12C8.50024 13.1 8.89191 14.0417 9.67524 14.825C10.4586 15.6083 11.4002 16 12.5002 16Z"
                                        fill="white"/>
                                </g>
                            </svg>
                            }
                            label="Enlistment Explorer"
                        />
                    </motion.div>
                    
                    <motion.span 
                        className="text-2xl"
                        variants={pillVariants}
                    >
                        — all in one place.
                    </motion.span>
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                    ref={buttonRef}
                    className="w-full justify-center my-20 flex"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={buttonInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <CallActionButton/>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
