import React, { useState } from "react";
import gameReducer from "../helpers/gameReducer";
import getStatus from "../helpers/getStatus";
import Checkbox from "./Checkbox";
const difficultLevel = {
  easy: true,
  medium: false,
  hard: false,
};
const Board = () => {
  const [state, dispatch] = React.useReducer(gameReducer, {
    squares: Array(9).fill(null),
    xIsNext: true,
  });
  const [difficultyLevel, setDifficultyLevel] = useState(difficultLevel);
  const { squares, xIsNext } = state;

  /**
   * It returns a button with the value of the square at the index passed in.
   * @param {number} index - number
   * @returns A button with the value of the square in it.
   */
  const renderSquare = (index: number) => {
    return (
      <button className="square" onClick={() => selectSquare(index)}>
        {squares[index]}
      </button>
    );
  };

  /**
   * It dispatches an action to the store.
   * @param {any} square - the square that was clicked on
   */
  const selectSquare = (square: any) => {
    dispatch({ type: "SELECT_SQUARE", square });
  };

  const resetBoard = (squares: any) => {
    dispatch({ type: "RESET_BOARD", squares });
  };
  const chooseFirstPlayer = (squares: any) => {
    dispatch({ type: "CHOOSE_PLAYER", squares });
  };

  const status = getStatus(squares, xIsNext);
  console.log(squares);
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button onClick={() => resetBoard(squares)}>Reset Board</button>

      {squares.every((square: any) => square == null) && (
        <>
          <p>First move is: {xIsNext ? "X" : "O"}</p>
          <button onClick={() => chooseFirstPlayer(squares)}>
            Click here to change who goes first
          </button>
          <Checkbox
            difficultyLevel={difficultyLevel}
            setDifficultyLevel={setDifficultyLevel}
          />
        </>
      )}
    </div>
  );
};
export default Board;
