import { RootState, useAppSelector } from "@/store/store";
import { MeshReflectorMaterial, OrbitControls, OrthographicCamera, PerspectiveCamera, SpotLight, SpotLightShadow, useDepthBuffer, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import {StageO} from "./StageO";
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
        
        {
            <color args={[0.01,0.01,0.01]} attach="background" />
        }
        <mesh position={[0,-1,-4]} rotation={[0.25,0,0]}>
            <pointLight castShadow receiveShadow position={[0,1,2]} intensity={faderSelector[9]} color={[0.5,0.5,1]} distance={200}/>

            <Spotlight position={[-2.15, 4.3, 4.9]} targetKey={"left"} faderIndex={0} />
            <Spotlight position={[-1.45, 4.3, 4.9]} targetKey={"left"} faderIndex={0}/>


            <Spotlight position={[-0.3, 4.3, 4.9]} targetKey={"center"} faderIndex={1}/>
            <Spotlight position={[0.36, 4.3, 4.9]} targetKey={"center"} faderIndex={1}/>

            <Spotlight position={[1.58, 4.3, 4.9]} targetKey={"right"} faderIndex={2}/>
            <Spotlight position={[2.3, 4.3, 4.9]} targetKey={"right"} faderIndex={2}/>


            <Spotlight position={[2.5, 4.5, 0]} zoom={0.35} color={"#14a4fd"} distance={10}  targetKey={"head2"} faderIndex={3}/>
            <Spotlight position={[-2.5, 4.6, 0]} zoom={0.35} color={"#14fd5a"} distance={10}  targetKey={"head1"} faderIndex={3}/>

            <StageO />
        </mesh>
    </>
}

function Stage(){
    return(
        <StageContainer>
            <Suspense fallback={null}>
                <Canvas dpr={0.5} shadows>
                    <StageObject />
                </Canvas>
            </Suspense>
        </StageContainer>
    )
}

export default Stage;