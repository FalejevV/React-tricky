import { useEffect, useMemo, useState } from "react";
import { BnbLargeMenuContainer, BnbLargeMenuTopBar, BnbLargeMenuTypeButton, BnbLargeStayDivider, BnbLargeStayPicker, BnbLargeStayPickerButton, PickerSearchSVG, PickerSearchText, StayInputClearIcon, StayInputField, StayPickerSearchButton, StayPickerText } from "./BnbLargeMenu.styled";
import BnbDatePicker from "../BnbDatePicker/BnbDatePicker";
import BnbGuestPicker from "../BnbGuestPicker/BnbGuestPicker";
import BnbRegionPicker from "../BnbRegionPicker/BnbRegionPicker";
import { DatePick, Guests } from "../../../../interface";



function BnbLargeMenu(props:{
    menuToggle: boolean,
    stayPick:number,
    setStayPick:Function,
    datePick:DatePick,
    setDatePick:Function,
    guests:Guests,
    setGuests:Function,
}){

    const [menuType, setMenuType] = useState(0);
    const [regionPicked, setRegionPicked] = useState("");
    const [hoveredPick, setHoveredPick] = useState(-1);
    const [regionInput, setRegionInput] = useState("");

    useEffect(() => {
        setRegionInput(regionPicked);
    },[regionPicked]);

    useEffect(() => {
        if(regionPicked !== regionInput){
            setRegionPicked(regionInput);
        }
    },[regionInput]);

    function getDateName(date:Date){
        if(date.valueOf() === new Date(0,0,0).valueOf())return false;
        const month = date.toLocaleString('en-us', { month: 'short' });
        return month + " " + date.getDate();
    }

    const datePickerMemo = useMemo(() => {
        return <BnbDatePicker setStayPick={props.setStayPick} stayPick={props.stayPick} setDatePick={props.setDatePick} datePick={props.datePick}/>
    },[props.stayPick, props.datePick]);
    
    function clearDatePick(){
        props.setDatePick({
            startDate: new Date(0,0,0),
            endDate: new Date(0,0,0)
        });
        setTimeout(() => props.setStayPick(2));
        
    }

    return(
        <BnbLargeMenuContainer menuToggle={props.menuToggle}>
            <BnbLargeMenuTopBar>
                <BnbLargeMenuTypeButton toggle={menuType === 0} onClick={() => setMenuType(0)}>Stays</BnbLargeMenuTypeButton>
                <BnbLargeMenuTypeButton toggle={menuType === 1} onClick={() => setMenuType(1)}>Experiences</BnbLargeMenuTypeButton>
                <BnbLargeMenuTypeButton>Online Experiences</BnbLargeMenuTypeButton>
            </BnbLargeMenuTopBar>
            <BnbLargeStayPicker isActive={props.stayPick > 0}>
                {props.stayPick === 1 && <BnbRegionPicker setStayPick={props.setStayPick} regionPicked={regionPicked} setRegionPicked={setRegionPicked} />}
                {props.stayPick === 2 && datePickerMemo}
                {props.stayPick === 3 && datePickerMemo}
                {props.stayPick === 4 && <BnbGuestPicker guests={props.guests} setGuests={props.setGuests} />}

                <BnbLargeStayPickerButton first onMouseEnter={() => setHoveredPick(1)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 1} onClick={() => props.setStayPick(1)} flexFill="1.55">
                    Where
                    <StayInputField placeholder="Search destinations" value={regionInput} onChange={(e) => setRegionInput(e.target.value)}/>
                    <StayInputClearIcon onClick={() => setRegionInput("")} toggle={props.stayPick === 1 && regionInput.trim() !== ""} viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#000"></path>
                    </StayInputClearIcon>
                </BnbLargeStayPickerButton>

                <BnbLargeStayDivider visible={hoveredPick > 0 && hoveredPick < 3 || props.stayPick === 1 || props.stayPick === 2}></BnbLargeStayDivider>

                <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(2)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 2} onClick={() => props.setStayPick(2)} flexFill="0.5">
                    Check in
                    <StayPickerText datePicked={props.datePick.startDate.valueOf() !== new Date(0,0,0).valueOf()}>{getDateName(props.datePick.startDate) ? getDateName(props.datePick.startDate) : "Add dates"}</StayPickerText>
                    <StayInputClearIcon onClick={clearDatePick} toggle={props.stayPick === 2 && props.datePick.startDate.valueOf() !== new Date(0,0,0).valueOf()} viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#000"></path>
                    </StayInputClearIcon>
                </BnbLargeStayPickerButton>

                <BnbLargeStayDivider visible={hoveredPick > 1 && hoveredPick < 4 || props.stayPick === 2 || props.stayPick === 3}></BnbLargeStayDivider>

                <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(3)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 3} onClick={() => props.setStayPick(3)} flexFill="0.5">
                    Check out
                    <StayPickerText  datePicked={props.datePick.endDate.valueOf() !== new Date(0,0,0).valueOf()}>{getDateName(props.datePick.endDate) ? getDateName(props.datePick.endDate) : "Add dates"}</StayPickerText>
                    <StayInputClearIcon onClick={clearDatePick} toggle={props.stayPick === 3 && props.datePick.endDate.valueOf() !== new Date(0,0,0).valueOf()} viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#000"></path>
                    </StayInputClearIcon>
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