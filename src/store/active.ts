import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let initialState:number[] = [];


const activeSlice = createSlice({
    name: "faders",
    initialState,
    reducers: {
        toggleActive:(state:number[], action: PayloadAction<number>) => {
            if(state.includes(action.payload)){
                return state.filter((number:number) => number !== action.payload)
            }else{
                state.push(action.payload);
                return state;
            }
        }
    }
})

export const { toggleActive } = activeSlice.actions;

export default activeSlice.reducer