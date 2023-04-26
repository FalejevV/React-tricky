import styled, { css } from "styled-components";

export const BnbSmallMonthCarouselContainer = styled.div`
    width:100%;
    height:146px;
    padding:5px 0px;
    scrollbar-width: none;
    overflow:hidden;
    position:relative;
`

export const BnbSmallMonthCarouselList = styled.div`
    padding:30px;
    padding-left:1px;
    flex:1;
    height:100%;
    display:flex;
    align-items: center;
    gap:5px;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overflow-x:scroll;
    overflow-y:hidden;
`