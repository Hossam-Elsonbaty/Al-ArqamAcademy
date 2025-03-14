/* eslint-disable no-unused-vars */
import React, {useContext, useState, useRef} from 'react';
import stayIn from '../Images/item10.webp';
import IsDesktop from '../Context/IsDesktop';
import { DatePicker} from 'antd';
import axios from 'axios';
import { notification } from 'antd';
export const ProgramApplication = () => {
  const [isParent, setIsParent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [kidsCount, setKidsCount] = useState(0);
  const {isDesktop} = useContext(IsDesktop);
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description
    });
  };
  const handleAddKids = (e)=>{
    setKidsCount(Number(e.target.value))
  }
  const onDateChange = (date) => {
    if (!date || !date.$d) {
      return;
    }
    const dateString = new Date(date.$d);
    const formattedDate = dateString.toLocaleDateString()
    setDob(formattedDate)
  };
  const handleInputNumber = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setPhoneNumber(inputValue);
    }
  };
  const handleParentApplication = async (e) => {
    e.preventDefault();
    const childrenData = Array.from({ length: kidsCount }).map((_, index) => {
      const childForm = document.querySelector(`#child-form-${index}`);
      return {
        firstName: childForm.querySelector(`#child-${index}-firstName`).value,
        lastName: childForm.querySelector(`#child-${index}-lastName`).value,
        dob: childForm.querySelector(`#child-${index}-dob`).value,
        gender: childForm.querySelector(`#child-${index}-gender`).value,
        selectedProgram: childForm.querySelector(`#child-${index}-program-type`).value,
      };
    });
    let applicationData ={
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      zipCode,
    }
    applicationData.children = childrenData
    try {
      
      const response = await axios.post(
        `${process.env.REACT_APP_STRIPE_PUBLIC_KEY2}/api/parent-application`,
        JSON.stringify(applicationData) ,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      openNotificationWithIcon('success','success operation','Thank you for your time. Your application has been submitted')
    } catch (error) {
      openNotificationWithIcon('error','failed operation','Please fill your data correctly')
      console.error('Error:', error.response?.data || error.message);
    }
  };
  const handleStudentApplication = async (e) => {
    e.preventDefault();
    let applicationData ={
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      gender,
      dob,
      city,
      zipCode,
      selectedProgram
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_STRIPE_PUBLIC_KEY2}/api/student-application`,
        JSON.stringify(applicationData) ,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      openNotificationWithIcon('success','success operation','Thank you for your time. Your application has been submitted')
    } catch (error) {
      openNotificationWithIcon('error','failed operation','Please fill your data correctly')
      console.error('Error:', error.response?.data || error.message);
    }
  };
  return (
    <>
      {contextHolder}
      <div className="application-container">
        <header className="header">
          <h1>
            Register Now
            <span></span>
            <span></span>
          </h1>
          <div className='switcher'>
            <div className={`${!isParent? "choice" : "other"}`} onClick={()=>setIsParent(false)}>
              <p className="text-base">Student</p>
            </div>
            <div className={`${isParent ? "choice" : "other"}`}onClick={()=>setIsParent(true)}>
              <p className="text-base">Parent</p>
            </div>
          </div>
        </header>
        {isParent?
        <form onSubmit={handleParentApplication}>
          <div className='input-cont'>
            <input
              required
              type="text"
              placeholder="First Name"
              onChange={(e)=>{setFirstName(e.target.value)}}
            />
            <input
              required
              type="text"
              placeholder="Last Name"
              onChange={(e)=>{setLastName(e.target.value)}}
            />
          </div>
          <div className='input-cont'>
            <input
              type="email"
              required
              placeholder="EMAIL Address"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <input
              type="text"
              required
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={handleInputNumber}
            />
          </div>
          <div className='input-cont address'><input required type="text" onChange={(e)=>{setAddress(e.target.value)}} placeholder='Address' /></div>
          <div className="input-cont">
            <input
              type="text"
              required
              placeholder="City / State"
              onChange={(e)=>{setCity(e.target.value)}}
            />
            <input
              type="text"
              required
              placeholder="Zip Code"
              onChange={(e)=>{setZipCode(e.target.value)}}
            />
          </div>
          <div className="input-cont program-type">
            <select
              required
              onChange={(e) => handleAddKids(e)}
              name="kidsCount"
              id="kidsCount"
              style={{width:'100%'}}
              className='text-zinc-400'
            >
              <option value="0" hidden selected>
                How many kids are you interested in registering?
              </option>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          {Array.from({ length: kidsCount }).map((_, index) => (
            <div key={index}>
              <div className="flex items-center my-4 w-50 justify-center gap-4">
                <div className="bg-deep-teal w-10 h-1"></div>
                <div>Child {index + 1}</div>
                <div className="bg-deep-teal w-10 h-1"></div>
              </div>
              <div className='form-div' id={`child-form-${index}`}>
                <div className="input-cont">
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    id={`child-${index}-firstName`}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    id={`child-${index}-lastName`}
                  />
                </div>
                <div className="input-cont">
                  <DatePicker
                    id={`child-${index}-dob`}
                    onChange={(date) => onDateChange(index, date)}
                    className="antd"
                    required
                    placeholder='Date of Birth'
                  />
                  <select
                    id={`child-${index}-gender`}
                    required
                    className="text-zinc-400"
                  >
                    <option value="" hidden>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="input-cont program-type">
                  <select
                    name="programType"
                    required
                    id={`child-${index}-program-type`}
                    className="text-zinc-400"
                    style={{ width: "100%" }}
                  >
                    <option value="" hidden>
                      Select A Program For Your Application
                    </option>
                    <option value="My First Step in the Quran Language (Arabic)">
                      My First Step in the Quran Language (Arabic)
                    </option>
                    <option value="Hoffaz Dar Al-Arqam (Memorization)">
                      Hoffaz Dar Al-Arqam (Memorization)
                    </option>
                    <option value="Inheritors of the Prophets">
                      Inheritors of the Prophets 
                    </option>
                  </select>
                </div>
              </div>
            </div>
          ))}
          <button
            type="submit"
            className=""
          >
            SUBMIT
          </button>
        </form>
        : 
        <form onSubmit={handleStudentApplication}>
          <div className='input-cont'>
            <input
              type="text"
              required
              placeholder="First Name"
              onChange={(e)=>{setFirstName(e.target.value)}}
            />
            <input
              type="text"
              required
              placeholder="Last Name"
              onChange={(e)=>{setLastName(e.target.value)}}
            />
          </div>
          <div className='input-cont'>
            <input
              type="email"
              required
              placeholder="EMAIL Address"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <input
              type="text"
              required
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={handleInputNumber}
            />
          </div>
          <div className='input-cont'>
            <DatePicker onChange={(date) => onDateChange(date)} className='antd' placeholder='Date of Birth'/>
            <select required id="programType" onChange={(e)=>{setGender(e.target.value)}} className="text-zinc-400">
              <option value="Male" hidden selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className='input-cont address' ><input type="text"onChange={(e)=>{setAddress(e.target.value)}}  placeholder='Address' /></div>
          <div className='input-cont'>
            <input
              type="text"
              required
              placeholder="City / State"
              onChange={(e)=>{setCity(e.target.value)}}
            />
            <input
              type="text"
              required
              placeholder="Zip Code"
              onChange={(e)=>{setZipCode(Number(e.target.value))}}
            />
          </div>
          <div className='input-cont program-type' >
            <select required onChange={(e)=>{setSelectedProgram(e.target.value)}} name="programType" id="programType"  className='text-zinc-400'>
              <option value="Select A Program For Your Application" hidden selected> Select A Program For Your Application</option>
              <option value="My First Step in the Quran Language (Arabic)">My First Step in the Quran Language (Arabic)</option>
              <option value="Hoffaz Dar Al-Arqam (Memorization)">Hoffaz Dar Al-Arqam (Memorization)</option>
              <option value="Inheritors of the Prophets"> Inheritors of the Prophets </option>
            </select>
          </div>
          <button
            type='submit'
          >
            SUBMIT
          </button>
        </form>
        }
        {isDesktop
          ?
          <div className="stay-in">
            <div className="content">
              <h1>STAY IN TOUCH</h1>
              <span>Be the first to hear about upcoming classes, exclusive events, and the latest resources to help you or your child gain accessible Shariah knowledge grounded in the Quran and Sunnah.</span>
              <div className='sign-up'>
                <a href='contact-us'>Contact Us</a>
              </div>
            </div>
            <div className="image-section">
              <div className="image-container">
                <div className='before'></div>
                <img src={stayIn} alt='stayIn image'/>
              </div>
            </div>
          </div>
          :
          <div className="stay-in">
            <div className="image-section">
              <div className="image-container">
                <div className='before'></div>
                <img src={stayIn} alt='stayIn image'/>
              </div>
            </div>
            <div className="content">
              <h1>STAY IN TOUCH</h1>
              <span>Be the first to hear about upcoming classes, exclusive events, and the latest resources to help you or your child gain accessible Shariah knowledge grounded in the Quran and Sunnah.</span>
              <div className='sign-up'>
                <a href='contact-us'>Contact Us</a>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};
