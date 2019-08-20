import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import puppy from '../../assets/face.svg';

const StripeButton = ({ price }) => {
  // price in cents
  console.log(process.env);
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_TOKEN;

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert('Payment successful');
      })
      .catch(error => {
        console.log('Payment error: ', error);
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      currency="USD"
      label="Pay Now"
      name="Puppy shop"
      billingAddress
      shippingAddress
      image={puppy}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

StripeButton.propTypes = {
  price: PropTypes.number
};

export default StripeButton;
