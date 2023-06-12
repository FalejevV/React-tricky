import SequencerSideBar from "@/layout/SequencerSideBar/SequencerSideBar";
import SequencerTopBar from "@/layout/SequencerTopBar/SequencerTopBar";
import SequencerTracks from "@/layout/SequencerTracks/SequencerTracks";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { SequencerContainer, SequencerWorkSpace } from "@/styles/sequencer.styled";
import { useEffect, useState } from "react";
import { sampleTab, sampleTabData } from "../../interface";
import { setPlay } from "@/store/sequencer/toggles";

function Sequencer(){
    const sampleTabsSelector = useAppSelector((state:RootState) => state.sampleTabs);
    const togglesSelector = useAppSelector((state:RootState) => state.toggles);
    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo);
    const [audioTimeouts, setAudioTimeouts] = useState<NodeJS.Timeout[]>([]);
    const [audioPlaybacks,setAudioPlaybacks] = useState<HTMLAudioElement[]>([]);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(togglesSelector.load){
            let timeoutArray:NodeJS.Timeout[]= [];
            let lag = new Date().getTime();
            console.log(JSON.stringify(tabsInfoSelector));
            console.log(JSON.stringify(sampleTabsSelector));
            try{
            sampleTabsSelector.forEach((tabsArray:sampleTab,index:number) => {
                if(!tabsInfoSelector[index].active) return;
                if(tabsInfoSelector[index].file.trim() === "") return;
                let audio = new Audio(tabsInfoSelector[index].file);
                tabsArray.tabs.forEach((tab:sampleTabData) => {
                    let endTimeout;
                    let startTimeout = setTimeout(() => {
                        let audioClone = audio.cloneNode(true) as HTMLAudioElement;
                        audioClone.volume = 0.35;
                        audioClone.play();
                        setAudioPlaybacks(prev => [...prev,audioClone])
                        endTimeout = setTimeout(() => {
                            audioClone.pause();
                            audioClone.currentTime = 0;
                        }, (tab.to - tab.from + 1) * togglesSelector.speed)
                    },tab.from * togglesSelector.speed)
                    timeoutArray.push(startTimeout);
                })
                setAudioTimeouts(timeoutArray);
            })
            setTimeout(() => dispatch(setPlay(true)),new Date().getTime() - lag);
            }catch{
                // Problem with setTimeout. Just catching the error. Nothing else. Maybe ill change this later
            }
        }else{
            try{
            audioPlaybacks.forEach((playpack) =>{
                playpack.pause();
                playpack.currentTime = 0;
            });
            audioTimeouts.forEach(clearTimeout);
            setAudioPlaybacks([]);
            setAudioTimeouts([]);
            dispatch(setPlay(false));
            }catch{}
        }
    }, [togglesSelector.load]);
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