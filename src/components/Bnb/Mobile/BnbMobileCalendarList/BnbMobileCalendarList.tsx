import { nanoid } from "nanoid";
import { DatePick } from "../../../../../interface";
import BnbCalendarMonth from "../../BnbCalendarMonth/BnbCalendarMonth";
import { BnbMobileCalendarListContainer } from "./BnbMobileCaledarList.styled";



function BnbMobileCalendarList(props:{
    datePick:DatePick,
    setDatePick:Function,
    stayPick:number,
    setStayPick:Function,
}){

    function getCalendarList(){
        let calendarArray = [];
        for(let i = 0; i < 10; i++){
            let date = new Date();
            var newDate = new Date(date.setMonth(date.getMonth()+i));
            calendarArray.push(<BnbCalendarMonth mobile minimal={false} setStayPick={props.setStayPick} stayPick={props.stayPick} datePick={props.datePick} setDatePick={props.setDatePick} hidden={false} month={newDate.getMonth()} year={newDate.getFullYear()} key={nanoid()} />);
        }
        return calendarArray;
    }

    return(
        <BnbMobileCalendarListContainer>
            {getCalendarList()}
        </BnbMobileCalendarListContainer>
    )
}


export default BnbMobileCalendarList