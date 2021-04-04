import React from 'react';
import GameState from '../Store/GameState';

const styles = {
  remainder: {
    marginRight: 'auto'
  },
  duration: {
    marginLeft: 'auto'
  },
  headerContainer: {
    display: 'flex',
    padding: '1rem'
  }
}

class GameHeader extends React.Component {
  constructor(props) {
    super(props);
    GameState.header = this;
    this.state = {
      start: 0,
      duration: 'Select your first tile to start timer',
      remainder: 'Start a game to see the remaining matches'
    }
  }

  startTimer() {
    if (this.state.start !== 0) return;

    this.setState(state => ({
      start: Date.now(),
      duration: state.start === 0
        ? 'Select your first tile to start timer'
        : `Duration: ${state.start - Date.now() * 0.001}`,
      interval: setInterval(() => {
        this.setState(state => ({
          duration: state.start === 0
            ? 'Select your first tile to start timer'
            : `Duration: ${parseFloat((Date.now() - state.start) * 0.001).toFixed(2)}`
        }));
      }),
      remainder: (GameState.totalTiles - GameState.matchCounter) / 2
    }))
  }
  // required because we arent using a reactive store like redux
  update() {
    this.setState(state => ({
      remainder: (GameState.totalTiles - GameState.matchCounter) / 2
    }))
  }

  getStarted() {
    return this.state.start
  }

  stop() {
    this.setState(state => ({
      start: 0
    }))
    clearInterval(this.state.interval)
  }
  render () {
    return (
    <div style={styles.headerContainer}>
      <span style={styles.remainder} >{this.state.remainder}</span>
      <span style={styles.duration} >{this.state.duration}</span>
    </div>
    )
  }
}

export default GameHeader;