"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { openWindow } from "@/lib/store/slices/windows/windowsSlice";
import Image from "next/image";

export default function DockItem({
  src,
  windowName,
  link,
}: {
  src: string;
  windowName: string;
  link?: string;
}) {
  const { isOpen, isMinimized } = useAppSelector((state) => state.windows[windowName]);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`relative flex flex-col items-center transition-all duration-200 hover:scale-[1.35]`}
    >
      <button onClick={() => dispatch(openWindow(windowName))}>
        <Image
          src={src}
          alt={windowName}
          width={80}
          height={80}
          className="rounded-xl select-none cursor-pointer"
        />
      </button>
      {/* {(isOpen || isMinimized) && (
        <div className="w-1.5 h-1.5 bg-white flex justify-center rounded-full"></div>
      )} */}
      <div
        className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-colors ${isOpen || isMinimized ? "bg-white" : "bg-transparent"
          }`}
      ></div>
    </div>
  );
}
