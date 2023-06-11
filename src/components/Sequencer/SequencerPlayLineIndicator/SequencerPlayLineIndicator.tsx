import { SequencerPlayLineIndicatorContainer } from "./SequencerPlayLineIndicator.styled";


function SequencerPlayLineIndicator(props:{
    speed:number,
}){
    return(
        <SequencerPlayLineIndicatorContainer speed={props.speed}>
            
        </SequencerPlayLineIndicatorContainer>
    )
}


export default SequencerPlayLineIndicator;