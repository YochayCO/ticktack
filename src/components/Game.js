import { useState } from 'react'

import { otherPlayer, isGameOver, getGameResult } from '../utils/game'
import Board from './Board'
import ScoreBoard from './ScoreBoard'
import CurrentPlayer from './CurrentPlayer'
import { Button } from '@material-ui/core'

const initialBoardState = [['','',''],['','',''],['','','']]

function Game() {
  const [board, setBoard] = useState(initialBoardState)
  const [score, setScore] = useState({ 1: 0, 2: 0 })
  const [currPlayer, setCurrPlayer] = useState(1)

  const onBoardChange = (boardState) => {
    if (isGameOver(boardState, currPlayer)) {
      const winner = getGameResult(boardState, currPlayer)
      if (winner) {
        const newScore = { ...score, [winner]: score[winner] + 1 }
        setScore(newScore)
        setCurrPlayer(winner)
      }
      setBoard(initialBoardState)
      return
    }

    setBoard(boardState)
    setCurrPlayer(otherPlayer(currPlayer))
  }

  const restartBoard = () => {
    setBoard(initialBoardState)
    setCurrPlayer(otherPlayer(currPlayer))
  }

  return (
    <div className="Game">
      <CurrentPlayer currPlayer={currPlayer} />
      <Board board={board} currPlayer={currPlayer} onChange={onBoardChange} />
      <ScoreBoard score={score} />
      <Button onClick={restartBoard}>Restart</Button>
    </div>
  );
}

export default Game;
