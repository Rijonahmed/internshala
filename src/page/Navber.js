import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
  const manuItem = <>
    <li><Link to='/home'>Home</Link></li>
    <li><Link to='/Property'>List your Property</Link></li>

    <li><Link to='/blog'>Blog</Link></li>


  </>



  return (

    <div className='sticky top-0 z-10'>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-52">

              {manuItem}


            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to='/' ><span className=''>Propertybhavan</span></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 bg-white">
            {manuItem}

          </ul>


        </div>
        <div class="dropdown lg:dropdown-end hidden lg:block">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar ">
            <div class="w-10 rounded-full ">
              <img src="https://placeimg.com/80/80/people" alt='' />
            </div>
          </label>
          <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>


      </div>

    </div >

  );
};

export default Navber;