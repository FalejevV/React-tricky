import styled, { css } from "styled-components";


export const SequencerFaderContainer = styled.div<{
    color:string;
}>`
    width:40px;
    height:400px;
    position:relative;
    background-color:${({ color }) => color || "transparent"};
    &:after{
        content:"";
        width:7px;
        height:260px;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        background: rgb(24,24,24);
        background: linear-gradient(90deg, rgba(24,24,24,1) 0%, rgba(0,0,0,1) 50%, rgba(24,24,24,1) 100%);  
        border-radius: 10px;
    };
    
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
    }
`

export const SequencerFaderInput = styled.input`
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%) rotate(-90deg);
    z-index: 5;
    background-color:transparent;
    appearance: none;
    -webkit-appearance: none;
    width:280px;

    &::-moz-range-thumb{
        width:35px;
        height:25px;
        border-radius: 3px;
        border:0px;
        background: rgb(31,31,31);
        background: linear-gradient(90deg, rgba(31,31,31,1) 0%, rgba(31,31,31,1) 23%, rgba(60,60,60,1) 30%, rgba(31,31,31,1) 37%, rgba(31,31,31,1) 63%, rgba(60,60,60,1) 70%, rgba(31,31,31,1) 77%, rgba(31,31,31,1) 100%);  
        cursor: pointer;
        box-shadow: -7px -1px 2px 2px #0000005e;
    }

    &::-webkit-slider-thumb{
        width:35px;
        height:25px;
        border-radius: 3px;
        border:0px;
        background: rgb(31,31,31);
        background: linear-gradient(90deg, rgba(31,31,31,1) 0%, rgba(31,31,31,1) 23%, rgba(60,60,60,1) 30%, rgba(31,31,31,1) 37%, rgba(31,31,31,1) 63%, rgba(60,60,60,1) 70%, rgba(31,31,31,1) 77%, rgba(31,31,31,1) 100%);  
        cursor: pointer;
        box-shadow: -7px -1px 2px 2px #0000005e;
    }

    &::-ms-thumb{
        width:35px;
        height:25px;
        border-radius: 3px;
        border:0px;
        background: rgb(31,31,31);
        background: linear-gradient(90deg, rgba(31,31,31,1) 0%, rgba(31,31,31,1) 23%, rgba(60,60,60,1) 30%, rgba(31,31,31,1) 37%, rgba(31,31,31,1) 63%, rgba(60,60,60,1) 70%, rgba(31,31,31,1) 77%, rgba(31,31,31,1) 100%);  
        cursor: pointer;
        box-shadow: -7px -1px 2px 2px #0000005e;
    }

    &::-moz-range-track{
        background-color: transparent;
    }
`

export const SequencerActiveButtonWrap = styled.div`
    position: absolute;
    left:0px;
    top:10px;
    width:100%;
    display: flex;
    justify-content: center;
`

export const SequencerFXButton = styled.p<{
    toggle:boolean
}>`
    width:40px;
    height:40px;
    background-color: #ff8843;
    position: absolute;
    bottom:0px;
    left:50%;
    transform: translateX(-50%);
    display:flex;
    align-items: center;
    justify-content: center;
    color:black;
    font-weight: bold;
    font-family: arial;
    cursor:pointer;

    ${({ toggle }) => toggle && css`
        background-color: #ff5e00;
        transform: translateX(-50%) scale(0.9);
    `}

    &:hover{
        filter:brightness(1.1);
    }
`