import "./style.css";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Lights from "./Lights";
import Level from "./Level";
import { Physics, Debug } from "@react-three/rapier";
import Player from "./Player";
import { BlockSpinner, BlockAxe, BlockLimbo } from "./Level";
import useGame from "./stores/useGame";

function App() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blockSeed = useGame((state) => state.blockseed);
  return (
    <>
      <color args={["#bdedfc"]} attach="background" />
      {/* <Perf position="top-left" /> */}
      {/* <OrbitControls makeDefault /> */}

      <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level count={blocksCount} seed={blockSeed} />
        <Player />
      </Physics>
    </>
  );
}

export default App;
