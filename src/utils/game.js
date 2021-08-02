export const playerTiles = {
  1: 'X',
  2: 'O'
}
export const otherPlayer = (currPlayer) => {
  if (currPlayer === 1) return 2
  return 1
}

const didWin = (boardState, currPlayer) => {
  if (boardState.some((row) => row.every((tile) => tile === playerTiles[currPlayer]))) return true
  if (boardState.every(row => (row[0] === playerTiles[currPlayer]))) return true
  if (boardState.every(row => (row[1] === playerTiles[currPlayer]))) return true
  if (boardState.every(row => (row[2] === playerTiles[currPlayer]))) return true
  if (
    boardState[0][0] === playerTiles[currPlayer] && 
    boardState[1][1] === playerTiles[currPlayer] && 
    boardState[2][2] === playerTiles[currPlayer]
  ) return true
  if (
    boardState[0][2] === playerTiles[currPlayer] && 
    boardState[1][1] === playerTiles[currPlayer] && 
    boardState[2][0] === playerTiles[currPlayer]
  ) return true
  return false
}

export const isGameOver = (boardState, currPlayer) => {
  if (didWin(boardState, currPlayer)) return true
  if (boardState.every((row) => row.every((tile) => tile !== ''))) return true
  return false
}

export const getGameResult = (boardState, currPlayer) => {
  if (didWin) return currPlayer
  else return 0
}