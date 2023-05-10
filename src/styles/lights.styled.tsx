import styled from "styled-components";
import Image from 'next/image';

export const LightsContainer = styled.div`
    width:100vh;
    height:100vh;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

export const LightsTestImage = styled.img`
    width:1200px;
    aspect-ratio:1/0.65;
    transform: perspective(500px) rotateX(20deg);
`