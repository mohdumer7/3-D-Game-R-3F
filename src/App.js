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

import { Perf } from "r3f-perf";

import { useControls, button } from "leva";
import Lights from "./Lights";
import Level from "./Level";

function App() {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <Lights />

      <Level />
    </>
  );
}

export default App;
