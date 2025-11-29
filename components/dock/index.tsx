"use client";

import DockItem from "./DockItem";
import { useAppSelector } from "@/lib/store/hooks";

export default function Dock() {
    const {settings} = useAppSelector((state) => state.windows);

    return (
        <div
            className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 flex gap-4 items-end bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg
                "
        >
            <DockItem src="/icons/settings-icon.png" alt="settings"  />
            <DockItem src="/icons/settings-icon.png" alt="settings"  />
            <DockItem src="/icons/settings-icon.png" alt="settings" />
        </div>
    );
}
