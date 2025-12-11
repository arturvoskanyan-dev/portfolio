"use client";

import { useAppDispatch } from '@/lib/store/hooks';
import React from 'react'
import { setWallpaperFromFile } from '@/lib/utils/wallpaper';

export default function WallpaperChanger() {
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setWallpaperFromFile(file, dispatch);
    };

    return (
        <input type='file' accept='image/*' onChange={handleChange} />
    )
}
