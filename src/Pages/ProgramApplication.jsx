import React, {useContext, useState} from 'react';
import { ChildApplication } from '../Components/ChildApplication';
import stayIn from '../Images/item10.jpeg';
import IsDesktop from '../Context/IsDesktop';
import { DatePicker} from 'antd';
import axios from 'axios';
export const ProgramApplication = () => {
  const [student, setStudent] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState(Number);
  const [selectedApplication, setSelectedApplication] = useState("");
  const [kidsCount, setKidsCount] = useState(0);
  const {isDesktop} = useContext(IsDesktop);
  const handleAddKids = (e)=>{
    setKidsCount(Number(e.target.value))
    console.log(e.target.value);
  }
  const onDateChange = (date) => {
    const dateString = new Date(date.$d);
    const formattedDate = dateString.toLocaleDateString()
    console.log(formattedDate);
    setDob(formattedDate)
  };
  const handleInputNumber = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setPhoneNumber(inputValue);
    }
  };
  const handleApplication = async(e) => {
    e.preventDefault();
    console.log(
      firstName,lastName,email,phoneNumber,gender,
      dob,address,city,zipCode,selectedApplication,student
    );
    axios.post('http://localhost:5555/api/users-application', {
      firstName,lastName,email,phoneNumber,gender,
      dob,address,city,zipCode,selectedApplication,student
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  // const url = 'http://localhost:5555/api/users-application';
  // const formData = new FormData();
  // formData.append(firstName,firstName);
  // formData.append(lastName,lastName);
  // formData.append(email,email);
  // formData.append(phoneNumber,phoneNumber);
  // formData.append(gender,gender);
  // formData.append(dob,dob);
  // formData.append(address,address);
  // formData.append(city,city);
  // formData.append(zipCode,zipCode);
  // formData.append(selectedApplication,selectedApplication);
  // formData.append(student,student);
  // try {
  //   const response = await axios.post(url, formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  //   console.log('Response:', response.data);
  // } catch (error) {
  //   console.error('Error posting form data:', error);
  // }
  return (
    <>
      <div className="application-container">
        <header className="header">
          <h1>
            Register Now
            <span></span>
            <span></span>
          </h1>
          <div className='switcher'>
            <div className={`${student? "choice" : "other"}`} onClick={()=>setStudent(true)}>
              <p className="text-base">Student</p>
            </div>
            <div className={`${!student ? "choice" : "other"}`}onClick={()=>setStudent(false)}>
              <p className="text-base">Parent</p>
            </div>
          </div>
        </header>
        {student?
        <form onSubmit={handleApplication}>
          <div className='input-cont'>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e)=>{setFirstName(e.target.value)}}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e)=>{setLastName(e.target.value)}}
            />
          </div>
          <div className='input-cont'>
            <input
              type="email"
              placeholder="EMAIL Address"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <input
              type="text"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={handleInputNumber}
            />
          </div>
          <div className='input-cont'>
            <DatePicker onChange={onDateChange} className='antd'/>
            <select id="programType" onChange={(e)=>{setGender(e.target.value)}} className="text-zinc-400">
              <option value="Male" hidden selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className='input-cont address' ><input type="text"onChange={(e)=>{setAddress(e.target.value)}}  placeholder='Address' /></div>
          <div className='input-cont'>
            <input
              type="text"
              placeholder="City / State"
              onChange={(e)=>{setCity(e.target.value)}}
            />
            <input
              type="text"
              placeholder="zip Code"
              onChange={(e)=>{setZipCode(e.target.value)}}
            />
          </div>
          <div className='input-cont program-type' >
            <select onChange={(e)=>{setSelectedApplication(e.target.value)}} name="programType" id="programType"  className='text-zinc-400'>
              <option value="Select A Program For Your Application" hidden selected> Select A Program For Your Application</option>
              <option value="Step One in the Quran Journey">Step One in the Quran Journey</option>
              <option value="Hoffaz Dar Al-Arqam (Memorization)">Hoffaz Dar Al-Arqam (Memorization)</option>
              <option value="Inheritors of the Prophets’ program"> Inheritors of the Prophets’ program</option>
            </select>
          </div>
          <button
            type="submit"
          >
            SUBMIT
          </button>
        </form>
        : 
        <form>
          <div className='input-cont'>
            <input
              type="text"
              placeholder="First Name"
              className=""
            />
            <input
              type="text"
              placeholder="Last Name"
              className=""
            />
          </div>
          <div className='input-cont'>
            <input
              type="email"
              placeholder="EMAIL Address"
              className=""
            />
            <input
              type="number"
              placeholder="Phone Number"
              className=""
            />
          </div>
          <div className='input-cont address'><input type="text" placeholder='Address' /></div>
          <div className="input-cont">
            <input
              type="text"
              placeholder="City / State"
              className=""
            />
            <input
              type="text"
              placeholder="zip Code"
              className=""
            />
          </div>
          <div className="input-cont program-type">
            <select
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
            <ChildApplication key={index} kidsCount={index + 1} />
          ))}
          <button
            type="submit"
            className=""
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
            <div class="image-section">
              <div className="image-container">
                <div className='before'></div>
                <img src={stayIn}/>
              </div>
            </div>
          </div>
          :
          <div className="stay-in">
            <div class="image-section">
              <div className="image-container">
                <div className='before'></div>
                <img src={stayIn}/>
              </div>
            </div>
            <div className="content">
              <h1>STAY IN TOUCH</h1>
              <span>Be the first to hear about upcoming classes, exclusive events, and the latest resources to help you or your child gain accessible Shariah knowledge grounded in the Quran and Sunnah.</span>
              <div className='sign-up'>
                {/* <input type="email" placeholder='Enter Your Email' /> */}
                <a href='contact-us'>Contact Us</a>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};
