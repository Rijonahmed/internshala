import React from 'react';
import Banner from './Banner';
import Property from './Property';
import Tabs from './Tabs';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <button class="btn btn-primary mx-2">For Rent</button>
      <h1 className='text-2xl lg:text-3xl font-bold font-Montserrat mx-2'> 2BHK Apartment for Sale in Newtown, Kolkata, West Bengal</h1>
      <Banner></Banner>
      <Tabs></Tabs>

      <Property></Property>
    </div>
  );
};

export default Home;