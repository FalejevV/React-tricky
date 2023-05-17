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
    point?:boolean,
    pointDepth?:number,
    intensityMultiplier?:number,
}){
    const depthBuffer = useDepthBuffer({ size: 512});
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
                prev.position.z = targetSelector[props.targetKey].z-7;
                return prev;
            })
        }
    },[targetSelector]);
    return(
        <>

            <pointLight 
                ref={props.point && light || undefined}
                intensity={faderSelector[props.faderIndex] * 0.5}
                position={[targetSelector[props.targetKey].x,targetSelector[props.targetKey].y+1,targetSelector[props.targetKey].z + (props.pointDepth || 0) ]}
                distance={10}
                decay={1.5}
                color={props.color || "#f9c463"}
            />

            <SpotLight
            penumbra={0.2}
            depthBuffer={depthBuffer}
            intensity={props.highlight ? 100 : faderSelector[props.faderIndex] * 5 * (props.intensityMultiplier || 1)}
            position={props.position}
            angle={props.zoom || 0.5}
            castShadow
            receiveShadow
            color={props.color || "#f9c463"}
            target={target}
            distance={props.distance || 15}
            anglePower={2}
            opacity={props.highlight ? 1 : faderSelector[props.faderIndex] * 0.2}
            attenuation={4}
            shadowCameraFov={0}
            shadowCameraLeft={0}
            shadowCameraRight={0}
            shadowCameraTop={0} 
            shadowCameraBottom={0}
            shadowCameraNear={0}
            shadowCameraFar={0}
            shadowBias={0}
            shadowMapWidth={0}
            shadowMapHeight={0}
            power={props.highlight ? 100 : faderSelector[props.faderIndex] * 5 * (props.intensityMultiplier || 1)}
            isLight
            />
        </>
    )
}

export default Spotlight;