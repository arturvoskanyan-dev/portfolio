"use client";

import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'

const BackgroundContext = createContext({
  wallpaper: "",
  setWallpaper: (url: string) => { },
})

export default function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [wallpaper, setWallpaper] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("wallpaper");
    if (saved) setWallpaper(saved);
  }, []);

  const updateWallpaper = (url: string) => {
    setWallpaper(url);
    localStorage.setItem("wallpaper", url);
  }

  return (
    <BackgroundContext.Provider value={{wallpaper, setWallpaper: updateWallpaper}}>
      {children}
    </BackgroundContext.Provider>
  )
}

export const useBackground = () => useContext(BackgroundContext);