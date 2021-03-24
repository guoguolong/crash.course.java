import React from 'react';
import $ from 'jquery';
import "chosen-js/chosen.css";
window.jQuery = $;
require("chosen-js") // 不要使用 import "chosen-js"，因为该模块是 commonjs module.

class Chosen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: 0
    }
  }
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.chosen();

    this.handleChange = this.handleChange.bind(this);
    this.$el.on('change', this.handleChange);
  }
  
  componentDidUpdate(prevProps) {
    console.log('prevProps::::', prevProps)
    console.log('this.props.children::::', this.props.children)

    if (prevProps.children !== this.props.children) {
      this.$el.trigger("chosen:updated");
    }
  }

  componentWillUnmount() {
    this.$el.off('change', this.handleChange);
    this.$el.chosen('destroy');
  }
  
  handleChange(e) {
    this.setState({
      fruit: e.target.value
    })
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        <select style={{width: '500px'}} className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

export default class ChosenApp2 extends React.Component {
  handleChosenChange = () => {
    console.log('Change from JQuery Chosen')
  }
  render() {
    return (
      <div>
        <Chosen onChange={this.handleChosenChange}>
          <option>Apple</option>
          <option>Pear</option>
          <option>Organe</option>
        </Chosen>
      </div>
    );
  }
}