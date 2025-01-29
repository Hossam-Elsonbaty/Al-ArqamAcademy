import React, { createContext, useState } from 'react';
const PaymentContext = createContext();
export const PaymentProvider = ({ children }) => {
  const [amount, setAmount] = useState(null);
  const [oneTime, setOneTime] = useState(true);
  const [generalDonation, setGeneralDonation] = useState(true);
  const [someoneHonor, setSomeoneHonor] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <PaymentContext.Provider 
    value={{ amount, setAmount, oneTime,
      setOneTime, generalDonation, setGeneralDonation,
      someoneHonor, setSomeoneHonor,name, setName, email, setEmail, phoneNumber, setPhoneNumber
    }}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContext;
