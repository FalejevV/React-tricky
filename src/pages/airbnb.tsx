import { BlackBackgroundClickField, BnbBottomBar, BnbContainer, BnbHeader, BnbLogo, BnbTopBar, BnbTopBarContainer, BnbTopBarFlex } from "@/styles/airbnb.styled";
import {useEffect, useState } from "react";
import BnbMenu from "@/components/Bnb/BnbMenu/BnbMenu";
import BnbLargeMenu from "@/components/Bnb/BnbLargeMenu/BnbLargeMenu";
import BnbUserPanel from "@/components/Bnb/BnbUserPanel/BnbUserPanel";
import { DatePick, ExperiencesDate, FlexDate, Guests } from "../../interface";
import BnbMobileSearchMenu from "@/components/Bnb/Mobile/BnbMobileSearchMenu/BnbMobileSearchMenu";
import BnbMobileLargeMenu from "@/components/Bnb/Mobile/BnbMobileLargeMenu/BnbMobileLargeMenu";

const ignoreArray = ["Stay", "Picker", "Date", "Month", "Guest","Region"];

function Airbnb(){    
    const [menuToggle, setMenuToggle] = useState(false);
    const [stayPick,setStayPick] = useState(1);
    const [approxDate, setApproxDate] = useState(0);
    const [dateType, setDateType] = useState(0);
    const [flexDate,setFlexDate] = useState<FlexDate>({
        duration:0,
        dates:[]    
    });
    const [datePick,setDatePick] = useState<DatePick>({
        startDate: new Date(0,0,0),
        endDate: new Date(0,0,0),
    });
    
    const [guests,setGuests] = useState<Guests>({
        adults:0,
        children:0,
        infants:0,
        pets:0,
    });
    const [experiencesDate,setExperiencesDate] = useState<ExperiencesDate>({
        startDate:new Date(0,0,0),
        endDate: new Date(0,0,0),
    });
    const [regionPick,setRegionPick] = useState("");

    const toggleMenu = () => {
        setMenuToggle(!menuToggle);
    }
    

    function detectNonLargeMenuClick(e:React.MouseEvent){
        if(!menuToggle){
            return
        }

        let target = e.target as HTMLElement;
        try{
            if(target.tagName !== "div"){
                target = target.parentElement as HTMLElement;
            }
            if(target.className.includes("Mobile")){
                return;
            };
            let found = false;
            ignoreArray.forEach((className) => {
                if(found) return;

                if(target.className.includes(className)){
                    found = true;
                }
            })
            if(!found){
                setStayPick(0);
            }
        }catch{
            
        }
    }

    function alertSelection(){
        setMenuToggle(false);
        alert(`Region:  ${regionPick.trim() === "" ? "Any" : regionPick}. 
Date:  ${dateType === 0 ? `${datePick.startDate.toLocaleDateString()} - ${datePick.endDate.toLocaleDateString()}` : `${flexDate.dates} months for ${flexDate.duration === 0 ? "Weekend" : flexDate.duration === 1 ? "Week" : "Month"}`}.
Guests: ${guests.adults + guests.children} guests. ${guests.infants} infants. ${guests.pets} pets`);
    }
    
    return(
        <>
            <BlackBackgroundClickField onClick={() => setMenuToggle(false)}></BlackBackgroundClickField>

            <BnbHeader onClick={(e) => detectNonLargeMenuClick(e)}>
                <BnbTopBar menuToggle={menuToggle}>
                    <BnbContainer>
                        <BnbTopBarContainer>
                            <BnbTopBarFlex left>
                                <BnbLogo alt="logo" large src="/airbnb/airbnb.svg"/>
                                <BnbLogo src="/airbnb/airbnb-small.svg"/>
                            </BnbTopBarFlex>
                            <BnbMenu setStayPick={setStayPick} onClick={toggleMenu} menuToggle={menuToggle}/>
                            <BnbLargeMenu alertSelection={alertSelection} regionPick={regionPick} setRegionPick={setRegionPick} experiencesDate={experiencesDate} setExperiencesDate={setExperiencesDate} dateType={dateType} setDateType={setDateType} flexDate={flexDate} setFlexDate={setFlexDate} approxDate={approxDate} setApproxDate={setApproxDate} guests={guests} setGuests={setGuests} datePick={datePick} setDatePick={setDatePick} stayPick={stayPick} setStayPick={setStayPick} menuToggle={menuToggle}/>
                            <BnbTopBarFlex justify="flex-end">
                                <BnbUserPanel />
                            </BnbTopBarFlex>
                        </BnbTopBarContainer>

                        <BnbMobileSearchMenu setMenuToggle={setMenuToggle} />
                        <BnbMobileLargeMenu alertSelection={alertSelection} regionPick={regionPick} setRegionPick={setRegionPick} flexDate={flexDate} setFlexDate={setFlexDate} guests={guests} setGuests={setGuests} approxDate={approxDate} setApproxDate={setApproxDate} datePick={datePick} setDatePick={setDatePick} dateType={dateType} setDateType={setDateType} menuToggle={menuToggle} setMenuToggle={setMenuToggle} stayPick={stayPick} setStayPick={setStayPick} />
                    </BnbContainer>
                </BnbTopBar>
                <BnbBottomBar>
                    
                </BnbBottomBar>
            </BnbHeader>
        </>
    )
}


export default Airbnb;