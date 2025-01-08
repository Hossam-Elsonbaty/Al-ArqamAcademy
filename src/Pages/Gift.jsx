import React, {useContext, useEffect, useState} from 'react';
import lines from'../Images/Vector (2).webp';
// import { InputNumber } from 'primereact/inputnumber';
import IsDesktop from '../Context/IsDesktop';
import PaymentContext from '../Context/Payment';
import item9 from '../Images/item9.webp';
import PriceSelector from '../Components/PriceSelector';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
export const Gift = () => {
  const {isDesktop} = useContext(IsDesktop)
  const { amount } = useContext(PaymentContext);
  const [oneTime, setOneTime] = useState(true);
  // const [value1, setValue1] = useState(0);
  const [selected, setSelected] = useState(null);
  const [someOneHonor, setSomeOneHonor] = useState(null);
  const handlePayment = async () => {
    const stripePromise  = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    // const body = {
    //   amount,
    // }
    // const headers = {
    //   'Content-Type': 'application/json',
    // }
    try {
      const response = await axios.post(
        'https://al-arqam-banckend.vercel.app/api/create-new-payment',
        JSON.stringify(amount) ,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const session = await response.json();
      const result = await stripePromise.redirectToCheckout({
        sessionId: session.id,
      });  
      if (result.error) {
        console.error(result.error.message);
      }
      console.log('Response:', response.data);
    } 
    catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
    
    // const response = await fetch('https://al-arqam-banckend.vercel.app/api/create-new-payment', {
    //   method: 'POST',
    //   headers: headers,
    //   body: JSON.stringify(body),
    // });
    // const session = await response.json();
    // const result = await stripePromise.redirectToCheckout({
    //   sessionId: session.id,
    // });
    // if (result.error) {
    //   console.error(result.error.message);
    // }
  }
  const handleCheckboxChange = (id) => {
    setSelected(id === selected ? null : id);
  };
  const text1 = `"وَمَا تُنفِقُواْ مِنْ خَيْرٍ فَلأنفُسِكُمْ، وَمَا تُنفِقُونَ إِلاَّ ابْتِغَاء وَجْهِ اللّهِ وَمَا تُنفِقُواْ مِنْ خَيْرٍ يُوَفَّ إِلَيْكُمْ وَأَنتُمْ لاَ تُظْلَمُونَ" `
  const text2 = "سورة البقرة (272)"
  const text3 = "“And whatever good you [believers] spend is for yourselves, and you do not spend except seeking the countenance of Allah. And whatever you spend of good - it will be fully repaid to you, and you will not be wronged”"
  return (
    <main className='gift-main'>
      {isDesktop
        ?
        <div className="hero">
          <section className='message'>
            <h1>
              Support Our Journey
              <img src={lines} alt='image' />
            </h1>
            <span className='ayah'>{text1}</span>
            <span className='phrase'>{text2}</span>
            <span className='translate'>{text3}</span>
          </section>
        </div>
        :
        <div className="hero">
          <img src={item9} alt="image" />
          <section className='message'>
            <h1>
              Support Our Journey
              <img src={lines} alt='image' />
            </h1>
            <span className='ayah'>{text1}</span>
            <span className='phrase'>{text2}</span>
            <span className='translate'>{text3}</span>
          </section>
        </div>
      }
      <section className="content">
        <header>
          <h2>Your Gift</h2>
          <div className='choice'>
            <div className={`${oneTime? "normal selected" : "normal"}`} onClick={()=>setOneTime(true)}><span>One-Time</span></div>
            <div className={`${!oneTime? "normal selected" : "normal"}`} onClick={()=>setOneTime(false)}><span>Monthly</span></div>
          </div>
        </header>
        <div className='amount'>
          <PriceSelector />
          {/* <h1>Select Amount </h1>
          <div className='amount-cont'>
            <span className={`${selectedPrice===50 ? "price selected-price" : "price"}`} id='50price' onClick={()=>setSelectedPrice(50)}>$50</span>
            <span className={`${selectedPrice===100 ? "price selected-price" : "price"}`} id='100price' onClick={()=>setSelectedPrice(100)}>$100</span>
            <span className={`${selectedPrice===500 ? "price selected-price" : "price"}`} id='500price' onClick={()=>setSelectedPrice(500)}>$500</span>
            <span className={`${selectedPrice===1000 ? "price selected-price" : "price"}`} id='1000price' onClick={()=>setSelectedPrice(1000)}>$1000</span>
          </div>
          <div className='amount-cont'>
            <span className={`${selectedPrice===1500 ? "price selected-price" : "price"}`} id='1500price' onClick={()=>setSelectedPrice(1500)}>$1500</span>
            <span className={`${selectedPrice===2000 ? "price selected-price" : "price"}`} id='2000price' onClick={()=>setSelectedPrice(2000)}>$2000</span>
            <InputNumber inputId="currency-us" className='enter-anumber' value={value1} onValueChange={(e) => setSelectedPrice(e.value)} mode="currency" currency="USD" locale="en-US" />
          </div> */}
          <h1>Count as:</h1>
          <div className="checkbox-container">
            <input 
              type="checkbox" 
              id="GeneralDonation"
              checked={selected === 'GeneralDonation'}
              onChange={() => handleCheckboxChange('GeneralDonation')}
              />
            <label htmlFor="GeneralDonation" className="custom-checkbox"></label>
            <label htmlFor="GeneralDonation" className='label'>General Donation</label>
          </div>
          <div className="checkbox-container">
            <input 
              type="checkbox" 
              id="SomeoneHonor"
              checked={selected === 'SomeoneHonor'}
              onChange={() => handleCheckboxChange('SomeoneHonor')}
              />
            <label htmlFor="SomeoneHonor" className="custom-checkbox"></label>
            <label htmlFor="SomeoneHonor" className='label'>Dedicate my donation in someone’s honor</label>
          </div>
          {selected === 'SomeoneHonor' && <input type="text" onChange={(e)=>setSomeOneHonor(e.target.value)} placeholder='In honor of'  className='in-honor'/>}
          <button onClick={handlePayment} className='proceed'>Proceed to Payment Method</button>
          {/* <a href='https://donate.stripe.com/test_6oEg1Q66jebub7ydQR' className='proceed'>Proceed to Payment Method</a> */}
        </div>
      </section>
    </main>
  )
}
