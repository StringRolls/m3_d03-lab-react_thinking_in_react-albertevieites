import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = ({ productDB }) => {
  const baseState = {
    products: productDB,
    searchedProducts: productDB,
    query: '',
    stock: false
  };

  const [state, setState] = useState(baseState);

  const handleQuery = (e) => {
    const query = e.target.value;

    const searchedProducts = state.products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    setState((prevState) => ({
      ...prevState,
      searchedProducts,// setState is a function that takes a function as an argument
      query: query
    }));
  };

  const handleStock = (e) => {
    const stock = e.target.checked;

    if (stock === true) {
      const searchedProducts = state.products.filter((product) => product.stocked === true);

      setState((prevState) => ({
        ...prevState,
        searchedProducts,
        stock: stock
      }));
    } else setState(baseState);
  };

  return (
    <div className='mainContainer'>
      <h1>IronStore</h1>
      <SearchBar
        handleQuery={handleQuery}
        query={state.query}
        handleStock={handleStock}
        stock={state.stock}
      />
      <ProductTable products={this.state.searchedProducts} />
    </div>
  );
};

export default ProductsPage;
