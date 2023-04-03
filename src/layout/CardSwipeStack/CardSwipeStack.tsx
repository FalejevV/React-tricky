import CardSwipe from "@/components/CardSwipe/CardSwipe";
import { CardSwipeStackContainer } from "./CardSwipeStack.styled";
import { cardSwipeList, cardPositions } from "@/data/cardSwipeData";
import {  useRef, useState } from "react";


function CardSwipeStack(){

    const [currentIndex,setCurrentIndex] = useState(cardSwipeList.length -1);
    const [isMouseDown,setIsMouseDown] = useState(false);
    const [mouseDownStart, setMouseDownStart] = useState<null | {x:number, y:number}>(null);
    const containerRef = useRef(null);


    function mouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        if(isMouseDown){
            let card = document.getElementById("card-"+currentIndex);
            if(card && containerRef.current){
                let container = containerRef.current as HTMLDivElement;
                let relativeContainer = container.getBoundingClientRect();
                
                let x = e.clientX - relativeContainer.left;
                let y = e.clientY - relativeContainer.top;
                
                if(x < 50 || x  > relativeContainer.width - 50 || y > relativeContainer.height - 50){
                    setIsMouseDown(false);
                    card.style.left = `calc(${cardPositions[currentIndex].left} + 50%)`;
                    card.style.top = `calc(${cardPositions[currentIndex].top} + 50%)`;
                    return;
                }

                if(!mouseDownStart){
                    setMouseDownStart({
                        x: x - e.clientX,
                        y: y - e.clientY
                    });

                    card.style.left = x + "px";
                    card.style.top = y + "px";
                }else{
                    card.style.left = x + "px";
                    card.style.top = y + "px";
                }
            }
        }
    }

    function mouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        let element = e.target as HTMLElement;
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
        }
    }

    function mouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        setIsMouseDown(false);

        let card = document.getElementById("card-"+currentIndex);
        if(card){
            card.style.left = `calc(${cardPositions[currentIndex].left} + 50%)`;
            card.style.top = `calc(${cardPositions[currentIndex].top} + 50%)`;
        }
    }
    function mouseLeave(){
        setIsMouseDown(false);
        let card = document.getElementById("card-"+currentIndex);
        if(card){
            card.style.left = `calc(${cardPositions[currentIndex].left} + 50%)`;
            card.style.top = `calc(${cardPositions[currentIndex].top} + 50%)`;
        }
    }

    return(
        <CardSwipeStackContainer ref={containerRef} onMouseMove={(e) => mouseMove(e)} onMouseDown={(e) => mouseDown(e)} onMouseUp={(e) => mouseUp(e)} onMouseLeave={mouseLeave}>
            {cardSwipeList.map((card,index) => <CardSwipe id={"card-"+index} position={cardPositions[index]} isToggled={currentIndex === index} key={index} title={card.title} backgroundColor={card.color} />)}
        </CardSwipeStackContainer>
    )
}

export default CardSwipeStack;