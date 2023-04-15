import { useState } from "react";
import { BnbDatePickerContainer, BnbDatePickerTypeContainer, BnbMonthsContainer, DateTypeButton } from "./BnbDatePicker.styled";
import BnbCalendarMonth from "../BnbCalendarMonth/BnbCalendarMonth";



function BnbDatePicker(){
    const [dateType, setDateType] = useState(1);
    const [monthSlider, setMonthSlider] = useState(new Date().getMonth());
    return(
        <BnbDatePickerContainer>
            <BnbDatePickerTypeContainer>
                <DateTypeButton onClick={() => setDateType(1)} toggle={dateType === 1}>Choose dates</DateTypeButton>
                <DateTypeButton onClick={() => setDateType(2)} toggle={dateType === 2}>Flexible dates</DateTypeButton>
            </BnbDatePickerTypeContainer>

            <BnbMonthsContainer>
                <BnbCalendarMonth year={2023} month={monthSlider} />
                <BnbCalendarMonth year={2023} month={monthSlider+1} />
            </BnbMonthsContainer>
        </BnbDatePickerContainer>
    )
}


export default BnbDatePicker;