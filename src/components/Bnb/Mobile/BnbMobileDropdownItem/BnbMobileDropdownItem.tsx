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
}){
    
    return(
        <BnbMobileDropdownContainer fadeDelay={props.fadeDelay} downSharpBorder={props.downSharpBorder || false} onClick={() => props.setStayPick(props.i)} toggle={props.stayPick === props.i}>
            {props.stayPick !== props.i && <>
                <BnbMobileDropdownTitle toggle={false}>{props.title}</BnbMobileDropdownTitle>
                <BnbMobileDropdownValue>{props.value}</BnbMobileDropdownValue>
            </>}
            
            {props.stayPick === props.i && <>
                <BnbMobileDropdownActiveContainer>
                    <BnbMobileDropdownTitle toggle={true}>{props.titleActive}</BnbMobileDropdownTitle>

                    {props.children}
                </BnbMobileDropdownActiveContainer>
                
            </>}
            
        </BnbMobileDropdownContainer>
    )
}

export default BnbMobileDropdownItem;