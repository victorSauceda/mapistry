import {
  Board,
  Marker,
  Winner,
  WinnerKey,
  WinningLine,
} from '@mapistry/take-home-challenge-shared';

/**
 * Determines if the board has no moves left
 */
export const noMovesLeft = (board: Board): boolean =>
  board.every((cell) => !!cell);

/**
 * Looks for the winning line
 */
export const getWinningLine = (board: Board): WinningLine | undefined => {
  // Check for row win
  for (let index = 0; index < board.length; index += 3) {
    if (
      board[index] &&
      board[index] === board[index + 1] &&
      board[index + 1] === board[index + 2]
    ) {
      return { row: index / 3 };
    }
  }

  // Check for column win
  for (let index = 0; index < 3; index += 1) {
    if (
      board[index] &&
      board[index] === board[index + 3] &&
      board[index + 3] === board[index + 6]
    ) {
      return { column: index };
    }
  }

  // Check for diagonal win
  if (board[0] && board[0] === board[4] && board[4] === board[8]) {
    return { diagonal: 0 };
  }

  // Check for diagonal win
  if (board[2] && board[2] === board[4] && board[4] === board[6]) {
    return { diagonal: 1 };
  }

  // No winner
  return undefined;
};

/**
 * Checks if the game is over
 */
export const isGameOver = (board: Board): boolean =>
  !!getWinningLine(board) || noMovesLeft(board);

/**
 * Determines which marker won the game or returns a tie
 */
export const whoWon = (board: Board): WinnerKey => {
  const winningLine = getWinningLine(board);
  let winner: WinnerKey = Winner.tie;
  let potentialWinner: Marker | null = null;

  if (winningLine?.column != null) {
    potentialWinner = board[winningLine.column];
  }

  if (winningLine?.diagonal != null) {
    potentialWinner = winningLine.diagonal === 0 ? board[0] : board[2];
  }

  if (winningLine?.row != null) {
    potentialWinner = board[winningLine.row * 3];
  }

  if (potentialWinner) {
    winner = potentialWinner;
  }
  return winner;
};
