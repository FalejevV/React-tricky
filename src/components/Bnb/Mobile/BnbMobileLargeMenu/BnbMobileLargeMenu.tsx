import { useState } from "react";
import { BnbMobileDatePickContainer, BnbMobileDropdownList, BnbMobileGuestPickContainer, BnbMobileLargeMenuContainer, BnbMobileRegionFlex, BnbMobileRegionPickContainer} from "./BnbMobileLargeMenu.styled";
import BnbMobileLargeMenuHeader from "../BnbMobileLargeMenuHeader/BnbMobileLargeMenuHeader";
import BnbMobileDropdownItem from "../BnbMobileDropdownItem/BnbMobileDropdownItem";
import BnbRegionList from "../../BnbRegionList/BnbRegionList";



function BnbMobileLargeMenu(props:{
    menuToggle:boolean,
    setMenuToggle:Function,
    stayPick:number,
    setStayPick:Function,
}){

    const [menuType, setMenuType] = useState(0);
    const [regionPicked, setRegionPicked] = useState("");

    function selectRegion(region:string){
        if(regionPicked !== region){
            setRegionPicked(region);
            props.setStayPick(2);
        }
    }
    return(
        <BnbMobileLargeMenuContainer menuToggle={props.menuToggle}>
            <BnbMobileLargeMenuHeader setMenuType={setMenuType} setMenuToggle={props.setMenuToggle} menuToggle={props.menuToggle} menuType={menuType} />
            <BnbMobileDropdownList>
                <BnbMobileDropdownItem i={0} stayPick={props.stayPick} setStayPick={props.setStayPick} title={"Where"} titleActive={"Where to?"} value={regionPicked !== "" ? regionPicked : "I'm flexible"}>
                    <BnbMobileRegionPickContainer>
                        <BnbMobileRegionFlex>
                            <BnbRegionList selectRegion={selectRegion} regionPicked={regionPicked} />
                        </BnbMobileRegionFlex>
                    </BnbMobileRegionPickContainer>
                </BnbMobileDropdownItem>

                <BnbMobileDropdownItem i={1} stayPick={props.stayPick} setStayPick={props.setStayPick} title={"When"} titleActive={""} value={"Add dates"} downSharpBorder>
                    <BnbMobileDatePickContainer>
                    </BnbMobileDatePickContainer>
                </BnbMobileDropdownItem>


                <BnbMobileDropdownItem i={2} stayPick={props.stayPick} setStayPick={props.setStayPick} title={"Who"} titleActive={""} value={"Add guests"}>
                    <BnbMobileGuestPickContainer>
                    </BnbMobileGuestPickContainer>
                </BnbMobileDropdownItem>

                
            </BnbMobileDropdownList>
        </BnbMobileLargeMenuContainer>
    )
}



export default BnbMobileLargeMenu;