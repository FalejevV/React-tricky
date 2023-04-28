import styled, { css } from "styled-components";


export const BnbMobileDropdownContainer = styled.div<{
    toggle:boolean,
    downSharpBorder:boolean,
}>`
    width:100%;
    height:55px;
    background-color:white;
    border-radius: 15px;
    border:1px solid #f4f4f4;
    box-shadow: 0px 3px 3px 1px #67676710;
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0px 20px;

    ${({ toggle, downSharpBorder }) => toggle && css`
        height:fit-content;
        border-radius: ${downSharpBorder ? "25px 25px 0px 0px" : "25px"};
        box-shadow: 0px 5px 5px 4px #00000030;
        padding:20px 25px;
    `}
`


export const BnbMobileDropdownTitle = styled.p<{
    toggle:boolean,
}>`
    font-size:15px;
    color:#555555;

    ${({ toggle }) => toggle && css`
        font-size: 23px;
        font-weight:600;
        color:black;
    `}
`


export const BnbMobileDropdownValue = styled.p`
    font-size:15px;
    color:#000000;
`


export const BnbMobileDropdownActiveContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    gap:15px;
`