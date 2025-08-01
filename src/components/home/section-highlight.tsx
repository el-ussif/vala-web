import React from "react";

interface SectionHighlightProps {
    backgroundClass: string;
    title: string;
    description: string;
    imageSrc?: string;
}

export const SectionHighlight: React.FC<SectionHighlightProps> = ({
                                                                      backgroundClass,
                                                                      title,
                                                                      description,
                                                                      imageSrc = "/images/chat-skeleton-screen.png",
                                                                  }) => {
    return (
        <div
            className={`md:flex w-full space-x-11 rounded-xl items-center py-[60px] px-6 space-y-6 md:space-y-0 md:py-[120px] md:px-12 ${backgroundClass} bg-gradient-to-b`}
        >
            <div className="w-full md:w-1/2">
                <h3 className="font-semibold text-4xl text-white">{title}</h3>
                <p className="text-white/60 text-lg mt-5">{description}</p>
            </div>
            <div className="w-full md:w-1/2">
                <img
                    className="w-full md:w-[375px]"
                    src={imageSrc}
                    alt="illustration"
                />
            </div>
        </div>
    );
};
