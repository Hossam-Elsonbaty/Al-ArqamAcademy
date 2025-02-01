// frontend/src/components/PaymentPage.js
import React, { useState, useEffect, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../Components/CheckoutForm'
import PaymentContext from '../Context/Payment';
import Loader from '../Components/Loader';
const PaymentPage = ()=> {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const {amount, email, name, phoneNumber} = useContext(PaymentContext)
  const subject = 'Thank You for Your Generous Donation'
  const footer = 'Many people say they want to help; fewer actually step up to do it. Thank you and may God reward you for supporting our journey to make a difference for future generations! Your generous contributions sustain our programs!'
  const msg = `Sincerely, ${<br/>} AlArqam Academy Team`
  useEffect(()=>{
    setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY))
  },[])
  useEffect(()=>{
    const createPayment = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND_SERVER}/api/create-new-payment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount, email, name, phoneNumber, }),
        });
        const data = await response.json();
        const { clientSecret } = data;
        setClientSecret(clientSecret);
      } catch (error) {
        console.error('Error creating payment:', error);
        window.location.href = `${window.location.origin}/error`
      }finally {
        setLoading(false); // Ensure loading is set to false after fetch
      }
    };
    createPayment();
  },[email, name, phoneNumber]);
  if (loading) {
    return <Loader/>; 
  }
  if (!stripePromise || !clientSecret) {
    return window.location.href = `${window.location.origin}/error`; 
  }
  return(
    <>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm />
      </Elements>
  </>
  )
}
export default PaymentPage;