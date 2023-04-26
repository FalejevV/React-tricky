import styled, { css } from "styled-components";



export const BnbSmallMonthTabContainer = styled.div<{
    toggle: boolean
}>`
    user-select: none;
    width:120px;
    min-width: 123px;
    height:134px;
    border:1px solid #d6d6d6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:5px;
    padding-top:10px;
    margin:1px;
    cursor:pointer;

    transition: all 0.15s;
    &:active{
        transition: all 0.3s;
        transform: scale(0.93);
        border:1px solid black;
    }


    ${({ toggle }) => toggle && css`
        border:2px solid black;
        &:active{
            transform: scale(0.93);
            border:2px solid black;
        }
    `}
`


export const BnbSmallMonthTabSVG = styled.svg<{
    toggle: boolean,
}>`
    width:35px;
    height:35px;
    fill:#767676;
    display: none;

    ${({ toggle }) => toggle && css`
        display:block;
    `}
`

export const BnbSmallMonthName = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #4e4e4e;
`

export const BnbSmallMonthYear = styled.p`
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: #4e4e4e;
`