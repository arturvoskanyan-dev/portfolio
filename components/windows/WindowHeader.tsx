"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { resetWindowPosition, setWindowPosition } from "@/lib/store/slices/windows/windowsSlice";

export default function WindowHeader({
    windowName,
    title,
    onClose,
    onMinimize,
    onMaximize,
}: {
    windowName: string;
    title: string;
    onClose: () => void;
    onMinimize: () => void;
    onMaximize: () => void;
}) {
    const dispatch = useAppDispatch();
    const { position, isMaximized } = useAppSelector((state) => state.windows[windowName]);

    const dragging = useRef(false);
    const startX = useRef(0);
    const startY = useRef(0);
    const initialX = useRef(0);
    const initialY = useRef(0);
    
    const handleMouseDown = (e: React.MouseEvent) => {
        if (isMaximized) return;

        dragging.current = true;
        startX.current = e.clientX;
        startY.current = e.clientY;
        initialX.current = position.x;
        initialY.current = position.y;
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!dragging.current) return;

        const deltaX = e.clientX - startX.current;
        const deltaY = e.clientY - startY.current;

        dispatch(
            setWindowPosition({
                windowName,
                x: initialX.current + deltaX,
                y: initialY.current + deltaY,
            })
        );
    };

    const handleMouseUp = () => {
        dragging.current = false;
    };

    const onMaximizeWindow = () => {
        onMaximize();

        dispatch(resetWindowPosition(windowName));

        dragging.current = false;
        startX.current = 0;
        startY.current = 0;
    }

    console.log(initialX, initialY);
    

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [position]);

    return (
        <div
            className="h-9 bg-white/5 flex items-center px-3 cursor-move"
            onMouseDown={handleMouseDown}
        >
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
                {onMaximizeWindow && (
                    <div
                        className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
                        onClick={onMaximizeWindow}
                    />
                )}
            </div>

            <div className="flex-1 text-center text-white/70 font-medium">
                {title}
            </div>
        </div>
    );
}
