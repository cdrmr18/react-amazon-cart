import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img href="" alt="iPad"></img>
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>
                        Ipad
                    </h2>
                </div>
                <div className="info-stock">
                    In stock
                </div>
                <div className="item-actions">
                    <div className="item-quantity
                select">
                    <select>
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                        <option value="3">Qty: 3</option>
                    </select>
                    </div>
                    <div className="divider">|</div>
                    <div className="item-delete">
                        delete
                    </div>
                </div>
            </div>
            <div className="CartItem-price">
                $80.00
            </div>
        </div>
    )
}

export default CartItem