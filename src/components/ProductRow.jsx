import React from 'react';

const ProductRow = ({product}) => {
  const {name, price, stocked} = product;
  return (
    <tr>
      <td className={stocked ? "" : "text-red"}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
