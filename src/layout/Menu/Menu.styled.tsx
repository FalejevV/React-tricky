import styled, { css } from "styled-components";



export const MenuList = styled.div`
    width:100%;
    max-width:1200px;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    flex-wrap:wrap;
    overflow: scroll;
    scrollbar-width:none;
    transition: opacity 0.5s;
    transition-delay:0.15s;
`


export const MenuContainer = styled.div<{
    toggle: boolean,
}>`
    max-width: 100vw;
    min-width:100vw;
    height:100%;
    min-height:100vh;
    background-color: #000000;
    position:fixed;
    top:0px;
    z-index:1000;
    opacity: 0;
    pointer-events: none;
    user-select:none;
    display:flex;
    align-items: center;
    justify-content: center;
    transition-property:, opacity, transform;
    transition: opacity 0.5s, transform 10s;
    transition-delay: 0.45s, 0s;
    overflow-y:scroll;
    transform:scale(30);

    
    ${MenuList}{
        opacity: 0;
    }

    ${({ toggle }) => toggle && css`
        transition: opacity 0.5s;
        transform:scale(1);
        transition-delay: 0s,0s;
        opacity: 1;
        pointer-events: auto;

        ${MenuList}{
            opacity: 1;
        }
    `}

`
