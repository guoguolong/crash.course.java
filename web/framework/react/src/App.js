import React from 'react';
import logo from './logo.svg';
import './App.css';
var createReactClass = require('create-react-class');

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

const DogMixin = {
  feed: function() {
    return 'Feed: ' + this.state.seconds;
  },
};

var TickTock = createReactClass({
  mixins: [SetIntervalMixin, DogMixin], // 使用 mixin
  getInitialState: function() {
    return {
      seconds: 0,
      feed: ''
    };
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // 调用 mixin 上的方法
  },
  tick: function() {
    this.setState({
      seconds: this.state.seconds + 1,
      feed: this.feed()
    });
  },
  render: function() {
    return (
      <p>{this.state.feed}
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});

export default TickTock;
