import styled from "styled-components";



export const ColorButtonContainer = styled.button<{
    color:string,
}>`
    width:100%;
    height:100%;
    background-color: ${({ color }) => color || "white"};
    cursor:pointer;
    outline:none;
    border:none;
`