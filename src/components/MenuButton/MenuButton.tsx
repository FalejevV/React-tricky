import { MenuButtonContainer, MenuButtonIcon } from "./MenuButton.styled";



function MenuButton(props:{
    onClick:Function,
}){
    return(
        <MenuButtonContainer onClick={() => props.onClick()}>
            <MenuButtonIcon viewBox="0 0 24 24" width="24" height="24">
                <path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z" fill="#000"></path>
            </MenuButtonIcon>
        </MenuButtonContainer>
    )
}

export default MenuButton;