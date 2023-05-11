import LightFaders from "@/layout/LightFaders/LightFaders";
import { LightConsoleContainer } from "./LightConsole.styled";



function LightConsole(){
    return(
        <LightConsoleContainer>
            <LightFaders />
        </LightConsoleContainer>
    )
}

export default LightConsole;