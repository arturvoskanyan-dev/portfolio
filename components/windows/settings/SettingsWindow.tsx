"use client";

import { closeWindow, minimizeWindow, toogleMaximize } from "@/lib/store/slices/windows/windowsSlice";
import React from "react";
import { useDispatch } from "react-redux";
import WindowHeader from "../WindowHeader";

export default function SettingsWindow({
  widthSize,
  heightSize,
  isMaximized,
  topOffset,
}: {
  widthSize: string;
  heightSize: string;
  isMaximized: boolean;
  topOffset: number;
}) {
  const dispatch = useDispatch();

  return (
    <div
      className="fixed left-1/2 z-50"
      style={{
        top: isMaximized ? `${topOffset}px` : "50%",
        transform: isMaximized
          ? "translateX(-50%)"
          : "translate(-50%, -50%)",
      }}
    >
      <div
        style={{ width: widthSize, height: heightSize }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg overflow-hidden"
      >
        <WindowHeader
          title="settings"
          onClose={() => dispatch(closeWindow("settings"))}
          onMinimize={() => dispatch(minimizeWindow("settings"))}
          onMaximize={() => dispatch(toogleMaximize("settings"))}
        />

        <div className="p-4 h-[calc(100%-36px)]"></div>
      </div>
    </div>
  );
}
