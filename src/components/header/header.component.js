import React from 'react'
import Logo from '../../assets/Logo/084 crown.svg'
import { signOutGoogle } from '../../firebase/firebase-utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv } from './header.style'

const Header = ({currentUser, hidden}) => {
  return (
    <HeaderContainer>

      <LogoContainer to='/'>
        <img src={Logo} alt='logo' />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>

        <OptionLink to={`/`}>
          CONTACT
        </OptionLink>

        {
          currentUser ? (
            <OptionDiv onClick={signOutGoogle}>SIGNOUT</OptionDiv>
          )
            : <OptionLink to={`/signIn`}>SIGNIN</OptionLink>

        }
        
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null:  <CartDropdown /> 
      }
    </HeaderContainer>
  )
}

const mapStateToProps = ({user: {currentUser}, cart:{hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header) 
