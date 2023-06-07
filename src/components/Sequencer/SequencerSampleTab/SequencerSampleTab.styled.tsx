import styled from "styled-components";


export const SequencerSampleTabContainer = styled.div<{
    color:string
}>`
    width:100%;
    height:90px;
    position:relative;
    overflow:hidden;
    border-top:1px solid #2E4F4F;
    &:after{   
        content:"";
        position:absolute;
        right:-25px;
        top:-22.5px;
        width:50px;
        height:40px;
        background-color:${({ color }) => color || "red"};
        transform: rotate(45deg);
    }
    &:before{
        content:"";
        position:absolute;
        left:0px;
        top:0px;
        width:100%;
        height:2px;
        border-top:1px solid #2E4F4F;
    }
`

export const SequencerSampleTabTopBar = styled.div<{
    color:string,
}>`
    width:100%;
    height:25px;
`