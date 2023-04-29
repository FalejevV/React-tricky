import { BnbWeekDaysContainer, BnbWeekDaysItem } from "./BnbWeekDays.styled";



function BnbWeekDays(props:{
    width?:string,
}){
    return(
        <BnbWeekDaysContainer width={props.width}>
            <BnbWeekDaysItem>Su</BnbWeekDaysItem>
            <BnbWeekDaysItem>Mo</BnbWeekDaysItem>
            <BnbWeekDaysItem>Tu</BnbWeekDaysItem>
            <BnbWeekDaysItem>We</BnbWeekDaysItem>
            <BnbWeekDaysItem>Th</BnbWeekDaysItem>
            <BnbWeekDaysItem>Fr</BnbWeekDaysItem>
            <BnbWeekDaysItem>Sa</BnbWeekDaysItem>
        </BnbWeekDaysContainer>
    )
}

export default BnbWeekDays;