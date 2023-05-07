import { fadeIn } from "@/styles/airbnb.styled";
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
    overflow: scroll;
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
    height:calc(100% - 70px);
`

export const BnbMobileRegionPickContainer = styled.div`
    position: relative;
    width:100%;
    height:240px;
    display:flex;
    overflow: hidden;
    flex-direction: column;
    gap:22px;
`

export const BnbMobileRegionFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:20px;
    overflow-x:scroll;
    padding-bottom: 20px;
`

export const BnbMobileDatePickContainer = styled.div`
    position: relative;
    width:100%;
    height:100vh;
    display:flex;
    background-color:white;
    max-height:calc(100vh - 220px);
    flex-direction: column;
    align-items: center;
    padding-top:8px;
`


export const BnbMobileDateBottomBarContainer = styled.div`
    width:100%;
    height:55px;
    display:flex;
    margin-top:auto;
    align-items: center;
    padding-top:5px;
    justify-content: space-between;
    border-top: 1px solid #d8d8d8;
    width:calc(100% + 60px);
    margin-left:10px;
    padding:0px 30px;
    padding-top:10px;
`

export const BnbMobileDateSkipResetButton = styled.button`
    font-size:16px;
    color:#222222;
    line-height: 18px;
    text-decoration: underline;
    font-weight: 500;
    background-color: white;
    border:0px;
    font-weight: 600;
    cursor:pointer;
`

export const BnbMobileDateNextButton = styled(BnbMobileDateSkipResetButton)`
    text-decoration: none;
    background-color: black;
    color:white;
    padding:14px 24px;
    border-radius: 10px;
`


export const BnbMobileGuestPickContainer = styled.div`
    position: relative;
    width:100%;
    height:fit-content;
    display:flex;
    overflow: scroll;
    flex-direction: column;
    gap:10px;
`

export const BnbMobileGuestPickTitle = styled.p`
    font-size: 22px;
    color:black;
    font-weight: 600;
`