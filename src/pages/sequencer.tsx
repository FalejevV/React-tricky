import SequencerSideBar from "@/layout/SequencerSideBar/SequencerSideBar";
import SequencerTopBar from "@/layout/SequencerTopBar/SequencerTopBar";
import SequencerTracks from "@/layout/SequencerTracks/SequencerTracks";
import { SequencerContainer, SequencerWorkSpace } from "@/styles/sequencer.styled";



function Sequencer(){
    return(
        <SequencerContainer>
            <SequencerTopBar/>
            <SequencerWorkSpace>
                <SequencerSideBar />
                <SequencerTracks />
            </SequencerWorkSpace>
        </SequencerContainer>
    )
}

export default Sequencer;