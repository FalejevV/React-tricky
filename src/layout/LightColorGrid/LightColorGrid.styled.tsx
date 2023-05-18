import styled from "styled-components";

export const LightColorGridContainer = styled.div`
    height:fit-content;
    display:grid;
    z-index: 11;
    grid-template-columns: repeat(5,30px);
    grid-auto-rows:30px;
    gap:3px;
`