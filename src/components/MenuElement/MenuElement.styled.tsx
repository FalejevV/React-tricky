import Link from "next/link";
import styled from "styled-components";

export const MenuElementLink = styled(Link)`
    width:100%;
    height:100%;
    opacity:0.5;

    transition: all 0.3s;
    &:hover{
        opacity:0.8;
    }
`

export const MenuImage = styled.img`
    width:100%;
    height:100%;
    object-fit:contain;
    filter: grayscale(100%);
`