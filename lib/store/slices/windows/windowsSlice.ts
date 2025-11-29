import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type WindowsStateType = {
    settings: boolean
}

const initialState: WindowsStateType = {
    settings: false,
}

const windowsSlice = createSlice({
    name: "windows",
    initialState,
    reducers: {
        changeWindowState(state, action: PayloadAction<keyof WindowsStateType>) {
            const windowName = action.payload;
            state[windowName] = !state[windowName];
        },
        closeWindow(state, action: PayloadAction<keyof WindowsStateType>) {
            const windowName = action.payload;
            state[windowName] = false;
        }
    }
})

export const {changeWindowState, closeWindow} = windowsSlice.actions;
export default windowsSlice.reducer;