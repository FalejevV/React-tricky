import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sampleTab, sampleTabData } from "../../../interface";
import { nanoid } from "nanoid";


const initialState:sampleTab[] = [
    {tabs:[]},
    {tabs:[]},
    {tabs:[]},
    {tabs:[]},
    {tabs:[]},
    {tabs:[]},
];


const sampleTabsSlice = createSlice({
    name: 'sampleTabs',
    initialState,
    reducers:{
        addTab: (state:sampleTab[], action:PayloadAction<{sampleId:number,start:number}>) => {
            let tabExists = false;
            state[action.payload.sampleId].tabs.forEach((tab:sampleTabData) => {
                if(tabExists) return;
                if(tab.from === action.payload.start || tab.to === action.payload.start){
                    tabExists = true;
                }
            })
            if(!tabExists){
                state[action.payload.sampleId].tabs.push({
                    from: action.payload.start,
                    to: action.payload.start,
                    id: nanoid()
                })
            }
            return state;
        },
        removeTab:(state:sampleTab[], action:PayloadAction<{sampleId:number, tabId:string}>) => {
            let filter = state[action.payload.sampleId].tabs.filter((tab:sampleTabData) => tab.id !== action.payload.tabId)
            state[action.payload.sampleId].tabs = filter;
        },
        changeTab:(state:sampleTab[], action:PayloadAction<{sampleId:number, tabData:sampleTabData}>) => {
            state[action.payload.sampleId].tabs.forEach((tab:sampleTabData) => {
                if(tab.id !== action.payload.tabData.id){
                    return tab;
                }else{
                    tab = action.payload.tabData;
                }
            })
            return state;
        },
    }
})



export default sampleTabsSlice.reducer;
export const {addTab, removeTab, changeTab} = sampleTabsSlice.actions;