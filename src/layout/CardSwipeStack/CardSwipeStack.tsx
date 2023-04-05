import CardSwipe from "@/components/CardSwipe/CardSwipe";
import { CardSwipeStackContainer, NoContainer, SVGItem, YesContainer } from "./CardSwipeStack.styled";
import { cardSwipeList, cardPositions } from "@/data/cardSwipeData";
import {  useEffect, useRef, useState } from "react";


function CardSwipeStack(){
    const [swipeCards,setSwipeCards] = useState(cardSwipeList);
    const [currentIndex,setCurrentIndex] = useState(swipeCards.length -1);
    const [isMouseDown,setIsMouseDown] = useState(false);
    const [mouseDownStart, setMouseDownStart] = useState<null | {x:number, y:number}>(null);
    const containerRef = useRef(null);
    const noRef = useRef(null);
    const yesRef = useRef(null);

    const [dragAction, setDragAction] = useState<null | string>(null);

    function mouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent> | null, t:React.TouchEvent<HTMLDivElement> | null){
        if(isMouseDown){


            // Register mouse or touch cursor position, depends on data passed in
            let cursorPosX;
            let cursorPosY;
            if(e){
                cursorPosX = e.clientX;
                cursorPosY = e.clientY;
                e.preventDefault();
            }else if(t){
                cursorPosX = t.touches[0].clientX;
                cursorPosY = t.touches[0].clientY;
                t.preventDefault();
            }



            let card = document.getElementById("card-"+currentIndex);
            if(card && containerRef.current){
                let container = containerRef.current as HTMLDivElement;
                let relativeContainer = container.getBoundingClientRect();
                
                // These coordinates represent the mouse position relative to the container.
                let x = (cursorPosX || 0) - relativeContainer.left;
                let y = (cursorPosY || 0) - relativeContainer.top;


                // If card drag goes outside the container => stop dragging and return to default position
                if(x < 25 || x  > relativeContainer.width - 25 || y > relativeContainer.height - 25 || y < 25){
                    setIsMouseDown(false);
                    setMouseDownStart(null);
                    card.style.transition = "all 0.3s";
                    card.style.left = `calc(${cardPositions[currentIndex].left} + 50%)`;
                    card.style.top = `calc(${cardPositions[currentIndex].top} + 50%)`;
                    return;
                }

                // just to be sure that on drag theres no left/top transition;
                card.style.transition = "unset";

                // sets exact click position on the card. It will remain the same (setMouseDown used to keep it between renders)
                // so on dragging the original mouse offset would be the same.
                let cardClickPositionX = card.offsetLeft - x;
                let cardClickPositionY = card.offsetTop - y;
                card.style.pointerEvents = "none";
                if(!mouseDownStart){
                    // First drag event, sets state drag position.
                    setMouseDownStart({
                        x: cardClickPositionX,
                        y: cardClickPositionY
                    });

                    // Card position => relative mouse position inside container + mouse position offset on the card;
                    card.style.left = x + cardClickPositionX + "px";
                    card.style.top = y + cardClickPositionY + "px";
                }else{
                    card.style.left = x + mouseDownStart.x + "px";
                    card.style.top = y + mouseDownStart.y + "px";
                }
            }
        }
    }

    function mouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent> | null, t:React.TouchEvent<HTMLDivElement> | null){
        let element;
        if(e){
            element = e.target as HTMLDivElement;
            e.preventDefault();
        }else if(t){
            element = t.target as HTMLDivElement;
            t.preventDefault();
        }
        if(element === undefined){
            return;
        }

        // if statements check if target element is main CardDivContainer, otherwise sets target parent.
        if(element.tagName !== "DIV"){
            element = element.parentElement || element;
        }else{
            if(!element.className.includes("CSC")){
                element = element.parentElement || element; 
            }
        }
        if(element.className.includes("CSC") && element.id === "card-"+currentIndex){
            setIsMouseDown(true);
        }else{
            setIsMouseDown(false);
            setMouseDownStart(null);
        }
    }

    function mouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent> |null, t:React.TouchEvent<HTMLDivElement> | null){
        if(e){
            e.preventDefault();
        }
        if(t){
            t.preventDefault();
        }
        // if released card is near red/green container - do some animations and switch to next card.
        if(isMouseDown && dragAction){  
            let pickedRef;
            if(dragAction === "no") pickedRef = noRef;
            if(dragAction === "yes") pickedRef = yesRef;
            let card = document.getElementById("card-"+currentIndex);

            if(pickedRef?.current && containerRef.current && card){
                let container = containerRef.current as HTMLDivElement;
                let relativeContainer = container.getBoundingClientRect();
                let currentRef = pickedRef.current as HTMLElement;
                let relativeRef = currentRef.getBoundingClientRect();
                
                let refX = relativeRef.left - relativeContainer.left;
                let refY = relativeRef.top - relativeContainer.top;
                card.style.transition = "all 0.3s";
                card.style.opacity = "0";
                card.style.left = refX + (relativeRef.width / 2) + "px";
                card.style.top = refY + (relativeRef.height / 2) + "px";
                card.style.transform = "translate(-50%, -50%) scale(0.01)";

                setTimeout(() => {
                    if(card){
                        card.style.display = "none";
                    }
                },300);

                setCurrentIndex(prev => prev-1);
                setIsMouseDown(false);
                setMouseDownStart(null);
                return;
            }
            
        }


        // on mouseUp (If drag action is not successful) returns card to its original state.
        setIsMouseDown(false);
        setMouseDownStart(null);
        let card = document.getElementById("card-"+currentIndex);
        if(card){
            card.style.transition = "all 0.3s";
            card.style.pointerEvents = "unset";
            card.style.left = `calc(${cardPositions[currentIndex].left} + 50%)`;
            card.style.top = `calc(${cardPositions[currentIndex].top} + 50%)`;
        }
    }
    function mouseLeave(){

        // Returns card to its original state if drag is out of bounds.
        setIsMouseDown(false);
        setMouseDownStart(null);
        let card = document.getElementById("card-"+currentIndex);
        if(card){
            card.style.transition = "all 0.3s";
            card.style.pointerEvents = "unset";
            card.style.left = `calc(${cardPositions[currentIndex].left} + 50%)`;
            card.style.top = `calc(${cardPositions[currentIndex].top} + 50%)`;
        }
    }

    useEffect(() => {
        if(currentIndex < 0){
            setTimeout(() => {
                setSwipeCards([]);
                setTimeout(() => {
                    setSwipeCards(cardSwipeList);
                    setCurrentIndex(cardSwipeList.length -1);
                    setIsMouseDown(false);
                    setMouseDownStart(null);
                },500);
            },300);
        }
    },[currentIndex]);

    return(
        <CardSwipeStackContainer ref={containerRef} 
            onTouchCancelCapture={() => mouseLeave()} 
            onTouchEndCapture={(t) => mouseUp(null,t)}
            onTouchMove={(t) => mouseMove(null,t)} 
            onTouchStart={(t) => mouseDown(null,t)} 
            onMouseMove={(e) => mouseMove(e,null)} 
            onMouseDown={(e) => mouseDown(e,null)} 
            onMouseUp={(e) => mouseUp(e,null)} 
            onMouseLeave={mouseLeave}
        >
            <NoContainer ref={noRef} hoverable={isMouseDown} onMouseOver={() => setDragAction("no")} onMouseLeave={() => setDragAction(null)}>
                <SVGItem viewBox="0 0 24 24" width="24" height="24">
                    <path d="M2.80777 1.39355L21.1925 19.7783L19.7783 21.1925L16.0316 17.4456L12 21.4852L3.52154 12.9932C1.48186 10.7095 1.49309 7.2403 3.55524 4.96974L1.39355 2.80777L2.80777 1.39355ZM4.98009 11.6233L12 18.6545L14.6176 16.0316L4.97206 6.38638C3.67816 7.8828 3.67138 10.1211 4.98009 11.6233ZM20.2428 4.75752C22.5054 7.02488 22.5831 10.6372 20.4788 12.9932L18.8442 14.6292L17.4302 13.2152L19.0202 11.6233C20.3937 10.0469 20.3191 7.66541 18.8271 6.17026C17.3281 4.66809 14.9078 4.60717 13.3371 6.01703L12.0021 7.21539L10.6662 6.01796C10.3163 5.70431 9.92487 5.4634 9.51117 5.29488L7.2604 3.04566C8.92926 2.8395 10.6682 3.33385 12.0011 4.52869C14.3502 2.42016 17.9802 2.49016 20.2428 4.75752Z" fill="#790000"></path>
                </SVGItem>
            </NoContainer>
            {swipeCards.map((card,index) => <CardSwipe id={"card-"+index} position={cardPositions[index]} isToggled={currentIndex === index} key={index} title={card.title} backgroundColor={card.color} />)}
            <YesContainer ref={yesRef} hoverable={isMouseDown} onMouseOver={() => setDragAction("yes")} onMouseLeave={() => setDragAction(null)}>
                <SVGItem viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" fill="#000"></path>
                </SVGItem>
            </YesContainer>
        </CardSwipeStackContainer>
    )
}

export default CardSwipeStack;