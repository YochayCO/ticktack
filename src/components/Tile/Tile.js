import './Tile.css'

import X from '../../assets/X.svg'


function Tile({ value }) {

  return (
    <div className="tile">
      <img src={X} className="tile" alt="tile" />
    </div>
  );
}

export default Tile;

