import React, { createRef } from "react";
import "./styles.css";
import Board from "./Components/Board";
import { PlayBoardContext } from "./Contexts/Context";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      xwin: 0,
      owin: 0,
      draw: 0,
      xsteps: 0,
      osteps: 0,
      player: "x"
    };

    this.appRef = createRef();
  }

  componentDidUpdate(prevProps, prevState) {}

  updatePlayerSteps = player => {
    if (player === "x") this.setState({ xsteps: this.state.xsteps + 1 });
    else this.setState({ osteps: this.state.osteps + 1 });
  };

  togglePlayer = () => {
    if (this.state.player === "x") this.setState({ player: "o" });
    else this.setState({ player: "x" });
  };

  render() {
    const { player, xsteps, osteps, xwin, owin, draw } = this.state;

    return (
      <div className="App" ref={this.appRef}>
        <PlayBoardContext.Provider
          value={{
            player,
            togglePlayer: this.togglePlayer,
            updatePlayerSteps: this.updatePlayerSteps
          }}
        >
          <div className="header">
            <h1>TicTacToe</h1>
            <h5>{player}'s turn</h5>
            <div>
              <span>X Steps: {xsteps}</span> &nbsp;&nbsp;&nbsp;&nbsp;
              <span>O Steps: {osteps}</span>
            </div>
            <div>
              <span>X Wins: {xwin}</span> &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Y Wins: {owin}</span> &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Draws: {draw}</span>
            </div>
          </div>

          <Board player={player} />
        </PlayBoardContext.Provider>
      </div>
    );
  }
}

export default App;
