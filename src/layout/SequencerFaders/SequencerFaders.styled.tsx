import styled from "styled-components";

export const SequencerFadersContainer = styled.div`
    max-width:325px;
    min-width:325px;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
    background-color:#889c9c78;
    position: relative;
`

export const SequencerFadersOverlayBlock = styled.div<{
    toggle:boolean;
}>`
    position: absolute;
    left:0px;
    top:0px;
    width:100%;
    height:100%;
    background-color: #00000094;
    z-index: 100;
    display:${({ toggle }) => toggle ? "visible" : "none"};
`

export const SequencerFaderOverlayIcon = styled.svg`
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    fill:#a8c2c0f8;
    width:90px;
    height:90px;
    transition: all 0.3s;;
`

