import { nanoid } from "nanoid";
import BnbSmallMonthTab from "../BnbSmallMonthTab/BnbSmallMonthTab";
import { BnbSmallMonthCarouselContainer, BnbSmallMonthCarouselList } from "./BnbSmallMonthCarousel.styled";
import { FlexDate } from "../../../../interface";


function BnbSmallMonthCarousel(props:{
    flexDate:FlexDate,
    setFlexDate:Function,
    carouselRef:any
}){

    function getCalendarList(){
        let calendarArray = [];
        for(let i = 1; i < 10; i++){
            let date = new Date();
            let newDate = new Date(date.setMonth(date.getMonth()+i));
            calendarArray.push(<BnbSmallMonthTab onClick={() => toggleMonthTab([newDate.getFullYear(), newDate.getMonth()])} key={i} date={newDate} toggle={isMonthSelected(newDate.getFullYear(), newDate.getMonth())} />);
        }
        return calendarArray;
    }

    function isMonthSelected(year:number, month:number){
        let monthFound = props.flexDate.dates.find((dateItem:number[]) => dateItem[0] === year && dateItem[1] === month) || [];
        return monthFound.length > 0;
    }

    function toggleMonthTab(date:number[]){
        let dateExists = props.flexDate.dates.find((dateItem:number[]) => dateItem[0] === date[0] && dateItem[1] === date[1]);
        if(dateExists){
            props.setFlexDate((prev:FlexDate) => ({
                ...prev,
                dates: prev.dates.filter((dateItem:number[]) => {
                    if(dateItem[0] === date[0] && dateItem[1] === date[1]){
                        return false
                    }
                    return true;
                })
            }))
        }else{
            let newDatesArray = [...props.flexDate.dates];
            newDatesArray.push(date);
            props.setFlexDate((prev:FlexDate) => ({
                ...prev,
                dates: newDatesArray
            }))
        }
    }
    return(
        <BnbSmallMonthCarouselContainer>            
            <BnbSmallMonthCarouselList ref={props.carouselRef}>
                {getCalendarList()}
            </BnbSmallMonthCarouselList>
        </BnbSmallMonthCarouselContainer>
    )
}

export default BnbSmallMonthCarousel;