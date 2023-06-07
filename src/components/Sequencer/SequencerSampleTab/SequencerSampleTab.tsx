import { tabInfo } from "@/store/sequencer/tabsInfo";
import { SequencerSampleTabContainer, SequencerSampleTabTopBar } from "./SequencerSampleTab.styled";


function SequencerSampleTab(props:{
    data:tabInfo,
}){
    return(
        <SequencerSampleTabContainer color={props.data.color}>
            <SequencerSampleTabTopBar color={props.data.color}>
                
            </SequencerSampleTabTopBar>
        </SequencerSampleTabContainer>
    )
}

export default SequencerSampleTab;