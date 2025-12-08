"use client";

import { setActiveSettingsSection } from '@/lib/store/slices/windows/windowsSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

export default function SettingsSidebar({sectionName}: {sectionName: string}) {
    const dispatch = useDispatch();

    const activeSection = () => {
        dispatch(setActiveSettingsSection({ windowName: "settings", activeSection: sectionName }))
    }

    return (
        <div
            className={`max-w-[300px] w-full`}
            style={{
                // height: `${contentHeightSize}px`
            }}
        >
            <h3
                className='text-xl text-white font-medium cursor-pointer'
                onClick={activeSection}
            >
                Wallpaper
            </h3>
        </div>
    )
}
