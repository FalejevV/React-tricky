import styled from "styled-components";

export const SequencerTracksContainer = styled.main`
    height:100%;
    background-color: gray;
    position: relative;
    z-index: 100;
    padding-top:10px;
`


export const SequencerTracksOutline = styled.div`
    height:100%;
    position:absolute;
    left:0px;
    top:0px;
    display:flex;
    gap:30px;
    &:after{
        content:"";
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:15px;
        background-color:black;
    }
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
    font-size:14px;
    padding:5px 10px;
    background-color:black;
    font-weight: bold;
    z-index: 100;
    border-radius:0px 0px 5px 5px;
`