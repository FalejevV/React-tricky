import LightConsole from "@/components/Lights/LightConsole/LightConsole";
import Stage from "@/components/Lights/Stage/Stage";
import { LightsContainer } from "@/styles/lights.styled";


function Lights(){
    return(
        <LightsContainer>
            <LightConsole />
            <Stage />
        </LightsContainer>
    )
}

export default Lights;