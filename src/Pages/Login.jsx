import React from 'react';
import { FcGoogle } from "react-icons/fc";
export const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg p-10 pt-20 w-full max-w-md">
        <div className=" mb-8">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 mt-2">Hi, Welcome back 👋</p>
        </div>
        <button className="w-full bg-white text-black py-2 rounded-md border border-gray-300 flex items-center justify-center mb-4">
          <FcGoogle className='mr-3 text-2xl'/>
          <p className='text-l font-medium'>Login with Google</p>
        </button>
        <div className="flex items-center my-4">
          <div className="border-b w-full"></div>
          <p className="px-2 text-gray-500 w-full text-xxs">or Login with Email</p>
          <div className="border-b w-full"></div>
        </div>
        <form>
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
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-700">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Not registered yet?{' '}
            <a href="/sign-up" className="text-blue-500 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

