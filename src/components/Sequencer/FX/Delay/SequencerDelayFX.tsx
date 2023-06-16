import { SequencerFXItemCheckbox, SequencerFXItemHeader, SequencerFXItemTitle } from "@/layout/SequencerFXTab/SequencerFXTab.styled";
import { SequencerDelayFXContainer, SequencerDelayFXInfoText } from "./SequencerDelayFX.styled";
import SequencerFXFader from "../SequencerFXFader.tsx/SequencerFXFader";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { ChangeEvent } from "react";
import { setDelayToggle, setDelayValue } from "@/store/sequencer/tabsInfo";



function SequencerDelayFX(){

    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo);
    const toggleSelector = useAppSelector((state:RootState) => state.toggles);
    const dispatch = useAppDispatch();
    return(
        <SequencerDelayFXContainer>
            <SequencerFXItemHeader>
                <SequencerFXItemTitle>Delay</SequencerFXItemTitle>
                <SequencerFXItemCheckbox type="checkbox" checked={tabsInfoSelector[toggleSelector.fixtureTab].filters.delay.toggled} onChange={(e:ChangeEvent) => dispatch(setDelayToggle({
                    tabIndex:toggleSelector.fixtureTab,
                    value:(e.target as HTMLInputElement).checked
                }))}/>
            </SequencerFXItemHeader>
            <SequencerDelayFXInfoText>(0s to 1s)</SequencerDelayFXInfoText>
            <SequencerFXFader value={tabsInfoSelector[toggleSelector.fixtureTab].filters.delay.value * 100} onChange={(e: ChangeEvent) => dispatch(setDelayValue({
                tabIndex: toggleSelector.fixtureTab,
                value: Number((e.target as HTMLInputElement).value) / 100
            }))} index={toggleSelector.fixtureTab} title={"Time"}/>
        </SequencerDelayFXContainer>
    )
}


export default SequencerDelayFX;