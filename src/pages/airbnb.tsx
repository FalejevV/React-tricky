import { BlackBackgroundClickField, BnbBottomBar, BnbContainer, BnbHeader, BnbLogo, BnbTopBar, BnbTopBarContainer, BnbTopBarFlex } from "@/styles/airbnb.styled";
import {useState } from "react";
import BnbMenu from "@/components/Bnb/BnbMenu/BnbMenu";
import BnbLargeMenu from "@/components/Bnb/BnbLargeMenu/BnbLargeMenu";
import BnbUserPanel from "@/components/Bnb/BnbUserPanel/BnbUserPanel";
import { DatePick, Guests } from "../../interface";

const ignoreArray = ["Large", "Picker", "Date", "Month", "Guest"];

function Airbnb(){    
    const [menuToggle, setMenuToggle] = useState(false);
    const [stayPick,setStayPick] = useState(1);
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
    const toggleMenu = () => {
        setMenuToggle(!menuToggle);
    }
    

    function detectNonLargeMenuClick(e:React.MouseEvent){
        if(!menuToggle){
            return
        }

        let target = e.target as HTMLElement;
        try{
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
                            <BnbTopBarFlex>
                                <BnbLogo src="/airbnb.svg"/>
                            </BnbTopBarFlex>
                            <BnbMenu setStayPick={setStayPick} onClick={toggleMenu} menuToggle={menuToggle}/>
                            <BnbLargeMenu guests={guests} setGuests={setGuests} datePick={datePick} setDatePick={setDatePick} stayPick={stayPick} setStayPick={setStayPick} menuToggle={menuToggle}/>
                            <BnbTopBarFlex justify="flex-end">
                                <BnbUserPanel />
                            </BnbTopBarFlex>
                        </BnbTopBarContainer>
                    </BnbContainer>
                </BnbTopBar>
                <BnbBottomBar>
                    
                </BnbBottomBar>
            </BnbHeader>
        </>
    )
}


export default Airbnb;