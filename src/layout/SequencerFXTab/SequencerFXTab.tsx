
import SequencerReverbFX from "@/components/Sequencer/FX/Reverb/SequencerReverbFX";
import { SequencerFXPanReverbContainer, SequencerFXTabContainer } from "./SequencerFXTab.styled";
import { RootState, useAppSelector } from "@/store/store";
import SequencerPanFX from "@/components/Sequencer/FX/Panorama/SequencerPanFX";
import { SequencerFadersOverlayBlock } from "../SequencerFaders/SequencerFaders.styled";
import SequencerDelayFX from "@/components/Sequencer/FX/Delay/SequencerDelayFX";
import SequencerDistortionFX from "@/components/Sequencer/FX/Distortion/SequencerDistortionFX";



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
                <SequencerDelayFX />
                <SequencerDistortionFX />
            </SequencerFXTabContainer>
            }
            
        </>
    )
}

export default SequencerFXTab;