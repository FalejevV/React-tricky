import { SequencerSampleBlock, SequencerSampleRowContainer } from "./SequencerSampleRow.styled";



function SequencrSampleRow(props:{
    darker?:boolean,
}){
    function blankBlocksPainter(){
        let array = [];
        for(let i = 0; i <= 63; i++){
            array.push(<SequencerSampleBlock />)
        }
        return array;
    }
    return(
        <SequencerSampleRowContainer darker={props.darker}>
            {blankBlocksPainter()}
        </SequencerSampleRowContainer>
    )
}


export default SequencrSampleRow;