import TileRow from './TileRow'

function Board({ board }) {

  return (
    <div className="Board">
      {
        board.map((tileRow, i) => {
          return <TileRow key={i} value={tileRow} />
        })
      }
    </div>
  );
}

export default Board;

