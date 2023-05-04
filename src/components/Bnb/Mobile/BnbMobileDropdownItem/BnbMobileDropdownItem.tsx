import { BnbMobileDropdownActiveContainer, BnbMobileDropdownContainer, BnbMobileDropdownTitle, BnbMobileDropdownValue } from "./BnbMobileDropdownItem.styled";




function BnbMobileDropdownItem(props:{
    title:string,
    titleActive:string,
    value:string,
    children:JSX.Element,
    stayPick:number,
    setStayPick:Function,
    i:number,
    downSharpBorder?:boolean,
    fadeDelay:string,
    IPlus?:boolean,
}){
    function isPlusOne(){
        if(props.IPlus){
            if(props.stayPick === props.i || props.stayPick === props.i + 1){
                return true;
            }
            return false;
        }
        return props.stayPick === props.i;
    }
    return(
        <BnbMobileDropdownContainer fadeDelay={props.fadeDelay} downSharpBorder={props.downSharpBorder || false} onClick={() => props.setStayPick(props.i)} toggle={isPlusOne()}>
            {!isPlusOne() && <>
                <BnbMobileDropdownTitle toggle={false}>{props.title}</BnbMobileDropdownTitle>
                <BnbMobileDropdownValue>{props.value}</BnbMobileDropdownValue>
            </>}
            
            {isPlusOne() && <>
                <BnbMobileDropdownActiveContainer>
                    <BnbMobileDropdownTitle toggle={true}>{props.titleActive}</BnbMobileDropdownTitle>

                    {props.children}
                </BnbMobileDropdownActiveContainer>
                
            </>}
            
        </BnbMobileDropdownContainer>
    )
}

export default BnbMobileDropdownItem;