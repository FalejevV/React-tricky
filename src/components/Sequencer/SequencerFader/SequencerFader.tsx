import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { SequencerActiveButtonWrap, SequencerFXButton, SequencerFaderContainer, SequencerFaderInput } from "./SequencerFader.styled";
import { ChangeEvent } from "react";
import { setActive, setVolume } from "@/store/sequencer/tabsInfo";
import SequencerActiveButton from "../SequencerActiveButton/SequencerActiveButton";
import { setFixtureTab } from "@/store/sequencer/toggles";




function SequencerFader(props:{
    index:number,
}){
    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo);
    const togglesSelector = useAppSelector((state:RootState) => state.toggles);
    const dispatch = useAppDispatch();
    function changeVolume(e:ChangeEvent){
        let target = e.target as HTMLInputElement;
        let value = Number(target.value) / 100
        dispatch(setVolume({tabIndex:props.index, value}))
    }

    function toggleFixtureTab(){
        if(togglesSelector.fixtureTab !== props.index){
            dispatch(setFixtureTab(props.index));
        }else{
            dispatch(setFixtureTab(-1));
        }
    }
    return(
        <SequencerFaderContainer color={tabsInfoSelector[props.index].file !== "" ? tabsInfoSelector[props.index].color : "transparent"} >
            <SequencerActiveButtonWrap>
                <SequencerActiveButton onClick={() => dispatch(setActive({
                    tabIndex: props.index,
                    value: !tabsInfoSelector[props.index].active
                }))} active={tabsInfoSelector[props.index].file !== "" ? tabsInfoSelector[props.index].active : false}/>
            </SequencerActiveButtonWrap>
            <SequencerFaderInput value={tabsInfoSelector[props.index].volume * 100} onChange={changeVolume} step="5" type="range" />
            <SequencerFXButton toggle={togglesSelector.fixtureTab === props.index} onClick={toggleFixtureTab}>FX</SequencerFXButton>
        </SequencerFaderContainer>
    )
}


export default SequencerFader;