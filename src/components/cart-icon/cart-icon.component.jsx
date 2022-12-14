import React from 'react'
import './cart-icon.style.scss'
import {ReactComponent as ShoppingICon} from '../../assets/122 shopping-bag.svg';
import {connect} from 'react-redux'
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toogleCartHidden,itemCount}) => {
  return (
    <div className='cart-icon' onClick={toogleCartHidden}>
      <ShoppingICon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()) 
})

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})


export default connect(mapStateToProps, mapDispatchToProps) (CartIcon)
