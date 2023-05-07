import { useEffect, useMemo, useState } from "react";
import { BnbLargeMenuContainer, BnbLargeMenuTopBar, BnbLargeMenuTypeButton, BnbLargeStayDivider, BnbLargeStayPicker, BnbLargeStayPickerButton, PickerSearchSVG, PickerSearchText, StayInputClearIcon, StayInputField, StayPickerSearchButton, StayPickerText } from "./BnbLargeMenu.styled";
import BnbDatePicker from "../BnbDatePicker/BnbDatePicker";
import BnbGuestPicker from "../BnbGuestPicker/BnbGuestPicker";
import BnbRegionPicker from "../BnbRegionPicker/BnbRegionPicker";
import { DatePick, ExperiencesDate, FlexDate, Guests } from "../../../../interface";
import BnbDatePickMinimal from "../BnbDatePickMinimal/BnbDatePickMinimal";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];



/*
    This is an Airbnb large header menu. That toggles when menuToggle prop is true.

---------------------------------------------------------------
        Stays   Experiences     Online Experiences

    (Where)   (Check in)   (Check out)   (Who  (🔍))
---------------------------------------------------------------

*/
function BnbLargeMenu(props:{
    menuToggle: boolean,
    stayPick:number,
    setStayPick:Function,
    datePick:DatePick,
    setDatePick:Function,
    guests:Guests,
    setGuests:Function,
    approxDate:number,
    setApproxDate:Function,
    dateType:number,
    setDateType:Function,
    flexDate:FlexDate,
    setFlexDate:Function,
    experiencesDate:ExperiencesDate,
    setExperiencesDate:Function,
    regionPick:string,
    setRegionPick:Function,
    alertSelection:Function,
}){

    const [menuType, setMenuType] = useState(0);
    const [hoveredPick, setHoveredPick] = useState(-1);
    const [regionInput, setRegionInput] = useState("");


    useEffect(() => {
        setRegionInput(props.regionPick);
    },[props.regionPick]);

    useEffect(() => {
        if(props.regionPick !== regionInput){
            props.setRegionPick(regionInput);
        }
    },[regionInput]);


    // Month day pick convertc to month name with number
    function getDateName(date:Date){
        if(date.valueOf() === new Date(0,0,0).valueOf())return false;
        const month = date.toLocaleString('en-us', { month: 'short' });
        let dateString = month + " " + date.getDate();
        let approxDate = props.approxDate > 0 ? `±${props.approxDate}` : "";
        return `${dateString} ${approxDate}`;
    }

    // Memos used to minimize calendar selection re-rendering.
    const datePickerMemo = useMemo(() => {
        return <BnbDatePicker dateType={props.dateType} setDateType={props.setDateType} flexDate={props.flexDate} setFlexDate={props.setFlexDate} approxDate={props.approxDate} setApproxDate={props.setApproxDate} setStayPick={props.setStayPick} stayPick={props.stayPick} setDatePick={props.setDatePick} datePick={props.datePick}/>
    },[props.stayPick, props.datePick,props.approxDate,props.dateType,props.flexDate]);

    const datePickerMemoLimited = useMemo(() => {
        return <BnbDatePickMinimal minimal setStayPick={props.setStayPick} stayPick={props.stayPick} datePick={props.experiencesDate} setDatePick={props.setExperiencesDate} setApproxDate={() => {}} approxDate={0} />
    },[props.stayPick, props.experiencesDate]);
    

    // Drops default calendar dates
    function clearDatePick(){
        props.setDatePick({
            startDate: new Date(0,0,0),
            endDate: new Date(0,0,0)
        });
        setTimeout(() => props.setStayPick(2));
        
    }

    // Drops picked guests
    function clearGuests(){
        props.setGuests(() => ({
            adults:0,
            children:0,
            infants:0,
            pets:0,
        }));
    }

    // Converts picked guests to text, that is displayed inside "Pick buttons"
    function guestsToText(){
        let guestCounter = props.guests.adults + props.guests.children;
        let infantCounter = props.guests.infants;
        let petCounter = props.guests.pets;

        let guestText = guestCounter > 0 ? `${guestCounter} guest${guestCounter > 1 ? "s" : ""}` : "";
        guestText = guestCounter > 15 ? `16+ guests` : guestText;
        let infantText =  infantCounter > 0 ? `${infantCounter} infant${infantCounter > 1 ? "s" : ""}` : "";
        let petText = petCounter > 0 ? `${petCounter} pet${petCounter > 1 ? "s" : ""}` : "";

        if(guestText === ""){
            return "Add guests";
        }

        if(menuType === 1) return `${guestText}${infantText !== "" ? `,${infantText}` : ""}`;

        return `${guestText}${infantText !== "" ? `,${infantText}` : ""}${petText !== "" ? `,${petText}` : ""}`;
    }

    // Converts flex date to text, that is displayed inside "Pick buttons"
    function flexDateToText(){
        let durationText = props.flexDate.duration === 0 ? "weekend" : props.flexDate.duration === 1 ? "week" : "month";
        if(props.flexDate.dates.length === 0) return `Any ${durationText}`;

        
        let durationTextToArray = durationText.split("");
        durationTextToArray[0] = durationTextToArray[0].toUpperCase();
        let durationUpperCaseText = durationTextToArray.join("");
        if(props.flexDate.dates.length === 1){
            return `${durationUpperCaseText} in ${monthNames[props.flexDate.dates[0][1]]}`
        }else{
            let orderedDates = props.flexDate.dates.sort((dateItema:number[],dateItemb:number[]) => {
                return dateItema[1] - dateItemb[1];
            });

            let shortenedMonthsArray = orderedDates.map((date:number[]) => monthNames[date[1]].slice(0,3));
            return `${durationUpperCaseText} in ${shortenedMonthsArray}`
        }
    }

    // Converts "Experiences" tab dates to text, that is displayed inside "Pick buttons"
    function experiencesDateToText(){
        let firstMonth = "";
        let secondMonth = "";
        if(props.experiencesDate.startDate.valueOf() !== new Date(0,0,0).valueOf()){
            firstMonth = monthNames[props.experiencesDate.startDate.getMonth()].slice(0,3) + " " + props.experiencesDate.startDate.getDate();
        }
        if(props.experiencesDate.endDate.valueOf() !== new Date(0,0,0).valueOf()){
            secondMonth = monthNames[props.experiencesDate.endDate.getMonth()].slice(0,3) + " " + props.experiencesDate.endDate.getDate();
        }
        if(firstMonth === "") return "Add dates";
        if(firstMonth === secondMonth) return firstMonth
        return `${firstMonth} ${secondMonth !== "" ? "- " + secondMonth : ""} `;
    }

    // Drops "Experiences" tab dates
    function experiencesDateClear(){
        props.setExperiencesDate({
            startDate: new Date(0,0,0),
            endDate: new Date(0,0,0)
        })
    }

    return(
        <BnbLargeMenuContainer menuToggle={props.menuToggle}>
            <BnbLargeMenuTopBar>
                <BnbLargeMenuTypeButton toggle={menuType === 0} onClick={() => {setMenuType(0); props.setStayPick(-1)}}>Stays</BnbLargeMenuTypeButton>
                <BnbLargeMenuTypeButton toggle={menuType === 1} onClick={() => {setMenuType(1); props.setStayPick(-1)}}>Experiences</BnbLargeMenuTypeButton>
                <BnbLargeMenuTypeButton>Online Experiences</BnbLargeMenuTypeButton>
            </BnbLargeMenuTopBar>
            <BnbLargeStayPicker isActive={props.stayPick > 0}>
                {/*  Different "pick" windows are displayed depending on stayPick state.  */}
                {props.stayPick === 1 && <BnbRegionPicker setStayPick={props.setStayPick} regionPicked={props.regionPick} setRegionPicked={props.setRegionPick} />}
                {props.stayPick > 1 && props.stayPick <= 3 && menuType === 0 && datePickerMemo}
                {props.stayPick > 1 && props.stayPick <= 3 && menuType === 1 && datePickerMemoLimited}
                {props.stayPick === 4 && <BnbGuestPicker minimal={menuType === 1} guests={props.guests} setGuests={props.setGuests} />}


                {/*  Region pick button  */}
                <BnbLargeStayPickerButton first onMouseEnter={() => setHoveredPick(1)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 1} onClick={() => props.setStayPick(1)} flexFill="1.55">
                    Where
                    <StayInputField placeholder="Search destinations" value={regionInput} onChange={(e) => setRegionInput(e.target.value)}/>
                    <StayInputClearIcon onClick={() => setRegionInput("")} toggle={props.stayPick === 1 && regionInput.trim() !== ""} viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#000"></path>
                    </StayInputClearIcon>
                </BnbLargeStayPickerButton>

                {/*  Divider between buttons  */}
                <BnbLargeStayDivider visible={hoveredPick > 0 && hoveredPick < 3 || props.stayPick === 1 || props.stayPick === 2  || hoveredPick === 5  || props.stayPick === 5}></BnbLargeStayDivider>

                {/* -"Stays" tab-  Default date pick 2 buttons (Check in - check out)  with divider between them  */}
                {props.dateType === 0 && menuType === 0 &&  <>
                    <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(2)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 2} onClick={() => props.setStayPick(2)} flexFill="0.5">
                        Check in
                        <StayPickerText toggle={props.stayPick === 2 && props.datePick.startDate.valueOf() !== new Date(0,0,0).valueOf()} picked={props.datePick.startDate.valueOf() !== new Date(0,0,0).valueOf()}>{getDateName(props.datePick.startDate) ? getDateName(props.datePick.startDate) : "Add dates"}</StayPickerText>
                        <StayInputClearIcon onClick={clearDatePick} toggle={props.stayPick === 2 && props.datePick.startDate.valueOf() !== new Date(0,0,0).valueOf()} viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#000"></path>
                        </StayInputClearIcon>
                    </BnbLargeStayPickerButton>

                    {/*  Divider between buttons  */}
                    <BnbLargeStayDivider visible={hoveredPick > 1 && hoveredPick < 4 || props.stayPick === 2 || props.stayPick === 3}></BnbLargeStayDivider>

                    <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(3)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 3} onClick={() => props.setStayPick(3)} flexFill="0.5">
                        Check out
                        <StayPickerText toggle={props.stayPick === 3 && props.datePick.endDate.valueOf() !== new Date(0,0,0).valueOf()} picked={props.datePick.endDate.valueOf() !== new Date(0,0,0).valueOf()}>{getDateName(props.datePick.endDate) ? getDateName(props.datePick.endDate) : "Add dates"}</StayPickerText>
                        <StayInputClearIcon onClick={clearDatePick} toggle={props.stayPick === 3} viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#000"></path>
                        </StayInputClearIcon>
                    </BnbLargeStayPickerButton>
                </>}
                
                {/*  -"Stays" tab- Flexible date pick button is displayed instead of default ones, if user picked "Flexible dates" in date pick menu   */}
                {props.dateType === 1 && menuType === 0 && <>
                    <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(1)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 2} onClick={() => props.setStayPick(2)} flexFill="1.3">
                        When
                        <StayPickerText toggle picked>{flexDateToText()}</StayPickerText>
                    </BnbLargeStayPickerButton>
                </>}
                
                {/*  -"Experiences" tab-  button */}
                {menuType === 1 && <>
                    <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(5)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 2 || props.stayPick === 3} onClick={() => props.setStayPick(2)} flexFill="1.3">
                        Date
                        <StayPickerText toggle={props.stayPick === 2} picked={experiencesDateToText() !== "Add dates"}>{experiencesDateToText()}</StayPickerText>
                        <StayInputClearIcon onClick={experiencesDateClear} toggle={props.stayPick > 1 && props.stayPick <= 3 && props.experiencesDate.startDate.valueOf() !== new Date(0,0,0).valueOf()} viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#000"></path>
                        </StayInputClearIcon>
                    </BnbLargeStayPickerButton>
                </>}
                
                {/*  Divider between buttons  */}
                <BnbLargeStayDivider visible={hoveredPick > 2 && hoveredPick <= 5 || props.stayPick === 3 || props.stayPick === 4 || props.stayPick === 5}></BnbLargeStayDivider>

                {/* Guests picker button with search button inside */}
                <BnbLargeStayPickerButton onMouseEnter={() => setHoveredPick(4)} onMouseLeave={() => setHoveredPick(-1)} stayPick={props.stayPick === 4} onClick={() => props.setStayPick(4)} flexFill="1.25">
                    Who
                    <StayPickerText shorten={props.stayPick > 0} picked={props.guests.adults > 0}>{guestsToText()}</StayPickerText>
                    <StayInputClearIcon right="130px" onClick={clearGuests} toggle={props.guests.adults > 0 && props.stayPick === 4} viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#000"></path>
                    </StayInputClearIcon>
                    <StayPickerSearchButton expand={props.stayPick > 0}>
                        <PickerSearchSVG toggled={props.stayPick > 0} viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                        </PickerSearchSVG>
                        <PickerSearchText onClick={() => props.alertSelection()}>Search</PickerSearchText>
                    </StayPickerSearchButton>
                </BnbLargeStayPickerButton>
            </BnbLargeStayPicker>
        </BnbLargeMenuContainer>
    )
}


export default BnbLargeMenu;