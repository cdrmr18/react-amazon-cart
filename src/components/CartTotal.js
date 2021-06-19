import React from 'react'
import './CartTotal.css'
import NumberFormat from 'react-number-format';

function CartTotal({ items }) {
  const getTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += (item.price * item.quantity)
    })
    return totalPrice;
  }
  const getTotalItems = () => {
    let totalItems = 0;
    items.forEach((item) => {
      totalItems += 1
    })
    return totalItems;
  }
    return (
        <div className="CartTotal">
          <h3>
            Subtotal({ getTotalItems() } items):
            <span className="CartTotal-price">
              <NumberFormat value={ getTotalPrice() } displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
            </span>
          </h3>
          <button>
            Proceed to checkout
          </button>
        </div>
    )
}

export default CartTotal
