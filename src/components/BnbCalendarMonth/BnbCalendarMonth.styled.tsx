import styled, { css } from "styled-components";


export const BnbCalendarMonthContainer = styled.div`
    width:390px;
    height:380px;
    display:flex;
    flex-direction:column;
    gap:40px;
    align-items: center;
    padding:0px 27px;
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
    grid-template-columns:repeat(7,46px);
    grid-auto-rows: 46px;
`

export const BnbMonthItem = styled.p<{
    toggle: boolean
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
    border:1px solid transparent;
    
    cursor:pointer;
    &:hover{
        border:1px solid black;
    }

    ${({ toggle }) => toggle && css`
        background-color: black;
        color:white;
    `}
`

export const BnbMonthBlankItem = styled.div`
    width:100%;
    height:100%;
    background-color: transparent;
`