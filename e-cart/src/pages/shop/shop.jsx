import React from 'react'
import { PRODUCT } from '../../product'
import { Products } from './products'
import './shop.css';
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shoptitle">
        <h1> Big Shopping</h1>
      </div>
      <div className="products">
        {PRODUCT.map((product)=>(
          <Products data={product}/>
        ))}
      </div>

    </div>
  )
}
