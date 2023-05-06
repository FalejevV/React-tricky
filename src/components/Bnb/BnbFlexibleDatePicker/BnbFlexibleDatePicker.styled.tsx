import styled, { css } from "styled-components";
import { BnbApproxDateButton } from "../BnbApproxDate/BnbApproxDate.styled";


export const BnbFlexibleDateContainer = styled.div<{
    mobile?:boolean,
}>`
    width:100%;
    height:300px;
    display:flex;
    flex-direction: column;
    gap:13px;

    ${({ mobile }) => mobile && css`
        gap:5px;
    `}
`

export const BnbFlexDateTitle = styled.p<{
    mobile?: boolean,
}>`
    width:100%;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    text-align: center;
    color: rgb(34, 34, 34);
    padding-top:10px;

    ${({ mobile }) => mobile && css`
        text-align: left;
        font-size: 16px;
        margin-top:20px;
        font-weight:500;
        border-top:1px solid #d8d8d8;
    `}
`

export const BnbFlexDateDurationButton = styled(BnbApproxDateButton)`
    font-size:14px;
    padding:10px 17px;
`

export const BnbFlexDateDurationContainer = styled.div<{
    mobile?:boolean,
}>`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:5px;
    padding-left:5px;

    ${({ mobile }) => mobile && css`
        justify-content: flex-start;
        padding-left:0px;
        ${BnbFlexDateDurationButton}{
            padding:5px 10px;
        }
    `}
`


export const BnbFlexDateMonthsTitle = styled(BnbFlexDateTitle)`
    padding-top:24px;

    ${({ mobile }) => mobile && css`
        padding-top:10px;
    `}
`

export const BnbFlexDateCarouselWrap = styled.div<{
    mobile?:boolean,
}>`
    position:relative;

    ${({ mobile }) => mobile && css`
        margin-top:-15px;
    `}
`


export const BnbFlexDateCarouselArrowSVG = styled.svg<{
    left?:boolean,
    right?:boolean,
    enabled:boolean,
    mobile?:boolean,
}>`
    position: absolute;
    top:50%;
    padding:4px;
    transform: translateY(-50%);
    width:30px;
    height:30px;
    border-radius:50%;
    border:1px solid #e1e1e1;
    box-shadow: 0px 0px 3px 3px #3c3c3c14;
    cursor: pointer;
    background-color: white;
    z-index: 10;

    ${({ right }) => right && css`
        right:-7px;
    `}

    ${({ left }) => left && css`
        left:-12px;
    `}

    ${({ enabled }) => !enabled && css`
        display:none;
    `}

    ${({ mobile }) => mobile && css`
        display:none;
    `}
`