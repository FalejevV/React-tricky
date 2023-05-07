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
import BnbMobileSearchSubmitFooter from "../BnbMobileSearchSubmitFooter/BnbMobileSearchSubmitFooter";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


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
    regionPick:string,
    setRegionPick:Function,
    alertSelection:Function,
}){

    const [menuType, setMenuType] = useState(0);
    function selectRegion(region:string){
        if(props.regionPick !== region){
            props.setRegionPick(region);
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
        props.setRegionPick("");
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


    function dropAllPicks(){
        props.setDatePick({
            startDate: new Date(0,0,0),
            endDate: new Date(0,0,0)
        });
        props.setRegionPick("");
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
    }
    
    function canBeCleared(){
        return props.datePick.startDate.valueOf() !== new Date(0,0,0).valueOf() || props.guests.adults > 0 || props.approxDate > 0 || props.flexDate.dates.length > 0 || props.flexDate.duration !== 1;
    }

    function guestsToText(){
        let guestCounter = props.guests.adults + props.guests.children;
        let infantCounter = props.guests.infants;
        let petCounter = props.guests.pets;

        let guestText = guestCounter > 0 ? `${guestCounter} guest${guestCounter > 1 ? "s" : ""}` : "";
        guestText = guestCounter > 15 ? `16+ guests` : guestText;
        let infantText =  infantCounter > 0 ? `${infantCounter} infant${infantCounter > 1 ? "s" : ""}` : "";
        let petText = petCounter > 0 ? `${petCounter} pet${petCounter > 1 ? "s" : ""}` : "";

        if(guestText === ""){
            return "Add guests";
        }

        if(menuType === 1) return `${guestText}${infantText !== "" ? `,${infantText}` : ""}`;

        return `${guestText}${infantText !== "" ? `,${infantText}` : ""}${petText !== "" ? `,${petText}` : ""}`;
    }

    function flexDateToText(){
        let durationText = props.flexDate.duration === 0 ? "weekend" : props.flexDate.duration === 1 ? "week" : "month";
        if(props.flexDate.dates.length === 0) return `Any ${durationText}`;

        
        let durationTextToArray = durationText.split("");
        durationTextToArray[0] = durationTextToArray[0].toUpperCase();
        let durationUpperCaseText = durationTextToArray.join("");
        if(props.flexDate.dates.length === 1){
            return `${durationUpperCaseText} in ${monthNames[props.flexDate.dates[0][1]]}`
        }else{
            let orderedDates = props.flexDate.dates.sort((dateItema:number[],dateItemb:number[]) => {
                return dateItema[1] - dateItemb[1];
            });

            let shortenedMonthsArray = orderedDates.map((date:number[]) => monthNames[date[1]].slice(0,3));
            return `${durationUpperCaseText} in ${shortenedMonthsArray}`
        }
    }

    function experiencesDateToText(){
        let firstMonth = "";
        let secondMonth = "";
        if(props.datePick.startDate.valueOf() !== new Date(0,0,0).valueOf()){
            firstMonth = monthNames[props.datePick.startDate.getMonth()].slice(0,3) + " " + props.datePick.startDate.getDate();
        }
        if(props.datePick.endDate.valueOf() !== new Date(0,0,0).valueOf()){
            secondMonth = monthNames[props.datePick.endDate.getMonth()].slice(0,3) + " " + props.datePick.endDate.getDate();
        }
        if(firstMonth === "") return "Add dates";
        if(firstMonth === secondMonth) return firstMonth
        return `${firstMonth} ${secondMonth !== "" ? "- " + secondMonth : ""} ${props.approxDate > 0 ? ` (± ${props.approxDate} d.)` : ""}`;
    }

    return(
        <BnbMobileLargeMenuContainer menuToggle={props.menuToggle}>
            <BnbMobileLargeMenuHeader setMenuType={setMenuType} setMenuToggle={props.setMenuToggle} menuToggle={props.menuToggle} menuType={menuType} />
            <BnbMobileDropdownList>
                
                <BnbMobileDropdownItem fadeDelay="0.3s" i={1} stayPick={props.stayPick} setStayPick={props.setStayPick} title={"Where"} titleActive={"Where to?"} value={props.regionPick !== "" ? props.regionPick : "I'm flexible"}>
                    <BnbMobileRegionPickContainer>
                        <BnbMobileFakeRegionSearch />
                        <BnbMobileRegionFlex>
                            <BnbRegionList selectRegion={selectRegion} regionPicked={props.regionPick} />
                        </BnbMobileRegionFlex>
                    </BnbMobileRegionPickContainer>
                </BnbMobileDropdownItem>

                <BnbMobileDropdownItem fadeDelay="0.35s" IPlus i={2} stayPick={props.stayPick} setStayPick={props.setStayPick} title={"When"} titleActive={"When's your trip?"} value={props.dateType === 0 ? experiencesDateToText() : flexDateToText()} downSharpBorder>
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

                <BnbMobileDropdownItem hidden={props.stayPick === 2 || props.stayPick === 3} fadeDelay="0.4s" i={4} stayPick={props.stayPick} setStayPick={props.setStayPick} title={"Who"} titleActive={"Who's coming?"} value={guestsToText()}>
                    <BnbMobileGuestPickContainer>
                        <BnbGuestPicker mobile guests={props.guests} setGuests={props.setGuests} minimal={menuType === 1} />
                    </BnbMobileGuestPickContainer>
                </BnbMobileDropdownItem>
                
                {props.stayPick === 4 && <BnbMobileSearchSubmitFooter alertSelection={props.alertSelection} dropAllPicks={dropAllPicks} />}
                {props.stayPick === 1 && <BnbMobileSearchSubmitFooter alertSelection={props.alertSelection} dropAllPicks={dropAllPicks} />}
              

                
            </BnbMobileDropdownList>
        </BnbMobileLargeMenuContainer>
    )
}



export default BnbMobileLargeMenu;