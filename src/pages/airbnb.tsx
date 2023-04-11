import BnbLargeMenu from "@/components/BnbLargeMenu/BnbLargeMenu";
import BnbMenu from "@/components/BnbMenu/BnbMenu";
import BnbUserPanel from "@/components/BnbUserPanel/BnbUserPanel";
import { BlackBackgroundClickField, BnbBottomBar, BnbContainer, BnbHeader, BnbLogo, BnbTopBar, BnbTopBarContainer, BnbTopBarFlex } from "@/styles/airbnb.styled";
import { useEffect, useState } from "react";


function Airbnb(){    
    const [menuToggle, setMenuToggle] = useState(false);
    const [stayPick,setStayPick] = useState(1);

    const toggleMenu = () => {
        setMenuToggle(!menuToggle);
    }
    

    function detectNonLargeMenuClick(e:React.MouseEvent){
        if(!menuToggle){
            return
        }

        let target = e.target as HTMLElement;
        if(!target.className.includes("Large")){
            setStayPick(0);
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
                            <BnbLargeMenu stayPick={stayPick} setStayPick={setStayPick} menuToggle={menuToggle}/>
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