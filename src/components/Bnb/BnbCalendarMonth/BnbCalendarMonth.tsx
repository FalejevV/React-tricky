import { BnbCalendarMonthContainer, BnbCalendarMonthTitle, BnbMonthBlankItem, BnbMonthGrid, BnbMonthItem } from "./BnbCalendarMonth.styled";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { DatePick } from "../../../../interface";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getDaysInMonth(year:number, month:number) {
    return new Date(year, month+1, 0).getDate();
}
function getDayStart(year:number, month:number){
    return new Date(`${year}-${month + 1}-01`).getDay();
}
  

/* 
    Individual interactive calendar month, used in date picking window.
*/
function BnbCalendarMonth(props:{
    hidden:boolean,
    month:number,
    year:number,
    datePick:DatePick,
    setDatePick:Function,
    stayPick:number,
    setStayPick:Function,
    minimal?:boolean
}){
    const [month,setMonth] = useState(props.month);
    const [year,setYear] = useState(props.year);

    let currentDate = new Date();
    useEffect(() => {
        if(props.month > 11){
            setYear(prev => prev + 1);
            setMonth(0);
        }else{
            setMonth(props.month);
            setYear(props.year);
        }
    },[props.month,props.year]);
    
    /*
        Function is handling clicks of month day click (BnbMonthItem).
        stayPick = 2 ? first "Check in" date pick.
        stayPick = 3 ? second "Check out" date pick.

        minimal prop defines a behaviour of "Experiences" menu tab. It has "minimised" UI and functionality.
    */
    function datePickHandler(year:number,month:number,day:number){
        if(props.stayPick === 2){
            if(props.minimal){
                props.setDatePick({
                    startDate: new Date(year,month,day),
                    endDate:new Date(year,month,day),
                });
                props.setStayPick(3);
                return;
            }else{
                props.setDatePick((prev:DatePick) => ({
                    ...prev,
                    startDate: new Date(year,month,day)
                }));
    
                props.setStayPick(3);
                return;
            }
        }

        if(props.stayPick === 3){
            if(new Date(year,month,day).valueOf() < props.datePick.startDate.valueOf()){
                if(props.minimal){
                    props.setDatePick(({
                        startDate: new Date(year,month,day),
                        endDate:new Date(year,month,day),
                    }));
                    props.setStayPick(2);
                    return;
                }

                props.setDatePick(({
                    startDate: new Date(year,month,day),
                    endDate:new Date(0,0,0),
                }));
                props.setStayPick(3);
                return;
            }

            props.setDatePick((prev:DatePick) => ({
                ...prev,
                endDate: new Date(year,month,day)
            }))
            if(props.minimal){
                props.setStayPick(2);
            }
            return;
        }
    }


    // Effect checks if picked "Check in" date is later than "Check out" date.
    useEffect(() => {
        if(props.datePick.startDate.valueOf() > props.datePick.endDate.valueOf() && props.datePick.endDate.valueOf() !== new Date(0,0,0).valueOf()){
            props.setDatePick((prev:DatePick) => ({
                ...prev,
                endDate:new Date(0,0,0)
            }))
        }
    },[props.datePick]);

    // Check is current month day is selected as "Check in" or "Check out" date, to apply selected styles
    function isSelected(year:number,month:number,day:number){
        if(!isAvaliable(year,month,day)) return false;
        let date = new Date(year,month,day);
        if(props.datePick.startDate.valueOf() === date.valueOf() || props.datePick.endDate.valueOf() === date.valueOf())  return true;
        return false;
    }

    // Checks if current month day is in between the selected "Check in" and "Check out" dates, to apply some highlight styles.
    function isBetweenDates(year:number,month:number,day:number){
        if(!isAvaliable(year,month,day)) return false;
        if(props.datePick.startDate.valueOf() === new Date(0,0,0).valueOf() || props.datePick.endDate.valueOf() === new Date(0,0,0).valueOf()) return false;
        let date = new Date(year,month,day);
        if(props.datePick.startDate.valueOf() < date.valueOf() && props.datePick.endDate.valueOf() > date.valueOf()) return true;
        return false;
    }

    // Checks if current month day has not passed, and can be selected.
    function isAvaliable(year:number,month:number,day:number){
        return currentDate.getDate() <= day || currentDate.getMonth() < month || currentDate.getFullYear() < year;
    }

    // By passed in year and month props, creates an element array of days, that together form an interactive calendar month.
    function getMonthItems(){
        let itemsArray:JSX.Element[] = [];
        let startDay = getDayStart(year, month);
        for (let i = 0; i < startDay; i++){
            itemsArray.push(<BnbMonthBlankItem key={nanoid()} />);
        }
        for (let i = 0; i < getDaysInMonth(year,month); i++){
            itemsArray.push(
                <BnbMonthItem isBetweenDates={isBetweenDates(year,month,i+1)} selected={isSelected(year,month,i+1)} available={isAvaliable(year,month,i+1)} key={nanoid()} toggle={false} onClick={() => datePickHandler(year, month,i+1)}>{i+1}</BnbMonthItem>
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