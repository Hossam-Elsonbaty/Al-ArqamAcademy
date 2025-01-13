import { useState, useContext } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import PaymentContext from '../Context/Payment';

export default function CheckoutForm() {
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
        return_url: `${window.location.origin}/support-our-journey`,
        payment_method_data: {
          billing_details: {
            name,
            email,
            phone: phoneNumber,
          },
        },
      },
      redirect: "if_required"
    });
    if (error) {
      setMessage(error.message);
    } else if(paymentIntent&& paymentIntent.status==="succeeded"){
      setMessage(`Payment status: ${paymentIntent.status}`)
      setEmail('')
			setPhoneNumber('')
			setName('')
    }
    else {
      setMessage("An unexpected error occured.");
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