import { setWallpaper } from "../store/slices/wallpaper/wallpaperSlice";

export function setWallpaperFromUrl(url: string, dispatch: any) {
    dispatch(setWallpaper(url));
}

export function setWallpaperFromFile(file: File, dispatch: any) {
    const reader = new FileReader();
    reader.onload = () => {
        dispatch(setWallpaper(reader.result as string));
    };
    reader.readAsDataURL(file);
}
