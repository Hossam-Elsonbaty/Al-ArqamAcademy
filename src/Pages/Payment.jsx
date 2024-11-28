import React, {useState} from 'react';
import { InputText } from "primereact/inputtext";
import image from '../Images/credit.webp'
export const Payment = () => {
  const [value, setValue] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardDateValue, setCardDateValue] = useState('');
  const handleCardDateValue = (e) => {
    let input = e.target.value;
    input = input.replace(/[^0-9/]/g, '');
    if (input.length === 2 && !input.includes('/')) {
      input = input.slice(0, 2) + ' / ' + input.slice(2);
    }
    if (input.length <= 7) {
      setCardDateValue(input);
    }
  };
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };
  const handleCvvChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setCvv(value);
    }
  };
  return (
    <main className='payment'>
      <div className="content">
        <h1>Payment Details</h1>
        <h2>Chase Bank</h2>
        <h2>
          Account Name: <span>UPPING ORGANIZATION, INC</span>
        </h2>
        <div className='credit-logo'>
          <img src={image} alt="image"></img>
          <span>Credit/Debit Card</span>
        </div>
        <h2>Your Details</h2>
        <div className='input-cont'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
        </div>
        <div className='input-cont'>
          <input 
            type="text" 
            id="inputExpDate" 
            placeholder="MM / YY" 
            maxlength='7'
            value={cardDateValue}
            onChange={handleCardDateValue}
          />
          <input type="text" placeholder='Total Amount'/>
        </div>
        <div className='input-cont'>
          <input value={value} onChange={handleChange} placeholder="Account Number" />
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={cvv}
            onChange={handleCvvChange}
            maxLength="4"
            placeholder="Card# CVV"
            className="cvv-input"
          />
        </div>
        <button>Donate</button>
      </div>
    </main>
  )
}
