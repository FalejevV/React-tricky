import styled, { keyframes } from "styled-components";


let fadeInMenu = keyframes`
    from{
        opacity:0;
        bottom:-100px;
    }
    to{
        opacity:1;
        bottom:0px;
    }
`

export const BnbMobileSearchSubmitFooterContainer = styled.div`
    width:100%;
    height:70px;
    position:absolute;
    bottom:0px;
    left:0px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding:0px 18px;
    opacity:0;
    animation:${fadeInMenu} 0.5s 0.3s forwards;
    background-color:white;
    border-top: 1px solid #ededed;
`

export const BnbMobileSearchSubmit = styled.button`
    background-color: #E7195F;
    color:white;
    padding:13px 25px;
    font-size:16px;
    border:0px;
    border-radius:8px;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    cursor:pointer;
`

export const MnbMobileSearchSVG = styled.svg`
    fill:white;
    width:20px;
    height:20px;
`