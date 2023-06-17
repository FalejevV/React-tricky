import SequencrSampleRow from "@/components/Sequencer/SequencerSampleRow/SequencerSampleRow";
import { SequencerFourDividerDarkener, SequencerTracksContainer, SequencerTracksOutline, SequencerVerticalDivider } from "./SequencerTracks.styled";
import { nanoid } from "nanoid";
import { useState } from "react";
import SequencerPlayLineIndicator from "@/components/Sequencer/SequencerPlayLineIndicator/SequencerPlayLineIndicator";
import { RootState, useAppSelector } from "@/store/store";
import { calculateBPMtoMS } from "@/pages/sequencer";

let lineColors = [
    "#142e2e",
    "#2e4f4f78",
    "#2e4f4f",
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
    const togglesSelector = useAppSelector((state:RootState) => state.toggles);

    function trackLinePainter(){
        let lineArray = [];
        for(let i = 0; i <= 64; i++){
            if(i % 8 === 0 || i === 0){
                lineArray.push(
                    <SequencerVerticalDivider key={nanoid()} color={lineColors[0]}>
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
            {togglesSelector.play && <SequencerPlayLineIndicator speed={calculateBPMtoMS(togglesSelector.speed)} />}

            <SequencerFourDividerDarkener />
            <SequencerFourDividerDarkener left="993px"/>

            <SequencerTracksOutline>
                {trackLinePainter()}
            </SequencerTracksOutline>
            
            <SequencrSampleRow id={0} />
            <SequencrSampleRow id={1} darker/>
            <SequencrSampleRow id={2}/>
            <SequencrSampleRow id={3} darker/>
            <SequencrSampleRow id={4}/>
            <SequencrSampleRow id={5} darker/>
        </SequencerTracksContainer>
    )
}


export default SequencerTracks;