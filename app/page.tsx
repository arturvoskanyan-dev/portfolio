import WallpaperChanger from "@/components/background/WallpaperChanger";
import Dock from "@/components/dock";
import SettingsWindow from "@/components/windows/settings/SettingsWindow";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Dock />
      <WallpaperChanger />
      <SettingsWindow />
    </div>
  );
}
