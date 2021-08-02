import { useState } from 'react'

import TileRow from './TileRow'

function Board() {
  const [tileSets] = useState([[['X'],['X'],['X']],[['X'],['X'],['X']],[['X'],['X'],['X']]])

  return (
    <div className="Board">
      {
        tileSets.map((tileRow) => {
          return <TileRow value={tileRow} />
        })
      }
    </div>
  );
}

export default Board;

