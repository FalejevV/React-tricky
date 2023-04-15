import { JsxElement } from "typescript";
import { BnbCalendarMonthContainer, BnbCalendarMonthTitle, BnbMonthBlankItem, BnbMonthGrid, BnbMonthItem } from "./BnbCalendarMonth.styled";
import { nanoid } from "nanoid";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getDaysInMonth(year:number, month:number) {
    return new Date(year, month, 0).getDate();
}
function getDayStart(year:number, month:number){
    month = new Date().getMonth(), 
    year = new Date().getFullYear()
    return new Date(`${year}-${month + 1}-01`).getDay();
}
  

function BnbCalendarMonth(props:{
    month:number,
    year:number,
}){
    console.log(props.year,props.month);
    function getMonthItems(){
        let itemsArray:JSX.Element[] = [];
        let startDay = getDayStart(props.year, props.month);
        for (let i = 0; i < startDay; i++){
            itemsArray.push(<BnbMonthBlankItem key={nanoid()} />);
        }
        for (let i = 0; i < getDaysInMonth(props.year,props.month); i++){
            itemsArray.push(
                <BnbMonthItem key={nanoid()} toggle={false}>{i+1}</BnbMonthItem>
            )
        }
        return itemsArray;
    }
    return(
        <BnbCalendarMonthContainer>
            <BnbCalendarMonthTitle>{monthNames[props.month]} {props.year}</BnbCalendarMonthTitle>
            <BnbMonthGrid>
                {getMonthItems()}
            </BnbMonthGrid>
        </BnbCalendarMonthContainer>
    )
}

export default BnbCalendarMonth;