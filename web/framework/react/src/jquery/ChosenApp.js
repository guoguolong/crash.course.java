import React from 'react';
import $ from 'jquery';
import "chosen-js/chosen.css";
window.jQuery = $;
require("chosen-js") // 不要使用 import "chosen-js"，因为该模块是 commonjs module.

class Chosen extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    return this.$el.chosen();
  }
  
  componentWillUnmount() {
    this.$el.chosen('destroy');
  }

  render() {
    console.log($)
    return (
      <div>
        <select className="chosen-select" ref={(el) => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

export default function ChosenApp() {
  return (
    <Chosen>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </Chosen>
  );
}