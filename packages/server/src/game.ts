import {
  _,
  Board,
  Difficulty,
  GameStatus,
  Marker,
  Player,
} from '@mapistry/take-home-challenge-shared';
import { getBestMove, getRandomMove } from './ai';
import { getWinningLine, isGameOver, whoWon } from './endGame';

/**
 * Finds the computer's marker based on the moves on the board.
 * If the number of marks on the board is even then the computer
 * went first so it's marker is 'x'
 */
const findMyMarker = (board: Board): Marker =>
  board.reduce((counter, cell) => (cell ? counter + 1 : counter), 0) % 2
    ? Marker.o
    : Marker.x;

export const updateGame = (
  board: Board,
  difficulty: Difficulty,
): GameStatus => {
  const result: GameStatus = {
    board,
    winner: null,
    winningLine: undefined,
  };

  if (!isGameOver(result.board)) {
    // randomize the first move by the computer
    if (result.board.every((field) => !field)) {
      result.board = getRandomMove(result.board, findMyMarker(result.board));
    } else {
      switch (difficulty) {
        case Difficulty.easy:
          result.board = getRandomMove(
            result.board,
            findMyMarker(result.board),
          );
          break;
        case Difficulty.hard:
        default:
          result.board = getBestMove(result.board, findMyMarker(result.board));
          break;
      }
    }
  }

  const gameOver = isGameOver(result.board);

  result.winner = gameOver ? whoWon(result.board) : null;
  result.winningLine = gameOver ? getWinningLine(result.board) : undefined;

  return result;
};

export const beginNewGame = (
  difficulty: Difficulty,
  whoIsFirst: Player,
): GameStatus => {
  let result: GameStatus = {
    board: [_, _, _, _, _, _, _, _, _],
    winner: null,
    winningLine: undefined,
  };

  if (whoIsFirst === Player.computer) {
    result = updateGame(result.board, difficulty);
  }

  return result;
};
