import { useState } from "react";
import { BnbMobileDatePickContainer, BnbMobileDropdownList, BnbMobileGuestPickContainer, BnbMobileLargeMenuContainer, BnbMobileRegionFlex, BnbMobileRegionPickContainer} from "./BnbMobileLargeMenu.styled";
import BnbMobileLargeMenuHeader from "../BnbMobileLargeMenuHeader/BnbMobileLargeMenuHeader";
import BnbMobileDropdownItem from "../BnbMobileDropdownItem/BnbMobileDropdownItem";
import BnbRegionList from "../../BnbRegionList/BnbRegionList";
import BnbMobileFakeRegionSearch from "../BnbMobileFakeRegionSearch/BnbMobileFakeRegionSearch";
import { BnbDatePickerTypeContainer, DateTypeButton } from "../../BnbDatePicker/BnbDatePicker.styled";



function BnbMobileLargeMenu(props:{
    menuToggle:boolean,
    setMenuToggle:Function,
    stayPick:number,
    setStayPick:Function,
    dateType:number,
    setDateType:Function,
}){

    const [menuType, setMenuType] = useState(0);
    const [regionPicked, setRegionPicked] = useState("");
    function selectRegion(region:string){
        if(regionPicked !== region){
            setRegionPicked(region);
            setTimeout(() => {
                props.setStayPick(2);
            },0)
        }
    }

    return(
        <BnbMobileLargeMenuContainer menuToggle={props.menuToggle}>
            <BnbMobileLargeMenuHeader setMenuType={setMenuType} setMenuToggle={props.setMenuToggle} menuToggle={props.menuToggle} menuType={menuType} />
            <BnbMobileDropdownList>
                
                <BnbMobileDropdownItem fadeDelay="0.3s" i={1} stayPick={props.stayPick} setStayPick={props.setStayPick} title={"Where"} titleActive={"Where to?"} value={regionPicked !== "" ? regionPicked : "I'm flexible"}>
                    <BnbMobileRegionPickContainer>
                        <BnbMobileFakeRegionSearch />
                        <BnbMobileRegionFlex>
                            <BnbRegionList selectRegion={selectRegion} regionPicked={regionPicked} />
                        </BnbMobileRegionFlex>
                    </BnbMobileRegionPickContainer>
                </BnbMobileDropdownItem>

                <BnbMobileDropdownItem fadeDelay="0.35s" i={2} stayPick={props.stayPick} setStayPick={props.setStayPick} title={"When"} titleActive={"When's your trip?"} value={"Add dates"} downSharpBorder>
                    <BnbMobileDatePickContainer>
                        <BnbDatePickerTypeContainer>
                            <DateTypeButton onClick={() => props.setDateType(0)} toggle={props.dateType === 0}>Choose dates</DateTypeButton>
                            <DateTypeButton onClick={() => {props.setDateType(1); props.setStayPick(2)}} toggle={props.dateType === 1}>Flexible dates</DateTypeButton>
                        </BnbDatePickerTypeContainer>
                    </BnbMobileDatePickContainer>
                </BnbMobileDropdownItem>


                <BnbMobileDropdownItem fadeDelay="0.4s" i={3} stayPick={props.stayPick} setStayPick={props.setStayPick} title={"Who"} titleActive={""} value={"Add guests"}>
                    <BnbMobileGuestPickContainer>
                    </BnbMobileGuestPickContainer>
                </BnbMobileDropdownItem>

                
            </BnbMobileDropdownList>
        </BnbMobileLargeMenuContainer>
    )
}



export default BnbMobileLargeMenu;