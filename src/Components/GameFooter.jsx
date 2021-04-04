import React from 'react';
import GameState from '../Store/GameState';
import './styles.css';

class GameFooter extends React.Component {
  constructor(props) {
    super(props);
    GameState.footer = this;
    this.state = {
      score: 0
    }
  }

  update() {
    this.setState(state => ({
      score: state.score
    }));
  }

  match() {
    const baseMatchReward = 10;
    const remainder = GameState.totalTiles * ((GameState.totalTiles - GameState.matchCounter) * 0.5);
    const timePenalty = (Date.now() - GameState.header.getStarted()) * 0.001;
    const matchReward = baseMatchReward * remainder / timePenalty;
    console.log('match', remainder, matchReward, timePenalty)
    this.setState(state => ({
      score: parseInt(state.score + matchReward)
    }))
  }

  render () {
    return (
    <div className="footer-container">
      <p className="lives">lives here</p>
      <p className="message">message of the day</p>
      <p className="score">score: {this.state.score}</p>
    </div>
    )
  }
}

export default GameFooter;