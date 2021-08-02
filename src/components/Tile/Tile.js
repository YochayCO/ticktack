import './Tile.css'

import X from '../../assets/X.svg'
import O from '../../assets/Zero.svg'

function Tile({ value, onClick }) {
  let TileSrc
  if (value) {
    TileSrc = (value === 'O') ? O : X
  }

  return (
    <div className="tileContainer">
      {
        value === '' ? <div className="tile" onClick={onClick} /> : <img src={TileSrc} className="tileSvg" alt="tile" />
      }
    </div>
  );
}

export default Tile;

