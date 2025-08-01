import Link from "next/link";

export const ExternalApps = () => {
    const apps = [
        {
            image: "/images/google.png",
            link: "#"
        },
        {
            image: "/images/google-calendar.png",
            link: "#"
        },
        {
            image: "/images/gmail.png",
            link: "#"
        },
        {
            image: "/images/calendar.png",
            link: "#"
        },
        {
            image: "/images/google-drive.png",
            link: "#"
        },
        {
            image: "/images/postman.png",
            link: "#"
        },
    ]

    return (
        <>
            <div className="w-full container mx-auto">
                <div className="max-w-screen-lg mx-auto px-2 md:px-20">
                    <h2 className="font-bold  text-4xl md:text-6xl text-center mt-32">
                        {"Built to work with your everyday apps."}
                    </h2>
                    <div className="text-lg text-center mt-11 max-w-[570px] mx-auto">
                        <div className="">
                            Vala connects with your calendar and productivity tools so you can stay organized without
                            juggling a dozen tabs.
                        </div>
                        <div
                            className="grid-cols-3 md:grid-cols-4 grid gap-10 max-w-[415px] mx-auto border border-white/40 rounded-3xl px-7 py-9 mt-12">
                            {
                                apps.map((item, key) => {
                                    return (
                                        <Link key={key} href={item?.link}>
                                            <img src={item?.image} className="w-[64px] h-[64px]" alt=""/>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
