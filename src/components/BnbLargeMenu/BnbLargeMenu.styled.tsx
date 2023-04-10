import styled, { css } from "styled-components";




export const BnbLargeMenuContainer = styled.div<{
    menuToggle:boolean,
}>`
    width:100%;
    max-width: 900px;
    height:180px;
    display: flex;
    flex-direction: column;
    opacity:0;
    pointer-events: none;
    z-index: 50;
    position: absolute;
    left:50%;
    transform: translate(-50%,-50%) scale(0);
    top:0px;
    padding-top: 15px;

    transition: all 0.3s;
    ${({ menuToggle }) => menuToggle && css`
        opacity: 1;
        pointer-events: auto;
        transform: translate(-50%,0%) scale(1);
    `}
`


export const BnbLargeMenuTopBar = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    gap:33px;
`

export const BnbLargeMenuTypeButton = styled.div<{
    toggle?:boolean,
}>`
    font-size:16px;
    color:#222222;
    position: relative;
    cursor:pointer;

    &:after{
        transition: all 0.3s;
        position: absolute;
        content:"";
        width:0%;
        height:2px;
        border-radius:10px;
        background-color:#222222;
        bottom:-10px;
        left:50%;
        transform: translateX(-50%);
    }


    &:hover{
        opacity: 0.7;

        &:after{
            width:100%;
            opacity:0.7;
        }
    }

    ${({ toggle }) => toggle && css`
        opacity: 1;
        &:after{
            opacity:1;
            width:100%;
        }

        &:hover{
            opacity:1;
            &:after{
                opacity:1;
            }
        }
    `}
`


export const BnbLargeStayPicker = styled.div`
    width:100%;
    max-width: 848px;
    height:70px;
    display: flex;
    align-items: center;
    border-radius:60px;
    background-color:white;
    border: 1px solid #cbcbcb;
    position: absolute;
    bottom:50px;
    left:50%;
    transform: translateX(-50%);
`