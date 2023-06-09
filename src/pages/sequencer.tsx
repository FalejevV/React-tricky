import SequencerSideBar from "@/layout/SequencerSideBar/SequencerSideBar";
import SequencerTopBar from "@/layout/SequencerTopBar/SequencerTopBar";
import SequencerTracks from "@/layout/SequencerTracks/SequencerTracks";
import { RootState, useAppSelector } from "@/store/store";
import { SequencerContainer, SequencerWorkSpace } from "@/styles/sequencer.styled";
import { useEffect } from "react";
import { sampleTab, sampleTabData } from "../../interface";

function Sequencer(){
    const sampleTabsSelector = useAppSelector((state:RootState) => state.sampleTabs);
    const togglesSelector = useAppSelector((state:RootState) => state.toggles);

    useEffect(() => {
        if(togglesSelector.play){
            let audio = new Audio('/sequencer/TestKick.wav');
            sampleTabsSelector.forEach((tabsArray:sampleTab) => {
                tabsArray.tabs.forEach((tab:sampleTabData) => {
                    setTimeout(() => {
                        let audioClone = audio.cloneNode(true) as HTMLAudioElement;
                        audioClone.volume = 0.35;
                        audioClone.play();
                        setTimeout(() => {
                            audioClone.pause();
                            audioClone.currentTime = 0;
                        }, tab.to * 250 < 250 ? 250 : tab.to * 250)
                    },tab.from * 250)
                })
            })
            
        }
    }, [togglesSelector.play]);
    return(
        <SequencerContainer>
            <SequencerTopBar/>
            <SequencerWorkSpace>
                <SequencerSideBar />
                <SequencerTracks />
            </SequencerWorkSpace>
        </SequencerContainer>
    )
}

export default Sequencer;