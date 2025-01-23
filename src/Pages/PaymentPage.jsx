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
  useEffect(()=>{
    setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY))
  },[])
  //https://al-arqam-banckend.vercel.app
  useEffect(()=>{
    const createPayment = async () => {
      try {
        const response = await fetch('https://al-arqam-banckend.vercel.app/api/create-new-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount, email, name, phoneNumber }),
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
      {/* {(stripePromise && clientSecret)
      ?
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      :
        <ErrorPage/>
        // window.location.href = `${window.location.origin}/error`
      } */}
    
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm />
      </Elements>
    {/* {stripePromise && clientSecret && (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm />
      </Elements>
    )} */}
  </>
  )
}
export default PaymentPage;