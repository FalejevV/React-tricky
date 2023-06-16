import { SequencerFXItemCheckbox, SequencerFXItemHeader, SequencerFXItemTitle } from "@/layout/SequencerFXTab/SequencerFXTab.styled";
import SequencerFXFader from "../SequencerFXFader.tsx/SequencerFXFader";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { ChangeEvent } from "react";
import { setDistortionToggle, setDistortionValue } from "@/store/sequencer/tabsInfo";
import { SequencerDistortionFXContainer, SequencerDistortionFXInfoText } from "./SequencerDistortionFX.styled";



function SequencerDistortionFX(){

    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo);
    const toggleSelector = useAppSelector((state:RootState) => state.toggles);
    const dispatch = useAppDispatch();
    return(
        <SequencerDistortionFXContainer>
            <SequencerFXItemHeader>
                <SequencerFXItemTitle>Destortion</SequencerFXItemTitle>
                <SequencerFXItemCheckbox type="checkbox" checked={tabsInfoSelector[toggleSelector.fixtureTab].filters.distortion.toggled} onChange={(e:ChangeEvent) => dispatch(setDistortionToggle({
                    tabIndex:toggleSelector.fixtureTab,
                    value:(e.target as HTMLInputElement).checked
                }))}/>
            </SequencerFXItemHeader>
            <SequencerDistortionFXInfoText>(May be loud)</SequencerDistortionFXInfoText>
            <SequencerFXFader value={tabsInfoSelector[toggleSelector.fixtureTab].filters.distortion.value} onChange={(e: ChangeEvent) => dispatch(setDistortionValue({
                tabIndex: toggleSelector.fixtureTab,
                value: Number((e.target as HTMLInputElement).value)
            }))} index={toggleSelector.fixtureTab} title={"Strength"}/>
        </SequencerDistortionFXContainer>
    )
}


export default SequencerDistortionFX;