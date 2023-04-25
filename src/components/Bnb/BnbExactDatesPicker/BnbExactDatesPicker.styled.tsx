import styled, { css } from "styled-components";


export const BnbMonthSwitchArrowSvgLeft = styled.svg<{
    isDisabled?:boolean;
}>`
    width:33px;
    height:33px;
    padding:5px;
    border-radius:50%;
    cursor:pointer;
    
    &:active{
        background-color: #ececec;
    }

    ${({ isDisabled }) => isDisabled && css`
        cursor:not-allowed;
        opacity: 0.1;
    `}
`


export const BnbMonthSwitchArrowSvgRight = styled(BnbMonthSwitchArrowSvgLeft)`

`

export const BnbMonthsArrowContainer = styled.div<{
    minimal:boolean
}>`
    width:100%;
    height:20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0px 50px;
    position: absolute;
    top:108px;
    z-index: 2;

    ${({ minimal }) => minimal && css`
        top:54px;
    `}
`


export const BnbMonthsContainer = styled.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
`

export const BnbMonthsList = styled.div<{
    slider:number
}>`
    position: absolute;
    top:0px;
    left:0px;
    height:380px;
    display:flex;
    align-items: center;
    transition: all 0.3s;
    ${({ slider }) => css`
        left:calc((${slider} * 50% + ${slider}*-1px) * -1);
    `}

`

export const BnbExactDatesSpacer = styled.div`
    width:100%;
    height:0px;
    margin-top:-10px;
    background-color: transparent;
`

export const BnbWeekDaysWrapper = styled.div`
    position: absolute;
    width:100%;
    top:25px;
    left:0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0px 40px;
    gap:75px;
`