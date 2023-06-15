import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import SequencerFXFader from "../SequencerFXFader.tsx/SequencerFXFader";
import { ReverbPickerArrowSVG, ReverbPickerContainer, ReverbPickerText, SequencerReverbFXContainer, SequencerReverbFXFaderContainer } from "./SequencerReverbFX.styled";
import { ChangeEvent } from "react";
import { setDryReverb, setToggleReverb, setTypeReverb, setWetReverb } from "@/store/sequencer/tabsInfo";
import { SequencerFXItemCheckbox, SequencerFXItemHeader, SequencerFXItemTitle } from "@/layout/SequencerFXTab/SequencerFXTab.styled";
import { reverbArray } from "../../Filters";


function SequencerReverbFX(){
    const toggleSelector = useAppSelector((state:RootState) => state.toggles);
    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo);
    const dispatch = useAppDispatch();

    function changeReverbType(value:number){
        let currentType = tabsInfoSelector[toggleSelector.fixtureTab].filters.reverb.type;
        if(currentType + value < 0) return;
        if(currentType + value > reverbArray.length - 1) return;
        dispatch(setTypeReverb({
            tabIndex:toggleSelector.fixtureTab,
            value:currentType + value
            }));
    }
    return(
        <SequencerReverbFXContainer>
            <SequencerFXItemHeader>
                <SequencerFXItemTitle>Reverb</SequencerFXItemTitle>
                <SequencerFXItemCheckbox type="checkbox" checked={tabsInfoSelector[toggleSelector.fixtureTab].filters.reverb.toggled} onChange={(e:ChangeEvent) => dispatch(setToggleReverb({
                    tabIndex:toggleSelector.fixtureTab,
                    value:(e.target as HTMLInputElement).checked
                }))}/>
            </SequencerFXItemHeader>

            <ReverbPickerContainer>
                <ReverbPickerArrowSVG viewBox="0 0 24 24" onClick={() => changeReverbType(-1)}>
                    <path d="M8 12L14 6V18L8 12Z"></path>
                </ReverbPickerArrowSVG>

                <ReverbPickerText>{reverbArray[tabsInfoSelector[toggleSelector.fixtureTab].filters.reverb.type].slice(0, reverbArray[tabsInfoSelector[toggleSelector.fixtureTab].filters.reverb.type].length - 4)}</ReverbPickerText>

                <ReverbPickerArrowSVG viewBox="0 0 24 24" onClick={() => changeReverbType(1)}>
                    <path d="M16 12L10 18V6L16 12Z"></path>
                </ReverbPickerArrowSVG>
            </ReverbPickerContainer>

            <SequencerReverbFXFaderContainer>
                <SequencerFXFader title="Dry" value={tabsInfoSelector[toggleSelector.fixtureTab].filters.reverb.dry * 100} onChange={(e:ChangeEvent) => dispatch(setDryReverb({
                    tabIndex:toggleSelector.fixtureTab,
                    value:Number((e.target as HTMLInputElement).value) / 100
                    }))} index={toggleSelector.fixtureTab}/>

                <SequencerFXFader title="Wet" value={tabsInfoSelector[toggleSelector.fixtureTab].filters.reverb.wet * 100} onChange={(e:ChangeEvent) => dispatch(setWetReverb({
                    tabIndex:toggleSelector.fixtureTab,
                    value:Number((e.target as HTMLInputElement).value) / 100
                    }))} index={toggleSelector.fixtureTab}/>
            </SequencerReverbFXFaderContainer>
            
        </SequencerReverbFXContainer>
    )
}


export default SequencerReverbFX;