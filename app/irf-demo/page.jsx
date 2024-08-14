"use client";
import React, { useState } from 'react';
import { FaPhoneVolume } from "react-icons/fa6";

const Page = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleButtonClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className='bg-[#E13D3D] w-full min-h-screen font-sans flex flex-col'>
      <div className='flex flex-col justify-center items-center py-20 px-4 md:py-32 md:px-6 lg:py-52 lg:px-8 flex-grow'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center'>
          Coming Soon
        </h1>
        <h2 className='text-sm md:text-base lg:text-lg text-white text-center mt-2'>
          {"Brewing something new, Get ready for the first sip!"}
        </h2>
        <button
          className='border-2 border-white text-white text-sm md:text-base lg:text-lg mt-4 py-2 px-4 md:px-6 lg:px-8 rounded-3xl'
          onClick={handleButtonClick}
        >
          Contact Us
        </button>
        
        {isContentVisible && (
          <div 
            className='mt-4 font-semibold text-sm md:text-base lg:text-xl flex flex-col md:flex-row justify-center items-center gap-3 text-white ring-animation'
          >
            <span className='text-xl md:text-2xl lg:text-3xl'>
              <FaPhoneVolume /> 
            </span>
            <span className='text-sm md:text-base lg:text-lg'>
              +91 95351 48539
            </span>
          </div>
        )}
      </div>

      <div className='flex justify-center md:justify-end text-center md:text-end px-4 md:px-10 py-4 text-xs md:text-sm text-white'>
        <p>Designed & Developed By Zartek</p>
      </div>

      <style jsx>{`
        @keyframes ring {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-15deg); }
          30% { transform: rotate(10deg); }
          40% { transform: rotate(-10deg); }
          50% { transform: rotate(5deg); }
          60% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }
        
        .ring-animation {
          animation: ring 3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Page;
