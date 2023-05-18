import styled, { css } from "styled-components";

export const LightFaderContainer = styled.div`
    width:50px;
    height:150px;
    position: relative;
    &:after{
        content:"";
        width:7px;
        height:140px;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        background: rgb(24,24,24);
        background: linear-gradient(90deg, rgba(24,24,24,1) 0%, rgba(0,0,0,1) 50%, rgba(24,24,24,1) 100%);  
        border-radius: 10px;
    }
    
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
    }
`

export const LightFaderKnob = styled.input`
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%) rotate(-90deg);
    z-index: 5;
    background-color:transparent;
    appearance: none;
    -webkit-appearance: none;
    width:160px;

    &::-moz-range-thumb{
        width:35px;
        height:25px;
        border-radius: 3px;
        border:0px;
        background: rgb(31,31,31);
        background: linear-gradient(90deg, rgba(31,31,31,1) 0%, rgba(31,31,31,1) 23%, rgba(60,60,60,1) 30%, rgba(31,31,31,1) 37%, rgba(31,31,31,1) 63%, rgba(60,60,60,1) 70%, rgba(31,31,31,1) 77%, rgba(31,31,31,1) 100%);  
        cursor: pointer;
        box-shadow: -7px -1px 2px 2px #00000077;
    }

    &::-webkit-slider-thumb{
        width:35px;
        height:25px;
        border-radius: 3px;
        border:0px;
        background: rgb(31,31,31);
        background: linear-gradient(90deg, rgba(31,31,31,1) 0%, rgba(31,31,31,1) 23%, rgba(60,60,60,1) 30%, rgba(31,31,31,1) 37%, rgba(31,31,31,1) 63%, rgba(60,60,60,1) 70%, rgba(31,31,31,1) 77%, rgba(31,31,31,1) 100%);  
        cursor: pointer;
        box-shadow: -7px -1px 2px 2px #00000077;
    }

    &::-ms-thumb{
        width:35px;
        height:25px;
        border-radius: 3px;
        border:0px;
        background: rgb(31,31,31);
        background: linear-gradient(90deg, rgba(31,31,31,1) 0%, rgba(31,31,31,1) 23%, rgba(60,60,60,1) 30%, rgba(31,31,31,1) 37%, rgba(31,31,31,1) 63%, rgba(60,60,60,1) 70%, rgba(31,31,31,1) 77%, rgba(31,31,31,1) 100%);  
        cursor: pointer;
        box-shadow: -7px -1px 2px 2px #00000077;
    }

    &::-moz-range-track{
        background-color: transparent;
    }
`

export const LightFaderButton = styled.div<{
    active: boolean
}>`
    width:35px;
    height:30px;
    position: absolute;
    top:-45px;
    left:50%;
    transform:translate(-50%);
    background-color:#1F1F1F;
    border-radius: 5px;
    cursor:pointer;

    &:before{
        width:5px;
        height:5px;
        border-radius: 50%;
        content:"";
        position: absolute;
        left:50%;
        bottom: 5px;
        transform:translateX(-50%);
        background-color:red;
        filter: blur(4px);
    }

    &:after{
        width:5px;
        height:5px;
        border-radius: 50%;
        content:"";
        position: absolute;
        left:50%;
        bottom: 5px;
        transform:translateX(-50%);
        background-color:red;
    }

    ${({ active }) => active && css`
        &:before,&:after{
            background-color:green;
        }
    `}
`