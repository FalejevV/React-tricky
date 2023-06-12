import tabsInfo, { setActive, setFile, setTitle, tabInfo } from "@/store/sequencer/tabsInfo";
import { SequencerSamleTabImage, SequencerSampleBottomBar, SequencerSampleTabContainer, SequencerSampleTabEnableButton, SequencerSampleTabTitle, SequencerSampleTabTopBar } from "./SequencerSampleTab.styled";
import { useAppDispatch } from "@/store/store";
import { ChangeEvent, useState } from "react";


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
        <SequencerSampleTabContainer color={props.data.color}>
            <SequencerSampleTabTopBar color={props.data.color}>
                <SequencerSampleTabTitle>
                    {props.data.title}
                </SequencerSampleTabTitle>
            </SequencerSampleTabTopBar>
            <input type="file" onChange={(e) => handleFileSelection(e)}/>
            <SequencerSampleBottomBar>
                <SequencerSamleTabImage src="/sequencer/delete.svg" alt="remove sample" />
                <SequencerSamleTabImage src="/sequencer/palette.svg" alt="pick color" />
                
                <SequencerSampleTabEnableButton active={props.data.active} onClick={() => dispatch(setActive({tabIndex:props.tabIndex, value:!props.data.active}))}/>
            </SequencerSampleBottomBar>
        </SequencerSampleTabContainer>
    )
}

export default SequencerSampleTab;