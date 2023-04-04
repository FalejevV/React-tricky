import styled, { css, keyframes } from "styled-components";


const scaleIn = keyframes`
    from{
        scale:0;
        opacity:0;
        translate:-50% -50%;
    }to{
        scale:1;
        opacity:1;
        translate:0 0;
    }

`

export const CardSwipeContainer = styled.div<{
    isToggled: boolean,
    rotation:string,
    left:string,
    top:string,
}>` 
    user-select:none;
    position: absolute;
    width:100%;
    max-width: 300px;
    height:400px;
    background-color: #F8EDE3;
    border-radius: 10px;
    cursor: default;
    display: flex;
    flex-direction: column;
    gap:15px;
    padding:15px;
    box-shadow: 0px 0px 5px 5px #04040454;
    transition: transform 0.3s;
    z-index:10000;
    ${({ rotation, left, top }) => rotation && left && top && css`
        left: ${`calc(${left || "0px"} + 50%)`};
        top: ${`calc(${top || "0px"} + 50%)`};

        transform: translate(-50%,-50%) rotate(${rotation});
    `}

    ${({ isToggled }) => isToggled && css`
        cursor: grab;
        transform: translate(-50%,-50%) rotate(0deg);
    `}

    animation: ${scaleIn} 0.4s forwards;
`

export const CardSwipeImage = styled.div<{
    color: string;
}>`
    width:100%;
    height:200px;
    border-radius: 10px;
    background-color:${({ color }) => color || "#85586F"};
`

export const CardSwipeTitle = styled.p`
    font-size:20px;
    font-weight:bold;
    color:black;

    font-weight:bold;
`

export const CardSwipeText = styled.p`
    font-size:18px;
    line-height: 20px;
    color:black;
    opacity:0.8;
    max-height: 100px;
    overflow: hidden;
`