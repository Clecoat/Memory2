import React from 'react';
import GameState from '../Store/GameState';

class GameTile extends React.Component {
  constructor(props) {
    super(props);
    this.tile = props.tile;
    this.state = {
      key: props.key,
      tile: props.tile,
      revealed: true,
      matched: props.matched ?? false
    }

    setTimeout(() => {
      this.setState(state => ({
        revealed: false
      }))}, 5000)
  }

  markMatched() {
    console.log('setting matched')
    this.setState(state => ({
      matched: true
    }));
    GameState.matchCounter++;
    GameState.header.update();
    GameState.footer.match();
  }

  conceal() {
    console.log('setting concealed')
    this.setState(state => ({
      revealed: false
    }));
  }

  shouldReveal() {
    return this.state.revealed || this.state.matched;
  }

  handleClick() {
    // do not click if we have 2 selected tiles or if the selected tile is this tile
    if (GameState.selectedTiles.length === 2 ||
      GameState.selectedTiles.some(tile => tile === this)) return;
    if (!GameState.started) GameState.header.startTimer();

    // else add this tile to the selectedTiles array
    GameState.selectedTiles.push(this);

    // update this tiles state as revealed
    this.setState(state => ({
      revealed: !state.revealed
    }));

    // if we matched with a previous tile then mark as matched on both tiles and clear selectedTiles
    if (GameState.selectedTiles.length === 2) {
      console.log('gamestate', GameState)
      if (GameState.selectedTiles.some(tile => tile.state.tile.colour === this.state.tile.colour && tile !== this)) {
        GameState.selectedTiles
          .forEach(tile => tile.markMatched());
        GameState.selectedTiles = []
      } else {
      setTimeout(() => {
          // re conceal each tile (its overriden and remains revealed if matched)
          GameState.selectedTiles.forEach(tile => tile.conceal());
          // clear the selected list
          GameState.selectedTiles = []
        }, 2000);
      }
    }
    console.log('this', this.state)
  }

  render () {
    return <div className={ this.shouldReveal() ? "game-tile" : "game-tile concealed"} style={this.shouldReveal() ? { backgroundColor: this.tile.colour } : {}} onClick={this.handleClick.bind(this)}></div>
  }
}

export default GameTile;