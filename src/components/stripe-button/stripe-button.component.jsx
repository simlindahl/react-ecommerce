import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ( { price } ) =>
{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_4ED3u7jFf0VfUPYjyFOKH1Xe00fXBzkgXO";

    const onToken = token =>
    {
        console.log( token );
        alert( "Payment successful!" );
    };

    return (
        <StripeCheckout
            label="Pay now"
            name="Crown Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={ `Your total is $${ price }` }
            amount={ priceForStripe }
            panelLabel="Pay now"
            token={ onToken }
            stripeKey={ publishableKey }
        />
    );
};

export default StripeCheckoutButton;