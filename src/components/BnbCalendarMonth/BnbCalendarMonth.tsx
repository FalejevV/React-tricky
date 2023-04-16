import { JsxElement } from "typescript";
import { BnbCalendarMonthContainer, BnbCalendarMonthTitle, BnbMonthBlankItem, BnbMonthGrid, BnbMonthItem } from "./BnbCalendarMonth.styled";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getDaysInMonth(year:number, month:number) {
    return new Date(year, month, 0).getDate();
}
function getDayStart(year:number, month:number){
    return new Date(`${year}-${month + 1}-01`).getDay();
}
  

function BnbCalendarMonth(props:{
    hidden:boolean,
    month:number,
    year:number,
}){
    const [month,setMonth] = useState(props.month);
    const [year,setYear] = useState(props.year);

    useEffect(() => {
        if(props.month > 11){
            setYear(prev => prev + 1);
            setMonth(0);
        }else{
            setMonth(props.month);
            setYear(props.year);
        }
    },[props.month,props.year]);

    function getMonthItems(){
        let itemsArray:JSX.Element[] = [];
        let startDay = getDayStart(year, month);
        let currentDate = new Date();
        for (let i = 0; i < startDay; i++){
            itemsArray.push(<BnbMonthBlankItem key={nanoid()} />);
        }
        for (let i = 0; i < getDaysInMonth(year,month); i++){
            itemsArray.push(
                <BnbMonthItem available={currentDate.getDate() <= i+1 || currentDate.getMonth() < month} key={nanoid()} toggle={false}>{i+1}</BnbMonthItem>
            )
        }
        return itemsArray;
    }
    return(
        <BnbCalendarMonthContainer displayHidden={props.hidden}>
            <BnbCalendarMonthTitle>{monthNames[month]} {year}</BnbCalendarMonthTitle>
            <BnbMonthGrid>
                {getMonthItems()}
            </BnbMonthGrid>
        </BnbCalendarMonthContainer>
    )
}

export default BnbCalendarMonth;