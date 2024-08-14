"use client";
import React, { useState } from 'react';
import { FaPhoneVolume } from "react-icons/fa";

const Page = () => {
  // State to track the visibility of the content
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Function to toggle the visibility of the content
  const handleButtonClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className='bg-[#E13D3D] w-full min-h-screen flex justify-center items-center flex-col font'>
      <h1 className='text-[60px] font-bold text-white'>Coming Soon</h1>
      <h2 className='text-white text-lg'>{`"Brewing something new, Get ready for the first sip!"`}</h2>
      <button
        className='border-2 text-white text-lg mt-4 py-2 px-7 rounded-3xl'
        onClick={handleButtonClick}
      >
        Contact Us
      </button>
      
      {/* Conditionally render the content based on the state */}
      {isContentVisible && (
        <div className='mt-4 font-semibold text-xl flex flex-row justify-center items-center gap-3 text-white ringing'>
          <span>
            <FaPhoneVolume />
          </span>
          <span className=''>
          +91 95351 48539
          </span>
        </div>
      )}
    </div>
  );
};

export default Page;
