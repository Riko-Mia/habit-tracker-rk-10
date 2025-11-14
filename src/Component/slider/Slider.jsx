import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import imgOne from '../../assets/slider1.webp'
import imgTwo from '../../assets/slider2.webp'
import imgThree from '../../assets/slider3.webp'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-full h-full' style={{
            'background-image':
              `url(${imgOne})`,
              "background-repeat": "no-repeat", 
              "background-size": "cover",
              "background-position": "center",
              
          }}>
            <div  className='w-1/2   m-20 h-full items-center text-start '>
          <h1 className="subtitle my-5 text-3xl lg:text-6xl font-bold" data-swiper-parallax="-200">
            Fun Has <br></br> Unlimited Opportunities <br></br> With Toys Galore!
          </h1>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          <button className="btn btn-secondary px-8 mt-10">Buy Now</button>
            </div>
            </div>


        </SwiperSlide>

        <SwiperSlide>
            <div className='w-full h-full' style={{
            'background-image':
              `url(${imgTwo})`,
              "background-repeat": "no-repeat", 
              "background-size": "cover",
              "background-position": "center",
              
          }}>
            <div  className='w-1/2   m-20 h-full items-center text-start '>
          <h1 className="subtitle my-5 text-3xl lg:text-6xl font-bold" data-swiper-parallax="-200">
            Fun Has <br></br> Unlimited Opportunities <br></br> With Toys Galore!
          </h1>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          <button className="btn btn-secondary px-8 mt-10">Buy Now</button>
            </div>
            </div>


        </SwiperSlide>

        <SwiperSlide>
            <div className='w-full h-full' style={{
            'background-image':
              `url(${imgThree})`,
              "background-repeat": "no-repeat", 
              "background-size": "cover",
              "background-position": "center",
              
          }}>
            <div  className='w-1/2   m-20 h-full items-center text-start '>
          <h1 className="subtitle my-5 text-3xl lg:text-6xl font-bold" data-swiper-parallax="-200">
            Fun Has <br></br> Unlimited Opportunities <br></br> With Toys Galore!
          </h1>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          <button className="btn btn-secondary px-8 mt-10">Buy Now</button>
            </div>
            </div>


        </SwiperSlide>
        {/* <SwiperSlide><img src={imgTwo}></img></SwiperSlide>
        <SwiperSlide><img src={imgTwo}></img></SwiperSlide>
        <SwiperSlide><img src={imgThree}></img></SwiperSlide> */}
      </Swiper>
    </>
    );
};

export default Slider;




