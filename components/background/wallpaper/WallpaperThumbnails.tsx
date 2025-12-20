"use client";

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { IoFolderOutline } from 'react-icons/io5'
import { wallpapers } from './wallpapers'
import { setWallpaperFromUrl } from '@/lib/utils/wallpaper';
import { useAppDispatch } from '@/lib/store/hooks';
import WallpaperChanger from './WallpaperChanger';

export default function WallpaperThumbnails() {
    const [isLess, setIsLess] = useState<boolean>(false);
    const wallpaperCount = isLess ? 1 : wallpapers.length;
    const dispatch = useAppDispatch();

    const showButton = useCallback(() => {
        setIsLess((state) => !state)
    }, [])

    const wallpaperChange = useCallback((wallpaper: string) => {
        setWallpaperFromUrl(wallpaper, dispatch)
    }, [])

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
                <h3 className='text-[18px] text-white font-medium flex gap-2 items-center'>
                    <IoFolderOutline />
                    Wallpapers
                </h3>
                <button className='text-[18px] text-gray-400' onClick={showButton}>
                    Show {isLess ? "More" : "Less"}
                </button>
            </div>
            <div className='flex flex-wrap gap-2'>
                {
                    wallpapers.slice(0, wallpaperCount).map((wallpaper) => (
                        <>
                            <Image
                                key={wallpaper.id}
                                src={wallpaper.wallpaper}
                                className='rounded-xl border-4 hover:border-blue-800'
                                width={200}
                                height={150}
                                alt='Wallpaper Thumbnails'
                                onClick={() => wallpaperChange(wallpaper.wallpaper)}
                            />
                        </>
                    ))
                }
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-[18px] text-white font-medium'>
                    Your Photos
                </h3>
                <div>
                    <WallpaperChanger />
                </div>
            </div>
        </div>
    )
}
