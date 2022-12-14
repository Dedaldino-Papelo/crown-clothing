import React from 'react'
import './checkout-item-style.scss'
import { removeItem,removeFromCheckout,addItem } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CheckoutItem = ({ cartItem, clearItem,addItemToCheckout,removeItemCheckout }) => {
    const { imageUrl, name, price, quantity } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItemCheckout(cartItem)}>&#10094;</div>
                <span className='value'> {quantity}</span>
                <div className='arrow' onClick={() => addItemToCheckout(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItem(item)),
    addItemToCheckout: item => dispatch(addItem(item)),
    removeItemCheckout: item => dispatch(removeFromCheckout(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
