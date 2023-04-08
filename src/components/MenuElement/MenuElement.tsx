import { MenuElementLink, MenuImage } from "./MenuElement.styled";


function MenuElement(props:{
    href:string,
    icon:string,
    onClick:Function,
}){
    return(
        <MenuElementLink onClick={() => props.onClick()} href={props.href}>
            <MenuImage src={props.icon}/>
        </MenuElementLink>
    )
}

export default MenuElement;