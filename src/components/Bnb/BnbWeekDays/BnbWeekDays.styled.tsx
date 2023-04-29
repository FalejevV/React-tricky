import styled from "styled-components";


export const BnbWeekDaysContainer = styled.div<{
    width?:string,
}>`
    width:${({ width }) => width ||"345px"};
    height:40px;
    padding:0px 5px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    
    @media(max-width:948px){
        width:310px;
    }
    @media(max-width:750px){
        width:${({ width }) => width ||"345px"};
        justify-content: center;
    }
`

export const BnbWeekDaysItem = styled.p`
    font-size: 12px;
    color:black;
    font-weight:600;
    opacity:0.4;
    flex:1;
    text-align: center;
`