import styled, { css } from "styled-components";




export const BnbRegionPickerContainer = styled.div`
    position: absolute;
    width:490px;
    height:475px;
    background-color:white;
    border-radius:30px;
    top:80px;
    left:0px;
    padding:40px 55px;
    padding-right:35px;
    display:flex;
    flex-direction:column;
    gap:30px;
    box-shadow:0px 0px 3px 3px #00000021;
`


export const BnbRegionPickerTitle = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    color:black;
`

export const BnbRegionPickerGrid = styled.div`
    display:grid;
    flex:1;
    grid-template-columns:repeat(3, 122px);
    grid-template-rows:repeat(2, 158px);
    justify-content: space-between;
    row-gap: 24px;
`


