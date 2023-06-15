
import SequencerReverbFX from "@/components/Sequencer/FX/Reverb/SequencerReverbFX";
import { SequencerFXPanReverbContainer, SequencerFXTabContainer } from "./SequencerFXTab.styled";
import { RootState, useAppSelector } from "@/store/store";
import SequencerPanFX from "@/components/Sequencer/FX/Panorama/SequencerPanFX";
import { SequencerFaderOverlayIcon, SequencerFadersOverlayBlock } from "../SequencerFaders/SequencerFaders.styled";



function SequencerFXTab(){
    let togglesSelector = useAppSelector((state:RootState) => state.toggles);
    return(
        <>
            {togglesSelector.fixtureTab >= 0 && 
            <SequencerFXTabContainer>
                <SequencerFadersOverlayBlock toggle={togglesSelector.load}>
                </SequencerFadersOverlayBlock>
                <SequencerFXPanReverbContainer>
                    <SequencerReverbFX />
                    <SequencerPanFX />
                </SequencerFXPanReverbContainer>
            </SequencerFXTabContainer>
            }
            
        </>
    )
}

export default SequencerFXTab;