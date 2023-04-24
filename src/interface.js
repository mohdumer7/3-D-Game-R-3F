import { useKeyboardControls } from "@react-three/drei";

export default function Interface() {
  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

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
      <div className="time">0.01</div>
      <div className="restart">Restart</div>
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
