import styled from "styled-components";

export const SequencerTracksContainer = styled.main`
    flex:1 auto;
    height:100%;
    background-color: #c7c7c7;
    position: relative;
    overflow-x: scroll;
    overflow-y:hidden;
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
    pointer-events:none;
    user-select: none;
`

export const SequencerVerticalLineText = styled.p`
    position:absolute;
    top:0;
    left:50%;
    transform: translateX(-50%);
    color:#CBE4DE;
    font-size:12px;
    padding:3px 5px;
    background-color:#2C3333;
    font-weight: bold;
    border-radius:0px 0px 5px 5px;
    z-index: 5;
    pointer-events:none;
    user-select: none;
`

export const SequencerFourDividerDarkener = styled.div`
    width:993px;
    height:100%;
    background-color: #2C3333;
    opacity:0.2;
    position:absolute;
    left:0px;
    top:0px;
`
