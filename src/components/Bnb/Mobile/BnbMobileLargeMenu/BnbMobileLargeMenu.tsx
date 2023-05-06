import { useEffect, useState } from "react";
import { BnbMobileDateBottomBarContainer, BnbMobileDateNextButton, BnbMobileDatePickContainer, BnbMobileDateSkipResetButton, BnbMobileDropdownList, BnbMobileGuestPickContainer, BnbMobileGuestPickTitle, BnbMobileLargeMenuContainer, BnbMobileRegionFlex, BnbMobileRegionPickContainer} from "./BnbMobileLargeMenu.styled";
import BnbMobileLargeMenuHeader from "../BnbMobileLargeMenuHeader/BnbMobileLargeMenuHeader";
import BnbMobileDropdownItem from "../BnbMobileDropdownItem/BnbMobileDropdownItem";
import BnbRegionList from "../../BnbRegionList/BnbRegionList";
import BnbMobileFakeRegionSearch from "../BnbMobileFakeRegionSearch/BnbMobileFakeRegionSearch";
import { BnbDatePickerTypeContainer, DateTypeButton } from "../../BnbDatePicker/BnbDatePicker.styled";
import { DatePick, FlexDate, Guests } from "../../../../../interface";
import BnbMobileExactDatePicker from "../BnbMobileExactDatePicker/BnbMobileExactDatePicker";
import BnbFlexibleDatePicker from "../../BnbFlexibleDatePicker/BnbFlexibleDatePicker";
import BnbGuestPicker from "../../BnbGuestPicker/BnbGuestPicker";



function BnbMobileLargeMenu(props:{
    menuToggle:boolean,
    setMenuToggle:Function,
    stayPick:number,
    setStayPick:Function,
    dateType:number,
    setDateType:Function,
    datePick:DatePick,
    setDatePick:Function,
    approxDate:number,
    setApproxDate:Function,
    guests:Guests,
    setGuests:Function,
    flexDate:FlexDate,
    setFlexDate:Function,
}){

    const [menuType, setMenuType] = useState(0);
    const [regionPicked, setRegionPicked] = useState("");
    function selectRegion(region:string){
        if(regionPicked !== region){
            setRegionPicked(region);
            switchStayPick(2);
        }
    }

    function switchStayPick(index:number){
        if(props.stayPick === 3){
            setTimeout(() => {
                props.setStayPick(2);
            },0)
            return;
        }
        setTimeout(() => {
            props.setStayPick(index);
        },0)
    }
    function dropPagePicks(){
        if(props.stayPick === 2 || props.stayPick === 3){
            props.setDatePick({
                startDate: new Date(0,0,0),
                endDate: new Date(0,0,0)
            });
            props.setApproxDate(0);
            props.setFlexDate({
                dates:[],
                duration:1
            })
            switchStayPick(2);
            return;
        }

        if(props.stayPick === 4){
            props.setGuests({
                adults:0,
                children:0,
                pets:0,
                infants:0
            });
            switchStayPick(4);
            return;
        }
    }

    useEffect(() => {
        props.setDatePick({
            startDate: new Date(0,0,0),
            endDate: new Date(0,0,0)
        });
        setRegionPicked("");
        props.setApproxDate(0);
        props.setFlexDate({
            dates:[],
            duration:1
        });
        props.setDateType(0);
        props.setGuests({
            adults:0,
            children:0,
            pets:0,
            infants:0
        });
        switchStayPick(1);
    },[menuType]);
    function canBeCleared(){
        return props.datePick.startDate.valueOf() !== new Date(0,0,0).valueOf() || props.guests.adults > 0 || props.approxDate > 0 || props.flexDate.dates.length > 0 || props.flexDate.duration !== 1;
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

                <BnbMobileDropdownItem fadeDelay="0.35s" IPlus i={2} stayPick={props.stayPick} setStayPick={props.setStayPick} title={"When"} titleActive={"When's your trip?"} value={"Add dates"} downSharpBorder>
                    <BnbMobileDatePickContainer>
                        {menuType === 0 && 
                        <BnbDatePickerTypeContainer>
                            <DateTypeButton onClick={() => props.setDateType(0)} toggle={props.dateType === 0}>Choose dates</DateTypeButton>
                            <DateTypeButton onClick={() => {props.setDateType(1); props.setStayPick(2)}} toggle={props.dateType === 1}>Flexible dates</DateTypeButton>
                        </BnbDatePickerTypeContainer>
                        }
                            {props.dateType === 0 && <BnbMobileExactDatePicker minimal={menuType === 1} datePick={props.datePick} setDatePick={props.setDatePick} stayPick={props.stayPick} setStayPick={switchStayPick} approxDate={props.approxDate} setApproxDate={props.setApproxDate}/>}
                            {props.dateType === 1 && <BnbFlexibleDatePicker mobile flexDate={props.flexDate} setFlexDate={props.setFlexDate} />}
                        <BnbMobileDateBottomBarContainer>
                            <BnbMobileDateSkipResetButton onClick={() => canBeCleared() ? dropPagePicks() : switchStayPick(4)}>{canBeCleared() ? "Clear" : "Skip" }</BnbMobileDateSkipResetButton>
                            <BnbMobileDateNextButton onClick={() => switchStayPick(4)}>Next</BnbMobileDateNextButton>
                        </BnbMobileDateBottomBarContainer>
                    </BnbMobileDatePickContainer>
                </BnbMobileDropdownItem>


                <BnbMobileDropdownItem fadeDelay="0.4s" i={4} stayPick={props.stayPick} setStayPick={props.setStayPick} title={"Who"} titleActive={"Who's coming?"} value={"Add guests"}>
                    <BnbMobileGuestPickContainer>
                        <BnbGuestPicker mobile guests={props.guests} setGuests={props.setGuests} minimal={menuType === 1} />
                    </BnbMobileGuestPickContainer>
                </BnbMobileDropdownItem>

                
            </BnbMobileDropdownList>
        </BnbMobileLargeMenuContainer>
    )
}



export default BnbMobileLargeMenu;