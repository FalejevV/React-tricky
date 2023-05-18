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
    width:1100px;
    height:700px;
    position:absolute;
    top:10%;
    border:5px solid white;
`
function StageObject(){
    const light:any = useRef();
    useHelper(light, PointLightHelper);
    const faderSelector = useAppSelector((state:RootState) => state.faders);
    const colorSelector = useAppSelector((state:RootState) => state.colors);
    return <>
        {false && <OrbitControls />}
        <PerspectiveCamera makeDefault fov={100} position={[0,0,4]} />
        {
            <color args={[0.01,0.01,0.01]} attach="background" />
        }
        <mesh position={[0,-1,-4]} scale={1.3} rotation={[0.25,0,0]}>
            <pointLight position={[0,2,-1]} intensity={faderSelector[9] * 5} color={[0.5,0.5,1]} distance={20}/>

            <Spotlight color={colorSelector[0] || "#f9c463"} position={[-2.15, 4.3, 4.9]} pointDepth={-3} targetKey={0} faderIndex={0} />

            <Spotlight color={colorSelector[1] || "#f9c463"} position={[-0.3, 4.3, 4.9]} pointDepth={-3} targetKey={1} faderIndex={1}/>

            <Spotlight color={colorSelector[2] || "#f9c463"} position={[2.3, 4.3, 4.9]} pointDepth={-3} targetKey={2} faderIndex={2}/>


            <Spotlight position={[-2.5, 4.6, 0]} pointDepth={-3} intensityMultiplier={3} zoom={0.35} color={colorSelector[3] || "#14fd5a"} distance={10}  targetKey={3} faderIndex={3}/>
            <Spotlight position={[2.5, 4.5, 0]} pointDepth={-3} intensityMultiplier={3} zoom={0.35} color={colorSelector[4] || "#fc0000"} distance={10}  targetKey={4} faderIndex={4}/>

            <Spotlight position={[1, 4.6, -1]} pointDepth={-0.5} intensityMultiplier={5} zoom={0.6} color={colorSelector[5] || "cyan"} distance={10}  targetKey={5} faderIndex={5}/>
            <Spotlight position={[-1, 4.6, -1]} pointDepth={-0.5} intensityMultiplier={5} zoom={0.6} color={colorSelector[6] || "#ff6ab2"} distance={10}  targetKey={6} faderIndex={6}/>

            <StageModel />
        </mesh>
    </>
}

function Stage(){
    return(
        <StageContainer>
            <Suspense fallback={null}>
                <Canvas dpr={0.8} shadows>
                    <StageObject />
                </Canvas>
            </Suspense>
        </StageContainer>
    )
}

export default Stage;