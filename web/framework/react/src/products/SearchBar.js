import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input placehoder="Search..." name="keyword" value={this.props.keyword} onChange={this.props.onChange} />
        <br />
        <input id="onlyStock" type="checkbox" name="inStock" value={this.props.inStock} onChange={this.props.onChange} />
        <label htmlFor="onlyStock">Only show products in stock</label>
      </div>
    );
  }
}