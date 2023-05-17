/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 .\\StageV4.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StageModel(props) {
  const { nodes, materials } = useGLTF('/StageV4.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 5.15, 1.87]} scale={[10.08, 1, 1]}>
        <mesh geometry={nodes.Plane_1.geometry} castShadow receiveShadow material={materials['Black-Basic']} />
        <mesh geometry={nodes.Plane_2.geometry} castShadow receiveShadow material={materials.Wood} />
      </group>
      <mesh geometry={nodes.BackWall.geometry} material={materials['Material.001']} position={[0, 0.72, 10.94]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-10.5, -1.12, -1]} receiveShadow/>
      <mesh geometry={nodes.Floor.geometry} material={materials.Wood} position={[0, -0.31, 2.84]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-8.49, -0.17, -1]} receiveShadow/>
      <mesh geometry={nodes.Wall.geometry} material={materials['Black-Basic']} position={[-4.33, 0.85, 1.22]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow/>
      <mesh geometry={nodes.Wall001.geometry} material={materials['Black-Basic']} position={[4.34, 2.93, 1.22]} rotation={[-Math.PI / 2, 0, Math.PI]} castShadow receiveShadow/>
      <mesh geometry={nodes.Curtain.geometry} material={materials['Cloth-basic']} position={[-3.96, 0.98, -0.25]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow/>
      <mesh geometry={nodes.Curtain002.geometry} material={materials['Cloth-basic']} position={[3.97, 0.98, -0.25]} rotation={[Math.PI / 2, 0, 0.05]} castShadow receiveShadow/>
      <mesh geometry={nodes.Curtain003.geometry} material={materials['Cloth-basic']} position={[3.49, 0.98, -2.06]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow/>
      <mesh geometry={nodes.Curtain004.geometry} material={materials['Cloth-basic']} position={[-3.42, 0.98, -2.08]} rotation={[Math.PI / 2, 0, 0.05]} castShadow receiveShadow/>
      <mesh geometry={nodes.Curtain005.geometry} material={materials['Cloth-basic']} position={[2.88, 0.98, -3.87]} rotation={[Math.PI / 2, 0, 0.05]} castShadow receiveShadow/>
      <mesh geometry={nodes.Curtain006.geometry} material={materials['Cloth-basic']} position={[-2.95, 0.98, -3.86]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow/>
      <mesh geometry={nodes['Stage-wall'].geometry} material={materials['Black-Basic']} position={[0, 3.91, 0.3]} scale={[8.21, 0.11, 1]} castShadow receiveShadow/>
      <mesh geometry={nodes['Stage-floor'].geometry} material={materials['Stage-floor']} position={[0, -1.02, 0.11]} scale={[6.24, 1, 1]} receiveShadow/>
      <mesh geometry={nodes.Cube.geometry} material={materials['Black-Basic']} position={[0.01, -0.32, 4.54]} scale={[0.31, 0.33, 0.31]} />
      <group position={[-3.84, 0.1, 5.02]} scale={[0.26, 0.05, 0.29]}>
        <mesh geometry={nodes.Cube006_1.geometry} material={materials['Cloth.001']} />
        <mesh geometry={nodes.Cube006_2.geometry} material={materials['Black-Basic']}/>
      </group>
      <mesh geometry={nodes.Cube002.geometry} material={materials['Black-Basic']} position={[0.01, -0.13, 5.55]} scale={[0.36, 0.33, 0.31]} />
      <group position={[-4.54, 0.29, 6.03]} scale={[0.26, 0.05, 0.29]}>
        <mesh geometry={nodes.Cube011_1.geometry} material={materials['Cloth.001']}/>
        <mesh geometry={nodes.Cube011_2.geometry} material={materials['Black-Basic']}/>
      </group>
      <group position={[-3.84, -0.07, 4.03]} scale={[0.26, 0.05, 0.29]}>
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['Cloth.001']} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials['Black-Basic']}/>
      </group>
      <mesh geometry={nodes.Cube005.geometry} material={materials['Black-Basic']} position={[0.01, 0.05, 6.55]} scale={[0.36, 0.33, 0.31]} />
      <group position={[-4.54, 0.47, 7.03]} scale={[0.26, 0.05, 0.29]}>
        <mesh geometry={nodes.Cube013_1.geometry} material={materials['Cloth.001']} />
        <mesh geometry={nodes.Cube013_2.geometry} material={materials['Black-Basic']} />
      </group>
      <mesh geometry={nodes.Cube010.geometry} material={materials['Profile=Black']} position={[-0.28, 4.32, 4.95]} rotation={[-0.49, -0.04, -0.02]} scale={0.07} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Profile=Black']} position={[0.39, 4.32, 4.95]} rotation={[-0.49, 0.07, 0.04]} scale={0.07} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['Profile=Black']} position={[-1.47, 4.32, 4.95]} rotation={[-0.49, 0.04, 0.02]} scale={0.07} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['Profile=Black']} position={[1.59, 4.32, 4.95]} rotation={[-0.49, 0.06, 0.03]} scale={0.07} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['Profile=Black']} position={[-2.16, 4.32, 4.95]} rotation={[-0.49, -0.06, -0.03]} scale={0.07} />
      <mesh geometry={nodes.Cube016.geometry} material={materials['Profile=Black']} position={[2.31, 4.32, 4.95]} rotation={[-0.49, 0, 0]} scale={0.07} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Black-Basic']} position={[-6.83, 0.54, 2.05]} rotation={[0, 0.72, 0]} scale={[0.55, 0.73, 0.38]} castShadow receiveShadow/>
      <mesh geometry={nodes.Cube012.geometry} material={materials['Black-Basic']} position={[-6.83, 3.86, 2.05]} rotation={[0, 0.72, 0]} scale={[0.71, 0.95, 0.5]} castShadow receiveShadow/>
      <mesh geometry={nodes.Cube017.geometry} material={materials['Black-Basic']} position={[6.9, 0.54, 2.12]} rotation={[-Math.PI, 0.85, -Math.PI]} scale={[0.55, 0.73, 0.38]} castShadow receiveShadow/>
      <mesh geometry={nodes.Cube018.geometry} material={materials['Black-Basic']} position={[6.9, 3.86, 2.12]} rotation={[-Math.PI, 0.85, -Math.PI]} scale={[0.71, 0.95, 0.5]} castShadow receiveShadow/>
      <mesh geometry={nodes.Cube007.geometry} material={materials['Wood.004']} position={[-1.29, 1, -5.21]} rotation={[1.89, 1.43, -1.93]} scale={0.36} castShadow receiveShadow/>
      <mesh geometry={nodes.Cube008.geometry} material={materials['Wood.005']} position={[-1.71, 0.33, -4.82]} rotation={[-Math.PI, 1.27, -Math.PI]} scale={0.34} castShadow receiveShadow/>
      <mesh geometry={nodes.Cube019.geometry} material={materials['Wood.002']} position={[-0.93, 0.33, -5.22]} rotation={[-Math.PI, 1.26, -Math.PI]} scale={0.27} castShadow receiveShadow/>
      <group position={[-2.87, -0.35, 0.25]} rotation={[Math.PI, -0.89, Math.PI]} scale={0.43}>
        <mesh geometry={nodes.Cube019_1.geometry} material={materials['Black-Basic']} castShadow receiveShadow/>
        <mesh geometry={nodes.Cube019_2.geometry} material={materials['Wood.003']} castShadow receiveShadow/>
      </group>
      <group position={[3.07, -0.35, -1.31]} rotation={[0, 0.21, 0]} scale={0.52}>
        <mesh geometry={nodes.Cube020_1.geometry} material={materials['Black-Basic']} castShadow receiveShadow/>
        <mesh geometry={nodes.Cube020_2.geometry} material={materials['Wood.003']} castShadow receiveShadow/>
      </group>
      <mesh geometry={nodes.Cube022.geometry} material={materials['Wood.002']} position={[-2.02, 0.09, -3.52]} rotation={[0, 0.32, 0]} scale={0.13} />
      <group position={[-0.93, 0.09, -3.88]} rotation={[0, 0.32, 0]} scale={0.13}>
        <mesh geometry={nodes.Cube024_1.geometry} material={materials['Wood.002']} castShadow receiveShadow/>
        <mesh geometry={nodes.Cube024_2.geometry} material={materials['Cloth.001']} castShadow receiveShadow/>
      </group>
      <group position={[0.02, 0.09, -4.53]} rotation={[0, 0.61, 0]} scale={0.13}>
        <mesh geometry={nodes.Cube034.geometry} material={materials['Wood.002']} castShadow receiveShadow/>
        <mesh geometry={nodes.Cube034_1.geometry} material={materials['Cloth.001']} castShadow receiveShadow/>
      </group>
      <group position={[1.07, 0.09, -5.02]} rotation={[0, 0.42, 0]} scale={0.13}>
        <mesh geometry={nodes.Cube035.geometry} material={materials['Wood.002']} castShadow receiveShadow/>
        <mesh geometry={nodes.Cube035_1.geometry} material={materials['Cloth.001']} castShadow receiveShadow/>
      </group>
      <group position={[0.09, 3.38, -4.65]} scale={[1.25, 1, 1]}>
        <mesh geometry={nodes.Plane005.geometry} material={materials['Cloth.001']} castShadow receiveShadow/>
        <mesh geometry={nodes.Plane005_1.geometry} material={materials.White} castShadow receiveShadow/>
      </group>
      <mesh geometry={nodes.Ladder.geometry} material={materials.Farm} position={[0.88, 1.11, -4.32]} rotation={[Math.PI, -0.93, Math.PI]} scale={[0.58, 0.04, 0.14]} castShadow receiveShadow/>
      <mesh geometry={nodes.Cube026.geometry} material={materials['Wood.002']} position={[0.02, -0.01, -0.01]} scale={0.02} castShadow receiveShadow/>
      <mesh geometry={nodes.Cube027.geometry} material={materials['Wood.002']} position={[-0.69, -0.01, 0.17]} rotation={[0, 0.62, 0]} scale={0.02} castShadow receiveShadow/>
      <mesh geometry={nodes.Cube028.geometry} material={materials['Wood.002']} position={[0.67, -0.01, 0.04]} rotation={[0, -0.6, 0]} scale={0.02} castShadow receiveShadow/>
      <mesh geometry={nodes.Cube029.geometry} material={materials.Farm} position={[0, 4.79, 5.14]} rotation={[0, 0, -Math.PI]} scale={[-3.15, -0.17, -0.14]}/>
    </group>
  )
}

useGLTF.preload('/StageV4.glb')
