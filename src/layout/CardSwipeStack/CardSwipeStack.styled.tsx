import styled, { css } from "styled-components";


export const CardSwipeStackContainer = styled.div`
    width:100%;
    height:100%;
    position: relative;
`

export const NoContainer = styled.div<{
    hoverable:boolean,
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
    transition: opacity 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#ffffff17;

    &:hover{
        opacity: ${({ hoverable }) => hoverable ? 1 : 0.4};
    }
`

export const YesContainer = styled(NoContainer)`
    border:5px solid #0079008e;
    left:unset;
    right:20px;
`

export const SVGItem = styled.svg`
    width:65px;
    height:65px;
    path{
        fill:#ffffff3d;
    }
`

