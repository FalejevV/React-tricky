import { useEffect, useMemo } from "react";
import { CardSwipeContainer, CardSwipeImage, CardSwipeText, CardSwipeTitle } from "./CardSwipe.styled";



function CardSwipe(props:{
    title:string,
    backgroundColor:string,
    isToggled: boolean,
    position:{
        rotation:string,
        left:string,
        top:string,
    },
    id:string,
}){
    return (
        <CardSwipeContainer className="CSC" id={props.id} rotation={props.position.rotation} left={props.position.left} top={props.position.top} isToggled={props.isToggled}>
            <CardSwipeImage color={props.backgroundColor}></CardSwipeImage>
            <CardSwipeTitle>Title</CardSwipeTitle>
            <CardSwipeText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </CardSwipeText>
        </CardSwipeContainer>
    );
}


export default CardSwipe;