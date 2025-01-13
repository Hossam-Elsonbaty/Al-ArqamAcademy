// frontend/src/components/PaymentPage.js
import React, { useState, useEffect, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import TestForm from '../Components/TestForm'
import PaymentContext from '../Context/Payment';
const SubscriptionPage = ()=> {
  const [stripePromise, setStripePromise] = useState(null)
  const [clientSecret, setClientSecret] = useState("")
  const {amount, email, name, phoneNumber} = useContext(PaymentContext)
  useEffect(()=>{
    setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY))
  },[])
  //https://al-arqam-banckend.vercel.app
	useEffect(() => {
		console.log(phoneNumber, name);
		const createSubscription = async () => {
			try {
				const response = await fetch('http://localhost:5555/api/create-subscription', {
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
				console.error('Error creating subscription:', error);
				window.location.href = `${window.location.origin}/error`
			}
		};
		createSubscription();
	}, [email, name, phoneNumber]);
	console.log(clientSecret, stripePromise);
  return(
    <>
    {stripePromise && clientSecret && (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <TestForm />
      </Elements>
    )}
  </>
  )
}
export default SubscriptionPage;