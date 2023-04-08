import styled from "styled-components";


export const PageMain = styled.main`
    width:100%;
    max-width:100vw;
    height:100%;
    min-height: 100vh;
    padding:20px;

    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width:580px){
        padding:10px;
    }
`


export const RandomContainer = styled.div`
    width:100%;
    max-width:1350px;
    height:750px;
    max-height: 90vh;
    border-radius:10px;
    border: 3px solid #d0b8a848;
    @media(max-width:1080px){
        border:0px;
    }
    
`