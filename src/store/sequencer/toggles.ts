import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Toggles{
    cursorType:number,
    load:boolean,
    speed:number,
    play:boolean
}

const initialState: Toggles = {
    cursorType:0,
    load:false,
    play:false,
    speed:125
}


const togglesSlice = createSlice({
    name:"toggles",
    initialState,
    reducers:{
        setCursorType:((state:Toggles,action:PayloadAction<number>) => {
            state.cursorType = action.payload;
        }),
        setLoad:((state:Toggles,action:PayloadAction<boolean>) => {
            state.load = action.payload;
        }),
        setPlay:((state:Toggles,action:PayloadAction<boolean>) => {
            state.play = action.payload;
        }),
        setSpeed:((state:Toggles,action:PayloadAction<number>) => {
            state.speed = action.payload;
        }),
    }
})


export default togglesSlice.reducer;

export const {setCursorType, setPlay,setLoad} = togglesSlice.actions;