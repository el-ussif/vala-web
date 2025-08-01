import {Button} from "@/components/ui/button";
import Link from "next/link";

interface CallActionButtonProps {
    label?: string
    link?: string
}

export const CallActionButton = ({label, link}: CallActionButtonProps) => {

    return (
        <Link href={link??"#"}>
            <Button className="font-semibold">
                {label??"Join Waitlist"}
            </Button>
        </Link>
    )
}
