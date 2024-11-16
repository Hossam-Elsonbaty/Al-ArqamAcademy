import React, {useContext, useState} from 'react';
import lines from'../Images/Vector (2).png';
import { InputNumber } from 'primereact/inputnumber';
import IsDesktop from '../Context/IsDesktop';
import item9 from '../Images/item9.jpeg'
export const Gift = () => {
  const {isDesktop} = useContext(IsDesktop)
  const [oneTime, setOneTime] = useState(true);
  const [value1, setValue1] = useState(0);
  const [selected, setSelected] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const handleCheckboxChange = (id) => {
    setSelected(id === selected ? null : id);
  };
  const handleSelectedPrice = (id) => {
    setSelectedPrice(id === selectedPrice ? null : id);
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
              <img src={lines} alt="" />
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
              <img src={lines} alt="" />
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
          <h1>Select Amount </h1>
          <div className='amount-cont'>
            <span className={`${selectedPrice==='50price' ? "price selected-price" : "price"}`} id='50price' onClick={()=>setSelectedPrice('50price')}>$50</span>
            <span className={`${selectedPrice==='100prce' ? "price selected-price" : "price"}`} id='100prce' onClick={()=>setSelectedPrice('100prce')}>$100</span>
            <span className={`${selectedPrice==='500price' ? "price selected-price" : "price"}`} id='500price' onClick={()=>setSelectedPrice('500price')}>$500</span>
            <span className={`${selectedPrice==='1000price' ? "price selected-price" : "price"}`} id='1000price' onClick={()=>setSelectedPrice('1000price')}>$1000</span>
          </div>
          <div className='amount-cont'>
            <span className={`${selectedPrice==='1500price' ? "price selected-price" : "price"}`} id='1500price' onClick={()=>setSelectedPrice('1500price')}>$1500</span>
            <span className={`${selectedPrice==='2000price' ? "price selected-price" : "price"}`} id='2000price' onClick={()=>setSelectedPrice('2000price')}>$2000</span>
            <InputNumber inputId="currency-us" className='enter-anumber' value={value1} onValueChange={(e) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
            {/* <input type="number" className='enter-anumber' placeholder='$000'/> */}
          </div>
          <h1>Count as:</h1>
          <div class="checkbox-container">
            <input 
              type="checkbox" 
              id="option1"
              checked={selected === 'option1'}
              onChange={() => handleCheckboxChange('option1')}
              />
            <label for="option1" class="custom-checkbox"></label>
            <label for="option1" className='label'>General Donation</label>
          </div>
          <div class="checkbox-container">
            <input 
              type="checkbox" 
              id="option2"
              checked={selected === 'option2'}
              onChange={() => handleCheckboxChange('option2')}
              />
            <label for="option2" class="custom-checkbox"></label>
            <label for="option2" className='label'>Dedicate my donation in someone’s honor</label>
          </div>
          {selected === 'option2' && <input type="text" placeholder='In honor of'  className='in-honor'/>}
          
          <button className='proceed'>Proceed to Payment Method</button>
        </div>
      </section>
    </main>
  )
}
