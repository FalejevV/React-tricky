import { SequencerFXItemCheckbox, SequencerFXItemHeader, SequencerFXItemTitle } from "@/layout/SequencerFXTab/SequencerFXTab.styled";
import SequencerFXFader from "../SequencerFXFader.tsx/SequencerFXFader";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { ChangeEvent } from "react";
import { setSpeedToggle, setSpeedValue } from "@/store/sequencer/tabsInfo";
import { SequencerSpeedFXContainer, SequencerSpeedFXInfoText } from "./SequencerSpeed.styled";



function SequencerSpeedFX(){

    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo);
    const toggleSelector = useAppSelector((state:RootState) => state.toggles);
    const dispatch = useAppDispatch();
    console.log(tabsInfoSelector[toggleSelector.fixtureTab].filters.speed.value);
    return(
        <SequencerSpeedFXContainer>
            <SequencerFXItemHeader>
                <SequencerFXItemTitle>Speed</SequencerFXItemTitle>
                <SequencerFXItemCheckbox type="checkbox" checked={tabsInfoSelector[toggleSelector.fixtureTab].filters.speed.toggled} onChange={(e:ChangeEvent) => dispatch(setSpeedToggle({
                    tabIndex:toggleSelector.fixtureTab,
                    value:(e.target as HTMLInputElement).checked
                }))}/>
            </SequencerFXItemHeader>
            <SequencerSpeedFXInfoText>(0.2x to 2.1x)</SequencerSpeedFXInfoText>
            <SequencerFXFader value={tabsInfoSelector[toggleSelector.fixtureTab].filters.speed.value / 2} onChange={(e: ChangeEvent) => dispatch(setSpeedValue({
                tabIndex: toggleSelector.fixtureTab,
                value: Number((e.target as HTMLInputElement).value) * 2 + 20
            }))} index={toggleSelector.fixtureTab} title={"Rate"}/>
        </SequencerSpeedFXContainer>
    )
}


export default SequencerSpeedFX;