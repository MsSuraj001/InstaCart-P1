import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules'; 

// this is the all opnly for read to and undrestadin propuse

export default function SErviceA() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        // spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="border-2 w-full flex hidden sm:block md:block lg:block flex-col sm:flex-row justify-center items-center px-16 gap-4"
      >
        
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md m-4'>
            <div >
          <h1 className='py-3 text-2xl font-serif text-center'>SOCIAL MEDIA MANAGMENT</h1>
          <h1 className='py-3 text-xl font-light'>Instagram linkden and more</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae nihil accusantium molestiae pariatur quisquam maxime, a, aliquid iste laboriosam veniam quasi deserunt. Fuga natus, atque maxime cupiditate voluptas recusandae.</p>

          <button className='pt-2'>
            <a href='#' className='text-blue-500 py-3'>Learn More</a>
          </button>
        </div>
        </SwiperSlide>
        

  
       <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>
        <div >
          <h1 className='py-3 text-2xl font-serif text-center'>SOCIAL MEDIA MANAGMENT</h1>
          <h1 className='py-3 text-xl font-light'>Instagram linkden and more</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae nihil accusantium molestiae pariatur quisquam maxime, a, aliquid iste laboriosam veniam quasi deserunt. Fuga natus, atque maxime cupiditate voluptas recusandae.</p>

          <button className='pt-2'>
            <a href='#' className='text-blue-500 py-3'>Learn More</a>
          </button>
        </div>
        </SwiperSlide>
       

        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 3</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 4</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 5</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 6</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 7</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 8</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 9</SwiperSlide>
      </Swiper>

      {/* <Swiper
        slidesPerView={3}
        // spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="border-2 w-full flex flex-col justify-center items-center px-16 gap-4 block sm:hidden md:hidden lg:hidden"
      >
        
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md m-4'>
            <div >
          <h1 className='py-3 text-2xl font-serif text-center'>SOCIAL MEDIA MANAGMENT</h1>
          <h1 className='py-3 text-xl font-light'>Instagram linkden and more</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae nihil accusantium molestiae pariatur quisquam maxime, a, aliquid iste laboriosam veniam quasi deserunt. Fuga natus, atque maxime cupiditate voluptas recusandae.</p>

          <button className='pt-2'>
            <a href='#' className='text-blue-500 py-3'>Learn More</a>
          </button>
        </div>
        </SwiperSlide>
        

  
       <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>
        <div >
          <h1 className='py-3 text-2xl font-serif text-center'>SOCIAL MEDIA MANAGMENT</h1>
          <h1 className='py-3 text-xl font-light'>Instagram linkden and more</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae nihil accusantium molestiae pariatur quisquam maxime, a, aliquid iste laboriosam veniam quasi deserunt. Fuga natus, atque maxime cupiditate voluptas recusandae.</p>

          <button className='pt-2'>
            <a href='#' className='text-blue-500 py-3'>Learn More</a>
          </button>
        </div>
        </SwiperSlide>
       

        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 3</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 4</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 5</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 6</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 7</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 8</SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-[24rem] border-2 py-8 px-4 rounded-lg shadow-md'>Slide 9</SwiperSlide>
      </Swiper> */}
    </>
  );
}
