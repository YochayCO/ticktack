import Tile from '../Tile'
import './TileRow.css'

function TileRow({ value: tiles }) {

  return (
    <div className="tileRow">
      {
        tiles.map((tile, i) => {
          return <Tile key={i} value={tile} />
        })
      }
    </div>
  );
}

export default TileRow;

