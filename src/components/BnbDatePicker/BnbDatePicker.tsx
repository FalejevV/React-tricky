import { useEffect, useState } from "react";
import { BnbDatePickerContainer, BnbDatePickerTypeContainer, BnbMonthSwitchArrowSvgLeft, BnbMonthSwitchArrowSvgRight, BnbMonthsArrowContainer, BnbMonthsContainer, BnbMonthsList, DateTypeButton } from "./BnbDatePicker.styled";
import BnbCalendarMonth from "../BnbCalendarMonth/BnbCalendarMonth";



function BnbDatePicker(){
    const [dateType, setDateType] = useState(1);
    const [slider,setSlider] = useState(0);

    function getCalendarList(){
        let calendarArray = [];
        for(let i = 0; i < 10; i++){
            let date = new Date();
            var newDate = new Date(date.setMonth(date.getMonth()+i));
            calendarArray.push(<BnbCalendarMonth hidden={false} month={newDate.getMonth()} year={newDate.getFullYear()} />);
        }
        return calendarArray;
    }

    function doSlide(value:number){
        if(slider + value < 0) return;
        if(slider + value > 8) return;
        setSlider(prev => prev + value);
    }

    return(
        <BnbDatePickerContainer>
            <BnbDatePickerTypeContainer>
                <DateTypeButton onClick={() => setDateType(1)} toggle={dateType === 1}>Choose dates</DateTypeButton>
                <DateTypeButton onClick={() => setDateType(2)} toggle={dateType === 2}>Flexible dates</DateTypeButton>
            </BnbDatePickerTypeContainer>

            <BnbMonthsArrowContainer>
                <BnbMonthSwitchArrowSvgLeft isDisabled={slider -1 < 0} onClick={() => doSlide(-1)} viewBox="0 0 24 24">
                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                </BnbMonthSwitchArrowSvgLeft>

                <BnbMonthSwitchArrowSvgRight isDisabled={slider +1 > 8} onClick={() => doSlide(1)} viewBox="0 0 24 24">
                    <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
                </BnbMonthSwitchArrowSvgRight>

            </BnbMonthsArrowContainer>

            <BnbMonthsContainer>
                <BnbMonthsList slider={slider}>
                    {getCalendarList()}
                </BnbMonthsList>
            </BnbMonthsContainer>
        </BnbDatePickerContainer>
    )
}


export default BnbDatePicker;