import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Object3D } from "three";

export interface Target{
    x:number,
    y:number,
    z:number,
}

let initialState: Target[] = [
    {
        x: -2,
        y: 0,
        z: 4.5
    },
    {
        x: 0,
        y: 0,
        z: 4.5
    },
    {
        x: 2,
        y: 0,
        z: 4.5
    },
    {
        x: -0.5,
        y: 0,
        z: 5
    },
    {
        x: 0.5,
        y: 0,
        z: 5
    },
    {
        x: -1,
        y: 0,
        z: -2
    },
    {
        x: 1,
        y: 0,
        z: -2
    }
];



const targetsSlice = createSlice({
    name: "targets",
    initialState: {...initialState},
    reducers: {
        setTarget:(state: Target[], action:PayloadAction<{target:Target, key:number}>) =>{
            state[action.payload.key].x = action.payload.target.x;
            state[action.payload.key].y = action.payload.target.y;
            state[action.payload.key].z = action.payload.target.z;
        },
        restoreTarget:((state:Target[], action:PayloadAction<number>) => {
            state[action.payload] = initialState[action.payload]
        })
    }
})


export const { setTarget,restoreTarget } = targetsSlice.actions;

export default targetsSlice.reducer
