import styled, { css } from "styled-components";


export const CardSwipeStackContainer = styled.div`
    width:100%;
    height:100%;
    position: relative;
    max-width:100vw;
    overflow-x: hidden;
`

export const NoContainer = styled.div<{
    dragOver:boolean,
}>`
    width:330px;
    height:430px;
    border:5px solid #79000086;
    border-radius: 10px;

    opacity: 0.4;

    position: absolute;
    left:20px;
    top:50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#ffffff17;
    z-index: 4;
    
    @media(max-width:1080px){
        left:-40vw;
        background-color:transparent;
        width:100%;
        max-width:60vw;
        height:550px;
        max-height:100vh;
        border:0px;
        svg{
            display:none;
        }

        &:after{
            width: 1px;
            height:100%;
            content:"";
            position:absolute;
            left:calc(40vw - 24px);
            top:0px;
            box-shadow:0px 0px 30px 30px red;
            border-radius: 50%;
        }
    }


    
    ${({ dragOver }) => dragOver && css`
        opacity: 1;
    `}
`

export const YesContainer = styled(NoContainer)`
    border:5px solid #0079008e;
    left:unset;
    right:20px;

    @media(max-width:1080px){
        right:-40vw;
        background-color:transparent;
        width:100%;
        max-width:60vw;
        height:550px;
        max-height:100vh;
        border:0px;
        svg{
            display:none;
        }

        &:after{
            width: 1px;
            height:100%;
            content:"";
            position:absolute;
            left:unset;
            right:calc(40vw - 25px);
            top:0px;
            box-shadow:0px 0px 30px 30px #82fa7a;
            border-radius: 50%;
        }
    }
`

export const SVGItem = styled.svg`
    width:65px;
    height:65px;
    path{
        fill:#ffffff3d;
    }
`

