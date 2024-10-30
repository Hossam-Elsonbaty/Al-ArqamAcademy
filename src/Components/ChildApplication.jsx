import React from 'react';

export const ChildApplication = ({kidsCount}) => {
  console.log(kidsCount);
  return (
    <>
      <div className="flex items-center my-4">
        <div className="border-b border-golden-sand w-full"></div>
        <p className="px-2 text-gray-500 w-full text-s text-center">Child {kidsCount}</p>
        <div className="border-b border-golden-sand w-full"></div>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            placeholder="E.g. johndoe@email.com"
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            placeholder="E.g. johndoe@email.com"
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">DOB</label>
          <input
            type="date"
            placeholder="E.g. johndoe@email.com"
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <select id="programType" className=" text-sm w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none">
            <option value="Male" hidden selected>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <select  name="programType" id="programType" className=" text-sm w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none">
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
