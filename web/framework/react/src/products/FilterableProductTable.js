import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from './data.json'

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      inStock: false,
      categories: this.filterCategories()
    }
  }

  filterCategories = (state) => {
    const categories = {}
    state = state || {...this.state};
    data.forEach((item) => {
      categories[item.category] = categories[item.category] || [];
      console.log('state.inStock:::', state.inStock)
      if (state.inStock) {
        if (item.stocked) {
          categories[item.category].push(item);
        }
      } else {
        categories[item.category].push(item);
      }
    })
    console.log(categories)
    return categories;
  }

  handleChange = (e) => {
    const state = {... this.state}

    const name = e.target.name;
    const value = e.target.name === 'inStock' ? e.target.checked : e.target.value;
    
    state[name] = value

    state.categories = this.filterCategories(state);

    this.setState(state);
  }
  UNSAFE_componentWillMount = () => {
    // const categroies = this.filterCategories()
    // this.setS
  }
  render() {

    return (
        <div>
            <SearchBar onChange={this.handleChange} keyword={this.state.keyword} inStock={this.state.inStock}/>
            <ProductTable categories={this.state.categories} />
        </div>
    );
  }
}