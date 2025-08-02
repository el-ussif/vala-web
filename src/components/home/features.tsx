import {SectionHighlight} from "@/components/home/section-highlight";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";

export const Features = () => {
    const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 150 });
    const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 100 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <>
            <div className="w-full container mt-10 md:mt-32 mx-auto">
                <div className="max-w-screen-lg mx-auto px-2 md:px-20">
                    {/* Header Section */}
                    <motion.div
                        ref={headerRef}
                        initial={{ opacity: 0, y: 60 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <motion.h2
                            className="font-bold text-4xl md:text-6xl text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={headerInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {"Always on your side. Even when you're off duty."}
                        </motion.h2>
                        <motion.div
                            className="text-white/60 text-xl text-center mt-11"
                            initial={{ opacity: 0, y: 30 }}
                            animate={headerInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {"Vala keeps track of the details — from timelines to benefits — so your family stays informed, your prep stays on track, and you don't have to figure it all out alone."}
                        </motion.div>
                    </motion.div>

                    {/* Features Content */}
                    <motion.div
                        ref={contentRef}
                        className="w-full mt-10 md:mt-24 space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate={contentInView ? "visible" : "hidden"}
                    >
                        <motion.div variants={itemVariants}>
                            <SectionHighlight
                                backgroundClass={"from-orange-2 to-orange-3"}
                                title="Vala, help me organize our next move"
                                description={"Get personalized checklists, reminders, and housing resources to make every PCS move easier — whether it's your first or your fifth."}
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <SectionHighlight
                                backgroundClass={"from-orange-4 to-orange-5"}
                                title="Vala, show my spouse what's next"
                                description={"Automatically share important updates and routines with your family so everyone's on the same page — even if you're on base."}
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <SectionHighlight
                                backgroundClass={"from-skyblue-2 to-skyblue-3"}
                                title="Vala, help me prepare to enlist"
                                description={"Study smarter with AI. Vala builds a personalized prep path for your ASVAB and explains military options"}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
