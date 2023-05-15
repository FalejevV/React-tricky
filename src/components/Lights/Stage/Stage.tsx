import { RootState, useAppSelector } from "@/store/store";
import { MeshReflectorMaterial, OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import {StageModel} from "./StageModel";
import styled from "styled-components";

const StageContainer = styled.div`
    width:100vw;
    height:100vh;
`
function StageObject(){
    // const light:any = useRef();
    // useHelper(light, SpotLightHelper, 'red')
    const faderSelector = useAppSelector((state:RootState) => state.faders);
    return <>
        <PerspectiveCamera makeDefault fov={100} position={[0,0,4]} />
        {
            <color args={[0.01,0.01,0.01]} attach="background" />
        }
        <mesh position={[-0.3,-2,-13]} rotation={[0.15,0,0]}>
            <StageModel />
        </mesh>
        <spotLight intensity={0.5} position={[0,0,1]} />
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