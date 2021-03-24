import React from 'react';
import FancyButton from './FancyButton'

/**
 * React.js v16 以前使用回调方式.
 */
export default class RefApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 10,
    }
  }
  handleClick=() => {
    this.ref.style.background='green'
    this.ref.style.color='white'
    let age = this.state.age;
    age++;
    this.setState({
      age
    })
  }
  render() {
    return (
      <div>
        Before React v16: React.createRef();<br/>
        <FancyButton age={this.state.age} ref={ref => this.ref = ref}>Fancy Button</FancyButton>
        <button onClick={this.handleClick}>Change Fancy</button>
      </div>
    );
  }
}