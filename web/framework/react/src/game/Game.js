import React from 'react';
import Board from './Board'
import calculateWinner from './calculateWinner';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {squares: Array(9).fill(null)}
      ],
      stepNumber: 0,      
      xIsNext: true,
    }
  }
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      console.log('Invalid click.')
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    let stepNumber = this.state.stepNumber;
    stepNumber++;

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber,
    })
  }
  jumpTo(step) {
    const history = this.state.history;
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }
  render() {
    const history = this.state.history;
    const stepNumber = this.state.stepNumber
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = history.map((item, key) => {
      const desc = key ?
        'Go to move #' + key :
        'Go to game start';
      return (
        <li>
          <button onClick={() => this.jumpTo(key)}>{desc}</button>
        </li>
      );
    });    
    return (
      <div className="game" style={{display:'block'}}>
        <div className="game-board">
          <div><button className="btn-reset" style={{background:'green'}} onClick={() => this.restart()}>Restart</button></div><br/>
          <div className="status">{status}</div>        
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}