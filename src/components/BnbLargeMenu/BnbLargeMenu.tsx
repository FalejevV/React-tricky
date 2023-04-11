import { useState } from "react";
import { BnbLargeMenuContainer, BnbLargeMenuTopBar, BnbLargeMenuTypeButton, BnbLargeStayDivider, BnbLargeStayPicker, BnbLargeStayPickerButton, StayInputField } from "./BnbLargeMenu.styled";



function BnbLargeMenu(props:{
    menuToggle: boolean,
    stayPick:number,
    setStayPick:Function,
}){

    const [menuType, setMenuType] = useState(0);
    
    const [hoveredPick, setHoveredPick] = useState(-1);

    return(
        <BnbLargeMenuContainer menuToggle={props.menuToggle}>
            <BnbLargeMenuTopBar>
                <BnbLargeMenuTypeButton toggle={menuType === 0} onClick={() => setMenuType(0)}>Stays</BnbLargeMenuTypeButton>
                <BnbLargeMenuTypeButton toggle={menuType === 1} onClick={() => setMenuType(1)}>Experiences</BnbLargeMenuTypeButton>
                <BnbLargeMenuTypeButton>Online Experiences</BnbLargeMenuTypeButton>
            </BnbLargeMenuTopBar>
            <BnbLargeStayPicker isActive={props.stayPick > 0}>
                <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(1)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 1} onClick={() => props.setStayPick(1)} flexFill="1.5">
                    Where
                    <StayInputField placeholder="Search destinations"/>
                </BnbLargeStayPickerButton>

                <BnbLargeStayDivider visible={hoveredPick > 0 && hoveredPick < 3 || props.stayPick === 1 || props.stayPick === 2}></BnbLargeStayDivider>

                <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(2)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 2} onClick={() => props.setStayPick(2)} flexFill="0.5">
                    Check in

                </BnbLargeStayPickerButton>

                <BnbLargeStayDivider visible={hoveredPick > 1 && hoveredPick < 4 || props.stayPick === 2 || props.stayPick === 3}></BnbLargeStayDivider>

                <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(3)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 3} onClick={() => props.setStayPick(3)} flexFill="0.5">
                    Check out

                </BnbLargeStayPickerButton>

                <BnbLargeStayDivider visible={hoveredPick > 2 && hoveredPick < 5 || props.stayPick === 3 || props.stayPick === 4}></BnbLargeStayDivider>

                <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(4)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 4} onClick={() => props.setStayPick(4)} flexFill="1.1">
                    Who

                </BnbLargeStayPickerButton>
            </BnbLargeStayPicker>
        </BnbLargeMenuContainer>
    )
}


export default BnbLargeMenu;