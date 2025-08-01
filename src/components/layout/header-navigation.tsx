import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CallActionButton} from "@/components/home/call-action-button";

export const HeaderNavigation = () => {
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
        <>
            <header className="flex justify-between items-center py-6">
                <div className="flex items-center space-x-4 md:space-x-8">
                    <h1 className="font-genos text-white text-3xl md:text-[48px] font-bold">
                        Vala
                    </h1>
                    <nav className="hidden md:flex items-center mt-3 space-x-6">
                        {navLinks.map((item, key) => (
                            <Link
                                key={key}
                                href={item.link}
                                target={item?.isExternal ? '_blank' : undefined}
                                className="text-white/90 hover:underline hover:underline-offset-4 hover:text-white transition-all duration-300"
                            >
                                {item?.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <CallActionButton/>
            </header>
        </>
    )
}
