import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css';

const Products = () => {
  // const { state, addToCart } = useContext(AppContext);
  // const { products } = state;

  // Como ya los productos no vienen del initialState sino de Strapi entonces la destructuracion cambia
  // const { state: {products}, addToCart} = useContext(AppContext);

  const { products, addToCart } = useContext(AppContext);

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  console.log(products)
  return (
  <div className="Products">
    <div className="Products-items">
      {products.map((product) => (
        <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
      ))}
    </div>
    Products
  </div>
)};

export default Products;
