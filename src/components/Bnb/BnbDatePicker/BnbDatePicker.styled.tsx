import styled, { css } from "styled-components";


export const BnbDatePickerContainer = styled.div`
    position: absolute;
    left:0px;
    top:80px;
    width:100%;
    height:555px;
    padding:16px 32px;
    padding-top:35px;
    background-color: white;
    border-radius:30px;
    box-shadow:0px 0px 3px 3px #00000021;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:30px;
`


export const BnbDatePickerTypeContainer = styled.div`
    width:303px;
    height:50px;
    background-color:rgb(235, 235, 235);
    border-radius:30px;
    display:flex;
    align-items: center;
    padding:5px;
`

export const DateTypeButton = styled.p<{
    toggle: boolean;
}>`
    height:100%;
    font-size:14px;
    flex:1 auto;
    background-color: transparent;
    border-radius:30px;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    color:black;
    transition: all 0.05s;

    ${({ toggle }) => toggle && css`
        background-color: white;
        box-shadow: 3px 3px 3px 3px #6b6b6b1c;
        cursor:default;
    `}

    &:hover{
        background-color: white;
    }

    
    &:active{
        scale:0.97;
    }
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

export const BnbMonthsArrowContainer = styled.div`
    width:100%;
    height:20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0px 50px;
    position: absolute;
    top:108px;
    z-index: 2;
`

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
        opacity: 0.4;
    `}
`

export const BnbMonthSwitchArrowSvgRight = styled(BnbMonthSwitchArrowSvgLeft)`

`