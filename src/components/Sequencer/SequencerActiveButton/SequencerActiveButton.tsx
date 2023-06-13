import { SequencerSampleActiveButton } from "./SequencerActiveButton.styled";



function SequencerActiveButton(props:{
    active:boolean,
    onClick:Function
}){
    return(
        <SequencerSampleActiveButton active={props.active} onClick={() => props.onClick()} />
    )
}


export default SequencerActiveButton;