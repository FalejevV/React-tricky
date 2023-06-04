import MenuElement from "@/components/MenuElement/MenuElement";
import { MenuContainer, MenuList } from "./Menu.styled";
import { useEffect } from "react";



function Menu(props:{
    setToggleMenu:Function,
    toggleMenu:boolean,
}){
    useEffect(() => {
        document.body.style.overflowX = "hidden";   
        if(props.toggleMenu){
            document.body.style.overflowY = 'hidden';
        }else{
            document.body.style.overflowY = "auto";
        }
    },[props.toggleMenu]);
    return (
        <MenuContainer toggle={props.toggleMenu}>
            <MenuList>
                <MenuElement onClick={() => props.setToggleMenu(false)} href="cards-swipe" icon={"/cards-swipe.jpg"}/>
                <MenuElement onClick={() => props.setToggleMenu(false)} href="airbnb" icon={"/airbnbPreview.jpg"}/>
                <MenuElement onClick={() => props.setToggleMenu(false)} href="lights" icon={"/LightsPreview.webp"}/>
                <MenuElement onClick={() => props.setToggleMenu(false)} href="sequencer" icon={"/question-mark.svg"}/>
            </MenuList>
        </MenuContainer>
    )
}


export default Menu;