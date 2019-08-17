import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import puppy from '../../assets/face.svg';

const StripeButton = ({ price }) => {
  // price in cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_VHVblsr2npaQxWFkwUEIIT9E00R1tdRDvY';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
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
