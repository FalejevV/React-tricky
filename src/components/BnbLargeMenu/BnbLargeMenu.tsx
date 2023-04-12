import { useState } from "react";
import { BnbLargeMenuContainer, BnbLargeMenuTopBar, BnbLargeMenuTypeButton, BnbLargeStayDivider, BnbLargeStayPicker, BnbLargeStayPickerButton, PickerSearchSVG, PickerSearchText, StayInputField, StayPickerSearchButton, StayPickerText } from "./BnbLargeMenu.styled";



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
                <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(1)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 1} onClick={() => props.setStayPick(1)} flexFill="1.55">
                    Where
                    <StayInputField placeholder="Search destinations"/>
                </BnbLargeStayPickerButton>

                <BnbLargeStayDivider visible={hoveredPick > 0 && hoveredPick < 3 || props.stayPick === 1 || props.stayPick === 2}></BnbLargeStayDivider>

                <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(2)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 2} onClick={() => props.setStayPick(2)} flexFill="0.5">
                    Check in
                    <StayPickerText>Add dates</StayPickerText>
                </BnbLargeStayPickerButton>

                <BnbLargeStayDivider visible={hoveredPick > 1 && hoveredPick < 4 || props.stayPick === 2 || props.stayPick === 3}></BnbLargeStayDivider>

                <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(3)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 3} onClick={() => props.setStayPick(3)} flexFill="0.5">
                    Check out
                    <StayPickerText>Add dates</StayPickerText>
                </BnbLargeStayPickerButton>

                <BnbLargeStayDivider visible={hoveredPick > 2 && hoveredPick < 5 || props.stayPick === 3 || props.stayPick === 4}></BnbLargeStayDivider>

                <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(4)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 4} onClick={() => props.setStayPick(4)} flexFill="1.25">
                    Who
                    <StayPickerText>Add guests</StayPickerText>

                    <StayPickerSearchButton expand={props.stayPick > 0}>
                        <PickerSearchSVG toggled={props.stayPick > 0} viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                        </PickerSearchSVG>
                        <PickerSearchText>Search</PickerSearchText>
                    </StayPickerSearchButton>
                </BnbLargeStayPickerButton>
            </BnbLargeStayPicker>
        </BnbLargeMenuContainer>
    )
}


export default BnbLargeMenu;