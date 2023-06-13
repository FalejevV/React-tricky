import SequencerFaders from "../SequencerFaders/SequencerFaders";
import { SequencerBottomBarContainer } from "./SequencerBottomBar.styled";


function SequencerBottomBar(){
    return(
        <SequencerBottomBarContainer>
            <SequencerFaders />
        </SequencerBottomBarContainer>
    )
}


export default SequencerBottomBar;