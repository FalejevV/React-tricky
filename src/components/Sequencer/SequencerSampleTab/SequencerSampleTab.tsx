import { setActive, setColor, setFile, setTitle, tabInfo } from "@/store/sequencer/tabsInfo";
import { SequencerSamleTabImage, SequencerSampleBottomBar, SequencerSampleTabContainer, SequencerSampleTabFileInput, SequencerSampleTabSpacer, SequencerSampleTabTitle, SequencerSampleTabTopBar } from "./SequencerSampleTab.styled";
import { useAppDispatch } from "@/store/store";
import { ChangeEvent, useState } from "react";
import { SequencerSampleActiveButton } from "../SequencerActiveButton/SequencerActiveButton.styled";

let colorList = [
    "#CDC2AE",
    "#6aa1ac",
    "#9BABB8",
    "#75ada7",
    "#F2D8D8",
    "#8294C4",
    "#CBB279",
    "#FFB4B4",
    "#B2A4FF",
    "#FFD966",
    "#b165a2",
    "#8EA7E9",
    "#E97777",
    "#CDFCF6",
    "#ECCCB2",
    "#B1BCE6",
    "#DEB6AB",
    "#d47f7f",
    "#bd7272",
    "#A68DAD",
    "#CDF2CA",
    "#A2CDCD"
]
function getRandomColor(){
    return colorList[ Math.floor(Math.random() * (colorList.length - 1))];
}

function SequencerSampleTab(props:{
    data:tabInfo,
    tabIndex:number
}){
    const dispatch = useAppDispatch();
    const [inputFile,setInputFile] = useState(props.data.file);
    function handleFileSelection(e:ChangeEvent){
        let target = e.target as HTMLInputElement;
        if(!target.files) return;
        const reader = new FileReader();
            reader.onloadend = function (e){
                let readTarget = e.target as FileReader;
                if(typeof readTarget.result === "string" && target.files){
                    dispatch(setFile({ tabIndex:props.tabIndex, value:readTarget.result}));
                    dispatch(setTitle({ tabIndex:props.tabIndex, value: target.files[0].name}));
                }
            }
            reader.readAsDataURL(target.files[0]);  
    }
    return(
        <SequencerSampleTabContainer hasFile={props.data.file !== ""} color={props.data.color}>
            {inputFile === "" && <SequencerSampleTabFileInput type="file" onChange={(e) => handleFileSelection(e)}/>}
            {inputFile !== "" && <>
                <SequencerSampleTabTopBar color={props.data.color}>
                    <SequencerSampleTabTitle>
                        {props.data.title}
                    </SequencerSampleTabTitle>
                </SequencerSampleTabTopBar>
                <SequencerSampleBottomBar>
                    <SequencerSamleTabImage src="/sequencer/delete.svg" alt="remove sample" onClick={() => dispatch(setFile({ tabIndex:props.tabIndex, value:""}))}/>
                    <SequencerSamleTabImage src="/sequencer/palette.svg" alt="pick color" onClick={() => dispatch(setColor({tabIndex:props.tabIndex, value:getRandomColor()}))} />

                    <SequencerSampleTabSpacer />
                    
                    <SequencerSampleActiveButton active={props.data.active} onClick={() => dispatch(setActive({tabIndex:props.tabIndex, value:!props.data.active}))}/>
                </SequencerSampleBottomBar>
            </>}
        </SequencerSampleTabContainer>
    )
}

export default SequencerSampleTab;