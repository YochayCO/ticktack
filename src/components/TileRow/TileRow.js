import Tile from '../Tile'
import './TileRow.css'

function TileRow({ value: tiles, onChange }) {

  return (
    <div className="tileRow">
      {
        tiles.map((tile, i) => {
          return <Tile key={i} value={tile} onClick={() => onChange(i)} />
        })
      }
    </div>
  );
}

export default TileRow;

