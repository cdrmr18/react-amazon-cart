import React from 'react'
import './CartItems.css'
import CartItem from './CartItem.js'

function CartItems({ items, setCartItems }) {
  const deleteItem = (index) => { 
    const newItems =  items.filter( item => item !== items[index])
    setCartItems(newItems);  
  }

  const updateItemQuantity = (e, index) => {
    const newItems = [...items];
    newItems[index].quantity = parseInt(e.target.value);
    setCartItems(newItems);
  }
  
    return (
        <div className="CartItems">
          <h1>Shopping Cart</h1>
          <hr />
          <div className="CartItem-items">
            {items.map((item, index) => 
                <CartItem index={index} item={item} key={index} updateItemQuantity={updateItemQuantity} deleteItem={deleteItem} />
            )}
          </div>
        </div>
    )
}

export default CartItems
