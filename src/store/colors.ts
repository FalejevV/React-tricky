import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let initialState:string[] = ["#f9c463","#f9c463","#f9c463", "#14fd5a","#fc0000","cyan","#ff6ab2"];



const colorsSlice = createSlice({
    name: "faders",
    initialState,
    reducers: {
        setColor:(state:string[], action: PayloadAction<{index:number, color:string}>) => {
            state[action.payload.index] = action.payload.color;
        }
    }
})


export const { setColor } = colorsSlice.actions;

export default colorsSlice.reducer