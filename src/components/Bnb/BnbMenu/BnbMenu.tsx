import { BnbMenuContainer, BnbSmallMenu, BnbSmallMenuSearhIcon, BnbSmallMenuText, SmallMenuDivider } from "./BnbMenu.styled";


/*

    Small header menu

---------------------------------------------------------
    (Anywhere) | (Any week) | (Add guests (🔍))
---------------------------------------------------------

*/

function BnbMenu(props:{
    onClick:Function,
    menuToggle:boolean,
    setStayPick:Function,
}){
    return(
        <BnbMenuContainer>
            <BnbSmallMenu menuToggle={props.menuToggle} onClick={() => props.onClick((prev:boolean) => !prev)}>
                <BnbSmallMenuText onClick={() => props.setStayPick(1)}>Anywhere</BnbSmallMenuText>
                <SmallMenuDivider></SmallMenuDivider>
                <BnbSmallMenuText onClick={() => props.setStayPick(2)}>Any week</BnbSmallMenuText>
                <SmallMenuDivider></SmallMenuDivider>
                <BnbSmallMenuText onClick={() => props.setStayPick(4)}>Add guests</BnbSmallMenuText>
                <BnbSmallMenuSearhIcon viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </BnbSmallMenuSearhIcon>
            </BnbSmallMenu>
        </BnbMenuContainer>
    )
}


export default BnbMenu;