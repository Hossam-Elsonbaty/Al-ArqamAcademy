import React, { useState, useContext } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import PaymentContext from '../Context/Payment';

const PriceOption = ({ price, amount, onClick }) => (
  <span className={`${amount === price ? 'price selected-price' : 'price'}`} onClick={() => onClick(price)}>
    ${price}
  </span>
);
const PriceSelector = () => {  
  const {amount, setAmount } = useContext(PaymentContext);
  const [value1, setValue1] = useState(null);
  const prices = [50, 100, 500, 1000, 1500, 2000];
  return (
    <>
      <h1>Select Amount</h1>
      <div className='amount-cont'>
        {prices.slice(0, 4).map(price => (
          <PriceOption key={price} price={price} amount={amount} onClick={setAmount} />
        ))}
      </div>
      <div className='amount-cont'>
        {prices.slice(4).map(price => (
          <PriceOption key={price} price={price} amount={amount} onClick={setAmount} />
        ))}
        <InputNumber
          inputId="currency-us"
          className='enter-anumber'
          placeholder='Enter an Amount'
          value={value1}
          onFocus={() => setAmount(null)}
          onValueChange={(e) => setAmount(e.value)}
          mode="currency"
          currency="USD"
          locale="en-US"
        />
      </div>
    </>
  );
};

export default PriceSelector;