import React from 'react';
import { DatePicker} from 'antd';
export const ChildApplication = ({kidsCount}) => {
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  console.log(kidsCount);
  return (
    <>
      <div className="flex items-center my-4 w-50 justify-center gap-4">
        <div className="bg-deep-teal w-10 h-1"></div>
        <div>Child {kidsCount}</div>
        <div className="bg-deep-teal w-10 h-1"></div>
      </div>
      <form>
        <div className="input-cont">
          <input
            type="text"
            placeholder="First Name"
          />
          <input
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="input-cont">
          <DatePicker onChange={onDateChange} className='antd'/>
          <select id="programType" className='text-zinc-400'>
            <option value="Male" hidden selected>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="input-cont program-type" >
          <select  name="programType" id="programType" className='text-zinc-400' style={{width:'100%'}}>
            <option value="Select A Program For Your Application" hidden selected> Select A Program For Your Application</option>
            <option value="Step One in the Quran Journey">Step One in the Quran Journey</option>
            <option value="Hoffaz Dar Al-Arqam (Memorization)">Hoffaz Dar Al-Arqam (Memorization)</option>
            <option value="Inheritors of the Prophets’ program"> Inheritors of the Prophets’ program</option>
          </select>
        </div>
      </form>
    </>
  )
}
