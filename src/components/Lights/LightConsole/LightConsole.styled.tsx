import styled from "styled-components";


export const LightConsoleContainer = styled.div`
    width:1000px;
    height:450px;
    background-color:#202857;
    border-radius:20px;
    position:relative;
    z-index:1;
    border:10px solid #1f201f;
    border-bottom:0px;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    padding:20px;
    transform: perspective(1000px) rotateX(10deg);
    
    &:before{
        content:"";
        position:absolute;
        width:100px;
        height:455px;
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
        height:455px;
        background-color:#202857;
        border-radius:10px 30px 30px 30px;
        right:-20px;
        bottom:0px;
        transform:rotate(-3deg);
        border-right:8px solid #363636;
    }
`