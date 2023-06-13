  import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

  import { useState } from "react";

  import { useSeleclor } from 'react-redux';

  



  import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles";

  const PaymentForm = () => {

      const stripe = useStripe();
      const elements = useElements();

      const paymentHandler = async (e) => {
          e.preventDefault();

          if(!stripe || !elements){
              return;
          }

          const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({ amount: 1000 })
          }).then(res => res.json());

          const {paymentIntent: { client_secret }} = response;

          console.log(client_secret);

          const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: 'anuka'
              }
            }
          })

          if(paymentResult.error) {
            alert(paymentResult.error)
          }else{
            if(paymentResult.paymentIntent.status === 'succeeded'){
              alert('Payment Successful')
            }
          }

      }

    return (
      <PaymentFormContainer>
        <FormContainer >
          <CardElement />
          <PaymentButton onClick={paymentHandler}>Pay Now</PaymentButton>
        </FormContainer>
      </PaymentFormContainer>
    );
  };

  export default PaymentForm;
