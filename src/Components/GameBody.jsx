import React from 'react';
import { generateTileMatches } from '../Services/MemoryUtils';
import GameTile from './GameTile';
import GameState from '../Store/GameState';

class GameBody extends React.Component {
  constructor (props) {
    super(props);
    this.boardSize = props.boardSize;
    this.types = props.types;
  }

  render () {
    return (
    <div className="card raised margin-small" style={{ width: `${(GameState.totalTiles * 140) / 4}px`, margin: 'auto', backgroundColor: 'white'}} >
        { 
          generateTileMatches(GameState.totalTiles, GameState.tileTypes).reduce((acc, tile, index) => {
            acc.push(
              <GameTile key={index} tile={tile} />
          )
          return acc}, [])
        }
    </div>
    )
  }
}

export default GameBody;