import LightConsole from "@/components/Lights/LightConsole/LightConsole";
import { LightsContainer } from "@/styles/lights.styled";


function Lights(){
    return(
        <LightsContainer>
            <LightConsole />
        </LightsContainer>
    )
}

export default Lights;