import styled from "styled-components";

export const PEInputFieldContainer = styled.div`
    width:100%;
    height:40px;
        
    background: #FFFFFF;
    border: 1px solid #ABABAB;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
`

export const PEInputFieldInput = styled.input`
    position: absolute;
    width:100%;
    height:100%;
    background-color:white;
    padding:0px 15px;
    border:0px;
    color:black;
    font-size:17px;
    &:focus{
        outline: none;
    }
`