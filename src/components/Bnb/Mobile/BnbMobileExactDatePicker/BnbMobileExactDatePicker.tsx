import BnbApproxDate from "../../BnbApproxDate/BnbApproxDate";
import BnbWeekDays from "../../BnbWeekDays/BnbWeekDays";
import BnbMobileCalendarList from "../BnbMobileCalendarList/BnbMobileCalendarList";
import { BnbMobileWeekDaysContainer } from "./BnbMobileExactDatePicker.styled";



function BnbMobileExactDatePicker(props:{
    approxDate:number,
    setApproxDate:Function
}){
    return(
        <>
             <BnbMobileWeekDaysContainer>
                <BnbWeekDays width="100%"/>
            </BnbMobileWeekDaysContainer>
            <BnbMobileCalendarList />
            <BnbApproxDate mobile approxDate={props.approxDate} setApproxDate={props.setApproxDate} />
        </>
    )
}


export default BnbMobileExactDatePicker;