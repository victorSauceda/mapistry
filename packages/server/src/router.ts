import {
  Board,
  Difficulty,
  GameStatus,
  Player,
} from '@mapistry/take-home-challenge-shared';
import { Router } from 'express';
import { beginNewGame, updateGame } from './game';

export const router = Router();

interface BeginBody {
  difficulty: Difficulty;
  whoIsFirst: Player;
}
interface MoveBody {
  board: Board;
  difficulty: Difficulty;
}

router.post<'/begin', never, GameStatus, BeginBody>('/begin', (req, res) => {
  const { difficulty, whoIsFirst } = req.body;
  res.json(beginNewGame(difficulty, whoIsFirst));
});

router.post<'/move', never, GameStatus, MoveBody>('/move', (req, res) => {
  const { board, difficulty } = req.body;
  res.json(updateGame(board, difficulty));
});
