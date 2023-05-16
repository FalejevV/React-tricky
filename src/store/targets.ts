import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Object3D } from "three";




const targetOne = new Object3D;
targetOne.position.x = -2;
targetOne.position.y = -6.5;
targetOne.position.z = -20;

const targetTwo = new Object3D;
targetTwo.position.x = 0;
targetTwo.position.y = -4.2;
targetTwo.position.z = -20;

const targetThree = new Object3D;
targetThree.position.x = 2;
targetThree.position.y = -4.2;
targetThree.position.z = -20;

let initialState:Object3D[] = [
    targetOne,
    targetTwo,
    targetThree
];



const targetsSlice = createSlice({
    name: "targets",
    initialState,
    reducers: {
        setTarget:(state:Object3D[], action:PayloadAction<{
            targetIndex:number,
            x:number,
            y:number,
            z:number
        }>) => {
            let target = state[action.payload.targetIndex] as Object3D;
            if (target){
                target.position.x = action.payload.x;
                target.position.y = action.payload.y;
                target.position.z = action.payload.z;
                let tempState = [...state];
                tempState[action.payload.targetIndex] = target;
                return tempState;
            }
            return state;
        }
    }
})

export const { setTarget } = targetsSlice.actions;

export default targetsSlice.reducer
