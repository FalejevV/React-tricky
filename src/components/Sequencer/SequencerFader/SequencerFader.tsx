import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { SequencerActiveButtonWrap, SequencerFaderContainer, SequencerFaderInput } from "./SequencerFader.styled";
import { ChangeEvent } from "react";
import { setActive, setVolume } from "@/store/sequencer/tabsInfo";
import SequencerActiveButton from "../SequencerActiveButton/SequencerActiveButton";




function SequencerFader(props:{
    index:number
}){
    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo);
    const dispatch = useAppDispatch();
    function changeVolume(e:ChangeEvent){
        let target = e.target as HTMLInputElement;
        let value = Number(target.value) / 100
        dispatch(setVolume({tabIndex:props.index, value}))
    }
    return(
        <SequencerFaderContainer color={tabsInfoSelector[props.index].file !== "" ? tabsInfoSelector[props.index].color : "transparent"} >
            <SequencerActiveButtonWrap>
                <SequencerActiveButton onClick={() => dispatch(setActive({
                    tabIndex: props.index,
                    value: !tabsInfoSelector[props.index].active
                }))} active={tabsInfoSelector[props.index].active}/>
            </SequencerActiveButtonWrap>
            <SequencerFaderInput value={tabsInfoSelector[props.index].volume * 100} onChange={changeVolume} step="5" type="range" />
        </SequencerFaderContainer>
    )
}


export default SequencerFader;