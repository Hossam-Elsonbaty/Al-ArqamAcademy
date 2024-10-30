import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { Footer } from '../Components/Footer';
export const ContactUs = () => {
  return (
    <>
      <div className="flex justify-center py-12 items-center bg-gray-100">
        <div className="container flex flex-col lg:flex-row justify-between w-11/12 lg:w-3/4 bg-white  p-10 shadow-lg rounded-md">
          <div className="w-full lg:w-7/12 mb-8 lg:mb-0">
            <form className="space-y-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golden-sand"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golden-sand"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golden-sand"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golden-sand"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-golden-sand text-white p-3 rounded-md hover:bg-golden-sand-hover transition duration-200"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="w-full lg:w-4/12 space-y-8">
            <div className="flex items-center space-x-3">
              <i className='p-3 rounded-half bg-golden-sand'>
                <FaMapLocationDot className='text-xl text-white'/>
              </i>
              <p className="text-gray-600">
                <strong>Location:</strong> 43 Raymouth Rd. Baltemoer, London 3910
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <i className='p-3 rounded-half bg-golden-sand'>
                <FaRegClock className='text-xl text-white'/>
              </i>
              <p className="text-gray-600">
                <strong>Open Hours:</strong> Sunday-Friday: 11:00 AM - 11:00 PM
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <i className='p-3 rounded-half bg-golden-sand'>
                <MdEmail className='text-xl text-white'/>
              </i>
              <p className="text-gray-600">
                <a href="mailto:info@AlarqamAcademy.org">info@AlarqamAcademy.org</a>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <i className='p-3 rounded-half bg-golden-sand'>
                <FaPhoneVolume className='text-xl text-white'/>
              </i>
              <p className="text-gray-600">
                <a href='tel:+1 1234 55488 55'>Call:+1 1234 55488 55</a> 
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};