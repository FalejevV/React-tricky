import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { LightFaderContainer, LightFaderKnob } from "./LightFader.styled";
import { ChangeEvent } from "react";
import { setFader } from "@/store/faders";



function LightFader(props:{
    index:number,
}){
    const faderSelector = useAppSelector((state:RootState) => state.faders)
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
            <LightFaderKnob step={5} onChange={(e) => onChange(e)} type="range" value={faderSelector[props.index] * 100} />
        </LightFaderContainer>
    )
}

export default LightFader;