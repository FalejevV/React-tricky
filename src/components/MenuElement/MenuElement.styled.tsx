import Link from "next/link";
import styled from "styled-components";

export const MenuElementLink = styled(Link)`
    opacity:0.5;
    position:relative;
    transition: all 0.3s;
    &:hover{
        opacity:0.8;
    }
`

export const MenuImage = styled.img`
    width:250px;
    height:250px;
    object-fit:contain;
    filter: grayscale(100%);

    
    @media(max-width:950px){
        width:150px;
        height:150px;
    }
`