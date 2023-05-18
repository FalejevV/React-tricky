import styled, { css } from "styled-components";


export const LightControlsContainer = styled.div<{
    avaliable:boolean
}>`
    display: flex;
    flex-direction: column;
    flex:1 auto;
    z-index: 15;
    height:100%;
    align-items: center;
    position:relative;

    &:after{
        content:"";
        position:absolute;
        left:-10px;
        top:-10px;
        width:calc(100% + 20px);
        height:calc(100% + 20px);
        background-color:black;
        opacity:0.5;
        z-index: 16;
        border-radius: 5px;
        transition: all 0.3s;
    }

    ${({ avaliable}) => avaliable && css`
        &:after{
            width:0px;
        }   
    `}
`

export const LightControlsTab = styled.div`
    width:100%;
    flex:1 auto;
    display: flex;
    align-items: center;
    padding:5px;
`

export const LightResetButton = styled.button`
    width:40px;
    height:40px;
    background-color: #1F1F1F;
    border:none;
    outline:none;
    cursor:pointer;
    padding:7px;
`

export const LightArrowsContainer = styled.div`
    width:80px;
    height:80px;
    position:absolute;
    right:22px;
`

export const LightArrowUp = styled.svg`
    width:35px;
    height:35px;
    fill:white;
    background-color: #1F1F1F;
    padding:3px;
    position:absolute;
    left:50%;
    top:0px;
    transform: translateX(-50%);
    cursor:pointer;
`

export const LightArrowDown = styled(LightArrowUp)`
    top:unset;
    bottom: 0px;
`

export const LightArrowLeft = styled(LightArrowUp)`
    top:50%;
    left:-20px;
    transform: translateY(-50%) translateX(0px);
`

export const LightArrowRight = styled(LightArrowUp)`
    top:50%;
    right:-20px;
    left:unset;
    transform: translateY(-50%) translateX(0px);
`