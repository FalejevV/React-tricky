import BnbLargeMenu from "@/components/BnbLargeMenu/BnbLargeMenu";
import BnbMenu from "@/components/BnbMenu/BnbMenu";
import BnbUserPanel from "@/components/BnbUserPanel/BnbUserPanel";
import { BlackBackgroundClickField, BnbBottomBar, BnbContainer, BnbHeader, BnbLogo, BnbTopBar, BnbTopBarContainer, BnbTopBarFlex } from "@/styles/airbnb.styled";
import { useState } from "react";


function Airbnb(){    
    const [menuToggle, setMenuToggle] = useState(false);

    const toggleMenu = () => {
        setMenuToggle(!menuToggle);
    }

    return(
        <>
            <BlackBackgroundClickField onClick={() => setMenuToggle(false)}></BlackBackgroundClickField>

            <BnbHeader>
                <BnbTopBar menuToggle={menuToggle}>
                    <BnbContainer>
                        <BnbTopBarContainer>
                            <BnbTopBarFlex>
                                <BnbLogo src="/airbnb.svg"/>
                            </BnbTopBarFlex>
                            <BnbMenu onClick={toggleMenu} menuToggle={menuToggle}/>
                            <BnbLargeMenu menuToggle={menuToggle}/>
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