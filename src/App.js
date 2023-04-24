import "./style.css";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Lights from "./Lights";
import Level from "./Level";
import { Physics, Debug } from "@react-three/rapier";

function App() {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <Physics>
        <Debug />
        <Lights />
        <Level />
      </Physics>
    </>
  );
}

export default App;
