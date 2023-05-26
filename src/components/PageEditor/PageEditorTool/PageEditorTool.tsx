import { useCallback, useEffect, useState } from "react";
import { PageEditorToolContainer, PageEditorToolIcon, PageEditorToolTitle } from "./PageEditorTool.styled";



function PageEditorTool(props:{
    icon:string,
    action:Function,
    title:string
}){
    const [mouseEntered, setMouseEntered] = useState(false);
    const [coordinates, setCoordinates] = useState({
        left:"0px",
        top:"0px"
    })
    function mouseEnteredEvent(){
        if(!mouseEntered){
            setMouseEntered(true);
        }
    }

    function mouseLeftEvent(){
        if(mouseEntered){
            setMouseEntered(false);
        }
    }

    const mouseMoveHandler = useCallback((e:MouseEvent) => {
        if(mouseEntered){
            setCoordinates({
                left: e.clientX + 10 + "px",
                top: e.clientY + 10 + "px"
            })
        }
    },[mouseEntered]);

    useEffect(() => {
        document.addEventListener("mousemove", mouseMoveHandler);
        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);;
        }
    },[mouseEntered, mouseMoveHandler]);
    return(
        <PageEditorToolContainer onMouseLeave={mouseLeftEvent} onMouseEnter={mouseEnteredEvent} onClick={() => props.action()}>
            <PageEditorToolIcon width={30} height={30} alt={props.title} src={props.icon}/>
            <PageEditorToolTitle left={coordinates.left} top={coordinates.top} isHovered={mouseEntered}>{props.title}</PageEditorToolTitle>
        </PageEditorToolContainer>
    )
}


export default PageEditorTool;