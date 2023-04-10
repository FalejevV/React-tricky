import { useState } from "react";
import { BnbLargeMenuContainer, BnbLargeMenuTopBar, BnbLargeMenuTypeButton, BnbLargeStayPicker } from "./BnbLargeMenu.styled";



function BnbLargeMenu(props:{
    menuToggle: boolean,
}){

    const [menuType, setMenuType] = useState(0);
    return(
        <BnbLargeMenuContainer menuToggle={props.menuToggle}>
            <BnbLargeMenuTopBar>
                <BnbLargeMenuTypeButton toggle={menuType === 0} onClick={() => setMenuType(0)}>Stays</BnbLargeMenuTypeButton>
                <BnbLargeMenuTypeButton toggle={menuType === 1} onClick={() => setMenuType(1)}>Experiences</BnbLargeMenuTypeButton>
                <BnbLargeMenuTypeButton>Online Experiences</BnbLargeMenuTypeButton>
            </BnbLargeMenuTopBar>
            <BnbLargeStayPicker>
                
            </BnbLargeStayPicker>
        </BnbLargeMenuContainer>
    )
}


export default BnbLargeMenu;