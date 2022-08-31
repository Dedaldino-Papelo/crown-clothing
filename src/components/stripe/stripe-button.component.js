import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51LL5V9B9AbOrj0SLz0IUz1DlqiRtohqjqpFnk6QNcNMoVEvK8FDiY6izW4xk15fZZunoAMUPrEVdCgAkDH6tWzeD00pi0SLUxt'

    const onToken = token => {
        console.log(token)
        alert('Payment Succesful!');
    }

  return (
    <StripeCheckout
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
  />
  )
}

export default StripeCheckoutButton
