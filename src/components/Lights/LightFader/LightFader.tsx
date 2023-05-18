import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { LightFaderButton, LightFaderContainer, LightFaderKnob } from "./LightFader.styled";
import { ChangeEvent } from "react";
import { setFader } from "@/store/faders";
import { toggleActive } from "@/store/active";



function LightFader(props:{
    index:number,
}){
    const faderSelector = useAppSelector((state:RootState) => state.faders);
    const activeSelector = useAppSelector((state:RootState) => state.active);
    const dispatch = useAppDispatch();

    function onChange(e:ChangeEvent){
        let target = e.target as HTMLInputElement;
        let value = Number(target.value);
        dispatch(setFader({
            faderIndex: props.index,
            value: value / 100
        }))
    }

    return(
        <LightFaderContainer>
            <LightFaderButton onClick={() => dispatch(toggleActive(props.index))} active={activeSelector.includes(props.index)}>
                
            </LightFaderButton>
            <LightFaderKnob step={5} onChange={(e) => onChange(e)} type="range" value={faderSelector[props.index] * 100} />
        </LightFaderContainer>
    )
}

export default LightFader;