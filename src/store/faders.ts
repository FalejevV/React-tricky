import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let initialState:number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



const fadersSlice = createSlice({
    name: "faders",
    initialState,
    reducers: {
        setFader:(state:number[], action:PayloadAction<{
            faderIndex:number,
            value:number
        }>) => {
            state[action.payload.faderIndex] = action.payload.value;
        }
    }
})


export const { setFader } = fadersSlice.actions;

export default fadersSlice.reducer