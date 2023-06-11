import styled, { keyframes } from "styled-components";


let moveAnimation = keyframes`
    from{
        left:0px;
    }to{
        left:1985px;
    }
`

export const SequencerPlayLineIndicatorContainer = styled.div<{
    speed:number
}>`
    width:3px;
    z-index:10;
    height:100%;
    background-color: #0E8388;
    position: absolute;
    left:0px;
    top:0px;
    
    animation: ${moveAnimation} linear ${({ speed }) => `${speed/1000 * 8 * 8}s` || "5s"};
`