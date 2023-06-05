import styled from "styled-components";

export const SequencerTracksContainer = styled.main`
    flex:1 auto;
    height:100%;
    background-color: #c7c7c7;
    position: relative;
    overflow-y: hidden;
    overflow-x: scroll;
    scrollbar-width: thin;
    display: flex;
    flex-direction: column;
`


export const SequencerTracksOutline = styled.div`
    height:100%;
    position:absolute;
    left:0px;
    top:0px;
    display:flex;
    gap:30px;
    pointer-events:none;
`

export const SequencerVerticalDivider = styled.div<{
    color:string;
}>`
    width:1px;
    height:100%;
    background: ${({ color }) => color || "black"};
    position: relative;
`

export const SequencerVerticalLineText = styled.p`
    position:absolute;
    top:0px;
    left:50%;
    transform: translateX(-50%);
    color:white;
    font-size:12px;
    padding:3px 5px;
    background-color:black;
    font-weight: bold;
    z-index: 100;
    border-radius:0px 0px 5px 5px;
`