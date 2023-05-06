import styled, { css } from "styled-components";


export const BnbGuestPickerContainer = styled.div<{
    mobile?:boolean,
}>`
    position: absolute;
    width:406px;
    background-color: white;
    border-radius:30px;
    top:80px;
    right:0px;
    display:flex;
    flex-direction:column;
    box-shadow:0px 0px 3px 3px #00000021;
    padding:16px 32px;

    ${({ mobile }) => mobile && css`
        position:relative;
        top:0px;
        left:0px;
        border-radius:0px;
        width:100%;
        overflow:scroll;
        padding:0px;
    `}
`