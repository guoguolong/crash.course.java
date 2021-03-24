import React, { StrictMode } from 'react';

var createReactClass = require('create-react-class');
class Shell extends React.Component {
  render() {
    return (
      <div>Shell Component</div>
    )
  }
}
  
class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        count: 0
    }
  }
  handleClick = () =>  {
    this.setState(state => {
      return {count: this.state.count + 1}
    })
    this.props.onClick();
  }
  render() {
    console.log('1. Box Render: ', new Date())
    return (
      <div>
        <button onClick={this.handleClick}>Update App Total</button> | {this.state.count}
      </div>
    )
  }
  componentDidMount() {
    console.log('2. Box componentDidMount: ', new Date())
  }

  componentDidUpdate(prevProps) {
    console.log('3. componentDidUpdate: ', new Date())
  }
  componentWillUnmount() {
    console.log('4. componentWillUnmount: ', new Date())
  }
}

let cnt = 0;

export default class LifecycleApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
  }
  handleClick = () =>  {
    this.setState(state => {
      return {total: this.state.total + 1}
    })
  }
  render() {
    let container = <Box key={1} onClick={this.handleClick} />
    console.log("LifecycleApp Render:::", new Date())
    if (this.state.total > 5) {
      container = <Shell />;
    }
    return (
      <section>
          <input onSelectCapture={() => console.error('On slect')} defaultValue="段乱其暴躁的问题" />
        Total: {this.state.total}<br/> {container}
      </section>
    );
  }
}
