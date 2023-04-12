import styled, { css } from "styled-components";


export const MenuContainer = styled.div<{
    toggle: boolean,
}>`
    max-width: 100vw;
    min-width:100vw;
    height:100vh;
    background-color: #000000;
    display:grid;
    grid-template-columns: repeat(4, minmax(100px,250px));
    grid-template-rows: repeat(1, minmax(100px, 250px));
    align-items: center;
    justify-content: center;
    align-content:center;
    justify-items:center;
    padding:20px;
    gap:20px;
    position:absolute;
    top:0px;
    z-index:100;
    opacity: 0;
    pointer-events: none;
    user-select:none;

    transition: all 0.5s;
    ${({ toggle }) => toggle && css`
        opacity: 1;
        pointer-events: auto;
    `}
`