"use client";

import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import {
  closeWindow,
  minimizeWindow,
  toogleMaximize,
} from "@/lib/store/slices/windows/windowsSlice";
import WindowHeader from "../WindowHeader";

export default function SettingsWindow({
  widthSize,
  heightSize
}: {
  widthSize: number | string,
  heightSize: number | string
}) {
  const { position } = useAppSelector((state) => state.windows.settings);
  const dispatch = useAppDispatch();

  return (
    <div
      className="fixed z-50"
      style={{
        left: position.x,
        top: position.y
      }}
    >
      <div
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg overflow-hidden"
        style={{ width: widthSize, height: heightSize }}
      >
        <WindowHeader
          windowName="settings"
          title="Settings"
          onClose={() => dispatch(closeWindow("settings"))}
          onMinimize={() => dispatch(minimizeWindow("settings"))}
          onMaximize={() => dispatch(toogleMaximize("settings"))}
        />

        <div className="p-4 h-[calc(100%-36px)]">
          {/* content later */}
        </div>
      </div>
    </div>
  );
}
