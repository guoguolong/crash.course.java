import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = Object.entries(this.props.categories).map((item, key) => {
      const productRows = item[1].map((prd) => {
        return (
          <ProductRow prd={prd} key={prd.id} />
        );
      })
      return (
        <div key={item[0]} >
          <ProductCategoryRow name={item[0]} />
          {productRows}
        </div>
      )
    })

    return (
      <div>
        <div>Name | Price</div>
        {items}
      </div>
    );
  }
}