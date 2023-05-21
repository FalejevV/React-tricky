import { LightsAlertButton, LightsAlertButtonsContainer, LightsAlertHeader, LightsAlertText, LightsAlertWindowContainer } from "./LightsAlertWindow.styled";



function LightsAlertWindow(props:{
    doLoadStage:boolean,
    setDoLoadStage:Function
}){
    return(
        <>
            {!props.doLoadStage && 
                <LightsAlertWindowContainer>
                    <LightsAlertHeader>
                        ALERT! THIS MAY BLOW YOUR PC!<br/>
                        NOT FOR PHONES OR TABLETS!
                    </LightsAlertHeader>

                    <LightsAlertText>
                    On this page, a 3d model of the scene will be rendered, with a simple controllable light console. The use of light elements greatly affects performance. I warn you, the browser may freeze forever. It is advisable to open it in Chrome.
                    </LightsAlertText>

                    <LightsAlertButtonsContainer>
                        <LightsAlertButton color={"#360a0a"}>
                            <a href="/">
                                LEAVE
                            </a>
                        </LightsAlertButton>

                        <LightsAlertButton color={"#17360a"} onClick={() => props.setDoLoadStage(true)}>
                            I have a powerful PC
                        </LightsAlertButton>
                    </LightsAlertButtonsContainer>
                </LightsAlertWindowContainer>
            }
        </>
    )
}


export default LightsAlertWindow;