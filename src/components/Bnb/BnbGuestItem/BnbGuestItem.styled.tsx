import styled, { css } from "styled-components";


export const BnbGuestItemContainer = styled.div`
    width:100%;
    height:90px;
    display:flex;
    align-items:center;
    padding:22px 4px;
    border-bottom: 1px solid rgb(235, 235, 235);
    user-select:none;
    &:last-child{
        border-bottom: 0px;
    }
`

export const GuestInfoContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    flex:1 auto;
`

export const GuestInfoTitle = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color:black;
`

export const GuestInfoSubtitle = styled.p`
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: rgb(113, 113, 113);
`

export const GuestCounterContainer = styled.div`
    display:flex;
    align-items:center;
    height:100%;
    justify-content:space-between;
    width:104px;
`

export const GuestCounterButton = styled.button<{
    isDisabled:boolean,
    blocked?:boolean,
}>`
    width:32px;
    height:32px;
    border-radius:50%;
    font-size:19px;
    display:flex;
    align-items:center;
    justify-content: center;
    color:#292929;
    padding-bottom: 2px;    
    background-color: white;
    border: 1px solid #B0B0B0B0;
    cursor: pointer;

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        opacity: 0.4;
    `}

    ${({ blocked }) => blocked && css`
        pointer-events: none;
        opacity: 0.4;
    `}
`

export const GuestCounterIndicator = styled.p`
    font-size: 17px;
    line-height: 20px;
    font-weight: 500;
    color:black;
`