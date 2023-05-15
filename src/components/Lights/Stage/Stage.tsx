import { RootState, useAppSelector } from "@/store/store";
import { MeshReflectorMaterial, OrbitControls, OrthographicCamera, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import {StageModel} from "./StageModel";
import styled from "styled-components";
import { SpotLightHelper } from "three/src/helpers/SpotLightHelper";
import { PointLightHelper } from "three/src/helpers/PointLightHelper";
import { Object3D } from "three";

const StageContainer = styled.div`
    width:100vw;
    height:100vh;
`
function StageObject(){
    const light:any = useRef();
    useHelper(light, SpotLightHelper)
    const faderSelector = useAppSelector((state:RootState) => state.faders);
    const [targetOne,setTargetOne] = useState(new Object3D);
    targetOne.position.x = -2;
    targetOne.position.y = -5.4;
    targetOne.position.z = -20;
    return <>
        <OrbitControls />
        <PerspectiveCamera makeDefault fov={100} position={[0,0,4]} />
        {
            <color args={[0.01,0.01,0.01]} attach="background" />
        }
        <mesh position={[-0.3,-2,-13]} rotation={[0.15,0,0]}>
            <StageModel />
        </mesh>
        <pointLight castShadow receiveShadow position={[0,0,-15]} intensity={faderSelector[1]} color={[0.5,0.5,1]} distance={200}/>
        <spotLight ref={light} castShadow receiveShadow intensity={faderSelector[0]}  position={[-2.45,1.5,-7.5]} distance={30} angle={0.5} penumbra={0.5} target={targetOne}/>
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