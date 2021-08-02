import { useState } from 'react'

import { otherPlayer, isGameOver, getGameResult } from '../utils/game'
import Board from './Board'
import ScoreBoard from './ScoreBoard'
import CurrentPlayer from './CurrentPlayer'
import RestartButton from './RestartButton'

const initialBoardState = [[[''],[''],['']],[[''],[''],['']],[[''],[''],['']]]

function Game() {
  const [board, setBoard] = useState(initialBoardState)
  const [score, setScore] = useState({ 1: 0, 2: 0 })
  const [currPlayer, setCurrPlayer] = useState(1)

  const onBoardChange = (boardState) => {
    if (isGameOver(boardState, currPlayer)) {
      const winner = getGameResult(boardState)
      if (winner) {
        const newScore = { ...score, [winner]: score.winner++ }
        setScore(newScore)
        setCurrPlayer(winner)
      }
      setBoard(initialBoardState)
      return
    }
    setCurrPlayer(otherPlayer(currPlayer))
  }

  const restartBoard = () => {
    setBoard(initialBoardState)
    setCurrPlayer(otherPlayer(currPlayer))
  }

  return (
    <div className="Game">
      <CurrentPlayer />
      <Board board={board} currPlayer={currPlayer} onChange={onBoardChange} />
      <ScoreBoard score={score} />
      <RestartButton onClick={restartBoard} />
    </div>
  );
}

export default Game;
