import { _, Board, Marker, Winner } from '@mapistry/take-home-challenge-shared';
import { getBestMove, getRandomMove } from './ai';
import { getWinningLine, noMovesLeft, whoWon } from './endGame';

/*
board indices:
[
  0, 1, 2,
  3, 4, 5,
  6, 7, 8
]
*/

const BEATABLE_MAX_DEPTH = 1;

describe('ai', () => {
  describe('unbeatable', () => {
    const verifyBoard = (expected: Board, actual: Board) =>
      expected.every((cell, index) => actual[index] === cell);

    it('wins', () => {
      const initial: Board = [
        Marker.x,
        Marker.o,
        Marker.x,
        Marker.o,
        Marker.o,
        Marker.x,
        _,
        _,
        _,
      ];
      const expected: Board = [
        Marker.x,
        Marker.o,
        Marker.x,
        Marker.o,
        Marker.o,
        Marker.x,
        _,
        _,
        Marker.x,
      ];

      const actual = getBestMove(initial);

      expect(verifyBoard(expected, actual)).toBeTruthy();
    });

    it('blocks', () => {
      const initial: Board = [
        Marker.x,
        Marker.o,
        _,
        Marker.o,
        _,
        _,
        Marker.x,
        Marker.x,
        _,
      ];
      const expected: Board = [
        Marker.x,
        Marker.o,
        _,
        Marker.o,
        _,
        _,
        Marker.x,
        Marker.x,
        Marker.o,
      ];

      const actual = getBestMove(initial, Marker.o);

      expect(verifyBoard(expected, actual)).toBeTruthy();
    });

    it('is unbeatable when the player moves first', () => {
      const initial: Board = [_, _, _, _, _, _, _, _, _];
      let board = initial;
      let move = 0;

      while (!getWinningLine(board) && !noMovesLeft(board)) {
        const isEven = !!(move % 2);
        const marker = isEven ? Marker.o : Marker.x;
        board = isEven
          ? getBestMove(board, marker)
          : getBestMove(board, marker, BEATABLE_MAX_DEPTH);
        move += 1;
      }

      const winner = whoWon(board);
      expect(winner === Winner.tie || winner === Winner.o).toBeTruthy();
    });

    it('is unbeatable when the computer moves first', () => {
      const initial: Board = [_, _, _, _, _, _, _, _, _];
      let board = initial;
      let move = 0;

      while (!getWinningLine(board) && !noMovesLeft(board)) {
        const isEven = !!(move % 2);
        const marker = isEven ? Marker.o : Marker.x;
        board = isEven
          ? getBestMove(board, marker)
          : getBestMove(board, marker, BEATABLE_MAX_DEPTH);
        move += 1;
      }

      const winner = whoWon(board);
      expect(winner === Winner.tie || winner === Winner.x).toBeTruthy();
    });

    it('is unbeatable against a randomly moving opponent', () => {
      const initial: Board = [_, _, _, _, _, _, _, _, _];
      let board = initial;
      let move = 0;

      while (!getWinningLine(board) && !noMovesLeft(board)) {
        const isEven = !!(move % 2);
        const marker = isEven ? Marker.o : Marker.x;
        if (isEven) {
          board = getBestMove(board, marker);
        } else {
          board = getRandomMove(board, marker);
        }
        move += 1;
      }

      const winner = whoWon(board);
      expect(winner === Winner.tie || winner === Winner.o).toBeTruthy();
    });
  });
});
