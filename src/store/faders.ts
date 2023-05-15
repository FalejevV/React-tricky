import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let initialState:number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



const fadersSlice = createSlice({
    name: "faders",
    initialState,
    reducers: {
        setFader:(state:number[], action:PayloadAction<FaderData>) => {
            state[action.payload.faderIndex] = action.payload.value;
        }
    }
})

export interface FaderData{
    faderIndex:number,
    value:number
}
export const { setFader } = fadersSlice.actions;

export default fadersSlice.reducer