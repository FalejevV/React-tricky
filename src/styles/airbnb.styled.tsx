import styled from "styled-components";


export const BnbContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
    font-family: 'Manrope', sans-serif;

    width:100%;
    max-width:2543px;
    padding:0px 91.5px;
`

export const BnbHeader = styled.header`
    width:100%;
    height:160px;
    display:flex;
    flex-direction: column;
    background-color: #FFFFFF;
`

export const BnbTopBar = styled.nav`
    width:100%;
    height:80px;
    display:flex;
    align-items: center;
    border-bottom:1px solid #c7c7c7;
`

export const BnbTopBarFlex = styled.div<{
    justify?:string,
}>`
    flex:1 0 140px;
    display: flex;
    justify-content: ${({ justify }) => justify || "flex-start"};
`

export const BnbTopBarContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
`



export const BnbLogo = styled.img`
    width:102px;
    height:100%;
    object-fit: contain;
`