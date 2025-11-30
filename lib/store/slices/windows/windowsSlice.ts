import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SingleWindowStateType {
    isOpen: boolean,
    isMinimized: boolean,
    isMaximized: boolean,
}

interface WindowsStateType {
    settings: SingleWindowStateType
}

const initialState: WindowsStateType = {
    settings: {
        isOpen: false,
        isMinimized: false,
        isMaximized: false
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
        },
        minimizeWindow(state, action: PayloadAction<keyof WindowsStateType>) {
            const windowName = action.payload;
            state[windowName].isOpen = false; // not final
            state[windowName].isMinimized = true
            state[windowName].isMaximized = false;
        },
        toogleMaximize(state, action: PayloadAction<keyof WindowsStateType>) {
            const windowName = action.payload;
            state[windowName].isMaximized = !state[windowName].isMaximized;
            state[windowName].isMinimized = false;
        }
    }
})

export const { openWindow, closeWindow, minimizeWindow, toogleMaximize } = windowsSlice.actions;
export default windowsSlice.reducer;