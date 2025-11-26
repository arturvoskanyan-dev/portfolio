"use client";

import React from 'react'
import { useBackground } from './BackgroundProvider';

export default function Background() {
    const {wallpaper} = useBackground();

    return (
        <div
            style={{
                backgroundImage: `url(${wallpaper || "/macos-wallpaper.webp"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="fixed top-0 left-0 w-screen h-screen z-[-10]"
        >
        </div>
    )
}
