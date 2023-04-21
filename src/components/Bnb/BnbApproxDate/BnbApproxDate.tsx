import { BnbApproxDateButton, BnbApproxDateContainer } from "./BnbApproxDate.styled";




function BnbApproxDate(props:{
    approxDate:number,
    setApproxDate:Function
}){
    function switchApproxDate(value:number){
        if(props.approxDate !== value){
            props.setApproxDate(value);
        }
    }
    return(
        <BnbApproxDateContainer>
            <BnbApproxDateButton toggle={props.approxDate === 0} onClick={() => switchApproxDate(0)}>Exact dates</BnbApproxDateButton>
            <BnbApproxDateButton toggle={props.approxDate === 1} onClick={() => switchApproxDate(1)}>± 1day</BnbApproxDateButton>
            <BnbApproxDateButton toggle={props.approxDate === 2} onClick={() => switchApproxDate(2)}>± 2days</BnbApproxDateButton>
            <BnbApproxDateButton toggle={props.approxDate === 3} onClick={() => switchApproxDate(3)}>± 3days</BnbApproxDateButton>
            <BnbApproxDateButton toggle={props.approxDate === 7} onClick={() => switchApproxDate(7)}>± 7days</BnbApproxDateButton>
        </BnbApproxDateContainer>
    )
}

export default BnbApproxDate;