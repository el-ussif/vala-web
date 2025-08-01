"use client"
import Link from "next/link";
import type {Variants} from 'framer-motion';
import {motion} from "framer-motion";
import {useScrollAnimation} from "@/hooks/useScrollAnimation";
import {Env} from "@/constants/env";

export const Footer = () => {
    const { ref: footerRef, isInView: footerInView } = useScrollAnimation({ threshold: 100 });

    const FOOTER_ITEMS = [
        {
            title: "Social",
            items: [
                {
                    title: "Linkedin",
                    href: Env.NEXT_PUBLIC_LINKEDIN_LINK??"#",
                    type: "link"
                },
            ],
        },
        {
            title: "Contact us",
            items: [
                {
                    title: Env.NEXT_PUBLIC_CONTACT_EMAIL??"contact@tryvala.com",
                    href:  Env.NEXT_PUBLIC_CONTACT_EMAIL??"contact@tryvala.com",
                    type: "mail"//tel
                },
            ],
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

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }
    };

    return (
        <motion.div
            ref={footerRef}
            className="bg-white w-full text-gray-1 mt-24 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <footer className="container px-4 xl:px-0 mx-auto pt-8 md:pt-16 space-y-[40px]">
                <motion.section
                    className="flex justify-between items-start flex-col lg:flex-row gap-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={footerInView ? "visible" : "hidden"}
                >
                    <motion.div variants={itemVariants}>
                        <Link
                            href={"/"}
                            className="flex items-center justify-start w-full lg:w-fit"
                        >
                            <motion.h1
                                className="font-genos text-3xl md:text-[48px] font-bold"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                Vala
                            </motion.h1>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-2 gap-8 pt-4 w-full md:min-w-[600px] lg:w-[35%]"
                        variants={containerVariants}
                    >
                        {FOOTER_ITEMS.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="md:w-28"
                                variants={itemVariants}
                                initial="hidden"
                                animate={footerInView ? "visible" : "hidden"}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-sm font-bold mb-4">{item.title}</h3>
                                <ul className="space-y-[8px]">
                                    {item.items.map((li, liIndex) => {
                                        let finalHref = li.href;

                                        if (li.type === "mail") {
                                            finalHref = `mailto:${li.href}`;
                                        } else if (li.type === "tel") {
                                            finalHref = `tel:${li.href}`;
                                        }

                                        return (
                                            <motion.li
                                                key={li.title}
                                                variants={itemVariants}
                                                initial="hidden"
                                                animate={footerInView ? "visible" : "hidden"}
                                                transition={{ delay: index * 0.1 + liIndex * 0.05 }}
                                            >
                                                <Link
                                                    href={finalHref}
                                                    className="hover:underline whitespace-nowrap text-sm"
                                                >
                                                    {li.title}
                                                </Link>
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={footerInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <svg viewBox="0 0 1214 338" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M178.87 333.798C158.621 333.798 143.433 330.277 133.308 323.233C123.183 315.75 114.159 302.983 106.235 284.935L0.584152 30.0514H119.442L191.416 223.525C193.618 230.128 196.259 234.75 199.34 237.392C202.422 240.033 205.723 241.354 209.245 241.354H214.528L295.747 30.0514H376.306L248.204 333.798H178.87ZM520.13 337.1C489.315 337.1 464.443 335.999 445.514 333.798C426.585 332.037 411.838 328.296 401.273 322.573C391.148 316.85 384.324 308.706 380.803 298.141C377.281 287.576 375.52 273.929 375.52 257.201C375.52 234.75 377.721 217.802 382.123 206.357C386.525 194.471 394.229 186.327 405.234 181.925C416.24 177.523 430.987 175.322 449.476 175.322C460.481 175.322 473.027 175.542 487.114 175.982C501.641 175.982 515.728 176.202 529.374 176.642C543.461 177.083 555.567 177.963 565.692 179.284C576.257 180.164 583.521 181.044 587.483 181.925C587.483 168.278 586.162 157.493 583.521 149.569C581.32 141.645 577.578 135.703 572.295 131.741C567.013 127.338 559.969 124.477 551.165 123.156C542.361 121.836 531.576 121.175 518.809 121.175C503.402 121.175 487.994 121.396 472.587 121.836C457.62 122.276 442.873 123.156 428.346 124.477C414.259 125.798 401.273 127.338 389.387 129.099V110.61C389.387 98.7246 392.028 89.9204 397.311 84.1976C402.593 78.4748 409.857 74.733 419.101 72.9722C429.226 70.7711 444.193 69.2304 464.003 68.3499C484.253 67.4695 506.043 67.0293 529.374 67.0293C558.869 67.0293 583.521 68.57 603.33 71.6515C623.58 74.733 639.428 80.2357 650.873 88.1595C662.319 96.0834 670.463 107.969 675.305 123.817C680.147 139.224 682.569 159.914 682.569 185.887V317.29C675.525 323.894 657.917 328.956 629.743 332.478C602.01 335.559 565.472 337.1 520.13 337.1ZM519.47 296.16C531.796 296.16 542.141 295.94 550.505 295.5C559.309 294.619 566.793 293.519 572.956 292.198C579.119 290.878 583.961 289.337 587.483 287.576V213.62C582.64 212.3 575.817 211.199 567.013 210.319C558.649 209.438 550.064 208.778 541.26 208.338C532.456 207.897 525.633 207.677 520.79 207.677C510.225 207.677 501.641 208.558 495.038 210.319C488.435 212.079 483.592 216.041 480.511 222.204C477.87 228.367 476.549 237.832 476.549 250.598C476.549 261.603 477.649 270.628 479.851 277.671C482.052 284.274 486.234 289.117 492.397 292.198C498.56 294.839 507.584 296.16 519.47 296.16ZM821.327 336.44C790.512 336.44 768.281 331.377 754.635 321.252C740.988 310.687 734.165 292.198 734.165 265.785V35.9943C734.165 26.3096 735.045 18.826 736.806 13.5434C738.567 8.26087 742.088 4.73916 747.371 2.97829C752.654 1.21746 760.357 0.337048 770.482 0.337048H834.533C834.093 1.65767 833.433 6.50001 832.552 14.8641C832.112 23.2281 831.892 32.4726 831.892 42.5975V254.56C831.892 270.408 833.873 281.633 837.835 288.236C841.797 294.399 849.28 297.481 860.286 297.481C864.248 297.481 868.43 297.041 872.832 296.16C877.674 295.28 880.535 294.619 881.416 294.179V330.497C878.334 330.937 872.612 332.037 864.248 333.798C855.884 335.559 841.577 336.44 821.327 336.44ZM1051.39 337.1C1020.58 337.1 995.708 335.999 976.779 333.798C957.85 332.037 943.102 328.296 932.537 322.573C922.412 316.85 915.589 308.706 912.067 298.141C908.546 287.576 906.785 273.929 906.785 257.201C906.785 234.75 908.986 217.802 913.388 206.357C917.79 194.471 925.494 186.327 936.499 181.925C947.505 177.523 962.252 175.322 980.741 175.322C991.746 175.322 1004.29 175.542 1018.38 175.982C1032.91 175.982 1046.99 176.202 1060.64 176.642C1074.73 177.083 1086.83 177.963 1096.96 179.284C1107.52 180.164 1114.79 181.044 1118.75 181.925C1118.75 168.278 1117.43 157.493 1114.79 149.569C1112.58 141.645 1108.84 135.703 1103.56 131.741C1098.28 127.338 1091.23 124.477 1082.43 123.156C1073.63 121.836 1062.84 121.175 1050.07 121.175C1034.67 121.175 1019.26 121.396 1003.85 121.836C988.885 122.276 974.137 123.156 959.61 124.477C945.524 125.798 932.537 127.338 920.652 129.099V110.61C920.652 98.7246 923.293 89.9204 928.575 84.1976C933.858 78.4748 941.121 74.733 950.366 72.9722C960.491 70.7711 975.458 69.2304 995.268 68.3499C1015.52 67.4695 1037.31 67.0293 1060.64 67.0293C1090.13 67.0293 1114.79 68.57 1134.6 71.6515C1154.84 74.733 1170.69 80.2357 1182.14 88.1595C1193.58 96.0834 1201.73 107.969 1206.57 123.817C1211.41 139.224 1213.83 159.914 1213.83 185.887V317.29C1206.79 323.894 1189.18 328.956 1161.01 332.478C1133.27 335.559 1096.74 337.1 1051.39 337.1ZM1050.73 296.16C1063.06 296.16 1073.41 295.94 1081.77 295.5C1090.57 294.619 1098.06 293.519 1104.22 292.198C1110.38 290.878 1115.23 289.337 1118.75 287.576V213.62C1113.91 212.3 1107.08 211.199 1098.28 210.319C1089.91 209.438 1081.33 208.778 1072.53 208.338C1063.72 207.897 1056.9 207.677 1052.06 207.677C1041.49 207.677 1032.91 208.558 1026.3 210.319C1019.7 212.079 1014.86 216.041 1011.78 222.204C1009.13 228.367 1007.81 237.832 1007.81 250.598C1007.81 261.603 1008.91 270.628 1011.12 277.671C1013.32 284.274 1017.5 289.117 1023.66 292.198C1029.82 294.839 1038.85 296.16 1050.73 296.16Z"
                            fill="url(#paint0_linear_1_221)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1_221" x1="615" y1="-29.2017" x2="615" y2="301.798"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#999999"/>
                                <stop offset="1" stopColor="white"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>

                <motion.section
                    className="text-center py-4 -mt-5 md:-mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={footerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <small className="text-sm text-[#333333]">
                        Copyright &copy; {new Date().getFullYear()} &nbsp; Vala Labs
                    </small>
                </motion.section>
            </footer>
        </motion.div>
    )
}
