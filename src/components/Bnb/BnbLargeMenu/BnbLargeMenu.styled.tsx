import styled, { css } from "styled-components";




export const BnbLargeMenuContainer = styled.div<{
    menuToggle:boolean,
}>`
    width:100%;
    max-width: 900px;
    height:180px;
    display: flex;
    flex-direction: column;
    opacity:0;
    pointer-events: none;
    z-index: 50;
    position: absolute;
    left:50%;
    transform: translate(-50%,-50%) scale(0);
    top:0px;
    padding-top: 15px;

    transition: all 0.3s;
    
    @media(max-width:948px){
        left:100px;
    }

    ${({ menuToggle }) => menuToggle && css`
        opacity: 1;
        pointer-events: auto;
        left:50%;
        transform: translate(-50%,0%) scale(1);

        @media(max-width:948px){
            top:65px;
            left:0;
            transform: translate(0%,0%) scale(1);
        }
    `}

    @media(max-width:750px){
        display:none;
    }

`


export const BnbLargeMenuTopBar = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    gap:33px;

    @media(max-width:1126px){
        gap:25px;
    }

`

export const BnbLargeMenuTypeButton = styled.div<{
    toggle?:boolean,
}>`
    font-size:16px;
    color:#222222;
    position: relative;
    cursor:pointer;

    &:after{
        transition: all 0.3s;
        position: absolute;
        content:"";
        width:0%;
        height:2px;
        border-radius:10px;
        background-color:#222222;
        bottom:-10px;
        left:50%;
        transform: translateX(-50%);
    }


    &:hover{
        opacity: 0.7;

        &:after{
            width:100%;
            opacity:0.7;
        }
    }

    ${({ toggle }) => toggle && css`
        opacity: 1;
        &:after{
            opacity:1;
            width:100%;
        }

        &:hover{
            opacity:1;
            &:after{
                opacity:1;
            }
        }
    `}

    @media(max-width:1126px){
        font-size:14px;
    }

    @media(max-width:950px){
        font-size:16px;
    }
`


export const BnbLargeStayPicker = styled.div<{
    isActive:boolean,
}>`
    width:100%;
    max-width: 848px;
    height:68px;
    display: flex;
    align-items: center;
    border-radius:60px;
    background-color:white;
    border: 1px solid #cbcbcb;
    position: absolute;
    bottom:50px;
    left:50%;
    transform: translateX(-50%);
    ${({ isActive }) => isActive && css`
        background-color:#e6e5e5;
        border: 1px solid white;
    `}
`

export const BnbLargeStayPickerButton = styled.div<{
    flexFill:string,
    stayPick:boolean,
    first?:boolean,
}>`
    height:100%;
    padding:15px 24px;
    font-size:12px;
    font-weight: 600;
    color:#222222;
    position: relative;
    display: flex;
    flex:${({ flexFill }) => `${flexFill} 0 0px` || `1 auto`};
    flex-direction: column;
    gap:3px;
    border-radius: 60px;
    background-color:transparent;
    cursor:pointer;


    ${({ first }) => first && css`
        padding:16px 32px;
    `}

    &:hover{
        background-color:#dadada;
    }

    ${({ stayPick }) => stayPick && css`
        background-color: white;    
        box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.1);


        &:hover{
            background-color:white;
        }
    `}    
`

export const StayInputField = styled.input`
    width:100%;
    height:18px;
    color:#222;
    background-color:transparent;
    border:0px;
    font-size:14px;
    &:focus{
        outline:none;
        border:none;
    }
`

export const StayInputClearIcon = styled.svg<{
    toggle: boolean,
    right?:string,
}>`
    position:absolute;
    right:17px;
    top:50%;
    transform: translateY(-50%);
    width:22px;
    height:22px;
    padding:3px;
    border-radius: 50%;
    background-color:#e5e5e5;
    display:none;

    ${({ toggle }) => toggle && css`
        display:block;
    `}

    ${({ right }) => right && css`
        right: ${right};
    `}

    &:hover{
        background-color:#dadada;
    }

    @media(max-width:948px){
        display:none;
    }
`

export const StayPickerText = styled.p<{
    picked?:boolean,
    shorten?:boolean,
    toggle?:boolean,
}>`
    color:#838383;
    font-size:14px; 
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
    width:77%;
    min-width: 81px;
    height:100%;
    max-width: 200px;
    ${({ picked }) => picked && css`
        color:black;
    `}
    
    transition: width 0.3s;
    ${({ shorten }) => shorten && css`
        width:84px;

        @media(max-width:948px){
            width:77%;
        }
    `}
    
    ${({ toggle }) => toggle && css`
        min-width:60px;
        width:72%;
    `}
`

export const StayPickerSearchButton = styled.div<{
    expand:boolean,
}>`
    position: absolute;
    right:8px;
    top:50%;
    transform: translateY(-50%);
    width:48px;
    height:48px;
    background-color:#FF385C;
    border-radius: 60px;
    overflow: hidden;
    transition: all 0.3s;

    ${({ expand }) => expand && css`
        width:110px;

        @media(max-width:948px){
            width:48px;
        }
    `}

    &:hover{
        background-color:#df2e4e;
    }

    display:flex;
    align-items:center;

`

export const PickerSearchSVG = styled.svg<{
    toggled: boolean
}>`
    fill:white;
    min-width:16px;
    min-height: 16px;
    width:16px; 
    height:16px;
    margin:0px 16px;

    transition: all 0.3s;
    ${({ toggled }) => toggled && css`
        margin-right:8px;
    `}
`

export const PickerSearchText = styled.p`
    font-size:16px;
    color:white;
    font-weight: 600;

    @media(max-width:948px){
        display:none;
    }
`

export const BnbLargeStayDivider = styled.div<{
    visible:boolean,
}>`
    width:1px;
    height:30px;
    background-color:${({ visible }) => visible ? 'transparent' : "#cbcbcb"};
`