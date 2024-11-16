import React, {useContext, useState} from 'react';
import { ChildApplication } from '../Components/ChildApplication';
import stayIn from '../Images/item10.jpeg';
import IsDesktop from '../Context/IsDesktop'
export const ProgramApplication = () => {
  const [student, setStudent] = useState(true);
  const [kidsCount, setKidsCount] = useState(0);
  const {isDesktop} = useContext(IsDesktop);
  const handleAddKids = (e)=>{
    setKidsCount(Number(e.target.value))
    console.log(e.target.value);
  }
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
          <div className='input-cont'>
            <input
              type="date"
              placeholder="E.g. johndoe@email.com"
              className="text-zinc-400"
            />
            <select id="programType" className="text-zinc-400">
              <option value="Male" hidden selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className='input-cont address' ><input type="text"  placeholder='Address' /></div>
          <div className='input-cont'>
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
          <div className='input-cont program-type' >
            <select  name="programType" id="programType"  className='text-zinc-400'>
              <option value="Select A Program For Your Application" hidden selected> Select A Program For Your Application</option>
              <option value="Step One in the Quran Journey">Step One in the Quran Journey</option>
              <option value="Hoffaz Dar Al-Arqam (Memorization)">Hoffaz Dar Al-Arqam (Memorization)</option>
              <option value="Inheritors of the Prophets’ program"> Inheritors of the Prophets’ program</option>
            </select>
          </div>
          <button
            type="submit"
            className=""
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
                <input type="email" placeholder='Enter Your Email' />
                <button type="submit">Sign Up</button>
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
                <input type="email" placeholder='Enter Your Email' />
              </div>
            </div>
            <button type="submit">Sign Up</button>
          </div>
        }
      </div>
    </>
  );
};
