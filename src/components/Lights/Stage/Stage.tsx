import { RootState, useAppSelector } from "@/store/store";
import { MeshReflectorMaterial, OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";


function StageObject(){
    // const light:any = useRef();
    // useHelper(light, SpotLightHelper, 'red')

    const faderSelector = useAppSelector((state:RootState) => state.faders);
    return <>
        <OrbitControls />
        <PerspectiveCamera makeDefault fov={100} position={[0,0,4]} />
        {
            <color args={[0.01,0.01,0.01]} attach="background" />
        }
        <spotLight
                color={[1,0.25,0.7]}
                intensity={faderSelector[0]}
                angle={0.6}
                penumbra={0.5}
                castShadow
                position={[3,3,4]}
                distance={8}
             />
        <spotLight
                color={[0.1,0.1,0.7]}
                intensity={faderSelector[1]}
                angle={0.6}
                penumbra={0.5}
                castShadow
                position={[-2,2,2]}
                distance={8}
             />
        
        <mesh castShadow receiveShadow position={[0,1,0]}>
            <boxGeometry args={[2,2,2]}/>
            <meshBasicMaterial color={"#3b3b3b"}/>
            <MeshReflectorMaterial mirror={0} />
        </mesh>
    </>
}

function Stage(){
    return(
        <Suspense fallback={null}>
            <Canvas shadows>
                <StageObject />
            </Canvas>
        </Suspense>
    )
}

export default Stage;