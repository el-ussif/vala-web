import {Button} from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface CallActionButtonProps {
    label?: string
    link?: string
}

export const CallActionButton = ({label, link}: CallActionButtonProps) => {

    return (
        <Link href={link??"#"}>
            <motion.div
                whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                }}
                whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Button className="font-semibold relative overflow-hidden group">
                    <motion.span
                        className="relative z-10"
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 1 }}
                    >
                        {label??"Join Waitlist"}
                    </motion.span>
                    
                    {/* Animated background effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                    />
                    
                    {/* Shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    />
                </Button>
            </motion.div>
        </Link>
    )
}
