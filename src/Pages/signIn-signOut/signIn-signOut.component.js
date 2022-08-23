import React from 'react'
import './signInsignOut.styles.scss'
import SignIn from '../../components/signIn/signIn.conponent'
import SignUp from '../../components/sign-up/sign-up.component'

const signInsignOut = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default signInsignOut
