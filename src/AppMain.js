import React from 'react'
import CartItems from './CartItems.js'
import CartTotal from './CartTotal.js'

function AppMain() {
  return (
    <div className="AppMain">
        <CartItems />
        <CartTotal />
    </div>
  )
}

export default AppMain