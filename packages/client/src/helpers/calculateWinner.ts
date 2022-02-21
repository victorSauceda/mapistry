/**
 * Return the winner of the game, if there is one
 * @param squares - an array of the squares that have been clicked on.
 * @returns The winner, or null if there is no winner.
 */
const calculateWinner = (squares: Array<number>) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  /* This is a for loop that iterates through the lines array. */
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default calculateWinner;
