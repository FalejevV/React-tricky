import LightFaders from "@/layout/LightFaders/LightFaders";
import { LightConsoleContainer, LightConsoleTable } from "./LightConsole.styled";



function LightConsole(){
    return(
        <LightConsoleTable>
            <LightConsoleContainer>
                <LightFaders />
            </LightConsoleContainer>
        </LightConsoleTable>
    )
}

export default LightConsole;