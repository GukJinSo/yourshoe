import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Outline } from '@react-three/postprocessing';
import React, {
  Suspense,
  useState,
  forwardRef,
  useRef,
  useEffect,
} from 'react';
import { GithubPicker } from 'react-color';
import styled from 'styled-components';

// 모델
const Model = forwardRef(({ orbit, colors, setColors, ...props }, refs) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/3d/nb_997/scene.gltf');

  // 호버 액션
  const hoverAction = (e, action) => {
    // 카메라 회전 멈춤
    let isRotate = orbit.current.autoRotate;
    if (isRotate) {
      orbit.current.autoRotate = false;
    } else {
      orbit.current.autoRotate = true;
    }
    // hover 물체의 스케일 변경
    e.object.scale.setScalar(action === 'hover' ? 1.01 : 1);
  };

  return (
    <group ref={group} {...props} dispose={null} scale={0.1}>
      <group
        rotation={[-1.5, -0.05, 1.5]}
        onPointerOver={(e) => hoverAction(e, 'hover')}
        onPointerOut={(e) => hoverAction(e, 'nothover')}
        onPointerDown={(e) => (
          e.stopPropagation(),
          console.log(e),
          setColors({ ...colors, picked: e.object.material.name })
        )}
      >
        <mesh
          geometry={nodes.Shoe_set_02_Sole_0.geometry}
          material-color={colors.Sole}
          material={materials.Sole}
        />

        <mesh
          geometry={nodes.Shoe_set_02_Outer_0.geometry}
          material={materials.Outer}
          material-color={colors.Outer}
        />
        <mesh></mesh>
        <mesh
          geometry={nodes.Shoe_set_02_Laces_0.geometry}
          material={materials.Laces}
          material-color={colors.Laces}
        />
        <mesh
          geometry={nodes.Shoe_set_02_Inner_0.geometry}
          material={materials.Inner}
          material-color={colors.Inner}
        />
      </group>
    </group>
  );
});

// 색깔 변경 픽커
const Picker = ({ colors, setColors }) => {
  const colorChange = (color) => {
    if (colors[colors.picked] !== '') {
      colors[colors.picked] = color.hex;
      setColors({ ...colors });
    }
  };

  return <GithubPicker onChange={(e) => colorChange(e)}></GithubPicker>;
};

// Parent
const Custom_service = () => {
  // 상태 변수
  const [colors, setColors] = useState({
    picked: '',
    Laces: '#ffffff',
    Inner: '#ffffff',
    Outer: '#ffffff',
    Sole: '#ffffff',
  });

  const orbit = useRef(null);

  return (
    <>
      <h1>{colors.picked === '' ? 'Click part!' : colors.picked}</h1>
      <Picker className="github-picker" setColors={setColors} colors={colors} />
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls
            ref={orbit}
            minDistance={60}
            enablePan={false}
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={0.4}
          />
          <directionalLight intensity={1.2} position={[-15, 25, 5]} />
          <ambientLight intensity={1} colors={'#EEEEEE'} />
          <Model orbit={orbit} setColors={setColors} colors={colors} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Custom_service;