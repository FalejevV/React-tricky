import { FlexDate } from "../../../../interface";
import BnbSmallMonthCarousel from "../BnbSmallMonthCarousel/BnbSmallMonthCarousel";
import { BnbFlexDateDurationButton, BnbFlexDateDurationContainer, BnbFlexDateMonthsTitle, BnbFlexDateTitle, BnbFlexibleDateContainer } from "./BnbFlexibleDatePicker.styled";



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

    return(
        <BnbFlexibleDateContainer>
            <BnbFlexDateTitle>
                Stay for a weekend
            </BnbFlexDateTitle>
            <BnbFlexDateDurationContainer>
                <BnbFlexDateDurationButton onClick={() => switchFlexDuration(0)} toggle={props.flexDate.duration === 0}>Weekend</BnbFlexDateDurationButton>
                <BnbFlexDateDurationButton onClick={() => switchFlexDuration(1)} toggle={props.flexDate.duration === 1}>Week</BnbFlexDateDurationButton>
                <BnbFlexDateDurationButton onClick={() => switchFlexDuration(2)} toggle={props.flexDate.duration === 2}>Month</BnbFlexDateDurationButton>
            </BnbFlexDateDurationContainer>
            <BnbFlexDateMonthsTitle>Go anytime</BnbFlexDateMonthsTitle>
            <BnbSmallMonthCarousel />
        </BnbFlexibleDateContainer>
    )
}

export default BnbFlexibleDatePicker;