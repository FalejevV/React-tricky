import styled from "styled-components";

export const SequencerPanFXContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    padding:0px 10px;
    gap:20px;
    position:relative;

    &:after{
        content:"";
        position:absolute;
        left:-10px;
        top:-15px;
        background-color: #9CB7B7;
        width:calc(100% + 20px);
        height:1px;
    }
`

export const SequencerPanFXFaderContainer = styled.div`
    width:100%;
    transform:rotate(90deg);
    display:flex;
    align-items: center;
`