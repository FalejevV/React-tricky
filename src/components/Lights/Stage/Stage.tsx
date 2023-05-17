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
    width:1200px;
    height:700px;
    position:absolute;
    top:10%;
`
function StageObject(){
    const light:any = useRef();
    useHelper(light, PointLightHelper);
    const faderSelector = useAppSelector((state:RootState) => state.faders);
    return <>
        {false && <OrbitControls />}
        <PerspectiveCamera makeDefault fov={100} position={[0,0,4]} />
        {
            <color args={[0.01,0.01,0.01]} attach="background" />
        }
        <mesh position={[0,-1,-4]} rotation={[0.25,0,0]}>
            <pointLight position={[0,2,-1]} intensity={faderSelector[9]} color={[0.5,0.5,1]} distance={20}/>

            <Spotlight position={[-2.15, 4.3, 4.9]} pointDepth={-3} targetKey={"left"} faderIndex={0} />

            <Spotlight position={[-0.3, 4.3, 4.9]} pointDepth={-3} targetKey={"center"} faderIndex={1}/>

            <Spotlight position={[2.3, 4.3, 4.9]} pointDepth={-3} targetKey={"right"} faderIndex={2}/>


            <Spotlight position={[-2.5, 4.6, 0]} pointDepth={-3} zoom={0.35} color={"#14fd5a"} distance={10}  targetKey={"head1"} faderIndex={3}/>
            <Spotlight position={[2.5, 4.5, 0]} pointDepth={-3} zoom={0.35} color={"#fc0000"} distance={10}  targetKey={"head2"} faderIndex={4}/>

            <Spotlight position={[1, 4.6, -1]} pointDepth={-0.5} zoom={0.6} color={"#fe0000"} distance={10}  targetKey={"head3"} faderIndex={5}/>
            <Spotlight position={[-1, 4.6, -1]} pointDepth={-0.5} zoom={0.6} color={"#ff0000"} distance={10}  targetKey={"head4"} faderIndex={6}/>

            <StageModel />
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