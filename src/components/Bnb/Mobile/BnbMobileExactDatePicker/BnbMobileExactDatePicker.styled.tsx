import styled from "styled-components";


export const BnbMobileWeekDaysContainer = styled.div`
    margin:0 auto;
    padding:0px 2.5%;
    width:100%;
    position: relative;
    
    &:after{
        content:'';
        position: absolute;
        left:-27px;
        bottom:5px;
        width:calc(100% + 54px);
        height:1px;
        background-color:#d8d8d8;
    }
`