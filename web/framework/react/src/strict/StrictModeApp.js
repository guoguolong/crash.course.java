import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';

var createReactClass = require('create-react-class');
let cc = 0
let dd = 0
class Box extends React.Component {
  constructor(props) {
    super(props)
    dd++;
    console.log('dd:', dd)
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => {
      return { count: state.count + 1 }
    });
  }
  render() {
    cc++;
    return (
      <div>
      {cc} |
        Counter: {this.state.count}<br />
        T: {this.props.text} | {this.props.hobby}
        <button onClick={this.handleClick}>Change Count</button>
      </div>
    )
  }
}
Box.defaultProps = {
  hobby: 'basketball'
}
Box.propTypes = {
  text: PropTypes.number.isRequired,
};

export default class SimpleApp extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <section>
          <Box text={34} />
          {/* <Box text={54} />
          <Box text={'abc'} /> */}
        </section>
      </React.StrictMode>
    );
  }
}
