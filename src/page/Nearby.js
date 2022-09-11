import React from 'react';

const Nearby = () => {
  return (
    <div>
      <h1 className='text-3xl text-purple-700 my-7'>Nearby</h1>
      <div className='grid grid-cols-2 lg:grid-cols-7 pt-8 gap-2 py-10'>

        <div className="card w-32 h-36 bg-purple-800">
          <div className="card-body">
            <div className="card-actions justify-center">
              <img className='' src="https://i.ibb.co/3sXGHq8/Screenshot-8-removebg-preview.png" alt="" />
              <h1 className='text-2xl text-white'>Hospital</h1>

            </div>

          </div>
        </div>
        <div className="card w-32 h-36 bg-purple-800">
          <div className="card-body">
            <div className="card-actions justify-center">
              <img className='' src="https://i.ibb.co/3WJFssn/Screenshot-9-removebg-preview.png" alt="" />
              <h1 className='text-2xl text-white'>Park</h1>

            </div>

          </div>
        </div>
        <div className="card w-32 h-36 bg-purple-800">
          <div className="card-body">
            <div className="card-actions justify-center">
              <img className='' src="https://i.ibb.co/mR9tCS2/Screenshot-10-removebg-preview.png" alt="" />
              <h1 className='text-2xl text-white'>Bus</h1>

            </div>

          </div>
        </div>
        <div className="card w-32 h-36 bg-purple-800">
          <div className="card-body">
            <div className="card-actions justify-center">
              <img className='' src="https://i.ibb.co/CvgQ5zB/Screenshot-11-removebg-preview.png" alt="" />
              <h1 className='text-2xl text-white'>Hospital</h1>

            </div>

          </div>
        </div>
        <div className="card w-32 h-36 bg-purple-800">
          <div className="card-body">
            <div className="card-actions justify-center">
              <img className='' src="https://i.ibb.co/RYT7DQ8/Screenshot-12-removebg-preview.png" alt="" />
              <h1 className='text-2xl text-white'>Hospital</h1>

            </div>

          </div>
        </div>






      </div>
    </div>
  );
};

export default Nearby;