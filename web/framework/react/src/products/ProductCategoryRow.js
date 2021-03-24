import React from 'react';

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4 style={{background:'#0f88ae',color:'white'}}>{this.props.name}</h4>
      </div>
    );
  }
}