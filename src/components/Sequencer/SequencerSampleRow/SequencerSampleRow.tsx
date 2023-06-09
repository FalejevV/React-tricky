import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { SequencerSampleBlock, SequencerSampleBlockContainer, SequencerSampleRowContainer, SequencerSampleTabItem, SequencerSampleTabResizeElementLeft, SequencerSampleTabResizeElementRight } from "./SequencerSampleRow.styled";
import { addTab, changeTab, removeTab } from "@/store/sequencer/sampleTabs";
import { sampleTabData } from "../../../../interface";
import { useState } from "react";


function SequencrSampleRow(props:{
    darker?:boolean,
    id:number,
}){
    const dispatch = useAppDispatch();
    const tabsSelector = useAppSelector((state:RootState) => state.sampleTabs[props.id]);
    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo[props.id]);
    const togglesSelector = useAppSelector((state:RootState) => state.toggles);
    
    const [dragTarget, setDragTarget] = useState<{
        id:string,
        from:number,
        to:number,
        dragSide: "L" | "R"
    } | null>(null);
    const [moveTarget, setMoveTarget] = useState<{
        id:string,
        from:number,
        to:number,
    } | null>(null);

    function clearTargets(){
        setMoveTarget(null);
        setDragTarget(null);
    }

    function targetAssignHandler(e:React.MouseEvent, action:string,tab:{
        id:string,
        from:number,
        to:number,
    }, direction?:"L" | "R"){
        if(togglesSelector.cursorType === 1) return;
        
        if(action === "move"){
            let target = e.target as HTMLElement;
            if(target.id !== ""){
                setMoveTarget({
                    ...tab
                })
            }
        }else{
            setDragTarget({
                ...tab,
                dragSide: direction || "L"
            })
        }
    }

    function blankBlocksPainter(){
        let array = [];
        for(let i = 0; i <= 63; i++){
            array.push(<SequencerSampleBlock interactable={dragTarget === null && moveTarget === null} draggable={false} key={i} onClick={() => addTabAction(i)}/>)
        }
        return array;
    }

    function canBeDragged(from:number,to:number){
        if(dragTarget){
            if(dragTarget.from + from > dragTarget.to + to) return false;
            let targetFrom = dragTarget.from + from;
            let targetTo = dragTarget.to + to;
            let canMove = true;
            tabsSelector.tabs.forEach((tab:sampleTabData) => {
                if(tab.id === dragTarget.id) return;
                if(targetTo > tab.to && targetFrom <= tab.from) canMove = false;
                if(targetTo > tab.to && targetFrom <= tab.to) canMove = false;
                if(targetTo >= tab.from && targetFrom <= tab.to) canMove = false;
            });
            return canMove;
        }
    };

    function canBeMoved(from:number,to:number){
        if(moveTarget){
            if(moveTarget.from + from > moveTarget.to + to) return false;
            let targetFrom = moveTarget.from + from;
            let targetTo = moveTarget.to + to;
            let canMove = true;
            tabsSelector.tabs.forEach((tab:sampleTabData) => {
                if(tab.id === moveTarget.id) return;
                if(targetTo > tab.to && targetFrom <= tab.from) canMove = false;
                if(targetTo > tab.to && targetFrom <= tab.to) canMove = false;
                if(targetTo >= tab.from && targetFrom <= tab.to) canMove = false;
            });
            return canMove;
        }
    };

    function dragListener(e:React.MouseEvent){
        if(dragTarget){
            const target = document.getElementById(dragTarget.id);
            if(target){
                // Drag left side to the left
                if(target.getBoundingClientRect().left - 20 > e.clientX && dragTarget.dragSide === "L"){
                    if(!canBeDragged(-1, 0)) return;
                    dispatch(changeTab({
                        sampleId: props.id,
                        tabData: {
                            from: dragTarget.from - 1,
                            to: dragTarget.to,
                            id: dragTarget.id
                        }
                    }));
                    setDragTarget(prev => {
                        if(prev){
                            return {
                                ...prev,
                                from: prev.from - 1
                            }
                        }else{
                            return prev;
                        }
                    })
                    return;
                }
                // Drag left side to the right
                if(target.getBoundingClientRect().left + 20 < e.clientX && dragTarget.dragSide === "L"){
                    if(!canBeDragged(1, 0)) return;
                    dispatch(changeTab({
                         sampleId: props.id,
                        tabData: {
                            from: dragTarget.from + 1,
                            to: dragTarget.to,
                            id: dragTarget.id
                        }
                    }));
                    setDragTarget(prev => {
                        if(prev){
                            return {
                                ...prev,
                                from: prev.from + 1
                            }
                        }else{
                            return prev;
                        }
                    });
                return;
                }
                // Drag left side to the left
                if(target.getBoundingClientRect().right + 20 < e.clientX && dragTarget.dragSide === "R"){
                    if(!canBeDragged(0, 1)) return;
                    dispatch(changeTab({
                        sampleId: props.id,
                        tabData: {
                            from: dragTarget.from,
                            to: dragTarget.to + 1,
                            id: dragTarget.id
                        }
                    }));
                    setDragTarget(prev => {
                        if(prev){
                            return {
                                ...prev,
                                to: prev.to + 1
                            }
                        }else{
                            return prev;
                        }
                    })
                    return;
                }
                // Drag right side to the right
                if(target.getBoundingClientRect().right - 20 > e.clientX && dragTarget.dragSide === "R"){
                    if(!canBeDragged(0, -1)) return;
                    dispatch(changeTab({
                        sampleId: props.id,
                        tabData: {
                            from: dragTarget.from,
                            to: dragTarget.to - 1,
                            id: dragTarget.id
                        }
                    }));
                    setDragTarget(prev => {
                        if(prev){
                            return {
                                ...prev,
                                to: prev.to - 1
                            }
                        }else{
                            return prev;
                        }
                    })
                }
            }
        }
    }

    function moveListener(e:React.MouseEvent){
        if(moveTarget){
            const target = document.getElementById(moveTarget.id);
            if(target){
                if(target.getBoundingClientRect().left - 20 > e.clientX){
                    if(!canBeMoved(-1,-1)) return;

                    dispatch(changeTab({
                        sampleId: props.id,
                        tabData: {
                            from: moveTarget.from - 1,
                            to: moveTarget.to - 1,
                            id: moveTarget.id
                        }
                    }));
                    setMoveTarget(prev => {
                        if(prev){
                            return {
                                ...prev,
                                from: prev.from - 1,
                                to:prev.to - 1
                            }
                        }else{
                            return prev;
                        }
                    })
                    return;
                }
                if(target.getBoundingClientRect().right + 20 < e.clientX){
                    if(!canBeMoved(1,1)) return;

                    dispatch(changeTab({
                        sampleId: props.id,
                        tabData: {
                            from: moveTarget.from + 1,
                            to: moveTarget.to + 1,
                            id: moveTarget.id
                        }
                    }));
                    setMoveTarget(prev => {
                        if(prev){
                            return {
                                ...prev,
                                from: prev.from + 1,
                                to:prev.to + 1
                            }
                        }else{
                            return prev;
                        }
                    })
                    return;
                }
            }
        }
    }

    function removeTabAction(tabId:string){
        if(togglesSelector.cursorType === 1){
            dispatch(removeTab({
                sampleId: props.id,
                tabId: tabId
            }))
        }
    }

    
    function addTabAction(index:number){
        if(dragTarget) return;
        dispatch(addTab({
            sampleId: props.id || 0,
            start: index
        }))
    }

    function tabsPainter(){
        let tabArray:JSX.Element[] = [];
        tabsSelector.tabs.forEach((tab:sampleTabData) => {
            tabArray.push(
            <SequencerSampleTabItem cursor={togglesSelector.cursorType}
                                    isBeingDraged={dragTarget !== null} 
                                    color={tabsInfoSelector.color} 
                                    draggable={false} id={tab.id} 
                                    key={tab.id} 
                                    onClick={() => removeTabAction(tab.id)} 
                                    from={tab.from} 
                                    to={tab.to}
                                    onMouseDown={(e) => targetAssignHandler(e,"move",tab)}
                                    >
                <SequencerSampleTabResizeElementLeft cursorType={moveTarget !== null ? 0 : togglesSelector.cursorType} draggable={false} onMouseDown={(e) => targetAssignHandler(e,"drag",tab,"L")}/>
                <SequencerSampleTabResizeElementRight cursorType={moveTarget !== null ? 0 : togglesSelector.cursorType} onMouseDown={(e) => targetAssignHandler(e,"drag",tab,"R")}/>
            </SequencerSampleTabItem>    
            )
        });
        return tabArray;
    }

    return(
        <SequencerSampleRowContainer onMouseMove={(e) => {dragListener(e), moveListener(e)}} onMouseLeave={clearTargets}  onMouseUp={clearTargets} darker={props.darker}>
            <SequencerSampleBlockContainer isBeingDraged={dragTarget !== null}>
                {blankBlocksPainter()}
                {tabsPainter()}
            </SequencerSampleBlockContainer>
        </SequencerSampleRowContainer>
    )
}


export default SequencrSampleRow;