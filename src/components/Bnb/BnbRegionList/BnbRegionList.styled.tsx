import styled, { css } from "styled-components";


export const BnbRegionItem = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    gap:8px;
    border-radius: 10px;
    cursor: pointer;

    transition: all 0.3s;
`


export const BnbRegionItemImage = styled.img<{
    picked:boolean,
}>`
    width:122px;
    height:122px;
    object-fit: contain;
    border:1px solid #DDDDDD;
    border-radius: 10px;
    transition: all 0.3s;


    &:active{
        transform: scale(0.95);
        border:1px solid black;
    }

    ${({ picked }) => picked && css`
       border:2px solid black; 

       &:active{
        transform: scale(0.95);
            border:2px solid black;
        }
    `}
`



export const BnbRegionItemText = styled.p`
    color: #222222;
    font-size: 14px;
    line-height: 18px;
`