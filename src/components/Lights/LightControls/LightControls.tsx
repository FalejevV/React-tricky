import LightColorGrid from "@/layout/LightColorGrid/LightColorGrid";
import { LightArrowDown, LightArrowLeft, LightArrowRight, LightArrowUp, LightArrowsContainer, LightControlsContainer, LightControlsTab, LightResetButton } from "./LightControls.styled";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { setColor } from "@/store/colors";
import { restoreTarget, setTarget } from "@/store/targets";



function LightControls(){
    const useActiveSelector = useAppSelector((state:RootState) => state.active);
    const useTargetSelector = useAppSelector((state:RootState) => state.targets);
    const dispatch = useAppDispatch();

    function resetActive(){
        useActiveSelector.forEach((fader) => {
            dispatch(setColor({
                index:fader,
                color:""
            }));
            dispatch(restoreTarget(fader));
        })
    }

    function moveTarget(x:number,y:number,z:number){
        useActiveSelector.forEach(index => {
            dispatch(setTarget({
                target:{
                    x:useTargetSelector[index].x + x,
                    y:useTargetSelector[index].y + y,
                    z:useTargetSelector[index].z + z,
                },
                key:index
            }));
        })
    }
    return(
        <LightControlsContainer avaliable={useActiveSelector.length > 0}>
            <LightControlsTab>
                <LightResetButton onClick={resetActive}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#b4b4b4" d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                </LightResetButton>
                <LightArrowsContainer>
                    <LightArrowUp onClick={() => moveTarget(0,0,-0.5)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 12V20H11V12H4L12 4L20 12H13Z"></path></svg>
                    </LightArrowUp>

                    <LightArrowDown onClick={() => moveTarget(0,0,0.5)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 12H20L12 20L4 12H11V4H13V12Z"></path></svg>
                    </LightArrowDown>

                    <LightArrowLeft onClick={() => moveTarget(-0.5,0,0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path></svg>
                    </LightArrowLeft>

                    <LightArrowRight onClick={() => moveTarget(0.5,0,0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                    </LightArrowRight>
                </LightArrowsContainer>
            </LightControlsTab>
            <LightColorGrid />
        </LightControlsContainer>
    )
}


export default LightControls;