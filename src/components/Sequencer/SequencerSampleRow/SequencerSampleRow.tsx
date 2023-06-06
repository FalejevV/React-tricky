import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { SequencerSampleBlock, SequencerSampleBlockContainer, SequencerSampleRowContainer, SequencerSampleTabItem, SequencerSampleTabResizeElementLeft, SequencerSampleTabResizeElementRight } from "./SequencerSampleRow.styled";
import { addTab, changeTab, removeTab } from "@/store/sequencer/sampleTabs";
import { sampleTabData } from "../../../../interface";
import { useState } from "react";
import { nanoid } from "nanoid";


function SequencrSampleRow(props:{
    darker?:boolean,
    id:number,
}){
    const dispatch = useAppDispatch();
    const tabsSelector = useAppSelector((state:RootState) => state.sampleTabs[props.id]);
    const [dragTarget, setDragTarget] = useState<{
        id:string,
        from:number,
        to:number,
        dragSide: "L" | "R"
    } | null>();
    function blankBlocksPainter(){
        let array = [];
        for(let i = 0; i <= 63; i++){
            array.push(<SequencerSampleBlock draggable={false} key={i} onClick={() => {dispatch(addTab({
                sampleId: props.id || 0,
                start: i
            }))}}/>)
        }
        return array;
    }

    function dragListener(e:React.MouseEvent){
        if(dragTarget){
            const target = document.getElementById(dragTarget.id);
            if(target){
                console.log(target.getBoundingClientRect().left);
                if(target.getBoundingClientRect().left - 20 > e.clientX && dragTarget.dragSide === "L"){
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
                }
                if(target.getBoundingClientRect().left + 20 < e.clientX && dragTarget.dragSide === "L"){
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
                        })
                }

                if(target.getBoundingClientRect().right + 20 < e.clientX && dragTarget.dragSide === "R"){
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
                }

                if(target.getBoundingClientRect().right - 20 > e.clientX && dragTarget.dragSide === "R"){
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

    function removeTabAction(tabId:string){
        if(dragTarget !== null){
            dispatch(removeTab({
                sampleId: props.id,
                tabId: tabId
            }))
        }
    }
    function tabsPainter(){
        let tabArray:JSX.Element[] = [];
        tabsSelector.tabs.forEach((tab:sampleTabData) => {
            tabArray.push(
            <SequencerSampleTabItem draggable={false} id={tab.id} key={tab.id} onClick={() => removeTabAction(tab.id)} from={tab.from} to={tab.to}>
                <SequencerSampleTabResizeElementLeft draggable={false} onMouseDown={(e) => setDragTarget({
                     id:tab.id,
                     from:tab.from,
                     to:tab.to,
                     dragSide: "L"
                })}/>
                <SequencerSampleTabResizeElementRight draggable={false} onMouseDown={(e) => setDragTarget({
                     id:tab.id,
                     from:tab.from,
                     to:tab.to,
                     dragSide: "R"
                })}/>
            </SequencerSampleTabItem>    
            )
        });
        return tabArray;
    }
    return(
        <SequencerSampleRowContainer onMouseMove={(e) => dragListener(e)} onMouseLeave={() => setDragTarget(null)}  onMouseUp={() => setDragTarget(null)} darker={props.darker}>
            <SequencerSampleBlockContainer>
                {blankBlocksPainter()}
                {tabsPainter()}
            </SequencerSampleBlockContainer>
        </SequencerSampleRowContainer>
    )
}


export default SequencrSampleRow;