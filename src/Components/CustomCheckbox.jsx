import React,{useState} from 'react'

const CustomCheckbox = () => {
    const [selected, setSelected] = useState(null);
    const [someOneHonor, setSomeOneHonor] = useState(null);
    const handleCheckboxChange = (id) => {
      setSelected(id === selected ? null : id);
    };
  
  return (
    <>
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
    </>
  )
}

export default CustomCheckbox