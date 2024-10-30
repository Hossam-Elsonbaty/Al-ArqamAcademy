import React from 'react';
import { FcGoogle } from "react-icons/fc";
export const SignUp = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg p-10 pt-20 w-full max-w-md">
        <div className=" mb-8">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 mt-2">Hi, Welcome back 👋</p>
        </div>
        <button className="w-full bg-white text-black py-2 rounded-md border border-gray-300 flex items-center justify-center mb-4">
          <FcGoogle className='mr-3 text-2xl'/>
          <p className='text-l font-medium'>Sign up with Google</p>
        </button>
        <div className="flex items-center my-4">
          <div className="border-b w-full"></div>
          <p className="px-2 text-gray-500 w-full text-xxs">or Sign up with Email</p>
          <div className="border-b w-full"></div>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full name</label>
            <input
              type="email"
              placeholder="ahmed murad"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="E.g. johndoe@email.com"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

