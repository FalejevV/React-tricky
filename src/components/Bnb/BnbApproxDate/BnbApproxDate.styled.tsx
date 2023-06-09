import styled, { css } from "styled-components";


export const BnbApproxDateContainer = styled.div<{
    mobile?:boolean
}>`
    width:100%;
    position: absolute;
    bottom: 35px;
    left:0px;
    padding:0px 62px;
    display:flex;
    gap:10px;
    overflow-x:scroll;
    @media(max-width:948px){
        justify-content:center;
    }

    ${({ mobile }) => mobile && css`
        white-space: nowrap;
        position:relative;
        top:0px;
        bottom:0px;
        left:-10px;
        justify-content:flex-start;
        padding:10px 10px;
        width:calc(100% + 40px);
        @media(max-width:948px){
            justify-content:flex-start;
        }
        margin-left:20px;
        border-top:1px solid #d8d8d8;
        ${BnbApproxDateButton}{
            padding:6px 14px;
        }
    `}
`


export const BnbApproxDateButton = styled.button<{
    toggle: boolean
}>`
    cursor: pointer;
    color:black;
    background-color: white;
    padding:7px 15px;
    border:1px solid #d6d6d6;
    font-size: 12px;
    border-radius: 20px;
    margin:2px;
    transition: transform 0.15s;

    &:active{
        transform: scale(0.93);
        border:1px solid black;
    }


    ${({ toggle }) => toggle && css`
        border:2px solid black;
        margin:0px 1px;
        &:active{
        transform: scale(0.93);
        border:2px solid black;
    }
    `}
`