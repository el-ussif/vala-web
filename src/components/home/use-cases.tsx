import {Button} from "@/components/ui/button";
import {CallActionButton} from "@/components/home/call-action-button";

export const UseCases = () => {

    return (
        <>
            <div className="w-full container px-2 mt-12 md:mt-24 mx-auto">
                <div className="max-w-[708px] mx-auto mt-32  space-y-20">
                    <div className="">
                        <h2 className="font-bold text-4xl md:text-6xl text-center">
                            {"Vala keeps you on track, before, during, and after duty."}
                        </h2>
                    </div>

                    <div className="text-lg product-gradient w-full rounded-3xl mx-auto">
                        <img src="/images/product.png" className="rounded-[20px] w-[250px] md:w-[375px] mx-auto scale-[115%]"
                             alt=""/>
                    </div>

                    <div className="font-medium text-2xl text-center mx-auto max-w-[560px] space-y-20">
                        <p>
                            Whether you’re planning your first enlistment, navigating a PCS move, or applying for VA
                            benefits, Vala helps you handle what matters, so you can focus on living, not logistics
                        </p>

                        <p>
                            🌍 Available in English, French & Spanish
                        </p>
                    </div>

                    <div className="w-full justify-center flex">
                        <CallActionButton/>
                    </div>
                </div>
            </div>
        </>
    )
}
