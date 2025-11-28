"use client";

import { useCallback, useState } from "react";
import DockItem from "./DockItem";

export default function Dock() {
    const [windows, setWindows] = useState<{settings: boolean}>({settings: false});

    const changeWindowState = useCallback((window: string) => {
        setWindows(prev => ({
            ...prev,
            [window as keyof typeof prev]: !prev[window as keyof typeof prev]
        }));
    }, [])

    console.log(windows);
    

    return (
        <div
            className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 flex gap-4 items-end bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg
                "
        >
            <DockItem src="/icons/settings-icon.png" alt="settings" windowChange={changeWindowState} />
            <DockItem src="/icons/settings-icon.png" alt="settings" windowChange={changeWindowState} />
            <DockItem src="/icons/settings-icon.png" alt="settings" windowChange={changeWindowState} />
        </div>
    );
}
