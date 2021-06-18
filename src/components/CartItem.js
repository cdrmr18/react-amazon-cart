import React from 'react'
import './CartItem.css'

function CartItem({ title, stock, price, image, quantity }) {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src={process.env.PUBLIC_URL + '/items/' + image} alt="iPad"></img>
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>
                        { title }
                    </h2>
                </div>
                <div className="info-stock">
                    {stock}
                </div>
                <div className="item-actions">
                    <div className="item-quantity
                select">
                    <select value={quantity}>
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                        <option value="3">Qty: 3</option>
                    </select>
                    </div>
                    <div className="divider">|</div>
                    <div className="item-delete">
                        Delete
                    </div>
                </div>
            </div>
            <div className="CartItem-price">
                ${price}
            </div>
        </div>
    )
}

export default CartItem