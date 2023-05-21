import { RootState, useAppSelector } from "@/store/store";
import { OrbitControls, PerspectiveCamera,useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import {StageModel} from "./StageModel";
import styled from "styled-components";
import { SpotLightHelper } from "three/src/helpers/SpotLightHelper";
import Spotlight from "../Spotlight/Spotlight";
import { PointLightHelper } from "three";

const StageContainer = styled.div`
    width:1500px;
    height:850px;
    position:absolute;
    top:5%;
    border:5px solid white;
`
function StageObject(){
    const light:any = useRef();
    useHelper(light, PointLightHelper);
    const colorSelector = useAppSelector((state:RootState) => state.colors);
    return <>
        {false && <OrbitControls />}
        <PerspectiveCamera makeDefault fov={100} position={[0,0,4]} />
        {
            <color args={[0.01,0.01,0.01]} attach="background" />
        }
        <mesh position={[0,-1,-2]} scale={1.3} rotation={[0,0,0]}>
            <Spotlight color={colorSelector[0] || "#f9c463"} intensityMultiplier={7} position={[-2.15, 3.3, 4.9]} pointDepth={-3} targetKey={0} faderIndex={0} />

            <Spotlight color={colorSelector[1] || "#f9c463"} intensityMultiplier={7} position={[-0.3, 3.3, 4.9]} pointDepth={-3} targetKey={1} faderIndex={1}/>

            <Spotlight color={colorSelector[2] || "#f9c463"} intensityMultiplier={7} position={[2.3, 3.3, 4.9]} pointDepth={-3} targetKey={2} faderIndex={2}/>


            <Spotlight position={[-2.5, 4.6, 0]} pointDepth={-3} intensityMultiplier={10} zoom={0.35} color={colorSelector[3] || "#14fd5a"} distance={10}  targetKey={3} faderIndex={3}/>
            <Spotlight position={[2.5, 4.5, 0]} pointDepth={-3} intensityMultiplier={10} zoom={0.35} color={colorSelector[4] || "#fc0000"} distance={10}  targetKey={4} faderIndex={4}/>

            <Spotlight position={[1, 4.6, -1]} pointDepth={-0.5} intensityMultiplier={10} zoom={0.6} color={colorSelector[5] || "cyan"} distance={10}  targetKey={5} faderIndex={5}/>
            <Spotlight position={[-1, 4.6, -1]} pointDepth={-0.5} intensityMultiplier={10} zoom={0.6} color={colorSelector[6] || "#ff6ab2"} distance={10}  targetKey={6} faderIndex={6}/>

            <StageModel />
        </mesh>
    </>
}

function Stage(props:{
    doLoadStage:boolean
}){
    return(
        <>
            {props.doLoadStage && <> 
                <StageContainer>
                    <Suspense fallback={null}>
                        <Canvas dpr={1} shadows={true}>
                            <StageObject />
                        </Canvas>
                    </Suspense>
                </StageContainer>
            </>}
        </>
    )
}

export default Stage;