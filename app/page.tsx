import WallpaperChanger from "@/components/background/WallpaperChanger";
import Dock from "@/components/dock";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-red">Hello</h1>
      <Dock />
      <WallpaperChanger />
    </div>
  );
}
