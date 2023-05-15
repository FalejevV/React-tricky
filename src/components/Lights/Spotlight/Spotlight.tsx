import { RootState, useAppSelector } from "@/store/store";
import { SpotLight, useDepthBuffer } from "@react-three/drei";



function Spotlight(props:{
    targetId:number,
    position:[number,number,number],
    highlight?:boolean
}){
    const depthBuffer = useDepthBuffer({ size: 528, frames: 10000});
    const faderSelector = useAppSelector((state:RootState) => state.faders);
    const targetSelector = useAppSelector((state:RootState) => state.targets);
    return(
        <>
            <SpotLight
            penumbra={0.8}
            depthBuffer={depthBuffer}
            intensity={props.highlight ? 100 : faderSelector[props.targetId] * 50}
            position={props.position}
            angle={0.5}
            castShadow
            receiveShadow
            color="#f9c463"
            target={targetSelector[props.targetId]}
            distance={15}
            anglePower={2}
            attenuation={props.highlight ? 100 : faderSelector[props.targetId] * 10}
            shadowCameraFov={128}
            shadowCameraLeft={128}
            shadowCameraRight={128}
            shadowCameraTop={128} 
            shadowCameraBottom={128}
            shadowCameraNear={128}
            shadowCameraFar={128}
            shadowBias={128}
            shadowMapWidth={128}
            shadowMapHeight={128}
            power={props.highlight ? 100 : faderSelector[props.targetId] * 50}
            isLight
            />
        </>
    )
}

export default Spotlight;