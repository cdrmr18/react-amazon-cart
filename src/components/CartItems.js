import React from 'react'
import './CartItems.css'
import CartItem from './CartItem.js'

function CartItems({ items }) {

    return (
        <div className="CartItems">
          <h1>Shopping Cart</h1>
          <div className="CartItem-items">
            {items.map((item, index) => 
                <CartItem key={index}/>
            )}
          </div>
        </div>
    )
}

export default CartItems
