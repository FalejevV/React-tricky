import styled, { css } from "styled-components";

export const SequencerSampleRowContainer = styled.div<{
    darker?:boolean
}>`
    width:1985px;
    height:90px;
    max-height:90px;
    border-top:1px solid black;
    display:flex;
    align-items:center;
    justify-content: flex-start;
    padding-left:1px;
    ${({ darker }) => darker && css`
        background-color: #00000013;
    `}
    gap:1px;
`

export const SequencerSampleBlock = styled.div`
    min-width:30px;
    max-width: 30px;
    height:100%;
    background-color: transparent;
    cursor:pointer;

    &:hover{
        background-color:#dbdbdbbc;
    }
`