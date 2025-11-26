"use client";

import React from 'react'
import { useBackground } from './BackgroundProvider'

export default function WallpaperChanger() {
    const {setWallpaper} = useBackground();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if(!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const url = reader.result as string;
            setWallpaper(url);
        }

        reader.readAsDataURL(file);
    }

    return (
        <input type='file' accept='image/*' onChange={handleChange} />
    )
}
