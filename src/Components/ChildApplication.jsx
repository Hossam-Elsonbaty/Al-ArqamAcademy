/* eslint-disable no-unused-vars */
// import React, {useState, useContext} from 'react';
// import { DatePicker} from 'antd';
// import { ChildrenContext } from '../Context/ChildrenContext';
// export const ChildApplication = ({key,kidsCount}) => {
//   // const {  updateChild } = useContext(ChildrenContext);
//   const [children, setChildren] = useState([
//     {child :{
//       firstName:"",
//       LastName:"",
//       dob:"",
//       gender:"",
//       selectedProgram:""
//     }}
//   ])
//   const updateChild = (key, field, value) => {
//     // setChildren((prevChildren) => {
//     //   const existingProduct = prevChildren.find(item => item.id === prevChildren.id);
//     //   if (existingProduct) {
//     //     return prevChildren.map(item => 
//     //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//     //     );
//     //   }
//     //   return [...prevChildren, { ...product, quantity: 1 }];
//     // });
//     setChildren(children.map((childObj, i) => 
//       i === key +1
//         ? { 
//             child: {
//               ...childObj.child,
//               [field]: value, 
//             },
//           }
//         : childObj
//     ));
//     // console.log(children);
//   };
//   console.log(children);
  
//   // const removeChild = (index) => {
//   //   setChildren(children.filter((_, i) => i !== index));
//   // };
//   const onDateChange = (date) => {    
//     const dateString = new Date(date.$d);
//     const formattedDate = dateString.toLocaleDateString()
//     updateChild(key, "dob", formattedDate)
//   };
//   return (
//     <>
//       <div className="flex items-center my-4 w-50 justify-center gap-4">
//         <div className="bg-deep-teal w-10 h-1"></div>
//         <div>Child {kidsCount}</div>
//         <div className="bg-deep-teal w-10 h-1"></div>
//       </div>
//       <form>
//         <div className="input-cont">
//           <input
//             type="text"
//             placeholder="First Name"
//             onChange={(e) => updateChild(key, "firstName", e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             onChange={(e) => updateChild(key, "LastName", e.target.value)}
//           />
//         </div>
//         <div className="input-cont">
//           <DatePicker onChange={onDateChange} className='antd'/>
//           <select id="programType" onChange={(e) => updateChild(key, "gender", e.target.value)} className='text-zinc-400'>
//             <option value="Male" hidden selected>Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </div>
//         <div className="input-cont program-type" >
//           <select onChange={(e) => updateChild(key, "selectedProgram", e.target.value)} name="programType" id="programType" className='text-zinc-400' style={{width:'100%'}}>
//             <option value="Select A Program For Your Application" hidden selected> Select A Program For Your Application</option>
//             <option value="Step One in the Quran Journey">Step One in the Quran Journey</option>
//             <option value="Hoffaz Dar Al-Arqam (Memorization)">Hoffaz Dar Al-Arqam (Memorization)</option>
//             <option value="Inheritors of the Prophets’ program"> Inheritors of the Prophets’ program</option>
//           </select>
//         </div>
//       </form>
//     </>
//   )
// }
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { DatePicker } from 'antd';

export const ChildApplication = ({key}) => {
  const [children, setChildren] = useState([
    {
      child: {
        id:0,
        firstName: "",
        LastName: "",
        dob: "",
        gender: "",
        selectedProgram: "",
      },
    },
  ]);
  // const addChild = (key) => {
  //   setChildren([
  //     ...children,
  //     {
  //       child: {
  //         id:0,
  //         firstName: "",
  //         LastName: "",
  //         dob: "",
  //         gender: "",
  //         selectedProgram: "",
  //       },
  //     },
  //   ]);
  // };
  const updateChild = (key, field, value) => {
    setChildren(
      children.map((childObj, i) =>
        i === key
          ? {
              child: {
                ...childObj.child,
                [field]: value,
              },
            }
          : childObj
      )
    );    
    console.log(children);
    
  };
  const onDateChange = (key, date) => {
    const formattedDate = new Date(date.$d).toLocaleDateString();
    updateChild(key, "dob", formattedDate);
  };
  return (
    <>
      {children.map((childObj, key) => (
        <div key={key}>
          <div className="flex items-center my-4 w-50 justify-center gap-4">
            <div className="bg-deep-teal w-10 h-1"></div>
            <div>Child {key + 1}</div>
            <div className="bg-deep-teal w-10 h-1"></div>
          </div>
          <form>
            <div className="input-cont">
              <input
                type="text"
                placeholder="First Name"
                value={childObj.child.firstName}
                onChange={(e) =>
                  updateChild(key, "firstName", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                value={childObj.child.LastName}
                onChange={(e) =>
                  updateChild(key, "LastName", e.target.value)
                }
              />
            </div>
            <div className="input-cont">
              <DatePicker
                onChange={(date) => onDateChange(key, date)}
                className="antd"
              />
              <select
                id="programType"
                value={childObj.child.gender}
                onChange={(e) => updateChild(key, "gender", e.target.value)}
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
                id="programType"
                value={childObj.child.selectedProgram}
                onChange={(e) =>
                  updateChild(key, "selectedProgram", e.target.value)
                }
                className="text-zinc-400"
                style={{ width: "100%" }}
              >
                <option value="" hidden>
                  Select A Program For Your Application
                </option>
                <option value="Step One in the Quran Journey">
                  Step One in the Quran Journey
                </option>
                <option value="Hoffaz Dar Al-Arqam (Memorization)">
                  Hoffaz Dar Al-Arqam (Memorization)
                </option>
                <option value="Inheritors of the Prophets’ program">
                  Inheritors of the Prophets’ program
                </option>
              </select>
            </div>
          </form>
        </div>
      ))}
    </>
  );
};
