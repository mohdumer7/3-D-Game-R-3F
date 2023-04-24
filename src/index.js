import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import App from "./App";
import * as THREE from "three";
import { Leva } from "leva";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Leva />

    <Canvas camera={{}} shadows>
      <App />
    </Canvas>
  </React.StrictMode>
);
