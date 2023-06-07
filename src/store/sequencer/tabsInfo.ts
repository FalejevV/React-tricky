import { createSlice } from "@reduxjs/toolkit";

export interface tabInfo{
    file:string,
    title:string,
    color:string,
    active:boolean,
}

const initialState:tabInfo[] = [
    {
        file:"sampleFile",
        title:"sample loop",
        color:"#FFFFFF",
        active:true,
    },
    {
        file:"sampleFile",
        title:"sample loop #2",
        color:"#111111",
        active:true,
    },
    {
        file:"sampleFile",
        title:"sample loop",
        color:"#FF1111",
        active:true,
    },
    {
        file:"sampleFile",
        title:"sample loop",
        color:"green",
        active:true,
    },
    {
        file:"sampleFile",
        title:"sample loop",
        color:"blue",
        active:true,
    },
    {
        file:"sampleFile",
        title:"sample loop",
        color:"cyan",
        active:true,
    }
];


const tabsInfoSlice = createSlice({
    name:"tabsInfo",
    initialState,
    reducers:{

    }
})


export default tabsInfoSlice.reducer;