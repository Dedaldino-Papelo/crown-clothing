import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.style.scss'
import CartItems from '../cart-items/cart-item.component'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {useNavigate} from 'react-router-dom'

const CartDropdown = ({cartItems}) => {

  const navigate = useNavigate()

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ? (  
            cartItems.map(item => (
            <CartItems key={item.id} item={item} />
          ))
          ):(
            <span className='empty-message'>Your Cart is empty</span>
          )
          
        }
      </div>
      <CustomButton onClick={() => navigate('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps )(CartDropdown)
