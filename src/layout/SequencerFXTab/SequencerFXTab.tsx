
import SequencerReverbFX from "@/components/Sequencer/FX/Reverb/SequencerReverbFX";
import { SequencerFXTabContainer } from "./SequencerFXTab.styled";
import { RootState, useAppSelector } from "@/store/store";



function SequencerFXTab(){
    let togglesSelector = useAppSelector((state:RootState) => state.toggles);
    return(
        <>
            {togglesSelector.fixtureTab >= 0 && 
            <SequencerFXTabContainer>
                <SequencerReverbFX />
            </SequencerFXTabContainer>
            }
            
        </>
    )
}

export default SequencerFXTab;