import styled, { css } from "styled-components"



export const SequencerSampleTabItemContainer = styled.div<{
    from:number,
    to:number,
    color:string,
    isBeingDraged:boolean,
    cursor:number
}>`
    width:30px;
    position: absolute;
    height:100%;
    min-height:90px;
    max-height: 90px;
    pointer-events:default;
    left:${({ from}) => `calc(${from} * 30px + (${from} * 1px))`};
    width:${({ from, to }) => `calc((${to - from + 1} * 30px + (${to - from + 1} * 1px) - 1px))`};;
    cursor:pointer;

    &:after{
        content:"";
        position: absolute;
        left:0px;
        top:0px;
        width:100%;
        height:25px;
        background-color:${({ color }) => color || "black"};
        pointer-events:none;
    }

    &:before{
        content:"";
        position: absolute;
        left:0px;
        top:0px;
        width:100%;
        height:100%;
        background-color:${({ color }) => color || "black"};
        opacity:0.4;
        pointer-events:none;
    }

    ${({ isBeingDraged }) => isBeingDraged && css`
        cursor:ew-resize;
    `}
    
    
    ${({ cursor }) => cursor === 0 && css`
        cursor: grab;
    `}

    ${({ cursor }) => cursor === 1 && css`
        cursor: no-drop;
    `}
`


export const SequencerSampleTabItemResizeElementLeft = styled.div<{
    cursorType:number
}>`
    position: absolute;
    left:0px;
    top:0px;
    width:5px;
    height:100%;
    cursor:grab;
    
    ${({ cursorType }) => cursorType === 0 && css`
        cursor:ew-resize;
    `}

    ${({ cursorType }) => cursorType === 1 && css`
        cursor:no-drop;
    `}
`

export const SequencerSampleTabItemResizeElementRight = styled.div<{
    cursorType:number
}>`
    position: absolute;
    right:0px;
    top:0px;
    width:5px;
    height:100%;
    cursor:grab;

    ${({ cursorType }) => cursorType === 0 && css`
        cursor:ew-resize;
    `}

    ${({ cursorType }) => cursorType === 1 && css`
        cursor:no-drop;
    `}
`


export const SequencerSampleTabItemTitle = styled.p`
    width:100%;
    height:100%;
    font-size: 12px;
    color:black;
    position: absolute;
    left:3px;
    top:3px;
    z-index:2;
    background-color:transparent;
    pointer-events: none;
    user-select: none;
    font-family: arial;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
`