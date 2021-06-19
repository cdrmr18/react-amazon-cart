import React from 'react'
import './CartItems.css'
import CartItem from './CartItem.js'

function CartItems({ items }) {
  const updateItemQuantity = (e, index) => {
    items[index].quantity = parseInt(e.target.value);
    console.log(items[index]);
  }
    return (
        <div className="CartItems">
          <h1>Shopping Cart</h1>
          <hr />
          <div className="CartItem-items">
            {items.map((item, index) => 
                <CartItem index={index} item={item} key={index} updateItemQuantity={updateItemQuantity} />
            )}
          </div>
        </div>
    )
}

export default CartItems
