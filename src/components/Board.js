import TileRow from './TileRow'
import { playerTiles } from '../utils/game'

function Board({ board, currPlayer, onChange }) {
  const updateBoard = (i, j) => {
    const newBoard = [...board]
    newBoard[i] = [...board[i]]
    newBoard[i][j] = playerTiles[currPlayer]
    onChange(newBoard)
  }

  return (
    <div className="Board">
      {
        board.map((tileRow, i) => {
          return <TileRow key={i} value={tileRow} onChange={(j) => updateBoard(i, j)} />
        })
      }
    </div>
  );
}

export default Board;

