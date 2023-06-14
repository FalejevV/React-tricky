import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import SequencerFXFader from "../SequencerFXFader.tsx/SequencerFXFader";
import { SequencerReverbFXContainer } from "./SequencerReverbFX.styled";
import { ChangeEvent } from "react";
import { setDryReverb, setWetReverb } from "@/store/sequencer/tabsInfo";
import { SequencerFXItemTitle } from "@/layout/SequencerFXTab/SequencerFXTab.styled";


function SequencerReverbFX(){
    const toggleSelector = useAppSelector((state:RootState) => state.toggles);
    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo);
    const dispatch = useAppDispatch();
    return(
        <SequencerReverbFXContainer>
            <SequencerFXItemTitle>Reverb</SequencerFXItemTitle>

            <SequencerFXFader title="Dry" value={tabsInfoSelector[toggleSelector.fixtureTab].filters.reverb.dry * 100} onChange={(e:ChangeEvent) => dispatch(setDryReverb({
                tabIndex:toggleSelector.fixtureTab,
                value:Number((e.target as HTMLInputElement).value) / 100
                }))} index={toggleSelector.fixtureTab}/>

            <SequencerFXFader title="Wet" value={tabsInfoSelector[toggleSelector.fixtureTab].filters.reverb.wet * 100} onChange={(e:ChangeEvent) => dispatch(setWetReverb({
                tabIndex:toggleSelector.fixtureTab,
                value:Number((e.target as HTMLInputElement).value) / 100
                }))} index={toggleSelector.fixtureTab}/>

                
        </SequencerReverbFXContainer>
    )
}


export default SequencerReverbFX;