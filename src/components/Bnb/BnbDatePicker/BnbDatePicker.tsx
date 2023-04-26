import { BnbDatePickerContainer, BnbDatePickerTypeContainer, DateTypeButton } from "./BnbDatePicker.styled";
import { DatePick, FlexDate } from "../../../../interface";
import BnbFlexibleDatePicker from "../BnbFlexibleDatePicker/BnbFlexibleDatePicker";
import BnbExactDatesPicker from "../BnbExactDatesPicker/BnbExactDatesPicker";


/*
    Main date picker component used in "Stays" tab, to pick "Check in" and "Check out" dates.
*/

function BnbDatePicker(props:{
    datePick:DatePick,
    setDatePick:Function,
    stayPick:number,
    setStayPick:Function,
    approxDate:number,
    setApproxDate:Function,
    dateType:number,
    setDateType:Function,
    flexDate:FlexDate,
    setFlexDate:Function,
}){

    return(
        <BnbDatePickerContainer shrink={props.dateType === 1}>
            <BnbDatePickerTypeContainer>
                <DateTypeButton onClick={() => props.setDateType(0)} toggle={props.dateType === 0}>Choose dates</DateTypeButton>
                <DateTypeButton onClick={() => {props.setDateType(1); props.setStayPick(2)}} toggle={props.dateType === 1}>Flexible dates</DateTypeButton>
            </BnbDatePickerTypeContainer>

            {props.dateType === 0 && <BnbExactDatesPicker setStayPick={props.setStayPick} stayPick={props.stayPick} datePick={props.datePick} setDatePick={props.setDatePick} setApproxDate={props.setApproxDate} approxDate={props.approxDate} />}
            {props.dateType === 1 && <BnbFlexibleDatePicker flexDate={props.flexDate} setFlexDate={props.setFlexDate} />}
        </BnbDatePickerContainer>
    )
}


export default BnbDatePicker;