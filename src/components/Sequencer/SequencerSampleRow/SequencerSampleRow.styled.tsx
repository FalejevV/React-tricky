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
    position:relative;
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

export const SequencerSampleBlockContainer = styled.div`
    position: absolute;
    flex
    left:1px;
    top:0px;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content: flex-start;
    gap:1px;
`

export const SequencerSampleTabItem = styled.div<{
    from:number,
    to:number,
}>`
    width:30px;
    position: absolute;
    height:100%;
    background-color: red;
    pointer-events:default;
    left:${({ from}) => `calc(${from} * 30px + (${from} * 1px))`};
    width:${({ from, to }) => `calc((${to - from + 1} * 30px + (${to - from + 1} * 1px) - 1px))`};;
    cursor:pointer;
`

export const SequencerSampleTabResizeElementLeft = styled.div`
    position: absolute;
    left:0px;
    top:0px;
    width:5px;
    height:100%;
    cursor:ew-resize;
`

export const SequencerSampleTabResizeElementRight = styled.div`
    position: absolute;
    right:0px;
    top:0px;
    width:5px;
    height:100%;
    cursor:ew-resize;
`