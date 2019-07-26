import React, { useContext } from "react";
import { ReactComponent as Osvg } from "../assets/images/o.svg";
import { ReactComponent as Xsvg } from "../assets/images/x.svg";
import { PlayBoardContext } from "../Contexts/Context";

function O() {
  return <Osvg width="100" height="100" />;
}
function X() {
  return <Xsvg width="100" height="100" />;
}

export default function Box(props) {
  const [state, setstate] = React.useState({
    hasChild: false,
    child: null
  });

  const { player, togglePlayer, updatePlayerSteps } = useContext(
    PlayBoardContext
  );

  const handleClick = () => {
    setstate({ ...state, hasChild: true, child: player === "x" ? "x" : "o" });
    updatePlayerSteps(player);
    togglePlayer();
  };

  return (
    <div
      className="box"
      style={props.style}
      onClick={() => {
        if (!state.hasChild) handleClick();
      }}
    >
      {state.hasChild ? state.child === "x" ? <X /> : <O /> : null}
    </div>
  );
}
