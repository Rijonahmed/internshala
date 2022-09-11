import React from 'react';

const Details = () => {
  return (
    <div>
      <h1 className='text-3xl text-purple-700 my-5'>Details</h1>
      <div className='grid grid-cols-1 lg:grid-cols-4 pt-8 gap-2 py-10'>

        <div className="card w-72 h-52 border border-purple-700 shadow-2xl">
          <div className="card-body">
            <div className="card-actions justify-start">
              <img className='w-12' src="https://i.ibb.co/hg3FBM2/Screenshot-4.png" alt="" />

            </div>
            <h2 className='font-bold text-purple-700 mt-3'>Money Exchange</h2>
            <h2 className=''>3BHK</h2>

          </div>
        </div>

        <div className="card w-72 h-52 border border-purple-700 shadow-2xl">
          <div className="card-body">
            <div className="card-actions justify-start">
              <img className='w-12' src="https://i.ibb.co/7zwNb4r/Screenshot-5.png" alt="" />

            </div>
            <h2 className='font-bold text-purple-700 mt-3'>Bathroom</h2>
            <h2 className=''>2</h2>

          </div>
        </div>

        <div className="card w-72 h-52 border border-purple-700 shadow-2xl">
          <div className="card-body">
            <div className="card-actions justify-start">
              <img className='w-12' src="https://i.ibb.co/60vKMcJ/Screenshot-6.png" alt="" />

            </div>
            <h2 className='font-bold text-purple-700 mt-3'>Furnishing Status</h2>
            <h2 className=''>Semi-Furnished</h2>

          </div>
        </div>

        <div className="card w-72 h-52 border border-purple-700 shadow-2xl">
          <div className="card-body">
            <div className="card-actions justify-start">
              <img className='w-12' src="https://i.ibb.co/wNpMv2Y/Screenshot-7.png" alt="" />

            </div>
            <h2 className='font-bold text-purple-700 mt-3'>Super Build Area</h2>
            <h2 className=''>1418 Sq.ft</h2>

          </div>
        </div>





      </div>

    </div>
  );
};

export default Details;