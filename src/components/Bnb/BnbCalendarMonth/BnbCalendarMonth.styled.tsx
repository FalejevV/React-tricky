import styled, { css } from "styled-components";


export const BnbCalendarMonthContainer = styled.div<{
    displayHidden:boolean,
}>`
    width:390px;
    height:380px;
    display:flex;
    flex-direction:column;
    gap:50px;
    align-items: center;
    padding:0px 27px;

    ${({ displayHidden }) => displayHidden && css`
        display:none;
    `}
`

export const BnbCalendarMonthTitle = styled.p`
    color:black;
    font-size:16px;
    font-weight: 600;
`

export const BnbMonthGrid = styled.div`
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns:repeat(7,48px);
    grid-auto-rows: 46px;
    row-gap:1px;
`

export const BnbMonthItem = styled.p<{
    toggle: boolean,
    available: boolean,
    selected: boolean,
    isBetweenDates:boolean
}>`
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;
    border-radius: 50%;
    color:black;
    font-size:15px;
    font-weight: 600;
    opacity:0.7;
    cursor:pointer;
    position: relative;

    &:after{
        position: absolute;
        content:"";
        left:1px;
        top:0px;
        width:calc(100% - 4px);
        height:calc(100% - 2px);
        border-radius: 50%;
        border:1px solid transparent;
    }

    &:hover{
        &:after{
            border:1px solid black;
        }
    }

    ${({ toggle }) => toggle && css`
        background-color: black;
        color:white;
    `}

    ${({ available }) => !available && css`
        opacity: 0.2;
        pointer-events: none;
        &:hover{
            cursor:default;
        }
    `}

    ${({ selected }) => selected && css`
        background-color: black;
        color:white;
        opacity:1;
        &:hover{
            background-color: black;
            color:white;
        }
    `}

    ${({ isBetweenDates }) => isBetweenDates && css`
        background-color:#d1d1d148;
        border-radius: 0px;
    `}
`

export const BnbMonthBlankItem = styled.div`
    width:100%;
    height:100%;
    background-color: transparent;
`