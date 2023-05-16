import styled from "styled-components";

export const LightConsoleTable = styled.div`
    width:950px;
    height:250px;
    background-color: #0f0f0f;
    position:absolute;
    left:50%;
    bottom:0px;
    transform: translateX(-50%) perspective(1000px) rotateX(10deg);
    z-index:10;
    border-radius: 10px 10px 0px 0px;
`

export const LightConsoleContainer = styled.div`
    width:700px;
    height:280px;
    background-color:#202857;
    border-radius:20px;
    position:absolute;
    left:50%;
    z-index:1;
    border:10px solid #1f201f;
    border-bottom:0px;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    padding:20px;
    transform: translate(-50%);
    bottom:0px;
    &:before{
        content:"";
        position:absolute;
        width:100px;
        height:305px;
        background-color:#202857;
        border-radius:30px 10px 30px 30px;
        left:-20px;
        bottom:0px;
        transform:rotate(3deg);
        border-left:8px solid #363636;
    }

    &:after{
        content:"";
        position:absolute;
        width:100px;
        height:305px;
        background-color:#202857;
        border-radius:10px 30px 30px 30px;
        right:-20px;
        bottom:0px;
        transform:rotate(-3deg);
        border-right:8px solid #363636;
    }
`