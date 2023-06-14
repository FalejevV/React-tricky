import SequencerFXTab from "../SequencerFXTab/SequencerFXTab";
import SequencerFaders from "../SequencerFaders/SequencerFaders";
import { SequencerBottomBarContainer } from "./SequencerBottomBar.styled";


function SequencerBottomBar(){
    return(
        <SequencerBottomBarContainer>
            <SequencerFaders />
            <SequencerFXTab/>
        </SequencerBottomBarContainer>
    )
}


export default SequencerBottomBar;