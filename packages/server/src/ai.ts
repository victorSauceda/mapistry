import { Board, Marker, Winner } from '@mapistry/take-home-challenge-shared';
import { noMovesLeft, whoWon } from './endGame';

/*
board indices:
[
  0, 1, 2,
  3, 4, 5,
  6, 7, 8
]
*/

/**
 * Gets the heuristic score for this board
 */
const getScore = (board: Board, computerMarker: Marker): number => {
  const winner = whoWon(board);
  if (!winner || winner === Winner.tie) {
    return 0;
  }

  return winner === computerMarker ? 10 : -10;
};

/**
 * The recursive minimax algorithm
 */
const minimax = (
  board: Board,
  depth: number,
  isAiMove: boolean,
  computerMarker: Marker,
  maxDepth: number,
): number => {
  const score = getScore(board, computerMarker);

  if (score) {
    // take the depth into account so we find the fastest solution
    return score - depth;
  }

  if (noMovesLeft(board) || depth === maxDepth) {
    return 0;
  }

  let best = isAiMove ? -Infinity : Infinity;
  const humanMarker = computerMarker === Marker.x ? Marker.o : Marker.x;

  board.forEach((cell, index) => {
    if (cell) {
      // cell isn't empty, skip.
      return;
    }

    // clone the board
    const updatedBoard = [...board];

    // make the move
    updatedBoard[index] = isAiMove ? computerMarker : humanMarker;

    // update the best move
    const updatedScore = minimax(
      updatedBoard,
      depth + 1,
      !isAiMove,
      computerMarker,
      maxDepth,
    );
    best = isAiMove
      ? Math.max(best, updatedScore)
      : Math.min(best, updatedScore);
  });

  return best;
};

/**
 * Find the best move
 */
export const getBestMove = (
  board: Board,
  marker = Marker.x,
  depth = Infinity,
): Board => {
  let resultBoard = board;
  let best = -Infinity;

  const computer = marker;
  const maxDepth = depth;

  board.forEach((cell, index) => {
    if (cell) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = computer;

    const updatedScore = minimax(updatedBoard, 0, false, computer, maxDepth);
    if (updatedScore > best) {
      best = updatedScore;
      resultBoard = updatedBoard;
    }
  });

  return resultBoard;
};

/**
 * Find a random open spot to move
 */
export const getRandomMove = (board: Board, marker = Marker.x): Board => {
  let random;
  do {
    random = Math.floor(Math.random() * 9);
  } while (board[random]);

  const resultBoard = [...board];
  resultBoard[random] = marker;

  return resultBoard;
};
