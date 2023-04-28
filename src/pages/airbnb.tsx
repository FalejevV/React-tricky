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
    })

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
    return(
        <>
            <BlackBackgroundClickField onClick={() => setMenuToggle(false)}></BlackBackgroundClickField>

            <BnbHeader onClick={(e) => detectNonLargeMenuClick(e)}>
                <BnbTopBar menuToggle={menuToggle}>
                    <BnbContainer>
                        <BnbTopBarContainer>
                            <BnbTopBarFlex left>
                                <BnbLogo large src="/airbnb/airbnb.svg"/>
                                <BnbLogo src="/airbnb/airbnb-small.svg"/>
                            </BnbTopBarFlex>
                            <BnbMenu setStayPick={setStayPick} onClick={toggleMenu} menuToggle={menuToggle}/>
                            <BnbLargeMenu experiencesDate={experiencesDate} setExperiencesDate={setExperiencesDate} dateType={dateType} setDateType={setDateType} flexDate={flexDate} setFlexDate={setFlexDate} approxDate={approxDate} setApproxDate={setApproxDate} guests={guests} setGuests={setGuests} datePick={datePick} setDatePick={setDatePick} stayPick={stayPick} setStayPick={setStayPick} menuToggle={menuToggle}/>
                            <BnbTopBarFlex justify="flex-end">
                                <BnbUserPanel />
                            </BnbTopBarFlex>
                        </BnbTopBarContainer>

                        <BnbMobileSearchMenu setMenuToggle={setMenuToggle} />
                        <BnbMobileLargeMenu dateType={dateType} setDateType={setDateType} menuToggle={menuToggle} setMenuToggle={setMenuToggle} stayPick={stayPick} setStayPick={setStayPick} />
                    </BnbContainer>
                </BnbTopBar>
                <BnbBottomBar>
                    
                </BnbBottomBar>
            </BnbHeader>
        </>
    )
}


export default Airbnb;