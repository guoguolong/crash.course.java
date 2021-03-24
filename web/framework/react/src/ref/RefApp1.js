import React from 'react';
import FancyButton from './FancyButton'

export default class RefApp extends React.Component {
  ref = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      age: 10
    }
  }
  handleClick=() => {
    this.ref.current.style.background='green'
    let age = this.state.age;
    age++;
    this.setState({
      age
    })
  }
  render() {
    return (
      <div>
        React v16: React.createRef();<br/>
        <FancyButton age={this.state.age} ref={this.ref}>Fancy Button</FancyButton>
        <button onClick={this.handleClick}>Change Fancy</button>
      </div>
    );
  }
}