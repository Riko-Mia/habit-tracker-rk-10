import React, { useEffect, useState } from 'react';
import Slider from '../slider/Slider';
import FeaturedHabits from './FeaturedHabits';
import Benefit from '../Benefit/Benefit';

const Home = () => {


      

    return (
        <>
            <Slider></Slider>
            <FeaturedHabits></FeaturedHabits>
            <h1 className='text-6xl text-center my-20 font-bold divider'>Our Core Services</h1>
            {/* <p className="text-gray-500 mt-2">
            The foundation of long-term digital excellence.
          </p> */}
            <Benefit></Benefit>

        </>
    );
};

export default Home;