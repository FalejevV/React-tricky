import { useEffect, useState } from "react";
import { Guests } from "../../../../interface";
import BnbGuestItem from "../BnbGuestItem/BnbGuestItem";
import { BnbGuestPickerContainer } from "./BnbGuestPicker.styled";



function BnbGuestPicker(props:{
    guests:Guests,
    setGuests:Function
}) {
    const [adultRequired, setAdultRequired] = useState(false);

    useEffect(() => {
        if(props.guests.adults < 1){
            if(props.guests.children > 0 || props.guests.infants > 0 || props.guests.pets > 0){
                setAdultRequired(true);
                props.setGuests((prev:Guests) => ({
                    ...prev,
                    adults:1,
                }));
            }
        }

        if(props.guests.children < 1 && props.guests.infants < 1 && props.guests.pets < 1){
            setAdultRequired(false);
        }
    },[props.guests]);

    console.log(adultRequired);
    return(
        <BnbGuestPickerContainer>
            <BnbGuestItem setGuests={props.setGuests} title="Adults" subTitle={"Ages 13 or above"} guests={props.guests.adults} limit={16} adultRequired={adultRequired}/>
            <BnbGuestItem setGuests={props.setGuests} title="Children" subTitle={"Ages 2–12"} guests={props.guests.children} limit={15}/>
            <BnbGuestItem setGuests={props.setGuests} title="Infants" subTitle={"Under 2"} guests={props.guests.infants} limit={5}/>
            <BnbGuestItem setGuests={props.setGuests} title="Pets" subTitle={"Bringing a service animal?"} subLink guests={props.guests.pets} limit={5}/>
        </BnbGuestPickerContainer>
    )
}


export default BnbGuestPicker;