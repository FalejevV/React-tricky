import BnbRegionList from "../BnbRegionList/BnbRegionList";
import {BnbRegionPickerContainer, BnbRegionPickerGrid, BnbRegionPickerTitle } from "./BnbRegionPicker.styled";

function BnbRegionPicker(props:{
    regionPicked:string,
    setRegionPicked:Function,
    setStayPick:Function,
}){

    function selectRegion(region:string){
        if(props.regionPicked !== region){
            props.setRegionPicked(region);
            props.setStayPick(2);
        }
    }
    return(
        <BnbRegionPickerContainer>
            <BnbRegionPickerTitle>Search by region</BnbRegionPickerTitle>
            <BnbRegionPickerGrid>
                <BnbRegionList regionPicked={props.regionPicked} selectRegion={selectRegion} />
            </BnbRegionPickerGrid>
        </BnbRegionPickerContainer>
    )
}

export default BnbRegionPicker;