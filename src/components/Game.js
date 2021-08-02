import Board from './Board'
import ScoreBoard from './ScoreBoard'
import CurrentPlayer from './CurrentPlayer'


function Game() {
  return (
    <div className="Game">
      <CurrentPlayer />
      <Board />
      <ScoreBoard />
    </div>
  );
}

export default Game;
