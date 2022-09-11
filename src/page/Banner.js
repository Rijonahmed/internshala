import React from 'react';
import { FiUpload } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiRepeat } from "react-icons/fi";
import { FaRupeeSign } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='my-6'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        <img className='rounded-xl' src="https://i.ibb.co/j801C72/Screenshot-3.png" alt="" />

        <div className='grid grid-cols-2 gap-2'>
          <img className='rounded-xl' src="https://i.ibb.co/j801C72/Screenshot-3.png" alt="" />
          <img className='rounded-xl' src="https://i.ibb.co/j801C72/Screenshot-3.png" alt="" />

          <img className='rounded-xl' src="https://i.ibb.co/j801C72/Screenshot-3.png" alt="" />
          <img className='rounded-xl' src="https://i.ibb.co/j801C72/Screenshot-3.png" alt="" />

        </div>
      </div>




      <div className='flex flex-row-reverse content-end pt-8 gap-2'>

        <div className=" w-20 h-10 border rounded-lg cursor-pointer">
          <div className='flex justify-center items-center'><p className='text-3xl '><FiRepeat /></p></div>
        </div>

        <div className=" w-20 h-10 border rounded-lg cursor-pointer">
          <div className='flex justify-center items-center'><p className='text-3xl'><FiHeart /></p></div>
        </div>

        <div className=" w-20 h-10 border rounded-lg cursor-pointer">
          <div className='flex justify-center items-center'><p className='text-3xl'><FiUpload /></p></div>
        </div>


      </div>
      <p className='flex items-center text-purple-900 font-bold mx-2 lg:mx-0'><FaRupeeSign />&nbsp;25,000</p>

      <div className='flex flex-wrap lg:justify-between items-center mx-2'>
        <p className='flex items-center'>SP Sukhobrishti Ln, Action Area III, Newtown, Kolkata, West Bengal 700135, India</p>
        <div className='flex items-center gap-4'>
          <div className=" w-12 h-11 bg-green-700 rounded-lg">
            <div className='flex justify-center items-center '><p className='text-3xl mt-1 text-white cursor-pointer'><FaWhatsapp /></p></div>
          </div>
          <button className="btn btn-primary max-w-xs">Contact Owner</button>
        </div>

      </div>


    </div>
  );
};

export default Banner;