import { useState, useContext } from "react";
import { useStripe, useElements, PaymentElement, LinkAuthenticationElement } from "@stripe/react-stripe-js";
import PaymentContext from '../Context/Payment';

export default function SubscriptionForm() {
  const stripe = useStripe();
  const elements = useElements();
	const {email, setEmail, name, setName, phoneNumber, setPhoneNumber} = useContext(PaymentContext)
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		setIsProcessing(true);
		const { error, paymentIntent } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: `${window.location.origin}/success-payment`,
				payment_method_data: {
					billing_details: {
						name,
						email,
						phone: phoneNumber,
					},
				},
			},
			// redirect: 'if_required',
		});
		if (error) {
			setMessage(error.message);
		} else if (paymentIntent && paymentIntent.status === 'succeeded') {
			setMessage('Subscription setup successful! Thanks For Your Support');
			setEmail('')
			setPhoneNumber('')
			setName('')
		} else {
			setMessage('An unexpected error occurred.');
		}
	
		setIsProcessing(false);
	};
		const paymentElementOptions = {
    layout: "accordion",
  }
  return (
    <main className="checkout-container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions}/>
        <div className="fields-cont">
          <button disabled={isProcessing || !stripe || !elements} id="submit">
            <span id="button-text">
              {isProcessing ? "Processing ... " : "Pay now"}
            </span>
          </button>
          {message && <div id="payment-message">{message}</div>}
        </div>
      </form>
    </main>
  );
}