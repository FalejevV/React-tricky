import { Guests } from "../../../../interface";
import { BnbGuestItemContainer, GuestCounterButton, GuestCounterContainer, GuestCounterIndicator, GuestInfoContainer, GuestInfoSubtitle, GuestInfoTitle } from "./BnbGuestItem.styled";



function BnbGuestItem(props:{
    title:string,
    subTitle:string,
    guests:number,
    subLink?:boolean,
    limit:number,
    setGuests:Function,
    adultRequired?:boolean,
    noMore?:boolean,
}){

    function changeGuestValue(increment:number){
        if(props.guests + increment < 1){
            props.setGuests((prev:Guests) => ({
                ...prev,
                [props.title.toLocaleLowerCase()]: 0
            }));
            return;
        }

        if(props.guests + increment > props.limit){
            props.setGuests((prev:Guests) => ({
                ...prev,
                [props.title.toLocaleLowerCase()]: props.limit
            }));
            return;
        }

        if(props.adultRequired){
            if(props.guests + increment < 1){
                return;
            }
        }
        props.setGuests((prev:Guests) => ({
            ...prev,
            [props.title.toLocaleLowerCase()]: props.guests + increment
        }));
    }

    return(
        <BnbGuestItemContainer>
            <GuestInfoContainer>
                <GuestInfoTitle>{props.title}</GuestInfoTitle>
                <GuestInfoSubtitle>{props.subTitle}</GuestInfoSubtitle>
            </GuestInfoContainer>

            
            <GuestCounterContainer>
                    <GuestCounterButton onClick={() => changeGuestValue(-1)} isDisabled={props.guests < 1} blocked={props.adultRequired}>-</GuestCounterButton>
                    <GuestCounterIndicator>{props.guests}</GuestCounterIndicator>
                    <GuestCounterButton onClick={() => changeGuestValue(1)} isDisabled={props.guests >= props.limit || (props.noMore || false)}>+</GuestCounterButton>
                </GuestCounterContainer>
        </BnbGuestItemContainer>
    )
}

export default BnbGuestItem;