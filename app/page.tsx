import WallpaperChanger from "@/components/background/wallpaper/WallpaperChanger";
import Dock from "@/components/dock";
import TopBar from "@/components/topBar";
import Windows from "@/components/windows";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Dock />
      <Windows />
    </div>
  );
}
