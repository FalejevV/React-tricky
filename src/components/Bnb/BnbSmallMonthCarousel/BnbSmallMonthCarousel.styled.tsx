import styled, { css } from "styled-components";

export const BnbSmallMonthCarouselContainer = styled.div`
    width:100%;
    height:144px;
    overflow-x:scroll;
    padding:5px 0px;
    scrollbar-width: none;
    overflow-y:hidden;
`

export const BnbSmallMonthCarouselList = styled.div`
    flex:1;
    height:100%;
    display:flex;
    align-items: center;
    gap:8px;
`

export const BnbSmallMonthCarouselItem = styled.div<{
    toggle: boolean
}>`
    width:122px;
    min-width: 123px;
    height:134px;
    border:1px solid #d6d6d6;
    border-radius: 20px;

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