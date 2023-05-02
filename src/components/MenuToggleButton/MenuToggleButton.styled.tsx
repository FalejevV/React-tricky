import styled, { css } from "styled-components";


export const MenuButtonContainer = styled.div`
    width:55px;
    height:55px;
    display:flex;
    border:2px solid grey;
    justify-content:center;
    align-items:center;
    padding:10px;
    background-color:black;
    opacity:0.5;
    position:fixed;
    bottom:0px;
    left:-1px;
    cursor:pointer;
    border-radius:0px 10px 10px 10px;
    z-index: 150000;
    transition: all 0.3s;
    &:hover{
        opacity:0.8;
    }
`

export const MenuButtonIcon = styled.svg<{
    toggle:boolean,
}>`
    width:30px;
    height:30px;
    fill:white;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    transition: all 0.3s;
    opacity:0;
    path{
        fill:white;
    }

    ${({ toggle }) => toggle && css`
        opacity:1;
        pointer-events:none;
    `}
`