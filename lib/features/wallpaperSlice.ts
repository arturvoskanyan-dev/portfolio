import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WallpaperStateType = {
    wallpaper: string;
}

const initialState: WallpaperStateType = {
    wallpaper: "",
}

const wallpaperSlice = createSlice({
    name: "wallpaper",
    initialState,
    reducers: {
        setWallpaper(state, action: PayloadAction<string>) {
            state.wallpaper = action.payload;
            localStorage.setItem("wallpaper", action.payload);
        },
        loadWallpaper(state) {
            const saved = localStorage.getItem("wallpaper");
            if (saved) state.wallpaper = saved;
        }
    }
})

export const { setWallpaper, loadWallpaper } = wallpaperSlice.actions;
export default wallpaperSlice.reducer;