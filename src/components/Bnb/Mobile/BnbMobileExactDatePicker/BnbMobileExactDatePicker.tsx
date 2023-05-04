import { DatePick } from "../../../../../interface";
import BnbApproxDate from "../../BnbApproxDate/BnbApproxDate";
import BnbWeekDays from "../../BnbWeekDays/BnbWeekDays";
import BnbMobileCalendarList from "../BnbMobileCalendarList/BnbMobileCalendarList";
import { BnbMobileWeekDaysContainer } from "./BnbMobileExactDatePicker.styled";



function BnbMobileExactDatePicker(props:{
    approxDate:number,
    setApproxDate:Function,
    datePick:DatePick,
    setDatePick:Function,
    stayPick:number,
    setStayPick:Function,
}){
    return(
        <>
             <BnbMobileWeekDaysContainer>
                <BnbWeekDays width="100%"/>
            </BnbMobileWeekDaysContainer>
            <BnbMobileCalendarList datePick={props.datePick} setDatePick={props.setDatePick} stayPick={props.stayPick} setStayPick={props.setStayPick} />
            <BnbApproxDate mobile approxDate={props.approxDate} setApproxDate={props.setApproxDate} />
        </>
    )
}


export default BnbMobileExactDatePicker;