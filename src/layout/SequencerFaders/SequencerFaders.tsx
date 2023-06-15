import SequencerFader from "@/components/Sequencer/SequencerFader/SequencerFader";
import { SequencerFaderOverlayIcon, SequencerFadersContainer, SequencerFadersOverlayBlock } from "./SequencerFaders.styled";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { setLoad } from "@/store/sequencer/toggles";



function SequencerFaders(){
    const togglesSelector = useAppSelector((state:RootState) => state.toggles);
    const dispatch = useAppDispatch();
    return(
        <SequencerFadersContainer>
            <SequencerFadersOverlayBlock toggle={togglesSelector.load}>
                <SequencerFaderOverlayIcon viewBox="0 0 24 24">
                    <path d="M6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"></path>
                </SequencerFaderOverlayIcon>
            </SequencerFadersOverlayBlock>

            <SequencerFader index={0}/>
            <SequencerFader index={1}/>
            <SequencerFader index={2}/>
            <SequencerFader index={3}/>
            <SequencerFader index={4}/>
            <SequencerFader index={5}/>

        </SequencerFadersContainer>
    )
}


export default SequencerFaders;