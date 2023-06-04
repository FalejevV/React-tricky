import { SequencerTracksContainer, SequencerTracksOutline, SequencerVerticalDivider, SequencerVerticalLineText } from "./SequencerTracks.styled";

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
                    <SequencerVerticalDivider color={lineColors[0]}>
                        <SequencerVerticalLineText>{i === 0 ? 0 : i/8}</SequencerVerticalLineText>
                    </SequencerVerticalDivider>
                )
            }else{
                lineArray.push(<SequencerVerticalDivider color={getLineColor(i)}/>)
            }
        }
        return lineArray;
    }

    return(
        <SequencerTracksContainer>
            <SequencerTracksOutline>
                {trackLinePainter()}
            </SequencerTracksOutline>
        </SequencerTracksContainer>
    )
}


export default SequencerTracks;