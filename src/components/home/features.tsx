import {SectionHighlight} from "@/components/home/section-highlight";

export const Features = () => {

    return (
        <>
            <div className="w-full container  mt-10 md:mt-32 mx-auto">
                <div className="max-w-screen-lg mx-auto px-2 md:px-20">
                    <h2 className="font-bold  text-4xl md:text-6xl text-center">
                        {"Always on your side. Even when you're off duty."}
                    </h2>
                    <div className="text-white/60 text-xl text-center mt-11">
                        Vala keeps track of the details — from timelines to benefits — so your family stays informed,
                        your
                        prep stays on track, and you don’t have to figure it all out alone.
                    </div>

                    <div className="w-full mt-10 md:mt-24 space-y-6">
                        <SectionHighlight
                            backgroundClass={"from-orange-2 to-orange-3"}
                            title="Vala, help me organize our next move"
                            description={"Get personalized checklists, reminders, and housing resources to make every PCS move easier — whether it’s your first or your fifth."}
                        />

                        <SectionHighlight
                            backgroundClass={"from-orange-4 to-orange-5"}
                            title="Vala, show my spouse what’s next"
                            description={"Automatically share important updates and routines with your family so everyone’s on the same page — even if you're on base."}
                        />

                        <SectionHighlight
                            backgroundClass={"from-skyblue-2 to-skyblue-3"}
                            title="Vala, help me prepare to enlist"
                            description={"Study smarter with AI. Vala builds a personalized prep path for your ASVAB and explains military options"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
