import React, {useState} from 'react';
import { ChildApplication } from '../Components/ChildApplication';
export const ProgramApplication = () => {
  const [student, setStudent] = useState(true);
  const [kidsCount, setKidsCount] = useState(0);
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
          <div className='input-cont' style={{width:'760px'}}><input type="text" style={{width:'100%'}} placeholder='Address' /></div>
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
          <div className='input-cont' style={{width: '760px'}}>
            <select  name="programType" id="programType" style={{width:'100%'}} className='text-zinc-400'>
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
          <div className='input-cont' style={{width:'760px'}}><input type="text" style={{width:'100%'}} placeholder='Address' /></div>
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
          <div className="input-cont"style={{width:'760px'}}>
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
            Submit Application
          </button>
        </form>
        }
      </div>
    </>
  );
};
// import React, { useState } from 'react';
// import { ChildApplication } from '../Components/ChildApplication';

// export const ProgramApplication = () => {
//   const [student, setStudent] = useState(true);
//   const [kidsCount, setKidsCount] = useState(0);
//   const [showChildForm, setShowChildForm] = useState(false); // New state to control ChildApplication
//   const handleAddKids = (e) => {
//     const value = e.target.value;
//     setKidsCount(value);
//     // Show ChildApplication component if a valid kids count is selected (1 or more)
//     setShowChildForm(value > 0);
//   };
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center">
//         <div className="bg-white rounded-lg p-10 pt-20 w-full max-w-2xl">
//           <div className="mb-8 flex justify-between items-center border-deep-teal border-solid border-t-2 rounded-t">
//             <div
//               className={`${
//                 student
//                   ? 'bg-deep-teal text-white student p-2 w-full text-center'
//                   : 'student p-2 w-full text-center bg-transparent'
//               }`}
//               onClick={() => setStudent(true)}
//             >
//               <p className="text-base">Student</p>
//             </div>
//             <div
//               className={`${
//                 !student
//                   ? 'bg-deep-teal text-white student p-2 w-full text-center'
//                   : 'student p-2 w-full text-center bg-transparent'
//               }`}
//               onClick={() => setStudent(false)}
//             >
//               <p className="text-base">Parent</p>
//             </div>
//           </div>
//           {student ? (
//             // Student Form
//             <form>
//               {/* Student form fields */}
//               <div className="mb-4">
//                 <select
//                   onChange={(e) => handleAddKids(e)}
//                   name="kidsCount"
//                   id="kidsCount"
//                   className="text-sm w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none"
//                 >
//                   <option value="0" hidden selected>
//                     How many kids are you interested in registering?
//                   </option>
//                   {[...Array(10).keys()].map((i) => (
//                     <option key={i} value={i + 1}>
//                       {i + 1}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {/* Conditionally render ChildApplication */}
//               {showChildForm && <ChildApplication kidsCount={kidsCount} />}
//               <button
//                 type="submit"
//                 className="w-full bg-deep-teal text-white py-2 rounded-md hover:bg-deep-teal-hover transition duration-200"
//               >
//                 Submit Application
//               </button>
//             </form>
//           ) : (
//             // Parent Form (if needed)
//             <form>
//               {/* Parent form fields */}
//             </form>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

