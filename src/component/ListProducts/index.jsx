import React, { useState } from 'react';
import ProductItem from '../ProductItem';
import './index.css';
import { PRODUCTS } from '../ultils/const';

const ListProducts = () => {
  const [listProducts, setListProducts] = useState(PRODUCTS);

  return (
    <div className="list-products-container">
      {listProducts.map((prd) => (
        <ProductItem key={prd.id} product={prd} />
      ))}
    </div>
  );
};

export default ListProducts;
