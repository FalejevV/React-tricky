import { RootState, useAppSelector } from "@/store/store";
import { MeshReflectorMaterial, OrbitControls, OrthographicCamera, PerspectiveCamera, SpotLight, SpotLightShadow, useDepthBuffer, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import {StageModel} from "./StageModel";
import styled from "styled-components";
import { SpotLightHelper } from "three/src/helpers/SpotLightHelper";
import Spotlight from "../Spotlight/Spotlight";

const StageContainer = styled.div`
    width:100vw;
    height:100vh;
`
function StageObject(){
    const light:any = useRef();
    useHelper(light, SpotLightHelper);
    const faderSelector = useAppSelector((state:RootState) => state.faders);
    return <>
        <OrbitControls />
        <PerspectiveCamera makeDefault fov={100} position={[0,0,4]} />
        <MeshReflectorMaterial mirror={0.3} />
        {
            <color args={[0.01,0.01,0.01]} attach="background" />
        }
        <mesh position={[-0.3,-2,-9]} rotation={[0.15,0,0]}>
            <pointLight castShadow receiveShadow position={[0,1,2]} intensity={faderSelector[9]} color={[0.5,0.5,1]} distance={200}/>

            <Spotlight position={[-2.15,4.3,4.9]} targetId={0}/>
            <Spotlight position={[-1.45,4.3,4.9]} targetId={0}/>

            <StageModel />
        </mesh>
    </>
}

function Stage(){
    return(
        <StageContainer>
            <Suspense fallback={null}>
                <Canvas shadows>
                    <StageObject />
                </Canvas>
            </Suspense>
        </StageContainer>
    )
}

export default Stage;