import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../contexts/Shopcontext';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import Productdisplay from '../components/ProductDisplay/Productdisplay';
import Descripitionbox from '../components/DescripitionBox/Descripitionbox';
import Relatedproduct from '../components/Relatedproducts/Relatedproduct';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id === Number(productId));
  return(
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product}/>
      <Descripitionbox />
      <Relatedproduct/>
  </div>
  ) 
}
export default Product