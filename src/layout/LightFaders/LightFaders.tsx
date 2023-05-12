import LightFader from "@/components/Lights/LightFader/LightFader";
import { FaderContainer, LightFadersContainer } from "./LightFaders.styled";
import FaderMarks from "@/components/Lights/FaderMarks/FaderMarks";


function LightFaders(){

    function getFaders(){
        let faderArray = [];
        for (let i = 0; i < 10; i++){
            faderArray.push(
                <FaderContainer key={i}>
                    <LightFader index={i} />
                    {i !== 9 && <FaderMarks />}
                </FaderContainer>
            )
        }
        return faderArray;
    }

    return(
        <LightFadersContainer>
            {getFaders()}
        </LightFadersContainer>
    )
}


export default LightFaders;