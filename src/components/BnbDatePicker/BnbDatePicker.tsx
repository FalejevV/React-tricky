import { useState } from "react";
import { BnbDatePickerContainer, BnbDatePickerTypeContainer, DateTypeButton } from "./BnbDatePicker.styled";



function BnbDatePicker(){
    const [dateType, setDateType] = useState(1);
    return(
        <BnbDatePickerContainer>
            <BnbDatePickerTypeContainer>
                <DateTypeButton onClick={() => setDateType(1)} toggle={dateType === 1}>Choose dates</DateTypeButton>
                <DateTypeButton onClick={() => setDateType(2)} toggle={dateType === 2}>Flexible dates</DateTypeButton>
            </BnbDatePickerTypeContainer>
        </BnbDatePickerContainer>
    )
}


export default BnbDatePicker;