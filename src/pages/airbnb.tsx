import BnbMenu from "@/components/BnbMenu/BnbMenu";
import BnbUserPanel from "@/components/BnbUserPanel/BnbUserPanel";
import { BnbContainer, BnbHeader, BnbLogo, BnbTopBar, BnbTopBarContainer, BnbTopBarFlex } from "@/styles/airbnb.styled";





function airbnb(){
    return(
        <BnbHeader>
            <BnbTopBar>
                <BnbContainer>
                    <BnbTopBarContainer>
                        <BnbTopBarFlex>
                            <BnbLogo src="/airbnb.svg"/>
                        </BnbTopBarFlex>
                        <BnbMenu />
                        <BnbTopBarFlex justify="flex-end">
                            <BnbUserPanel />
                        </BnbTopBarFlex>
                    </BnbTopBarContainer>
                </BnbContainer>
            </BnbTopBar>
        </BnbHeader>
    )
}


export default airbnb;