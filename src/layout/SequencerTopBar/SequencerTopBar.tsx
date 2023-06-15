import SequencerTabButton from "@/components/Sequencer/SequencerTabButton/SequencerTabButton";
import { SequencerTopBarContainer, SequencerTopBarToolsContainer, SequencerTopBarLowerContainer, SequencerTopBarSideContainer, SequencerTopBarUpperContainer } from "./SequencerTopBar.styled";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { setCursorType, setLoad, setPlay } from "@/store/sequencer/toggles";



function SequencerTopBar(){
    const dispatch = useAppDispatch();
    const toggledSelector = useAppSelector((state:RootState) => state.toggles);

    function stopButtonLogic(){
        if(toggledSelector.play){
            dispatch(setLoad(false))
        }
    }
    return(
        <SequencerTopBarContainer>

            <SequencerTopBarSideContainer>
                
            </SequencerTopBarSideContainer>
            
            <SequencerTopBarToolsContainer>

                <SequencerTopBarUpperContainer>
                    <SequencerTabButton action={() => {dispatch(setLoad(true))}} toggled={toggledSelector.load} title={""} icon={"/sequencer/play.svg"} />
                    <SequencerTabButton action={stopButtonLogic} toggled={!toggledSelector.load} title={""} icon={"/sequencer/stop.svg"} />
                </SequencerTopBarUpperContainer>

                <SequencerTopBarLowerContainer>
                    <SequencerTabButton action={() => {dispatch(setCursorType(0))}} toggled={toggledSelector.cursorType === 0} title={""} icon={"/sequencer/drag.svg"} />
                    <SequencerTabButton action={() => {dispatch(setCursorType(1))}} toggled={toggledSelector.cursorType === 1} title={""} icon={"/sequencer/delete.svg"} />
                </SequencerTopBarLowerContainer>

            </SequencerTopBarToolsContainer>
        </SequencerTopBarContainer>
    )
}

export default SequencerTopBar;