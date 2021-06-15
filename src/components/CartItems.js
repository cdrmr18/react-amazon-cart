import React from 'react'
import './CartItems.css'
import CartItem from './CartItem.js'

function CartItems() {
    return (
        <div className="CartItems">
          <h1>Shopping Cart</h1>
          <div className="CartItem-items">
            <CartItem />
          </div>
        </div>
    )
}

export default CartItems
