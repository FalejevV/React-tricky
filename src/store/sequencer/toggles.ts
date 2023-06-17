import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Toggles{
    cursorType:number,
    load:boolean,
    speed:number,
    play:boolean,
    fixtureTab:number
}

const initialState: Toggles = {
    cursorType:0,
    load:false,
    play:false,
    speed:120,
    fixtureTab:0,
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
        setBPM:((state:Toggles,action:PayloadAction<number>) => {
            state.speed = action.payload;
        }),
        setFixtureTab:((state:Toggles,action:PayloadAction<number>) => {
            state.fixtureTab = action.payload;
        }),
    }
})


export default togglesSlice.reducer;

export const {setCursorType, setPlay,setLoad, setFixtureTab, setBPM} = togglesSlice.actions;