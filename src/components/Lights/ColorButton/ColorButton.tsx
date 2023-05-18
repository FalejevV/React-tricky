import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { ColorButtonContainer } from "./ColorButton.styled";
import { setColor } from "@/store/colors";



function ColorButton(props:{
    color:string,
}){

    const useActiveSelector = useAppSelector((state:RootState) => state.active);
    const dispatch = useAppDispatch();

    function switchColors(){
        useActiveSelector.forEach((faderIndex:number) => {
            dispatch(setColor({
                index:faderIndex,
                color:props.color
            }));
        })
    }

    return(
        <ColorButtonContainer color={props.color} onClick={switchColors}>

        </ColorButtonContainer>
    )
}

export default ColorButton;