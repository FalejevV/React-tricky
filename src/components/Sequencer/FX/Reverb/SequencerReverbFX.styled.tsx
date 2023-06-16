import styled from "styled-components";


export const SequencerReverbFXContainer = styled.div`
    width:150px;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    gap:10px;

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

export const SequencerReverbFXFaderContainer = styled.div`
    width:100%;
    padding-top:30px;
    display:flex;
    justify-content:space-between;
`

export const ReverbPickerContainer = styled.div`
    margin-top:5px;
    width:100%;
    height:40px;
    display:flex;
    justify-content:space-between;
    align-items: center;
`

export const ReverbPickerArrowSVG = styled.svg`
    width:30px;
    min-width: 30px;
    height:30px;
    min-height: 30px;
    cursor:pointer;
    fill:#9CB7B7;
`

export const ReverbPickerText = styled.p`
    display: inline-block;
    width: 100px;
    height:100%;
    font-size:18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align:center;
    display:flex;
    align-items: center;
    justify-content:center;
`