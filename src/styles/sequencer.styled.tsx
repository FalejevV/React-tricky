import styled from "styled-components";


export const SequencerContainer = styled.div`
    width:100%;
    height:100vh;
    max-width:1440px;
    max-height:1024px;
    background-color: #8b8b8b;
    margin:0 auto;
    display:flex;
    flex-direction: column;
`

export const SequencerWorkSpace = styled.div`
    display:flex;
    width:100%;
    height:540px;
    overflow: scroll;
    scrollbar-width: thin;
`