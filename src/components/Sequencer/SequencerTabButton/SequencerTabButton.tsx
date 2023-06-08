import { STBContainer, STBIcon } from "./SequencerTabButton.styled";



function SequencerTabButton(props:{
    title:string,
    icon:string,
    action:Function,
    toggled?:boolean
}){
    return (
        <STBContainer toggled={props.toggled || false} onClick={() => props.action()}>
            <STBIcon src={props.icon} />
        </STBContainer>
    )
}


export default SequencerTabButton;