import { useEffect, useRef, useState } from "react";
import { BnbMobileCloseButton, BnbMobileLargeMenuHeaderContainer, BnbMobileMenuTypeContainer, BnbMobileTypeButton, BnbMobileTypeButtonUnderline } from "./BnbMobileLargeMenuHeader.styled"


function BnbMobileLargeMenuHeader(props:{
    menuType:number,
    menuToggle:boolean,
    setMenuToggle:Function,
    setMenuType:Function
}){

    const [underline,setUnderline] = useState({
        width:"0px",
        left:"0px"
    })
    const staysRef = useRef<HTMLDivElement>(null);
    const experiencesRef = useRef<HTMLDivElement>(null);
    const menuTypeRefs = [staysRef, experiencesRef];
    

    useEffect(() => {
        if(menuTypeRefs[props.menuType].current && menuTypeRefs[props.menuType].current !== null){
            let menuTypeButton = menuTypeRefs[props.menuType].current as HTMLDivElement;
            let elementWidth = menuTypeButton.offsetWidth - 25;
            let elementLocation = menuTypeButton.offsetLeft + 13;
            setUnderline({
                width:elementWidth+"px",
                left:elementLocation+"px"
            });
        }
    },[props.menuType,props.menuToggle])

    
    return(
        <BnbMobileLargeMenuHeaderContainer>
            <BnbMobileCloseButton  viewBox="0 0 24 24" onClick={() => props.setMenuToggle(false)}>
                <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
            </BnbMobileCloseButton>
            
            <BnbMobileMenuTypeContainer>
                <BnbMobileTypeButton ref={staysRef} toggle={props.menuType === 0} onClick={() => props.setMenuType(0)}>Stays</BnbMobileTypeButton>
                <BnbMobileTypeButton ref={experiencesRef} toggle={props.menuType === 1} onClick={() => props.setMenuType(1)}>Experiences</BnbMobileTypeButton>
                <BnbMobileTypeButtonUnderline left={underline.left} width={underline.width}></BnbMobileTypeButtonUnderline>
            </BnbMobileMenuTypeContainer>
        </BnbMobileLargeMenuHeaderContainer>
    )
}

export default BnbMobileLargeMenuHeader