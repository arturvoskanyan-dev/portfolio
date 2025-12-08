import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SingleWindowStateType {
    isOpen: boolean,
    isMinimized: boolean,
    isMaximized: boolean,
    position: { x: number, y: number },
    activeSettingsSection?: string | null,
}

export interface WindowsStateType {
    settings: SingleWindowStateType
}

const initialState: WindowsStateType = {
    settings: {
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        position: {
            x: 50,
            y: 50,
        },
        activeSettingsSection: null
    },
}

const windowsSlice = createSlice({
    name: "windows",
    initialState,
    reducers: {
        openWindow(state, action: PayloadAction<keyof WindowsStateType>) {
            const windowName = action.payload;
            state[windowName].isOpen = true;
            state[windowName].isMinimized = false;
        },
        closeWindow(state, action: PayloadAction<keyof WindowsStateType>) {
            const windowName = action.payload;
            state[windowName].isOpen = false;
            state[windowName].isMinimized = false;
            state[windowName].isMaximized = false;
            state[windowName].position = { x: 50, y: 50 };
        },
        minimizeWindow(state, action: PayloadAction<keyof WindowsStateType>) {
            const windowName = action.payload;
            state[windowName].isOpen = false; // not final
            state[windowName].isMinimized = true
        },
        toogleMaximize(state, action: PayloadAction<keyof WindowsStateType>) {
            const windowName = action.payload;
            state[windowName].isMaximized = !state[windowName].isMaximized;
            state[windowName].isMinimized = false;
        },
        setWindowPosition(state, action: PayloadAction<{ windowName: keyof WindowsStateType, x: number, y: number }>) {
            const { windowName, x, y } = action.payload;
            state[windowName].position = { x, y };
        },
        resetWindowPosition(state, action: PayloadAction<keyof WindowsStateType>) {
            const windowName = action.payload;
            state[windowName].position = { x: 0, y: 20 };
        },
        setActiveSettingsSection(state, action: PayloadAction<{windowName: keyof WindowsStateType, activeSection: string}>) {
            const windowName = action.payload.windowName;
            state[windowName].activeSettingsSection = action.payload.activeSection;
        } 
    }
})

export const { openWindow, closeWindow, minimizeWindow, toogleMaximize, setWindowPosition, resetWindowPosition, setActiveSettingsSection } = windowsSlice.actions;
export default windowsSlice.reducer;