import Tile from '../Tile'
import './TileRow.css'

function TileRow({ value: tiles }) {

  return (
    <div className="tileRow">
      {
        tiles.map((tile) => {
          return <Tile value={tile} />
        })
      }
    </div>
  );
}

export default TileRow;

