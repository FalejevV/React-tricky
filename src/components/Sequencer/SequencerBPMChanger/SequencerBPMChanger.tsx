import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { ReverbPickerArrowSVG, ReverbPickerText } from "../FX/Reverb/SequencerReverbFX.styled";
import { SequencerBPMChangerContainer } from "./SequencerBPMChanger.styled";
import { setBPM } from "@/store/sequencer/toggles";


function SequencerBPMChanger(){
    const toggleSelector = useAppSelector((state:RootState) => state.toggles);
    const dispatch = useAppDispatch();

    function changeBPM(value:number){
        if(toggleSelector.speed + value < 0) return;
        if(toggleSelector.speed + value > 500) return;
        dispatch(setBPM(toggleSelector.speed + value))
    }
    
    return(
        <>
        <SequencerBPMChangerContainer>
            <ReverbPickerArrowSVG viewBox="0 0 24 24" onClick={() => changeBPM(-1)}>
                <path d="M8 12L14 6V18L8 12Z"></path>
            </ReverbPickerArrowSVG>

            <ReverbPickerText>{toggleSelector.speed} BPM</ReverbPickerText>

            <ReverbPickerArrowSVG viewBox="0 0 24 24" onClick={() => changeBPM(1)}>
                <path d="M16 12L10 18V6L16 12Z"></path>
            </ReverbPickerArrowSVG>
        </SequencerBPMChangerContainer>
        </>
    )
}

export default SequencerBPMChanger;