import SequencrSampleRow from "@/components/Sequencer/SequencerSampleRow/SequencerSampleRow";
import { SequencerTracksContainer, SequencerTracksOutline, SequencerVerticalDivider, SequencerVerticalLineText } from "./SequencerTracks.styled";
import { nanoid } from "nanoid";

let lineColors = [
    "#000000",
    "#666666",
    "#464646",
]

function getLineColor(index:number):string{
    if((index) % 8 !== 4){
        return lineColors[1];
    }
    if((index) % 8 === 4){
        return lineColors[2];
    }
    return lineColors[0];
}

function SequencerTracks(){

    function trackLinePainter(){
        let lineArray = [];
        for(let i = 0; i <= 64; i++){
            if(i % 8 === 0 || i === 0){
                lineArray.push(
                    <SequencerVerticalDivider key={nanoid()} color={lineColors[0]}>
                        <SequencerVerticalLineText>{i === 0 ? 0 : i/8}</SequencerVerticalLineText>
                    </SequencerVerticalDivider>
                )
            }else{
                lineArray.push(<SequencerVerticalDivider key={nanoid()} color={getLineColor(i)}/>)
            }
        }
        return lineArray;
    }

    return(
        <SequencerTracksContainer>
            <SequencerTracksOutline>
                {trackLinePainter()}
            </SequencerTracksOutline>
            
            <SequencrSampleRow id={0}/>
            <SequencrSampleRow id={1} darker/>
            <SequencrSampleRow id={2}/>
            <SequencrSampleRow id={3} darker/>
            <SequencrSampleRow id={4}/>
            <SequencrSampleRow id={5} darker/>
        </SequencerTracksContainer>
    )
}


export default SequencerTracks;