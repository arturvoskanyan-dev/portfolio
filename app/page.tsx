import WallpaperChanger from "@/components/background/WallpaperChanger";
import Dock from "@/components/dock";
import Windows from "@/components/windows";

export default function Home() {
  return (
    <div>
      <Dock />
      <WallpaperChanger />
      <Windows />
    </div>
  );
}
