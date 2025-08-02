import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import {Env} from "@/constants/env";
import {useDeviceWidth} from "@/hooks/use-device-width";
import {useEffect, useState} from "react";

interface TallyButtonProps {
    label?: string
    link?: string
}

export const TallyButton = ({label}: TallyButtonProps) => {
    const deviceWidth = useDeviceWidth();
    const [tallyWidth, setTallyWidth] = useState(600)

    useEffect(() => {
        const updateTallyWidth = () => {
            const width = window.innerWidth
            if (width < 640) {
                setTallyWidth(0.9 * deviceWidth)
            } else if (width < 1024) {
                setTallyWidth(0.8 * deviceWidth)
            } else {
                setTallyWidth(900)
            }
        }

        updateTallyWidth()
        window.addEventListener("resize", updateTallyWidth)

        return () => window.removeEventListener("resize", updateTallyWidth)
    }, [])

    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                transition: {duration: 0.2}
            }}
            whileTap={{
                scale: 0.95,
                transition: {duration: 0.1}
            }}
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.3}}
        >
            <Button
                className="font-semibold cursor-pointer relative overflow-hidden group"
                data-tally-open={Env?.NEXT_PUBLIC_TALLY_ID??"mOMM4g"}
                data-tally-layout="modal"
                data-tally-width={tallyWidth}
            >
                <motion.span
                    className="relative z-10"
                    initial={{opacity: 1}}
                    whileHover={{opacity: 1}}
                >
                    {label ?? "Join Waitlist"}
                </motion.span>

                {/* Animated background effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40"
                    initial={{x: "-100%"}}
                    whileHover={{x: "0%"}}
                    transition={{duration: 0.3}}
                />

                {/* Shimmer effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{x: "-100%"}}
                    whileHover={{x: "100%"}}
                    transition={{duration: 0.6, delay: 0.1}}
                />
            </Button>
        </motion.div>
    )
}
