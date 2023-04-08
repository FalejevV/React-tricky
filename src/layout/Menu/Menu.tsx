import MenuElement from "@/components/MenuElement/MenuElement";
import { MenuContainer } from "./Menu.styled";



function Menu(props:{
    setToggleMenu:Function,
    toggleMenu:boolean,
}){
    return (
        <MenuContainer toggle={props.toggleMenu}>
            <MenuElement onClick={() => props.setToggleMenu(false)} href="cards-swipe" icon={"/cards-swipe.jpg"}/>
        </MenuContainer>
    )
}


export default Menu;