import React from 'react';
import GameHeader from './GameHeader';
import GameBody from './GameBody';
import GameFooter from './GameFooter';
import GameState from '../Store/GameState';

class GamePanel extends React.Component {
  constructor(props) {
    super(props);
    GameState.totalTiles = 32;
    GameState.tileTypes = 8;
  }
  render() {
    return (
      <div >
        <GameHeader started={GameState.started}/>
        <GameBody />
        <GameFooter />
      </div>
    )
  }
}

export default GamePanel;