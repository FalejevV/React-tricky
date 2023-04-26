import { BnbSmallMonthName, BnbSmallMonthTabContainer, BnbSmallMonthTabSVG, BnbSmallMonthYear } from "./BnbSmallMonthTab.styled";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function BnbSmallMonthTab(props:{
    toggle:boolean,
    date:Date,
    onClick:Function
}){
    return(
        <BnbSmallMonthTabContainer toggle={props.toggle} onClick={() => (props.onClick())}>
            <BnbSmallMonthTabSVG toggle={!props.toggle} viewBox="0 0 24 24">
                <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM11 11H13V13H11V11ZM16 11H18V13H16V11Z"></path>
            </BnbSmallMonthTabSVG>

            <BnbSmallMonthTabSVG toggle={props.toggle} viewBox="0 0 24 24">
                <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 8H4V19H20V8ZM15.0355 10.136L16.4497 11.5503L11.5 16.5L7.96447 12.9645L9.37868 11.5503L11.5 13.6716L15.0355 10.136Z"></path>
            </BnbSmallMonthTabSVG>

            <BnbSmallMonthName>{monthNames[props.date.getMonth()]}</BnbSmallMonthName>
            <BnbSmallMonthYear>{props.date.getFullYear()}</BnbSmallMonthYear>
        </BnbSmallMonthTabContainer>
    )
}

export default BnbSmallMonthTab;