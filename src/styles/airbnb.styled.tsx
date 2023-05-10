import styled, { css, keyframes } from "styled-components";

export const fadeIn = keyframes`
    from{
        opacity: 0;
        top:-50px;
    }to{
        opacity: 1;
        top:0px;
    }
`

export const BnbContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
    font-family: 'Manrope', sans-serif;

    width:100%;
    max-width:2543px;
    padding:0px 91.5px;
    height:100vh;
    margin:0 auto;
    @media(max-width:1440px){
        padding:0px 40px;
    }

    @media(max-width:750px){
        padding:0px 25px;
    }
`
export const BlackBackgroundClickField = styled.div`
    width:100%;
    height:100vh;
    max-width: 100vw;
    background-color: black;
    opacity: 0.5;
`

export const BnbHeader = styled.header`
    width:100%;
    display:flex;
    flex-direction: column;
    background-color: #FFFFFF;
    position:fixed;
    top:0px;
    left:0px;
`

export const BnbTopBar = styled.nav<{
    menuToggle:boolean,
}>`
    width:100%;
    height:80px;
    display:flex;
    align-items: flex-start;
    background-color: white;
    border-bottom:1px solid #c7c7c7;
    padding-top:15px;
    transition: all 0.3s;
    
    ${({ menuToggle }) => menuToggle && css`
        height:160px;

        @media(max-width:948px){
            height:240px;
        }

        @media(max-width:750px){
            height:80px;
        }
    `}
    z-index: 2;
`

export const BnbTopBarFlex = styled.div<{
    justify?:string,
    left?:boolean,
}>`
    height:48px;
    flex:1 0 140px;
    display: flex;
    align-items: center;
    justify-content: ${({ justify }) => justify || "flex-start"};

    @media(max-width:750px){
        display:none;
    }

   ${({ left }) => left && css`
        @media(max-width:948px){
            flex:0 0 55px;
        }

        @media(max-width:750px){
            display:none;
        }
   `}
`

export const BnbTopBarContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: flex-start;
    position: relative;
`



export const BnbLogo = styled.img<{
    large?:boolean
}>`
    width:102px;
    height:100%;
    object-fit: contain;
    display:none;

    ${({ large }) => large && css`
        display:block;
        @media(max-width:1126px){
            display:none;
        }
    `}

    ${({ large }) => !large && css`
        display:none;
        @media(max-width:1126px){
            display:block;
            width:30px;
            height:100%;
        }
    `}
`

export const BnbBottomBar = styled.div`
    width:100%;
    height:80px;
    background-color: red;
    position:absolute;
    top:80px;
    z-index: 1;
`