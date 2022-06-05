import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <div className='productTableContainer'>
      <table className='productTable'>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>

        <tbody>
        {products.map(product => {
          return <ProductRow key={product.id} product={product} />;
        })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;