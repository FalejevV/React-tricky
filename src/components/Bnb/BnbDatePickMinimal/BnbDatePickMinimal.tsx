import { DatePick } from "../../../../interface";
import { BnbDatePickerContainer } from "../BnbDatePicker/BnbDatePicker.styled";
import BnbExactDatesPicker from "../BnbExactDatesPicker/BnbExactDatesPicker";



function BnbDatePickMinimal(props:{
    setStayPick:Function,
    stayPick:number,
    datePick:DatePick,
    setDatePick:Function,
    setApproxDate:Function,
    approxDate:number,
    minimal?:boolean
}){
    return(
        <BnbDatePickerContainer shrink={false} minimal={props.minimal || false}>
            <BnbExactDatesPicker minimal setStayPick={props.setStayPick} stayPick={props.stayPick} datePick={props.datePick} setDatePick={props.setDatePick} setApproxDate={props.setApproxDate} approxDate={props.approxDate} />
        </BnbDatePickerContainer>
    )
}


export default BnbDatePickMinimal;