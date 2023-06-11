import { RootState, useAppSelector } from "@/store/store";
import { sampleTabData } from "../../../../interface";
import { SequencerSampleTabItemContainer, SequencerSampleTabItemResizeElementLeft, SequencerSampleTabItemResizeElementRight, SequencerSampleTabItemTitle } from "./SequencerSampleTabItem.styled";




function SequencerSampleTabItem(props:{
    tab:sampleTabData,
    removeTabAction:Function,
    targetAssignHandler:Function,
    moveTarget:sampleTabData | null,
    dragTarget:{
        id:string,
        from:number,
        to:number,
        dragSide: "L" | "R"
    } | null,
    tabId:number
}){
    const togglesSelector = useAppSelector((state:RootState) => state.toggles);
    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo[props.tabId]);
    return(
        <SequencerSampleTabItemContainer cursor={togglesSelector.cursorType}
                                    isBeingDraged={props.dragTarget !== null} 
                                    color={tabsInfoSelector.color} 
                                    draggable={false} id={props.tab.id} 
                                    onClick={() => props.removeTabAction(props.tab.id)} 
                                    from={props.tab.from} 
                                    to={props.tab.to}
                                    onMouseDown={(e) => props.targetAssignHandler(e,"move",props.tab)}
                                    >
                <SequencerSampleTabItemTitle>{tabsInfoSelector.title}</SequencerSampleTabItemTitle>
                <SequencerSampleTabItemResizeElementLeft cursorType={props.moveTarget !== null ? 0 : togglesSelector.cursorType} draggable={false} onMouseDown={(e) => props.targetAssignHandler(e,"drag",props.tab,"L")}/>
                <SequencerSampleTabItemResizeElementRight cursorType={props.moveTarget !== null ? 0 : togglesSelector.cursorType} onMouseDown={(e) => props.targetAssignHandler(e,"drag",props.tab,"R")}/>
            </SequencerSampleTabItemContainer>    
    )
}


export default SequencerSampleTabItem;