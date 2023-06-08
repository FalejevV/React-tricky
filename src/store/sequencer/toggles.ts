import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Toggles{
    cursorType:number,
}

const initialState: Toggles = {
    cursorType:1
}


const togglesSlice = createSlice({
    name:"toggles",
    initialState,
    reducers:{
        setCursorType:((state:Toggles,action:PayloadAction<number>) => {
            state.cursorType = action.payload;
        })
    }
})


export default togglesSlice.reducer;

export const {setCursorType} = togglesSlice.actions;