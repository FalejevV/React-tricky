import styled from "styled-components";


export const BnbMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BnbSmallMenu = styled.div`
    position: relative;
    width:354px;
    height:48px;
    display: flex;
    align-items: center;
    padding:0px 24px;
    border-radius: 60px;
    background-color: white;
    border: 1px solid #cbcbcb;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        box-shadow: 0px 5px 4px 0px rgba(0,0,0,0.08);
    }
`

export const SmallMenuDivider = styled.div`
    width:1px;
    height:25px;
    background-color: #cbcbcb;
`

export const BnbSmallMenuText = styled.p`
    font-size: 15px;
    color:black;
    font-weight: 500;
    white-space: nowrap;
    padding:0px 16px;

    &:first-of-type{
        padding-left:0px;
    }
`

export const BnbSmallMenuSearhIcon = styled.svg`
    width:32px;
    height:32px;
    background-color: #FF385C;
    fill:white;
    border-radius: 50%;
    padding:10px;
    position: absolute;
    right:8px;
    top:50%;
    transform: translateY(-50%);
`