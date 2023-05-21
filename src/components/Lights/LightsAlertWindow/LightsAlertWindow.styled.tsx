import styled from "styled-components";


export const LightsAlertWindowContainer = styled.div`
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    width:100%;
    height:fit-content;
    overflow:scroll;
    max-width:850px;
    background-color:black;
    z-index:20;
    border:3px solid #781b1b;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    gap:20px;
    font-family: arial;
`

export const LightsAlertHeader = styled.h1`
    color:#781b1b;
    text-align: center;
`

export const LightsAlertText = styled.p`
    color:#FFFFFF;
    font-size:24px;
    line-height:32px;
    max-height:200px;
    overflow: scroll;
`

export const LightsAlertButtonsContainer = styled.div`
    display: flex;
    gap:10px;
    flex-wrap: wrap;
    justify-content: center;
    overflow: scroll;
`   

export const LightsAlertButton = styled.button<{
    color:string
}>`
    border:none;
    padding:10px 30px;
    font-size:30px;
    background-color: ${({ color }) => color || "#360a0a"};
    color:white;
    cursor: pointer;

    &:hover{
        filter:brightness(1.5);
    }
`