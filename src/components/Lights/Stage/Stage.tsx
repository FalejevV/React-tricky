import { RootState, useAppSelector } from "@/store/store";
import { MeshReflectorMaterial, OrbitControls, OrthographicCamera, PerspectiveCamera, SpotLight, SpotLightShadow, useDepthBuffer, useHelper } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import {StageModel} from "./StageModel";
import styled from "styled-components";
import { SpotLightHelper } from "three/src/helpers/SpotLightHelper";
import { PointLightHelper } from "three/src/helpers/PointLightHelper";
import { Object3D } from "three";
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
        {
            <color args={[0.01,0.01,0.01]} attach="background" />
        }
         
        <Spotlight position={[-2.45,1.5,-7.5]} targetId={0}/>
        <Spotlight position={[-1.78,1.5,-7.5]} targetId={0}/>

        <Spotlight position={[-0.6,1.5,-7.5]} targetId={1}/>
        <Spotlight position={[0.1,1.5,-7.5]} targetId={1}/>

        <Spotlight position={[1.3,1.5,-7.5]} targetId={2}/>
        <Spotlight position={[2,1.5,-7.5]} targetId={2}/>

        <mesh position={[-0.3,-2,-13]} rotation={[0.15,0,0]}>
            <StageModel />
        </mesh>
        <pointLight castShadow receiveShadow position={[0,0,-15]} intensity={faderSelector[9]} color={[0.5,0.5,1]} distance={200}/>
        
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