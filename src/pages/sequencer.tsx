import SequencerSideBar from "@/layout/SequencerSideBar/SequencerSideBar";
import SequencerTopBar from "@/layout/SequencerTopBar/SequencerTopBar";
import SequencerTracks from "@/layout/SequencerTracks/SequencerTracks";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { SequencerContainer, SequencerWorkSpace } from "@/styles/sequencer.styled";
import { useEffect, useMemo, useState } from "react";
import { sampleTab, sampleTabData } from "../../interface";
import { setLoad, setPlay } from "@/store/sequencer/toggles";
import SequencerBottomBar from "@/layout/SequencerBottomBar/SequencerBottomBar";
import initAll from "@/components/Sequencer/Filters";


let startDelay = 1000;

export function calculateBPMtoMS(bpm:number){
    return 60000 / bpm / 4;
}

function Sequencer(){
    const sampleTabsSelector = useAppSelector((state:RootState) => state.sampleTabs);
    const togglesSelector = useAppSelector((state:RootState) => state.toggles);
    const tabsInfoSelector = useAppSelector((state:RootState) => state.tabsInfo);
    const [audioTimeouts, setAudioTimeouts] = useState<NodeJS.Timeout[]>([]);
    const [audioPlaybacks,setAudioPlaybacks] = useState<HTMLAudioElement[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let endPlaybackReset;
        if(togglesSelector.load){
            let timeoutArray:NodeJS.Timeout[]= [];
            let lag = new Date().getTime();
            try{
            sampleTabsSelector.forEach((tabsArray:sampleTab,index:number) => {
                if(!tabsInfoSelector[index].active) return;
                if(tabsInfoSelector[index].file.trim() === "") return;

                
                tabsArray.tabs.forEach((tab:sampleTabData) => {
                    let endTimeout;
                    let audioClone = initAll(tabsInfoSelector[index].file, tabsInfoSelector[index].filters);
                    let startTimeout = setTimeout(() => {
                        audioClone.volume = tabsInfoSelector[index].volume;
                        audioClone.play();
                        setAudioPlaybacks(prev => [...prev,audioClone])
                        endTimeout = setTimeout(() => {
                            try{
                            audioClone.pause();
                            audioClone.currentTime = 0;
                            }catch{}
                        }, (tab.to - tab.from + 1) * calculateBPMtoMS(togglesSelector.speed))
                    },tab.from * calculateBPMtoMS(togglesSelector.speed) + startDelay)
                    timeoutArray.push(startTimeout);
                })
                setAudioTimeouts(timeoutArray);
            })
            
            setTimeout(() => {
                dispatch(setPlay(true))
            },new Date().getTime() - lag + startDelay);
            endPlaybackReset = setTimeout(() => {
                dispatch(setPlay(false));
                dispatch(setLoad(false));
            },new Date().getTime() - lag + (calculateBPMtoMS(togglesSelector.speed) * 64) + startDelay);
            
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

        return clearTimeout(endPlaybackReset);
    }, [togglesSelector.load]);
    
    const memo = useMemo(() => {
        return(
            <SequencerContainer>
                <SequencerTopBar/>
                <SequencerWorkSpace>
                    <SequencerSideBar />
                    <SequencerTracks />
                </SequencerWorkSpace>
                <SequencerBottomBar />
            </SequencerContainer>
        )
    },[]);
    return(
        <>
            {memo}
        </>
    )
}

export default Sequencer;