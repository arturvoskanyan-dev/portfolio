"use client";

import React from 'react'

type WindowHeaderPropsType = {
    title: string;
    onClose: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
}

export default function WindowHeader({
    title,
    onClose,
    onMinimize,
    onMaximize
}: WindowHeaderPropsType) {
    return (
        <div className="h-9 bg-white/5 flex items-center px-3 cursor-move">
            <div className="flex gap-2">
                <div
                    className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
                    onClick={onClose}
                />
                {onMinimize && (
                    <div
                        className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"
                        onClick={onMinimize}
                    />
                )}
                {onMaximize && (
                    <div
                        className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
                        onClick={onMaximize}
                    />
                )}
            </div>

            {/* Window title */}
            <div className="flex-1 text-center text-white/70 font-medium">
                {title}
            </div>
        </div>
    )
}
