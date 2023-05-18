import LightFaders from "@/layout/LightFaders/LightFaders";
import { LightConsoleContainer, LightConsoleTable } from "./LightConsole.styled";
import LightControls from "../LightControls/LightControls";



function LightConsole(){
    return(
        <LightConsoleTable>
            <LightConsoleContainer>
                <LightFaders />
                <LightControls />
            </LightConsoleContainer>
        </LightConsoleTable>
    )
}

export default LightConsole;