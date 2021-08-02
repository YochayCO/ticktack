import TileRow from './TileRow'

function Board({ board }) {

  return (
    <div className="Board">
      {
        board.map((tileRow) => {
          return <TileRow value={tileRow} />
        })
      }
    </div>
  );
}

export default Board;

