import styled from "styled-components";


export const STBContainer = styled.div<{
    toggled:boolean
}>`
    width:30px;
    height:30px;
    border-radius:5px;
    
    cursor:pointer;
    background-color: ${({ toggled }) => toggled ? "#2E4F4F" : " #2e4f4f4c"};

    &:hover{
        background-color: #2E4F4F;
    }

`

export const STBIcon = styled.img`
    width:100%;
    height:100%;
    padding:5px;
`