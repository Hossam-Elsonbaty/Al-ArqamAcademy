import React, { createContext, useState } from 'react';
const PaymentContext = createContext();
export const PaymentProvider = ({ children }) => {
  const [amount, setAmount] = useState(null);
  const [monthly, setMonthly] = useState(true);
  const [generalDonation, setGeneralDonation] = useState(true);
  const [someoneHonor, setSomeoneHonor] = useState();
  console.log(amount);
  
  return (
    <PaymentContext.Provider 
    value={{ amount, setAmount, monthly,
      setMonthly, generalDonation, setGeneralDonation,
      someoneHonor, setSomeoneHonor,
    }}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContext;
