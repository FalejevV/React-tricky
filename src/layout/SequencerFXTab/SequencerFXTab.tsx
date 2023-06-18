
import SequencerReverbFX from "@/components/Sequencer/FX/Reverb/SequencerReverbFX";
import { SequencerFXPanReverbContainer, SequencerFXTabContainer, SequencerFXTabText } from "./SequencerFXTab.styled";
import { RootState, useAppSelector } from "@/store/store";
import SequencerPanFX from "@/components/Sequencer/FX/Panorama/SequencerPanFX";
import { SequencerFadersOverlayBlock } from "../SequencerFaders/SequencerFaders.styled";
import SequencerDelayFX from "@/components/Sequencer/FX/Delay/SequencerDelayFX";
import SequencerDistortionFX from "@/components/Sequencer/FX/Distortion/SequencerDistortionFX";
import SequencerSpeedFX from "@/components/Sequencer/FX/Speed/SequencerSpeedFX";



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
                <SequencerSpeedFX />
                <SequencerFXTabText>
                This application is made by a professional (no) <br/>
                Made by a person who is very knowledgeable about music and its creation (also not) <br/>
                - For what? - I don't know. <br/>
                - Useless? - I think yes. <br/>
                - Do I regret it? - No. <br/>
                <br/>
                <br/>

                You can purchase this creation for 1 kebab and fries.
                <br/><br/>
                P.S.<br/> No. 2 kebabs and fries.
                </SequencerFXTabText>
            </SequencerFXTabContainer>
            }
            
        </>
    )
}

export default SequencerFXTab;