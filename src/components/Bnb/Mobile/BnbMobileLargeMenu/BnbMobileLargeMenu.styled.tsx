import styled, { css } from "styled-components";


export const BnbMobileLargeMenuContainer = styled.div<{
    menuToggle:boolean,
}>`
    width:100%;
    height:100%;
    max-width: 100vw;
    max-height:100vh;
    background-color:#F7F7F7;
    display:none;
    position: fixed;
    left:0px;
    top:0px;
    @media(max-width:750px){
        ${({ menuToggle }) => menuToggle && css`
            display:flex;
        `}
    }

    
`

export const BnbMobileDropdownList= styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    position: absolute;
    width:100%;
    overflow: hidden;
    left:0px;
    top:70px;
    padding:5px 10px;
    min-height: 100vh;
`

export const BnbMobileRegionPickContainer = styled.div`
    position: relative;
    width:100%;
    height:fit-content;
    display:flex;
    overflow: hidden;
    flex-direction: column;
`

export const BnbMobileRegionFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:20px;
    overflow-x:scroll;
    padding-bottom: 10px;
`

export const BnbMobileDatePickContainer = styled.div`
    position: relative;
    width:100%;
    height:100vh;
    display:flex;
    overflow: hidden;
    background-color:red;
    max-height:calc(100vh - 205px);
`

export const BnbMobileGuestPickContainer = styled.div`
    position: relative;
    width:100%;
    height:341px;
    display:flex;
    overflow: hidden;
    background-color:blue;
`