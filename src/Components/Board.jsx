import React from "react";
import Box from "./Box";
import xicon from "../assets/images/x.png";
import oicon from "../assets/images/o.png";
import Popup from "./Popup";

const box2 = {
  borderRight: "2px solid black",
  borderLeft: "2px solid black"
};

const box4 = {
  borderTop: "2px solid black",
  borderBottom: "2px solid black"
};

const box5 = {
  border: "2px solid black"
};

const box6 = {
  borderTop: "2px solid black",
  borderBottom: "2px solid black"
};

const box8 = {
  borderRight: "2px solid black",
  borderLeft: "2px solid black"
};

export default function Board(props) {
  return (
    <div className="play_board_container">
      <div style={{ position: "relative" }}>
        <div
          className="play_board"
          style={{
            cursor: `url(${props.player === "x" ? xicon : oicon}) 10 10, auto`
          }}
        >
          <Box />
          <Box style={box2} />
          <Box />
          <Box style={box4} />
          <Box style={box5} />
          <Box style={box6} />
          <Box />
          <Box style={box8} />
          <Box />
        </div>

        <Popup />
      </div>
    </div>
  );
}
