"use client";

import { setWallpaper } from '@/lib/store/slices/wallpaper/wallpaperSlice';
import { useAppDispatch } from '@/lib/store/hooks';
import React from 'react'

export default function WallpaperChanger() {
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if(!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const url = reader.result as string;
            dispatch(setWallpaper(url));
        }

        reader.readAsDataURL(file);
    }

    return (
        <input type='file' accept='image/*' onChange={handleChange} />
    )
}
