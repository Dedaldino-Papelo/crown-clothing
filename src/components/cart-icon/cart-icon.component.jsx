import React from 'react'
import './cart-icon.style.scss'
import {ReactComponent as ShoppingICon} from '../../assets/122 shopping-bag.svg';
import {connect} from 'react-redux'
import { toogleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({toogleCartHidden}) => {
  return (
    <div className='cart-icon' onClick={toogleCartHidden}>
      <ShoppingICon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()) 
})


export default connect(null, mapDispatchToProps) (CartIcon)