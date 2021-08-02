function ScoreBoard({ score }) {
  return (
    <div className="scoreBoard">
      <div className="playerScore">
        X Player: {score[1]}
      </div>
      <div className="playerScore">
        O Player: {score[2]}
      </div>
    </div>
  );
}

export default ScoreBoard;
