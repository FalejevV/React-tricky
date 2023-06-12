import SequencerSampleTab from "@/components/Sequencer/SequencerSampleTab/SequencerSampleTab";
import { tabInfo } from "@/store/sequencer/tabsInfo";
import { RootState, useAppSelector } from "@/store/store";
import { SequencerSideBarContainer } from "./SequencerSideBar.styled";
import { nanoid } from "nanoid";



function SequencerSideBar(){
    const tabInfoSelector = useAppSelector((state:RootState) => state.tabsInfo);


    function getSideBarTabs(){
        return tabInfoSelector.map((tab:tabInfo,index:number) => <SequencerSampleTab key={nanoid()} tabIndex={index} data={tab} />)
    }
    return(
        <SequencerSideBarContainer>
            {getSideBarTabs()}
        </SequencerSideBarContainer>
    )
}


export default SequencerSideBar;