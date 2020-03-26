import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ( { price } ) =>
{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_4ED3u7jFf0VfUPYjyFOKH1Xe00fXBzkgXO";

    const onToken = token =>
    {
        axios( {
            url: "payment",
            method: "POST",
            data: {
                amount: priceForStripe,
                token
            }
        } )
            .then( response =>
            {
                alert( "Payment successful!" );
            } )
            .catch( error =>
            {
                console.log( `Payment error: ${ JSON.parse( error ) }` );
                alert( "There was an issue with the payment, please make sure you are using the provided test credit card." );
            } );
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