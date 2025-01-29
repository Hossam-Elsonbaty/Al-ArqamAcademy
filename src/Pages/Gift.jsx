import React, {useContext, useEffect, useState} from 'react';
import lines from'../Images/Vector (2).webp';
import IsDesktop from '../Context/IsDesktop';
import PaymentContext from '../Context/Payment';
import item9 from '../Images/item9.webp';
import PriceSelector from '../Components/PriceSelector';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {Link} from "react-router-dom";
import { Helmet } from 'react-helmet';

export const Gift = () => {
  const {isDesktop} = useContext(IsDesktop)
  const { oneTime, setOneTime, email, setEmail, name, setName, phoneNumber, setPhoneNumber, amount} = useContext(PaymentContext);
  const text1 = `"وَمَا تُنفِقُواْ مِنْ خَيْرٍ فَلأنفُسِكُمْ، وَمَا تُنفِقُونَ إِلاَّ ابْتِغَاء وَجْهِ اللّهِ وَمَا تُنفِقُواْ مِنْ خَيْرٍ يُوَفَّ إِلَيْكُمْ وَأَنتُمْ لاَ تُظْلَمُونَ" `
  const text2 = "سورة البقرة (272)"
  const text3 = "“And whatever good you [believers] spend is for yourselves, and you do not spend except seeking the countenance of Allah. And whatever you spend of good - it will be fully repaid to you, and you will not be wronged”"
  return (
    <>
      <Helmet>
        <link rel="preload" href={lines} as="image" />
        <link rel="preload" href={item9} as="image" />
      </Helmet>
      <main className='gift-main'>
        {isDesktop
          ?
          <div className="hero">
            <section className='message'>
              <h1>
                Support Our Journey
                <img src={lines} alt='lines image' />
              </h1>
              <span className='ayah'>{text1}</span>
              <span className='phrase'>{text2}</span>
              <span className='translate'>{text3}</span>
            </section>
          </div>
          :
          <div className="hero">
            <img src={item9} alt=" Support Our Journey image" />
            <section className='message'>
              <h1>
                Support Our Journey
                <img src={lines} alt='Support Our Journey image' />
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
            <h1>Please Enter Your Information:</h1>
            <div className='donator-info'>
              <input type="text" required placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
              <input type="email" required placeholder='email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <PhoneInput required placeholder='phone number'value={phoneNumber} onChange={setPhoneNumber}/>
            </div>
            {(!email || !name || !phoneNumber || !amount)?(
              <>
                <Link style={{ backgroundColor: 'red' }} disabled to='' className='proceed'>Please fill in all required fields</Link>
              </>
            ):
            <Link to={oneTime?'/payment-page':'/subscription-page'} className='proceed'>Proceed to Payment Method</Link>
            }
          </div>
        </section>
      </main>
    </>
  )
}
