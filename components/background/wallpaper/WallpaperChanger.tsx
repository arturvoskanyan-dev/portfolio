"use client";

import { useAppDispatch } from '@/lib/store/hooks';
import React, { useRef } from 'react'
import { setWallpaperFromFile } from '@/lib/utils/wallpaper';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';

export default function WallpaperChanger() {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setWallpaperFromFile(file, dispatch);
    };

    return (
        <>
            <input
                ref={inputRef}
                type='file'
                accept='image/*'
                className='hidden'
                onChange={handleChange}
            />
            <button
                className='flex flex-col items-center gap-1'
                title='Upload wallpaper'
                onClick={() => inputRef.current?.click()}
            >
                <MdOutlineAddPhotoAlternate
                    className='text-5xl text-gray-400'
                />
                <span className='text-gray-400'>
                    Add Photo...
                </span>
            </button>
        </>
    )
}
