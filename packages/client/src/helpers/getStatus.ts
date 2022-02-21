import calculateWinner from "./calculateWinner";
/**
 * Return the status of the game
 * @param {any} squares - an array of 9 squares, each of which is either "X", "0", or null.
 * @param {boolean} xIsNext - a boolean that indicates whether it's X's turn or O's turn.
 * @returns The status of the game.
 */
const getStatus = (board: any, xIsNext: boolean) => {
  const winner = calculateWinner(board);
  if (winner) {
    return `Winner: ${winner}. Game is over`;
  } else if (board.every(Boolean)) {
    return `Scratch: Cat's game. Game is over`;
  } else {
    return `Next player: ${xIsNext ? "x" : "o"}`;
  }
};
export default getStatus;
