"use client";

import { useAppSelector } from '@/lib/store/hooks';
import React from 'react'
import SettingsWindow from './settings/SettingsWindow';

export default function Windows() {
    const windows = useAppSelector((state) => state.windows);
    const isMax = windows.settings.isMaximized;

    const topOffset = 22;     // macOS top bar offset
    const bottomOffset = 120;   // dock area space

    const widthSize = isMax ? "100vw" : "760px";
    const heightSize = isMax ? `calc(100dvh - ${topOffset + bottomOffset}px)` : "480px";

    return (
        <>
            {windows.settings.isOpen && (
                <SettingsWindow
                    widthSize={widthSize}
                    heightSize={heightSize}
                    isMaximized={isMax}
                    topOffset={topOffset}
                />
            )}
        </>
    );
}