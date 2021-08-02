export const playerTiles = {
  1: 'X',
  2: 'O'
}
export const otherPlayer = (currPlayer) => {
  if (currPlayer === 1) return 2
  return 1
}

export const isGameOver = (boardState, currPlayer) => {
  if (boardState.some((row) => row.every((tile) => tile === playerTiles[currPlayer]))) return true
  // TODO:
  // check columns
  // check diagonals
  // check if tie
}

export const getGameResult = (boardState, currPlayer) => {
  if (boardState.some((row) => row.every((tile) => tile === playerTiles[currPlayer]))) return currPlayer
  // TODO:
  // check columns
  // check diagonals
  // check if tie
}