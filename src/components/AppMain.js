import React, { useState } from 'react'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
import data from '/Users/kathytavia/code/cdrmr18/react-amazon-cart/src/Data.js'

function AppMain() {
  const [ cartItems, setCartItems ] = useState(data);
  
  return (
    <div className="App-Main">
        <CartItems items= { cartItems }/>
        <CartTotal />
    </div>
  )
}

export default AppMain