import { useEffect, useState } from "react";

export const useDeviceWidth = () => {
    const [deviceWidth, setDeviceWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => setDeviceWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return deviceWidth;
};
