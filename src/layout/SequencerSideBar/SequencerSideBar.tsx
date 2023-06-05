import SequencerSampleTab from "@/components/Sequencer/SequencerSampleTab/SequencerSampleTab";
import { SequencerSideBarContainer } from "./SequencerSideBar.styled";



function SequencerSideBar(){
    return(
        <SequencerSideBarContainer>
            <SequencerSampleTab />
        </SequencerSideBarContainer>
    )
}


export default SequencerSideBar;