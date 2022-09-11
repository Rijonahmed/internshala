import React from 'react';
import { RiMapPin2Line } from 'react-icons/ri';
import { FaRupeeSign } from 'react-icons/fa';
import { AiOutlineEllipsis } from "react-icons/ai";

const Property = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-3xl text-purple-700 my-7 text-center lg:text-left'>Similar Properties</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-7'>
        <div class="card max-w-fit bg-base-100 hover:bg-purple-700 hover:text-white shadow-xl">
          <figure class="px-6 pt-6">
            <img src="https://i.ibb.co/2g3KZQj/Screenshot-2.png" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">2BHK Apartment for Sale</h2>
            <div className='flex '>
              <p className='flex items-center'><RiMapPin2Line /> &nbsp; Behala</p>
              <p className='flex items-center'><FaRupeeSign />&nbsp;15,000</p>

            </div>
            <hr className='my-3' />

            <div class="card-actions">
              <button className="btn btn-primary w-full max-w-xs">Contact Now</button>
              <button className="btn bg-white text-black w-full max-w-xs">Learn more</button>
            </div>
          </div>
        </div>
        <div class="card max-w-fit bg-base-100 hover:bg-purple-700 hover:text-white shadow-xl">
          <figure class="px-6 pt-6">
            <img src="https://i.ibb.co/2g3KZQj/Screenshot-2.png" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">2BHK Apartment for Sale</h2>
            <div className='flex '>
              <p className='flex items-center'><RiMapPin2Line /> &nbsp; Behala</p>
              <p className='flex items-center'><FaRupeeSign />&nbsp;15,000</p>

            </div>
            <hr className='my-3' />

            <div class="card-actions">
              <button className="btn btn-primary w-full max-w-xs">Contact Now</button>
              <button className="btn bg-white text-black w-full max-w-xs">Learn more</button>
            </div>
          </div>
        </div>
        <div class="card max-w-fit bg-base-100 hover:bg-purple-700 hover:text-white shadow-xl">
          <figure class="px-6 pt-6">
            <img src="https://i.ibb.co/2g3KZQj/Screenshot-2.png" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">2BHK Apartment for Sale</h2>
            <div className='flex '>
              <p className='flex items-center'><RiMapPin2Line /> &nbsp; Behala</p>
              <p className='flex items-center'><FaRupeeSign />&nbsp;15,000</p>

            </div>
            <hr className='my-3' />

            <div class="card-actions">
              <button className="btn btn-primary w-full max-w-xs">Contact Now</button>
              <button className="btn bg-white text-black w-full max-w-xs">Learn more</button>
            </div>
          </div>
        </div>




      </div>
      <div className='flex justify-center'> <p className='text-7xl text-purple-600'><AiOutlineEllipsis /></p></div>


    </div>
  );
};

export default Property;