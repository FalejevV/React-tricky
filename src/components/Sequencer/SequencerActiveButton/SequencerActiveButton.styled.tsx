import styled, { css } from "styled-components"


export const SequencerSampleActiveButton = styled.div<{
    active:boolean
}>`
    width:20px;
    height:20px;
    background-color:#ff8097;
    cursor:pointer;
    border:1px solid #2c333378;
    ${({ active }) => active && css`
        background-color: #b0f2c2;
    `}
`