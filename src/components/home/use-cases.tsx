import {CallActionButton} from "@/components/home/call-action-button";
import {motion} from "framer-motion";
import {useScrollAnimation} from "@/hooks/useScrollAnimation";

export const UseCases = () => {
    const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ threshold: 150 });
    const { ref: imageRef, isInView: imageInView } = useScrollAnimation({ threshold: 100 });
    const { ref: textRef, isInView: textInView } = useScrollAnimation({ threshold: 100 });
    const { ref: buttonRef, isInView: buttonInView } = useScrollAnimation({ threshold: 100 });

    return (
        <>
            <div className="w-full container px-2 mt-12 md:mt-24 mx-auto">
                <div className="max-w-[708px] mx-auto mt-32 space-y-20">
                    {/* Title Section */}
                    <motion.div
                        ref={titleRef}
                        className=""
                        initial={{ opacity: 0, y: 60 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <motion.h2
                            className="font-bold text-4xl md:text-6xl text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={titleInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {"Vala keeps you on track, before, during, and after duty."}
                        </motion.h2>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        ref={imageRef}
                        className="text-lg product-gradient w-full rounded-3xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={imageInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <motion.img
                            src="/images/product.png"
                            className="rounded-[20px] w-[250px] md:w-[375px] mx-auto scale-[115%]"
                            alt="Product"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        />
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        ref={textRef}
                        className="font-medium text-2xl text-center mx-auto max-w-[560px] space-y-20"
                        initial={{ opacity: 0, y: 40 }}
                        animate={textInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={textInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {"Whether you're planning your first enlistment, navigating a PCS move, or applying for VA benefits, Vala helps you handle what matters, so you can focus on living, not logistics"}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={textInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            🌍 Available in English, French & Spanish
                        </motion.p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        ref={buttonRef}
                        className="w-full justify-center flex"
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
        </>
    )
}
