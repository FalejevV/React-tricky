import { SequencerFXItemCheckbox, SequencerFXItemHeader, SequencerFXItemTitle } from "@/layout/SequencerFXTab/SequencerFXTab.styled";
import SequencerFXFader from "../SequencerFXFader.tsx/SequencerFXFader";
import { SequencerPanFXContainer, SequencerPanFXFaderContainer } from "./SequencerPanFX.styled";
import { ChangeEvent } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { setPanValue } from "@/store/sequencer/tabsInfo";


function SequencerPanFX(){
    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo);
    const toggleSelector = useAppSelector((state:RootState) => state.toggles);
    const dispatch = useAppDispatch();
    return(

        <SequencerPanFXContainer>
            <SequencerFXItemHeader>
                <SequencerFXItemTitle>Pan</SequencerFXItemTitle>
            </SequencerFXItemHeader>
            
            <SequencerPanFXFaderContainer>
                <SequencerFXFader value={tabsInfoSelector[toggleSelector.fixtureTab].filters.pan.value} title={""}  onChange={(e:ChangeEvent) => dispatch(setPanValue({
                    tabIndex:toggleSelector.fixtureTab,
                    value:Number((e.target as HTMLInputElement).value)
                    }))} index={toggleSelector.fixtureTab}/>
            </SequencerPanFXFaderContainer>
         </SequencerPanFXContainer>
    )
}

export default SequencerPanFX;