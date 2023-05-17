import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Object3D } from "three";

export interface Target{
    x:number,
    y:number,
    z:number,
}

export interface TargetState{
    left:Target,
    center:Target,
    right:Target,
    head1:Target,
    head2:Target,
    head3:Target,
    head4:Target,
    head5:Target,
    head6:Target,
    head7:Target,
    head8:Target,
}

let initialState: TargetState = {
    left: {
        x: -2,
        y: 0,
        z: 3
    },
    center: {
        x: 0,
        y: 0,
        z: 3
    },
    right: {
        x: 2,
        y: 0,
        z: 3
    },
    head1:{
        x: -0.5,
        y: 0,
        z: 3
    },
    head2:{
        x: 0.5,
        y: 0,
        z: 3
    },
    head3:{
        x: -1,
        y: 0,
        z: -4
    },
    head4:{
        x: 1,
        y: 0,
        z: -4
    },
    head5:{
        x: -1.75,
        y: 0,
        z: 4
    },
    head6:{
        x: 1.75,
        y: 0,
        z: 4
    },
    head7:{
        x: -2,
        y: 0,
        z: 0
    }
    ,
    head8:{
        x: 2,
        y: 0,
        z: 0
    }
};



const targetsSlice = createSlice({
    name: "targets",
    initialState,
    reducers: {
        setTarget:(state: TargetState, action:PayloadAction<{target:Target, key:keyof TargetState}>) =>{
            state[action.payload.key].x = action.payload.target.x;
            state[action.payload.key].y = action.payload.target.y;
            state[action.payload.key].z = action.payload.target.z;
        }
    }
})


export const { setTarget } = targetsSlice.actions;

export default targetsSlice.reducer
