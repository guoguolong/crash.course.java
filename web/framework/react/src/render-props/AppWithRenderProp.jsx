import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
        <div style={{ position: 'absolute', left: mouse.x, top: mouse.y}}>
            <img src="/cat.png"/><br/>
            {mouse.x}: {mouse.y} 
        </div>
    );
  }
}

class Dog extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
        <div style={{ position: 'absolute', left: mouse.x, top: mouse.y}}>
            <img src="/dog.svg"/><br/>
            {mouse.x}: {mouse.y} 
        </div>
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ position: 'relative', height: '40vh', background: '#eae'}} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标..</h1>
        <Mouse render={(mouseState) => {
          return <Cat mouse={mouseState} />
        }}/>
        <hr/>
        <Mouse render={(mouseState) => (
          <Dog mouse={mouseState} />
        )}/>
      </div>
    );
  }
}