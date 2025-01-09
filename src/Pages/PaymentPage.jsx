// frontend/src/components/PaymentPage.js
import React, { useState, useEffect, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../Components/CheckoutForm'
import PaymentContext from '../Context/Payment';
const PaymentPage = ()=> {
  const [stripePromise, setStripePromise] = useState(null)
  const [clientSecret, setClientSecret] = useState("")
  const {amount } = useContext(PaymentContext)
  useEffect(()=>{
    setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY))
  },[])
  useEffect(()=>{
    const createPayment = async () => {
      try {
        const response = await fetch('https://al-arqam-banckend.vercel.app/api/create-new-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount }),
        });
        const data = await response.json();
        const { clientSecret } = data;
        setClientSecret(clientSecret);
      } catch (error) {
        console.error('Error creating payment:', error);
      }
    };
    createPayment();
  },[])
  return(
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm/>
        </Elements>
      )}
    </>
  )
}
export default PaymentPage;