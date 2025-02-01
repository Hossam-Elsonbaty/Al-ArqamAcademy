// frontend/src/components/PaymentPage.js
import React, { useState, useEffect, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import SubscriptionForm from '../Components/SubscriptionForm'
import PaymentContext from '../Context/Payment';
import Loader from '../Components/Loader';
const SubscriptionPage = ()=> {
  const [stripePromise, setStripePromise] = useState(null)
  const [clientSecret, setClientSecret] = useState("")
	const [loading, setLoading] = useState(true);
  const {amount, email, name, phoneNumber} = useContext(PaymentContext)
  useEffect(()=>{
		setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY))
  },[])
	useEffect(() => {
		const createSubscription = async () => {
			try {
				const response = await fetch(`${process.env.BACKEND_SERVER}/api/create-subscription`, {
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
			}finally {
        setLoading(false); 
      }
		};
		createSubscription();
	}, [email, name, phoneNumber]);
	if (loading) {
    return <Loader/>; 
  }
  if (!stripePromise || !clientSecret) {
    return window.location.href = `${window.location.origin}/error`; 
  }
  return(
    <>
    {stripePromise && clientSecret && (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <SubscriptionForm />
      </Elements>
    )}
  </>
  )
}
export default SubscriptionPage;