import SequencerTabButton from "@/components/Sequencer/SequencerTabButton/SequencerTabButton";
import { SequencerBottomBarToolsContainer, SequencerTopBarContainer } from "./SequencerTopBar.styled";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { setCursorType } from "@/store/sequencer/toggles";



function SequencerTopBar(){
    const dispatch = useAppDispatch();
    const toggledSelector = useAppSelector((state:RootState) => state.toggles);

    return(
        <SequencerTopBarContainer>
            <SequencerBottomBarToolsContainer>
                <SequencerTabButton action={() => {dispatch(setCursorType(0))}} toggled={toggledSelector.cursorType === 0} title={""} icon={"/sequencer/drag.svg"} />
                <SequencerTabButton action={() => {dispatch(setCursorType(1))}} toggled={toggledSelector.cursorType === 1} title={""} icon={"/sequencer/delete.svg"} />
            </SequencerBottomBarToolsContainer>
        </SequencerTopBarContainer>
    )
}

export default SequencerTopBar;