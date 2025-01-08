// frontend/src/components/PaymentPage.js
import React, { useState, useEffect, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
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
    console.log(amount);
    fetch('http://localhost:5555/api/create-new-payment', {
      method: 'POST',
      body: JSON.stringify(amount)
    }).then(async(res)=>{
      const {clientSecret} = await res.json()
      console.log(clientSecret);
      setClientSecret(clientSecret);
    })
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







// import { useLocation } from 'react-router-dom';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { loadStripe  } from '@stripe/stripe-js';
// import PaymentContext from '../Context/Payment';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// const CheckoutForm = ({amount}) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('');
//   useEffect(() => {
//     fetch('https://al-arqam-banckend.vercel.app/api/create-new-payment', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ amount }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, [amount]);
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) return;
//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: cardElement,
//       }
//     });
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('Payment successful', paymentIntent);
//       // Here you can handle the post-payment actions such as storing the payment information
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay ${amount}
//       </button>
//     </form>
//   );
// };

// const PaymentPage = () => {
//   const location = useLocation();
//   const {amount } = useContext(PaymentContext);
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm amount={amount} />
//     </Elements>
//   );
// };

export default PaymentPage;