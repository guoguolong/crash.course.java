import React from 'react';

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const prd = this.props.prd;
    return (
      <div>
        {prd.name} | {prd.price} | {prd.id} | {prd.stocked?'Y':'N'} 
      </div>
    );
  }
}