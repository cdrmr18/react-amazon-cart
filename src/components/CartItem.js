import React from 'react'

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img href='images/item-1.jpg' alt="iPad" width="180px" height="180px"></img>
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
                <div className="info-actions">
                    <div className="item-quantity
                select">
                    1
                    </div>
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