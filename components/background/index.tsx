"use client";

import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { loadWallpaper } from '@/lib/store/slices/wallpaper/wallpaperSlice';

export default function Background() {
    const dispatch = useAppDispatch();
    const wallpaper = useAppSelector((state) => state.wallpaper.wallpaper);

    useEffect(() => {
        dispatch(loadWallpaper());
    }, [])

    return (
        <div
            style={{
                backgroundImage: `url(${wallpaper || "/wallpapers/macos-wallpaper.webp"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="fixed top-0 left-0 w-screen h-screen z-[-10]"
        >
        </div>
    )
}
