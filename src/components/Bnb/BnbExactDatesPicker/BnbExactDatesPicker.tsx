import { useRef, useState } from "react";
import BnbApproxDate from "../BnbApproxDate/BnbApproxDate";
import BnbWeekDays from "../BnbWeekDays/BnbWeekDays";
import BnbCalendarMonth from "../BnbCalendarMonth/BnbCalendarMonth";
import { DatePick } from "../../../../interface";
import { nanoid } from "nanoid";
import { BnbExactDatesSpacer, BnbMonthSwitchArrowSvgLeft, BnbMonthSwitchArrowSvgRight, BnbMonthsArrowContainer, BnbMonthsContainer, BnbMonthsList, BnbWeekDaysWrapper } from "./BnbExactDatesPicker.styled";



function BnbExactDatesPicker(props:{
    setStayPick:Function,
    stayPick:number,
    datePick:DatePick,
    setDatePick:Function,
    setApproxDate:Function,
    approxDate:number,
    minimal?:boolean
}){
    const [slider,setSlider] = useState(0);
    function getCalendarList(){
        let calendarArray = [];
        for(let i = 0; i < 10; i++){
            let date = new Date();
            var newDate = new Date(date.setMonth(date.getMonth()+i));
            calendarArray.push(<BnbCalendarMonth minimal={props.minimal} setStayPick={props.setStayPick} stayPick={props.stayPick} datePick={props.datePick} setDatePick={props.setDatePick} hidden={false} month={newDate.getMonth()} year={newDate.getFullYear()} key={nanoid()} />);
        }
        return calendarArray;
    }

    // used for sliding calendar animation.
    function doSlide(value:number){
        if(slider + value < 0) return;
        if(slider + value > 8) return;

        setSlider(prev => prev + value);
    }

    return(
        <>
            {props.minimal && <BnbExactDatesSpacer></BnbExactDatesSpacer>}
            <BnbMonthsArrowContainer minimal={props.minimal || false}>
                <BnbMonthSwitchArrowSvgLeft isDisabled={slider -1 < 0} onClick={() => doSlide(-1)} viewBox="0 0 24 24">
                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                </BnbMonthSwitchArrowSvgLeft>

                <BnbMonthSwitchArrowSvgRight isDisabled={slider +1 > 8} onClick={() => doSlide(1)} viewBox="0 0 24 24">
                    <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
                </BnbMonthSwitchArrowSvgRight>

            </BnbMonthsArrowContainer>
            <BnbMonthsContainer>
                <BnbWeekDaysWrapper>
                    <BnbWeekDays/>
                    <BnbWeekDays/>
                </BnbWeekDaysWrapper>
                <BnbMonthsList slider={slider}>
                    {getCalendarList()}
                </BnbMonthsList>
            </BnbMonthsContainer>

            {!props.minimal && <BnbApproxDate approxDate={props.approxDate} setApproxDate={props.setApproxDate} />}
        </>
    )
}

export default BnbExactDatesPicker;