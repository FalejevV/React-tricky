import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { SequencerSampleBlock, SequencerSampleBlockContainer, SequencerSampleRowContainer, SequencerSampleTabItem, SequencerSampleTabResizeElementLeft, SequencerSampleTabResizeElementRight } from "./SequencerSampleRow.styled";
import { addTab, removeTab } from "@/store/sequencer/sampleTabs";
import { sampleTabData } from "../../../../interface";
import { JsxElement } from "typescript";
import { nanoid } from "nanoid";



function SequencrSampleRow(props:{
    darker?:boolean,
    id:number,
}){
    const dispatch = useAppDispatch();
    const tabsSelector = useAppSelector((state:RootState) => state.sampleTabs[props.id]);

    function blankBlocksPainter(){
        let array = [];
        for(let i = 0; i <= 63; i++){
            array.push(<SequencerSampleBlock key={i} onClick={() => {dispatch(addTab({
                sampleId: props.id || 0,
                start: i
            }))}}/>)
        }
        return array;
    }

    function tabsPainter(){
        let tabArray:JSX.Element[] = [];
        tabsSelector.tabs.forEach((tab:sampleTabData) => {
            tabArray.push(
            <SequencerSampleTabItem key={tab.id} onClick={() => dispatch(removeTab({
                sampleId: props.id,
                tabId: tab.id
            }))} from={tab.from} to={tab.to}>
                <SequencerSampleTabResizeElementLeft />
                <SequencerSampleTabResizeElementRight />
            </SequencerSampleTabItem>    
            )
        });
        return tabArray;
    }
    return(
        <SequencerSampleRowContainer darker={props.darker}>
            <SequencerSampleBlockContainer>
                {blankBlocksPainter()}
                {tabsPainter()}
            </SequencerSampleBlockContainer>
        </SequencerSampleRowContainer>
    )
}


export default SequencrSampleRow;