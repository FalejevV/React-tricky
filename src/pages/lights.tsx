import LightConsole from "@/components/Lights/LightConsole/LightConsole";
import LightsAlertWindow from "@/components/Lights/LightsAlertWindow/LightsAlertWindow";
import Stage from "@/components/Lights/Stage/Stage";
import { LightsContainer } from "@/styles/lights.styled";
import { useState } from "react";


function Lights(){
    const [doLoadStage,setDoLoadStage] = useState(false);
    return(
        <LightsContainer>
            <LightsAlertWindow doLoadStage={doLoadStage} setDoLoadStage={setDoLoadStage} />
            <LightConsole doLoadStage={doLoadStage} />
            <Stage doLoadStage={doLoadStage} />
        </LightsContainer>
    )
}

export default Lights;