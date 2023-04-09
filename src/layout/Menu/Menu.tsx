import MenuElement from "@/components/MenuElement/MenuElement";
import { MenuContainer } from "./Menu.styled";



function Menu(props:{
    setToggleMenu:Function,
    toggleMenu:boolean,
}){
    return (
        <MenuContainer toggle={props.toggleMenu}>
            <MenuElement onClick={() => props.setToggleMenu(false)} href="cards-swipe" icon={"/cards-swipe.jpg"}/>
            <MenuElement onClick={() => props.setToggleMenu(false)} href="airbnb" icon={"/question-mark.svg"}/>
        </MenuContainer>
    )
}


export default Menu;