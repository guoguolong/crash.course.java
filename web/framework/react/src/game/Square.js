import React from 'react'

class Square extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null
  //   }
  // }
  clickMe() {
    this.setState({value: 'X'});
  }
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;