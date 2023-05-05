import styled, { keyframes } from "styled-components";
import Image from 'next/image';

let arrowMovement = keyframes`
    0%{
        opacity: 0;
        transform:rotate(20deg) skew(-20deg);
    }
    35%{
        transform:rotate(18deg) skew(-10deg);
        opacity: 0.8;
    }
    65%{
        transform:rotate(22deg) skew(-30deg);
        opacity: 0.5;
    }
    100%{
        transform:rotate(20deg) skew(-20deg);
        opacity: 0;
    }
`

export const DoodleArrowImage = styled(Image)`
    width:100px;
    height:100px;
    position:absolute;
    left:150px;
    bottom:150px;
    opacity:0.6;
    animation: ${arrowMovement} 5s infinite;
`