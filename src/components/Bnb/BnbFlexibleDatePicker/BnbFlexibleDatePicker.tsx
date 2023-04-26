import { useEffect, useRef, useState } from "react";
import { FlexDate } from "../../../../interface";
import BnbSmallMonthCarousel from "../BnbSmallMonthCarousel/BnbSmallMonthCarousel";
import { BnbFlexDateCarouselArrowSVG, BnbFlexDateCarouselWrap, BnbFlexDateDurationButton, BnbFlexDateDurationContainer, BnbFlexDateMonthsTitle, BnbFlexDateTitle, BnbFlexibleDateContainer } from "./BnbFlexibleDatePicker.styled";


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function BnbFlexibleDatePicker(props:{
    flexDate:FlexDate,
    setFlexDate:Function,
}){

    const [slider,setSlider] = useState(0);
    const carouselRef = useRef(null);
    const [sliderDebounce,setSliderDebounce] = useState(false);
    function doSlide(value:number){
        if(slider + value < 0) return;
        if(slider + value > 8) return;

        setSlider(prev => prev + value);
    }

    useEffect(() => {
        if(!carouselRef.current) return;
        if(sliderDebounce) return;
        setSliderDebounce(true);
        let current = carouselRef.current as HTMLDivElement;
        if(current){
            if(slider === 0){
                current.scroll(0,0);
                setSliderDebounce(false);
                return;
            }
            current.scroll(slider * 128 + (slider * 1),0);
            setSliderDebounce(false);
        }
    },[slider,sliderDebounce]);

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
            <BnbFlexDateCarouselWrap>
                
                <BnbFlexDateCarouselArrowSVG onClick={() => doSlide(-1)} enabled={slider > 0} left viewBox="0 0 24 24">
                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                </BnbFlexDateCarouselArrowSVG>
                
                <BnbSmallMonthCarousel carouselRef={carouselRef} flexDate={props.flexDate} setFlexDate={props.setFlexDate} />

                <BnbFlexDateCarouselArrowSVG onClick={() => doSlide(1)} enabled={slider < 3} right viewBox="0 0 24 24">
                    <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
                </BnbFlexDateCarouselArrowSVG>
            </BnbFlexDateCarouselWrap>
        </BnbFlexibleDateContainer>
    )
}

export default BnbFlexibleDatePicker;