import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
export const PageEditorToolContainer = styled.div`
    width:30px;
    height:30px;
    padding:5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
        background-color: #80808028;
    }
    position: relative;
`

export const PageEditorToolIcon = styled(Image)`
    width:100%;
    height:100%;
`

const fadeInAnimation = keyframes`
    0%{
        opacity: 0;
    }80%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`
export const PageEditorToolTitle = styled.p<{
    left:string,
    top:string,
    isHovered:boolean,
}>`
    position: fixed;
    padding:5px 15px;
    background-color: white;
    white-space: nowrap;
    color:black;
    border:1px solid black;
    border-radius: 5px;
    opacity: 0;
    left:${({ left }) => left};
    top:${({ top }) => top};
    pointer-events:none;    
    z-index: 10;
    ${({ isHovered }) => isHovered && css`
        animation: ${fadeInAnimation} 0.5s forwards;
    `}
`