/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 */
export function createScoreBoard() {
  return {'The Best Ever' : 1000000}
}

/**
 * Adds a player to a score board.
 */
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

/**
 * Removes a player from a score board.
 */
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

/**
 * Increases a player's score by the given amount.
 */
export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

/**
 * Applies 100 bonus points to all players on the board.
 */
export function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
    scoreBoard[key] = scoreBoard[key] + 100
  }
  return scoreBoard;
}

/**
 * Normalizes a score with the provided normalization function.
 */
export function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}
