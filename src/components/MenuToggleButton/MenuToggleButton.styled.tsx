import styled from "styled-components";


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
    position:absolute;
    top:100px;
    left:-1px;
    cursor:pointer;
    border-radius:0px 10px 10px 10px;
    z-index: 15;
    transition: all 0.3s;
    &:hover{
        opacity:0.8;
    }
`

export const MenuButtonIcon = styled.svg`
    width:30px;
    height:30px;
    fill:white;

    path{
        fill:white;
    }
`