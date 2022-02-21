import calculateWinner from "./calculateWinner";
/**
 * When the user clicks on a square, we update the squares array and set the xIsNext property to the
 * opposite of its current value
 * @param {any} state - The current state of the game.
 * @param {any} action - The action that was dispatched.
 * @returns The state of the game.
 */
const gameReducer = (state: any, action: any) => {
  const { squares, xIsNext } = state;

  switch (action.type) {
    case "SELECT_SQUARE": {
      const { square } = action;
      const winner = calculateWinner(squares);
      if (winner || squares[square]) {
        return state;
      }
      const squaresCopy = [...squares];
      squaresCopy[square] = xIsNext ? "x" : "o";
      return {
        squares: squaresCopy,
        xIsNext: !xIsNext,
      };
    }
    case "RESET_BOARD": {
      return {
        squares: Array(9).fill(null),
        xIsNext: !xIsNext,
      };
    }
    case "CHOOSE_PLAYER": {
      return {
        squares,
        xIsNext: !xIsNext,
      };
    }
    default: {
      throw new Error(
        `Unhandled action type: ${action.type}. Please fix it. Thank you.`
      );
    }
  }
};
export default gameReducer;
