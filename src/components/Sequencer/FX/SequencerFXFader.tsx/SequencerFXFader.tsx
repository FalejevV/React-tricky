import { RootState, useAppSelector } from "@/store/store";
import { SequencerFXFaderContainer, SequencerFXFaderInput, SequencerFXFaderTitle } from "./SequencerFXFader.styled";



function SequencerFXFader(props:{
    index:number,
    value:number,
    onChange:Function,
    title:string
}){
    return(
        <SequencerFXFaderContainer>
            <SequencerFXFaderInput value={props.value} onChange={(e) => props.onChange(e)} step="5" type="range"/>
            <SequencerFXFaderTitle>{props.title}</SequencerFXFaderTitle>
        </SequencerFXFaderContainer>
    )
}


export default SequencerFXFader;