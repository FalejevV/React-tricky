import { RootState, useAppSelector } from "@/store/store";
import { TargetState } from "@/store/targets";
import { SpotLight, useDepthBuffer, useHelper } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Object3D, PointLight, PointLightHelper } from "three";



function Spotlight(props:{
    targetKey:keyof TargetState,
    faderIndex:number,
    position:[number,number,number],
    highlight?:boolean,
    distance?:number,
    zoom?:number,
    color?:string,
    point?:boolean
}){
    const depthBuffer = useDepthBuffer({ size: 528, frames: 10000});
    const faderSelector = useAppSelector((state:RootState) => state.faders);
    const targetSelector = useAppSelector((state:RootState) => state.targets);
    const [target,setTarget] = useState(new Object3D);
    const light:any = useRef();
    useHelper(light, PointLightHelper);

    useEffect(() => {
        if(targetSelector[props.targetKey].x !== target.position.x || targetSelector[props.targetKey].y !== target.position.y || targetSelector[props.targetKey].z !== target.position.z){
            setTarget(prev => {
                prev.position.x = targetSelector[props.targetKey].x;
                prev.position.y = targetSelector[props.targetKey].y;
                prev.position.z = targetSelector[props.targetKey].z;
                return prev;
            })
        }
    },[targetSelector]);
    return(
        <>

            <pointLight 
                ref={props.point && light || undefined}
                intensity={faderSelector[props.faderIndex] * 1.5}
                position={[targetSelector[props.targetKey].x,targetSelector[props.targetKey].y+1,targetSelector[props.targetKey].z + 3]}
                distance={10}
                decay={1.5}
                color={props.color || "#f9c463"}
            />

            <SpotLight
            penumbra={0.8}
            depthBuffer={depthBuffer}
            intensity={props.highlight ? 100 : faderSelector[props.faderIndex] * 50}
            position={props.position}
            angle={props.zoom || 0.5}
            castShadow
            receiveShadow
            color={props.color || "#f9c463"}
            target={target}
            distance={props.distance || 15}
            anglePower={2}
            opacity={props.highlight ? 1 : faderSelector[props.faderIndex]}
            attenuation={10}
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
            power={props.highlight ? 100 : faderSelector[props.faderIndex] * 50}
            isLight
            />
        </>
    )
}

export default Spotlight;