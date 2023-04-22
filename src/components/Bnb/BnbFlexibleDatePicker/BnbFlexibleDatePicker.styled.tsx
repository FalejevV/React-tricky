import styled, { css } from "styled-components";
import { BnbApproxDateButton } from "../BnbApproxDate/BnbApproxDate.styled";


export const BnbFlexibleDateContainer = styled.div`
    width:100%;
    height:300px;
    display:flex;
    flex-direction: column;
    gap:13px;
`

export const BnbFlexDateTitle = styled.p`
    width:100%;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    text-align: center;
    color: rgb(34, 34, 34);
    padding-top:10px;
`

export const BnbFlexDateDurationContainer = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:5px;
    padding-left:5px;
`

export const BnbFlexDateDurationButton = styled(BnbApproxDateButton)`
    font-size:14px;
    padding:10px 17px;
`

export const BnbFlexDateMonthsTitle = styled(BnbFlexDateTitle)`
    padding-top:24px;
`