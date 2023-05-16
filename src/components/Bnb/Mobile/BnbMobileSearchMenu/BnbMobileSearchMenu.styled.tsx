import styled from "styled-components";

export const BnbMobileSearchWrap = styled.div`
    width:95%;
    position:absolute;
    display:none;
    @media(max-width:750px){
        display:flex;
        left:2.5%;
        top:10px;
    }
`

export const BnbMobileSearchContainer = styled.div`
    flex:1 auto;
    height:54px;
    background-color:white;
    border:1px solid #d7d7d7FF;
    box-shadow:0px 5px 5px 5px #00000013;
    display:flex;
    border-radius: 60px;
    position:relative;

    padding-left:55px;
    cursor:pointer;
`

export const BnbMobileSearchSVG = styled.svg`
    position:absolute;
    width:17px;
    height:17px;
    fill:#6d6d6d;
    top:50%;
    transform: translateY(-50%);
    left:18px;
`

export const BnbMobileTextContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
`

export const BnbMobileSearchTitle = styled.p`
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color:#424242;
`

export const BnbMobileSearchSubTitle = styled.p`
    font-size: 11px;
    line-height: 16px;
    color:#686868;
    display:flex;
    align-items:center;
    gap:8px;

    span{
        width:2px;
        height:2px;
        background-color:#686868;
        border-radius: 50%;
    }
`