import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
const Features = () => {
  return (
    <div>
      <h1 className='text-3xl text-purple-700 my-5'>Features & Amenities</h1>
      <div className='flex '>
        <p className='flex items-center mr-8'><span className='text-purple-700'><FiCheckCircle /></span> &nbsp;  CCTV  </p>
        <p className='flex items-center mr-8'><span className='text-purple-700'><FiCheckCircle /></span>&nbsp;    Security  </p>
        <p className='flex items-center'><span className='text-purple-700'><FiCheckCircle /></span>&nbsp;         Life    </p>


      </div>

    </div>
  );
};

export default Features;