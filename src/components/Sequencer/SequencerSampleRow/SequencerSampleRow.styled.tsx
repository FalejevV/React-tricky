import styled, { css } from "styled-components";

export const SequencerSampleRowContainer = styled.div<{
    darker?:boolean
}>`
    width:1985px;
    height:90px;
    max-height:90px;
    min-height:90px;
    border-top:1px solid #2E4F4F;
    display:flex;
    align-items:center;
    justify-content: flex-start;
    padding-left:1px;
    position:relative;
    background-color: #62a0a06c;

    ${({ darker }) => darker && css`
        background-color: #2e4f4fa7;
    `}
    gap:1px;
`

export const SequencerSampleBlock = styled.div<{
    interactable:boolean
}>`
    min-width:30px;
    max-width: 30px;
    height:100%;
    background-color: transparent;
    cursor:ew-resize;

    ${({ interactable }) => interactable && css`
    cursor:pointer;
        &:hover{
            background-color:#cbe4de76;
        }
    `}
`

export const SequencerSampleBlockContainer = styled.div<{
    isBeingDraged:boolean
}>`
    position: absolute;
    left:1px;
    top:0px;
    width:100%;
    height:100%;
    min-height:90px;
    max-height: 90px;
    display:flex;
    align-items:center;
    justify-content: flex-start;
    gap:1px;

    ${({ isBeingDraged }) => isBeingDraged && css`
        cursor:ew-resize;
    `}
`