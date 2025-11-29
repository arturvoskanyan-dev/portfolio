"use client";

import { useAppSelector } from '@/lib/store/hooks';
import React from 'react'
import SettingsWindow from './settings/SettingsWindow';

export default function Windows() {
    const windows = useAppSelector((state) => state.windows);

    return (
        <>
            {windows.settings && <SettingsWindow />}
        </>
    )
}
