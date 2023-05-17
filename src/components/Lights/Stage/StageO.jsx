/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 .\\Stage-O.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StageO(props) {
  const { nodes, materials } = useGLTF('/Stage-O.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 5.15, 1.87]} scale={[10.08, 1, 1]}>
        <mesh geometry={nodes.Plane.geometry} material={materials['Black-Basic']} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials.Wood} />
      </group>
      <mesh geometry={nodes.BackWall.geometry} material={materials['Material.001']}  position={[0, 0.72, 10.94]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-10.5, -1.12, -1]} />
      <mesh geometry={nodes.Farm.geometry} material={materials.Farm} position={[0, 4.65, 5.14]}  rotation={[-Math.PI, 0, 0]} scale={[-2.93, -0.02, -0.02]} />
      <mesh geometry={nodes.Floor.geometry} material={materials.Wood} position={[0, -0.31, 2.84]}  rotation={[-Math.PI, 0, -Math.PI]} scale={[-8.49, -0.17, -1]} />
      <mesh geometry={nodes.Wall.geometry} material={materials['Black-Basic']} position={[-4.33, 0.85, 1.22]}  rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Wall001.geometry} material={materials['Black-Basic']} position={[4.34, 2.93, 1.22]}  rotation={[-Math.PI / 2, 0, Math.PI]} />
      <mesh geometry={nodes.Curtain.geometry} material={materials['Cloth-basic']} position={[-3.96, 0.98, -0.25]} receiveShadow castShadow  rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Curtain002.geometry} material={materials['Cloth-basic']} position={[3.97, 0.98, -0.25]} receiveShadow castShadow  rotation={[Math.PI / 2, 0, 0.05]} />
      <mesh geometry={nodes.Curtain003.geometry} material={materials['Cloth-basic']} position={[3.49, 0.98, -2.06]} receiveShadow  castShadow rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Curtain004.geometry} material={materials['Cloth-basic']} position={[-3.42, 0.98, -2.08]} receiveShadow castShadow  rotation={[Math.PI / 2, 0, 0.05]} />
      <mesh geometry={nodes.Curtain005.geometry} material={materials['Cloth-basic']} position={[2.88, 0.98, -3.87]} receiveShadow castShadow  rotation={[Math.PI / 2, 0, 0.05]} />
      <mesh geometry={nodes.Curtain006.geometry} material={materials['Cloth-basic']} position={[-2.95, 0.98, -3.86]} receiveShadow castShadow rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Stage-wall'].geometry} material={materials['Black-Basic']} position={[0, 3.91, 0.3]} receiveShadow castShadow scale={[8.21, 0.11, 1]} />
      <mesh geometry={nodes['Stage-floor'].geometry} material={materials['Stage-floor']} position={[0, -1.02, 0.11]} receiveShadow  scale={[6.24, 1, 1]} />
      <group position={[-3.72, 0.26, 3.98]} scale={0.26}>
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Cloth.001']} castShadow />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials['Wood.001']} castShadow />
      </group>
      <group position={[-4.44, 0.46, 4.98]} scale={0.26}>
        <mesh geometry={nodes.Cube007.geometry} material={materials['Cloth.001']} castShadow />
        <mesh geometry={nodes.Cube007_1.geometry} material={materials['Wood.001']} castShadow />
      </group>
      <group position={[-4.44, 0.66, 5.98]} scale={0.26}>
        <mesh geometry={nodes.Cube008.geometry} material={materials['Cloth.001']} castShadow />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials['Wood.001']} castShadow />
      </group>
      <group position={[-5.15, 0.86, 6.98]} scale={0.26}>
        <mesh geometry={nodes.Cube009_1.geometry} material={materials['Cloth.001']}  castShadow  />
        <mesh geometry={nodes.Cube009_2.geometry} material={materials['Wood.001']}  castShadow  />
      </group>
      <mesh geometry={nodes.Cube010.geometry} material={materials['Profile=Black']} position={[-0.28, 4.32, 4.95]} rotation={[-0.49, -0.04, -0.02]} scale={0.07} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Profile=Black']} position={[0.39, 4.32, 4.95]} rotation={[-0.49, 0.07, 0.04]} scale={0.07} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['Profile=Black']} position={[-1.47, 4.32, 4.95]} rotation={[-0.49, 0.04, 0.02]} scale={0.07} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['Profile=Black']} position={[1.59, 4.32, 4.95]} rotation={[-0.49, 0.06, 0.03]} scale={0.07} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['Profile=Black']} position={[-2.16, 4.32, 4.95]} rotation={[-0.49, -0.06, -0.03]} scale={0.07} />
      <mesh geometry={nodes.Cube016.geometry} material={materials['Profile=Black']} position={[2.31, 4.32, 4.95]} rotation={[-0.49, 0, 0]} scale={0.07} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Black-Basic']} position={[-6.83, 0.54, 2.05]} rotation={[0, 0.72, 0]} scale={[0.55, 0.73, 0.38]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['Black-Basic']} position={[-6.83, 3.86, 2.05]} rotation={[0, 0.72, 0]} scale={[0.71, 0.95, 0.5]} />
      <mesh geometry={nodes.Cube017.geometry} material={materials['Black-Basic']} position={[6.9, 0.54, 2.12]} rotation={[-Math.PI, 0.85, -Math.PI]} scale={[0.55, 0.73, 0.38]} />
      <mesh geometry={nodes.Cube018.geometry} material={materials['Black-Basic']} position={[6.9, 3.86, 2.12]} rotation={[-Math.PI, 0.85, -Math.PI]} scale={[0.71, 0.95, 0.5]} />
    </group>
  )
}

useGLTF.preload('/Stage-O.glb')
