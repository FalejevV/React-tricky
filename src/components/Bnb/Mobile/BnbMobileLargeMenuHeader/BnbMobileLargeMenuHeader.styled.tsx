import { fadeIn } from "@/styles/airbnb.styled";
import styled, { css } from "styled-components";

export const BnbMobileLargeMenuHeaderContainer = styled.div`
    width:100%;
    position:relative;
    opacity: 0;
    animation: ${fadeIn} 0.5s 0.15s forwards;
`

export const BnbMobileCloseButton = styled.svg`
    width:31px;
    height:31px;
    padding:6px;
    background-color:white;
    border:1px solid #bfbfbf;
    border-radius: 50%;
    position: absolute;
    top:22px;
    left:20px;
    cursor: pointer;
`

export const BnbMobileMenuTypeContainer = styled.div`
    position: absolute;
    top:27px;
    left:50%;
    transform: translateX(-50%);
    display:flex;
    align-items: center;
    justify-content: center;
`

export const BnbMobileTypeButton = styled.div<{
    toggle: boolean;
}>`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color:#858585;
    padding:0px 10px;
    cursor:pointer;
    transition: all 0.15s;
    user-select: none;
    
    &:active{
        transform:scale(0.95);
    }

    ${({ toggle }) => toggle && css`
        color:#292929;
        cursor:default;
        &:active{
            transform:scale(1);
        }
    `}

`

export const BnbMobileTypeButtonUnderline = styled.div.attrs((props:{
    width:string,
    left:string,
}) => ({
    style:{
        left:props.left,
        width:props.width
    }
  }))<{
    width:string,
    left:string,
  } >`
    transition: all 0.15s;
    position: absolute;
    height:2px;
    top:24px;
    width:100px;
    background-color:#292929;
  `;