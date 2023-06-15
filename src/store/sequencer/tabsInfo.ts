import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Filters{
    reverb:{
        toggled:boolean,
        dry:number,
        wet:number,
        type:number,
    }
}

export interface tabInfo{
    file:string,
    title:string,
    color:string,
    active:boolean,
    volume:number,
    filters:Filters
}

const initialState:tabInfo[] = [
    {
        file:"",
        title:"TEST",
        color:"#ffe4e1",
        active:true,
        volume:0.5,
        filters:{
            reverb:{
                toggled:false,
                dry:1,
                wet:0.1,
                type:0
            }
        }
    },
    {
        file:"",
        title:"sample loop #2",
        color:"#d8f8e1",
        active:true,
        volume:0.5,
        filters:{
            reverb:{
                toggled:false,
                dry:1,
                wet:0.1,
                type:0
            }
        }
    },
    {
        file:"",
        title:"TEST loop",
        color:"#b0c2f2",
        active:true,
        volume:0.5,
        filters:{
            reverb:{
                toggled:false,
                dry:1,
                wet:0.1,
                type:0
            }
        }
    },
    {
        file:"",
        title:"HELLO loop",
        color:"#b0f2c2",
        active:true,
        volume:0.5,
        filters:{
            reverb:{
                toggled:false,
                dry:1,
                wet:0.1,
                type:0
            }
        }
    },
    {
        file:"",
        title:"SAME loop",
        color:"#fdf9c4",
        active:true,
        volume:0.5,
        filters:{
            reverb:{
                toggled:false,
                dry:1,
                wet:0.1,
                type:0
            }
        }
    },
    {
        file:"",
        title:"kek loop",
        color:"#c5c6c8",
        active:true,
        volume:0.5,
        filters:{
            reverb:{
                toggled:false,
                dry:1,
                wet:0.1,
                type:0
            }
        }
    }
];


const tabsInfoSlice = createSlice({
    name:"tabsInfo",
    initialState,
    reducers:{
        setActive: ((state:tabInfo[], action:PayloadAction<{tabIndex:number, value:boolean}>) => {
            state[action.payload.tabIndex].active = action.payload.value;
        }),
        setFile: ((state:tabInfo[], action:PayloadAction<{tabIndex:number, value:string}>) => {
            state[action.payload.tabIndex].file = action.payload.value;
        }),
        setTitle: ((state:tabInfo[], action:PayloadAction<{tabIndex:number, value:string}>) => {
            state[action.payload.tabIndex].title = action.payload.value;
        }),
        setColor: ((state:tabInfo[], action:PayloadAction<{tabIndex:number, value:string}>) => {
            state[action.payload.tabIndex].color = action.payload.value;
        }),
        setVolume: ((state:tabInfo[], action:PayloadAction<{tabIndex:number, value:number}>) => {
            state[action.payload.tabIndex].volume = action.payload.value;
        }),
        setToggleReverb: ((state:tabInfo[], action:PayloadAction<{tabIndex:number, value:boolean}>) => {
            state[action.payload.tabIndex].filters.reverb.toggled = action.payload.value;
        }),
        setTypeReverb: ((state:tabInfo[], action:PayloadAction<{tabIndex:number, value:number}>) => {
            state[action.payload.tabIndex].filters.reverb.type = action.payload.value;
        }),
        setWetReverb: ((state:tabInfo[], action:PayloadAction<{tabIndex:number, value:number}>) => {
            state[action.payload.tabIndex].filters.reverb.wet = action.payload.value;
        }),
        setDryReverb: ((state:tabInfo[], action:PayloadAction<{tabIndex:number, value:number}>) => {
            state[action.payload.tabIndex].filters.reverb.dry = action.payload.value;
        }),
    }
})


export default tabsInfoSlice.reducer;

export const { setActive, setFile, setTitle,setColor, setVolume, setWetReverb, setDryReverb, setToggleReverb, setTypeReverb} = tabsInfoSlice.actions;