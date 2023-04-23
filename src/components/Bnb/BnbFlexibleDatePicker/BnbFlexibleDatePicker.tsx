import { FlexDate } from "../../../../interface";
import BnbSmallMonthCarousel from "../BnbSmallMonthCarousel/BnbSmallMonthCarousel";
import { BnbFlexDateDurationButton, BnbFlexDateDurationContainer, BnbFlexDateMonthsTitle, BnbFlexDateTitle, BnbFlexibleDateContainer } from "./BnbFlexibleDatePicker.styled";


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function BnbFlexibleDatePicker(props:{
    flexDate:FlexDate,
    setFlexDate:Function,
}){

    function switchFlexDuration(value:number){
        props.setFlexDate((prev:FlexDate) => ({
            ...prev,
            duration:value
        }))
    }

    function getStayText(){
        return props.flexDate.duration === 0 ? "weekend" : props.flexDate.duration === 1 ? "week" : "month"
    }

    function getMonthsText(){
        if(props.flexDate.dates.length === 0) return "anytime";
        let counter = 0;
        let orderedDates = props.flexDate.dates.sort((dateItema:number[],dateItemb:number[]) => {
            return dateItema[0] - dateItemb[0] && dateItema[1] - dateItemb[1];
        })

        let resultString = "in ";
        orderedDates.forEach((dateItem:number[]) => {
            if(counter >= 5) return;
            
            if(counter === 4){
                resultString = resultString.slice(0,resultString.length -2);
                resultString += "...";
            }else{
                resultString += monthNames[dateItem[1]] + ", ";
            }
            counter += 1;
            
        });

        return counter < 4 ? resultString.slice(0,resultString.length -2) : resultString;
    }

    return(
        <BnbFlexibleDateContainer>
            <BnbFlexDateTitle>
                Stay for a {getStayText()}
            </BnbFlexDateTitle>
            <BnbFlexDateDurationContainer>
                <BnbFlexDateDurationButton onClick={() => switchFlexDuration(0)} toggle={props.flexDate.duration === 0}>Weekend</BnbFlexDateDurationButton>
                <BnbFlexDateDurationButton onClick={() => switchFlexDuration(1)} toggle={props.flexDate.duration === 1}>Week</BnbFlexDateDurationButton>
                <BnbFlexDateDurationButton onClick={() => switchFlexDuration(2)} toggle={props.flexDate.duration === 2}>Month</BnbFlexDateDurationButton>
            </BnbFlexDateDurationContainer>
            <BnbFlexDateMonthsTitle>Go {getMonthsText()}</BnbFlexDateMonthsTitle>
            <BnbSmallMonthCarousel flexDate={props.flexDate} setFlexDate={props.setFlexDate} />
        </BnbFlexibleDateContainer>
    )
}

export default BnbFlexibleDatePicker;