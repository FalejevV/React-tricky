import styled from "styled-components";


export const SequencerDistortionFXContainer = styled.div`
    width:100px;
    height:100%;
    display:flex;
    flex-direction:column;
    gap:27px;
    align-items: center;
    position:relative;
    
    &:after{
        content:"";
        position:absolute;
        right:-11px;
        top:-10px;
        height:420px;
        width:1px;
        background-color: #9CB7B7;
    }
`

export const SequencerDistortionFXInfoText = styled.p`
    font-family: arial;
    padding-bottom: 23px;
    color:#9CB7B7;
`