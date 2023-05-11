import { LightFaderContainer, LightFaderKnob } from "./LightFader.styled";



function LightFader(){
    return(
        <LightFaderContainer>
            <LightFaderKnob type="range" />
        </LightFaderContainer>
    )
}

export default LightFader;