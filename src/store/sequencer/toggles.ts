import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Toggles{
    cursorType:number,
    play:boolean
}

const initialState: Toggles = {
    cursorType:0,
    play:false
}


const togglesSlice = createSlice({
    name:"toggles",
    initialState,
    reducers:{
        setCursorType:((state:Toggles,action:PayloadAction<number>) => {
            state.cursorType = action.payload;
        }),
        setPlay:((state:Toggles,action:PayloadAction<boolean>) => {
            state.play = action.payload;
        })
    }
})


export default togglesSlice.reducer;

export const {setCursorType, setPlay} = togglesSlice.actions;