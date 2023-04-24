import { useKeyboardControls } from "@react-three/drei";
import useGame from "./stores/useGame";
import { useRef, useEffect } from "react";
import { addEffect } from "@react-three/fiber";

export default function Interface() {
  const restart = useGame((state) => state.restart);
  const phase = useGame((state) => state.phase);

  const time = useRef();

  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState();
      let elapsedTime = 0;
      const phase = state.phase;
      if (phase === "playing") {
        elapsedTime = Date.now() - state.startTime;
      } else if (phase === "ended") {
        elapsedTime = state.endTime - state.startTime;
      }
      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);

      if (time.current) {
        time.current.textContent = elapsedTime;
      }
    });

    return () => {
      unsubscribeEffect();
    };
  }, []);

  const triggerkeypress = (key, e) => {
    e.preventDefault();
    const event = new KeyboardEvent("keydown", {
      key: key,
    });

    window.dispatchEvent(event);
  };

  const triggerkeyup = (key, e) => {
    e.preventDefault();
    const event = new KeyboardEvent("keyup", {
      key: key,
    });

    window.dispatchEvent(event);
  };

  return (
    <div className="interface">
      <div ref={time} className="time">
        0.01
      </div>
      {phase === "ended" ? (
        <div className="restart" onClick={restart}>
          Restart
        </div>
      ) : null}

      <div className="controls">
        <div className="raw">
          <div
            className={`key ${forward ? "active" : ""}`}
            onMouseEnter={(e) => {
              triggerkeypress("KeyW", e);
            }}
            onMouseLeave={(e) => {
              triggerkeyup("KeyW", e);
            }}
          ></div>
        </div>
        <div className="raw">
          <div
            className={`key ${leftward ? "active" : ""}`}
            onMouseEnter={(e) => {
              triggerkeypress("KeyA", e);
            }}
            onMouseLeave={(e) => {
              triggerkeyup("KeyA", e);
            }}
          ></div>
          <div
            className={`key ${backward ? "active" : ""}`}
            onMouseEnter={(e) => {
              triggerkeypress("KeyS", e);
            }}
            onMouseLeave={(e) => {
              triggerkeyup("KeyS", e);
            }}
          ></div>
          <div
            className={`key ${rightward ? "active" : ""}`}
            onMouseEnter={(e) => {
              triggerkeypress("KeyD", e);
            }}
            onMouseLeave={(e) => {
              triggerkeyup("KeyD", e);
            }}
          ></div>
        </div>
        <div className="raw">
          <div
            className={`key large ${jump ? "active" : ""}`}
            onMouseEnter={(e) => {
              triggerkeypress("Space", e);
            }}
            onMouseLeave={(e) => {
              triggerkeyup("Space", e);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
