"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { openWindow } from "@/lib/store/slices/windows/windowsSlice";
import Image from "next/image";

export default function DockItem({
  src,
  alt,
  link,
}: {
  src: string;
  alt: string;
  link?: string;
}) {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`relative flex items-end transition-all duration-200 hover:scale-[1.35]`}
    >
      <button onClick={() => dispatch(openWindow(alt))}>
        <Image
          src={src}
          alt={alt}
          width={80}
          height={80}
          className="rounded-xl select-none cursor-pointer"
        />
      </button>
    </div>
  );
}
