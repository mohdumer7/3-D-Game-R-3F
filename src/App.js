import { useRef } from "react";
import "./style.css";
import {
  PivotControls,
  TransformControls,
  OrbitControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
  MeshDistortMaterial,
} from "@react-three/drei";

import {Perf} from 'r3f-perf'

import { useControls, button } from "leva";

function App() {
  const cube = useRef();
  const cube1 = useRef();
  const { position, positionxyz, color, visible } = useControls("Box", {
    position: { value: -2, min: -3, max: 3, step: 0.01 },
    positionxyz: {
      value: { x: -2, y: 0 },
      min: -3,
      max: 3,
      step: 0.01,
      joystick: "invertY",
    },
    color: "#000000",
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 9],
    },
    clickMe: button(() => {
      console.log("ok");
    }),
    choice: { options: ["a", "b", "c"] },
  });

  

  return (
    <>

    <Perf position="top-left" />
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group>
        <PivotControls anchor={[0, 0, 0]} depthTest={false}>
          <mesh
            position={[positionxyz.x, positionxyz.y, 0]}
            ref={cube1}
            visible={visible}
          >
            <boxGeometry />
            <meshStandardMaterial color={color} />
            <Html
              position={[1, 1, 0]}
              wrapperClass="label"
              center
              distanceFactor={6}
              occlude={[cube, cube1]}
            >
              cube
            </Html>
          </mesh>
        </PivotControls>

        <mesh ref={cube} position-x={2}>
          <boxGeometry />
          <meshBasicMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cube} />
      </group>
      <mesh scale={10} position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" />
         */}
        <Html>
          <div>Hello World</div>
        </Html>
        <MeshReflectorMaterial
          color={"red"}
          resolution={512}
          blur={(1000, 1000)}
          mirror={0.5}
        />
      </mesh>
      {/* <Html>
        umer
        <div
          style={{ height: "50px", width: "100px", backgroundColor: "white" }}
        ></div>
      </Html> */}
      <Float speed={5}>
        <Text scale-z={10} color={"salmon"}>
          Am i even a Text?
        </Text>
      </Float>
    </>
  );
}

export default App;
