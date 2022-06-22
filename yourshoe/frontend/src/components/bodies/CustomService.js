import { OrbitControls, useContextBridge, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState, forwardRef, useRef } from 'react';
import { GithubPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { COLOR_ACTION_TYPES } from '../../store';

// 모델
const Model = forwardRef(({ orbit, colors, dispatcher, ...props }, refs) => {
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
    e.object.scale.setScalar(action === 'hover' ? 1.005 : 1);
  };

  return (
    <group ref={group} {...props} dispose={null} scale={0.1}>
      <group
        rotation={[-1.5, -0.05, 1.5]}
        onPointerOver={(e) => hoverAction(e, 'hover')}
        onPointerOut={(e) => hoverAction(e, 'nothover')}
        onPointerDown={(e) => (
          e.stopPropagation(),
          dispatcher({
            type: COLOR_ACTION_TYPES.pick,
            payload: { picked: e.object.material.name },
          })
        )}
      >
        <mesh
          geometry={nodes.Shoe_set_02_Sole_0.geometry}
          material={materials.Sole}
          material-color={colors.Sole}
        />
        <mesh
          geometry={nodes.Shoe_set_02_Outer_0.geometry}
          material={materials.Outer}
          material-color={colors.Outer}
        />
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

const CustomText = () => {
  const colors = useSelector((store) => store);
  const dispatcher = useDispatch();

  return (
    <div className="custom-float-text">
      {colors.picked === '' ? 'Click any part' : colors.picked}
    </div>
  );
};

const CustomService = () => {
  const orbit = useRef(null);

  // three-react-fiber issude. canvas 안에서 context가 소멸하는 현상이 있다
  // 리덕스를 쓰더라도 불가피하게 props로 전달
  const colors = useSelector((store) => store);
  const dispatcher = useDispatch();

  return (
    <div className="canvas-div">
      <CustomText />
      <Canvas>
        <OrbitControls
          ref={orbit}
          minDistance={50}
          enablePan={false}
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.8}
          minPolarAngle={1}
          maxPolarAngle={1.7}
        />
        <directionalLight intensity={1.2} position={[-15, 25, 5]} />
        <ambientLight intensity={0.5} colors={'#EEEEEE'} />

        <Model
          orbit={orbit}
          colors={colors}
          dispatcher={dispatcher}
          position={[0, -5, 0]}
        />
      </Canvas>
    </div>
  );
};

export default CustomService;
