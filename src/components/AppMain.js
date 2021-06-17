import React from 'react'
import CartItems from './CartItems.js'
import CartTotal from './CartTotal.js'

function AppMain({ items }) {
  
  return (
    <div className="App-Main">
        <CartItems cartItems= { items}/>
        <CartTotal />
    </div>
  )
}

export default AppMain