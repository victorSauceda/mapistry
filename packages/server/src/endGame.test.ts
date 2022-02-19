import { _, Marker, Winner } from '@mapistry/take-home-challenge-shared';
import { getWinningLine, isGameOver, noMovesLeft, whoWon } from './endGame';

/*
board indices:
[
  0, 1, 2,
  3, 4, 5,
  6, 7, 8
]
*/

describe('endgame', () => {
  describe('getWinningLine', () => {
    describe('row winner', () => {
      it('finds a winner on the first row', () => {
        const board = [
          Marker.x,
          Marker.x,
          Marker.x,
          Marker.o,
          Marker.o,
          Marker.x,
          _,
          _,
          _,
        ];
        const expected = { row: 0 };
        const actual = getWinningLine(board);
        expect(actual).toEqual(expected);
      });

      it('finds a winner on the second row', () => {
        const board = [
          Marker.x,
          Marker.x,
          _,
          Marker.o,
          Marker.o,
          Marker.o,
          _,
          Marker.x,
          _,
        ];
        const expected = { row: 1 };
        const actual = getWinningLine(board);
        expect(actual).toEqual(expected);
      });

      it('finds a winner on the third row', () => {
        const board = [
          Marker.x,
          Marker.o,
          Marker.o,
          Marker.o,
          _,
          _,
          Marker.x,
          Marker.x,
          Marker.x,
        ];
        const expected = { row: 2 };
        const actual = getWinningLine(board);
        expect(actual).toEqual(expected);
      });
    });

    describe('column winner', () => {
      it('finds a winner on the first column', () => {
        const board = [
          Marker.x,
          _,
          Marker.x,
          Marker.x,
          Marker.o,
          Marker.o,
          Marker.x,
          _,
          Marker.o,
        ];
        const expected = { column: 0 };
        const actual = getWinningLine(board);
        expect(actual).toEqual(expected);
      });

      it('finds a winner on the second column', () => {
        const board = [
          Marker.o,
          Marker.x,
          _,
          Marker.o,
          Marker.x,
          Marker.o,
          _,
          Marker.x,
          _,
        ];
        const expected = { column: 1 };
        const actual = getWinningLine(board);
        expect(actual).toEqual(expected);
      });

      it('finds a winner on the third column', () => {
        const board = [
          Marker.x,
          Marker.x,
          Marker.o,
          Marker.o,
          _,
          Marker.o,
          Marker.x,
          Marker.x,
          Marker.o,
        ];
        const expected = { column: 2 };
        const actual = getWinningLine(board);
        expect(actual).toEqual(expected);
      });
    });

    describe('diagonal winner', () => {
      it('finds a winner from top left to bottom right', () => {
        const board = [
          Marker.x,
          _,
          Marker.o,
          Marker.o,
          Marker.x,
          _,
          _,
          _,
          Marker.x,
        ];
        const expected = { diagonal: 0 };
        const actual = getWinningLine(board);
        expect(actual).toEqual(expected);
      });

      it('finds a winner from bottom left to top right', () => {
        const board = [
          Marker.x,
          Marker.x,
          Marker.o,
          Marker.x,
          Marker.o,
          _,
          Marker.o,
          _,
          _,
        ];
        const expected = { diagonal: 1 };
        const actual = getWinningLine(board);
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('noMovesLeft', () => {
    it('returns true if there are no moves left', () => {
      const board = [
        Marker.x,
        Marker.x,
        Marker.o,
        Marker.o,
        Marker.o,
        Marker.x,
        Marker.x,
        Marker.x,
        Marker.o,
      ];
      expect(noMovesLeft(board)).toBeTruthy();
    });

    it('returns false if there are moves left', () => {
      const board = [
        Marker.x,
        Marker.x,
        Marker.o,
        Marker.o,
        _,
        Marker.x,
        Marker.x,
        Marker.x,
        Marker.o,
      ];
      expect(noMovesLeft(board)).toBeFalsy();
    });
  });

  describe('isGameOver', () => {
    it('returns true if there was a winner', () => {
      const board = [
        Marker.o,
        Marker.x,
        _,
        Marker.o,
        Marker.x,
        Marker.o,
        _,
        Marker.x,
        _,
      ];
      expect(isGameOver(board)).toBeTruthy();
    });

    it('returns true if there are no moves left', () => {
      const board = [
        Marker.x,
        Marker.x,
        Marker.o,
        Marker.o,
        Marker.o,
        Marker.x,
        Marker.x,
        Marker.x,
        Marker.o,
      ];
      expect(isGameOver(board)).toBeTruthy();
    });

    it('returns false if there are moves left', () => {
      const board = [
        Marker.x,
        Marker.x,
        Marker.o,
        Marker.o,
        _,
        Marker.x,
        Marker.x,
        Marker.x,
        Marker.o,
      ];
      expect(isGameOver(board)).toBeFalsy();
    });
  });

  describe('whoWon', () => {
    it('returns x if x won', () => {
      const board = [
        Marker.o,
        Marker.x,
        _,
        Marker.o,
        Marker.x,
        Marker.o,
        _,
        Marker.x,
        _,
      ];
      expect(whoWon(board)).toEqual(Winner.x);
    });

    it('returns o if o won', () => {
      const board = [
        _,
        Marker.x,
        Marker.x,
        Marker.o,
        Marker.o,
        Marker.o,
        _,
        Marker.x,
        _,
      ];
      expect(whoWon(board)).toEqual(Winner.o);
    });

    it('returns tie if there was no winner', () => {
      const board = [
        Marker.x,
        Marker.x,
        Marker.o,
        Marker.o,
        Marker.o,
        Marker.x,
        Marker.x,
        Marker.x,
        Marker.o,
      ];
      expect(whoWon(board)).toEqual(Winner.tie);
    });
  });
});
