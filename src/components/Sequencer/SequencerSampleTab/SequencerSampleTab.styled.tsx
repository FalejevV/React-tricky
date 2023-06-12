import styled, { css } from "styled-components";


export const SequencerSampleTabContainer = styled.div<{
    color:string,
    hasFile:boolean
}>`
    width:100%;
    height:90px;
    position:relative;
    overflow:hidden;
    border-top:1px solid #2E4F4F;
    background-color:#7D9393;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;

    ${({ hasFile,color }) => hasFile && css`
        background-color:${color};
    `}
`

export const SequencerSampleTabTopBar = styled.div<{
    color:string,
}>`
    width:100%;
    height:25px;
`

export const SequencerSampleBottomBar = styled.div`
    width:100%;
    height:25px;
    display:flex;
    align-items: center;
    gap:10px;
    position: relative;
`

export const SequencerSampleTabTitle = styled.p`
    width:100%;
    height:30px;
    font-size:16px;
    font-family:arial;
    color:#2C3333;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
`

export const SequencerSamleTabImage = styled.img`
    display:flex;
    align-items: center;
    width:30px;
    height:30px;
    cursor:pointer;
    transition: all 0.3s;
    background-color:#2C3333;
    padding:5px;
    border-radius: 5px;
    &:hover{
        transform:scale(1.1);
    }
`

export const SequencerSampleTabEnableButton = styled.div<{
    active:boolean
}>`
    position: absolute;
    right:0px;
    bottom:0px;
    width:20px;
    height:20px;
    background-color:#ff8097;
    cursor:pointer;
    border:1px solid #2c333378;
    ${({ active }) => active && css`
        background-color: #b0f2c2;
    `}
`

export const SequencerSampleTabFileInput = styled.input`
    color:black;
`