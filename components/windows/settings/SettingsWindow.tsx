"use client";

import { closeWindow } from "@/lib/store/slices/windows/windowsSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function SettingsWindow() {
  const dispatch = useDispatch();

  return (
    // Wrapper: centered, fixed, high z-index
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">

      {/* Window container */}
      <div className="w-[380px] h-[300px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="h-9 bg-white/5 flex items-center px-3 cursor-move">
          {/* Red, Yellow, Green dots placeholders */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full cursor-auto" onClick={() => dispatch(closeWindow("settings"))}></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          {/* Window title placeholder */}
          <div className="flex-1 text-center text-white/70 font-medium">
            Settings
          </div>
        </div>

        {/* Body */}
        <div className="p-4 h-[calc(100%-36px)]">
          {/* Empty for now, content goes later */}
        </div>

      </div>
    </div>
  );
}
