"use client";

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { loadWallpaper } from '@/lib/store/slices/wallpaper/wallpaperSlice';
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function WallpaperPreview() {
    const {wallpaper} = useAppSelector((state) => state.wallpaper);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadWallpaper());
    }, [])

    return (
        <div>
            <img
                src={wallpaper || "/wallpapers/macos-wallpaper.webp"}
                className='w-[350px] h-[200px] rounded-2xl'
                alt='Wallpaper Image'
            />
        </div>
    )
}
