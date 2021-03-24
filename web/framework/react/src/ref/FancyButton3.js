import React from 'react';

// const FancyButton = React.forwardRef((props, ref)=>(
//   <button ref={ref} className="FancyButton">
//     {props.children}
//   </button>
// ))


export default class FancyButton extends React.Component {
  render() {
    return (
      <button className="FancyButton" ref={this.props.ref}>
        {this.props.children}
      </button>
    )
  }
}
