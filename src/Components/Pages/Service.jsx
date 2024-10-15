import React from 'react'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function Service() {
  return (
    <>
    {/* // this is the main div */}
    <div className='w-[100%] py-12'>
      <div className='text-center py-2 text-[3rem] font-bold'>
        <h1>Our Service</h1>
      </div>
      {/* // this is the 1st div  */}
      <Swiper 
      slidesPerView={3}
      spaceBetween={60}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='w-full flex flex-col sm:flex-row justify-center items-center px-16 py-12'>

        <SwiperSlide className='w-full  md:w-1/2 lg:w-1/3 border-2 py-8 px-4 rounded-lg shadow-md'>
          <h1 className='py-3 text-2xl font-serif text-center'>SOCIAL MEDIA MANAGMENT</h1>
          <h1 className='py-3 text-xl font-light'>Instagram linkden and more</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae nihil accusantium molestiae pariatur quisquam maxime, a, aliquid iste laboriosam veniam quasi deserunt. Fuga natus, atque maxime cupiditate voluptas recusandae.</p>

          <button className='pt-2'>
            <a href='#' className='text-blue-500 py-3'>Learn More</a>
          </button>
        </SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-1/3 border-2 py-8 px-4 rounded-lg shadow-md'>
          <h1 className='py-3 text-2xl font-serif text-center'>SOCIAL MEDIA MANAGMENT</h1>
          <h1 className='py-3 text-xl font-light'>Instagram linkden and more</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae nihil accusantium molestiae pariatur quisquam maxime, a, aliquid iste laboriosam veniam quasi deserunt. Fuga natus, atque maxime cupiditate voluptas recusandae.</p>

          <button className='pt-2'>
            <a href='#' className='text-blue-500 py-3'>Learn More</a>
          </button>
        </SwiperSlide>


        <SwiperSlide className='w-full  md:w-1/2 lg:w-1/3 border-2 py-8 px-4 rounded-lg shadow-md'>
          <div >
            <h1 className='py-3 text-2xl font-serif text-center'>SOCIAL MEDIA MANAGMENT</h1>
            <h1 className='py-3 text-xl font-light'>Instagram linkden and more</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae nihil accusantium molestiae pariatur quisquam maxime, a, aliquid iste laboriosam veniam quasi deserunt. Fuga natus, atque maxime cupiditate voluptas recusandae.</p>

            <button className='pt-2'>
              <a href='#' className='text-blue-500 py-3'>Learn More</a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-1/3 border-2 py-8 px-4 rounded-lg shadow-md'>
          <div >
            <h1 className='py-3 text-2xl font-serif text-center'>SOCIAL MEDIA MANAGMENT</h1>
            <h1 className='py-3 text-xl font-light'>Instagram linkden and more</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae nihil accusantium molestiae pariatur quisquam maxime, a, aliquid iste laboriosam veniam quasi deserunt. Fuga natus, atque maxime cupiditate voluptas recusandae.</p>

            <button className='pt-2'>
              <a href='#' className='text-blue-500 py-3'>Learn More</a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full  md:w-1/2 lg:w-1/3 border-2 py-8 px-4 rounded-lg shadow-md'>
          <div >
            <h1 className='py-3 text-2xl font-serif text-center'>SOCIAL MEDIA MANAGMENT</h1>
            <h1 className='py-3 text-xl font-light'>Instagram linkden and more</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae nihil accusantium molestiae pariatur quisquam maxime, a, aliquid iste laboriosam veniam quasi deserunt. Fuga natus, atque maxime cupiditate voluptas recusandae.</p>

            <button className='pt-2'>
              <a href='#' className='text-blue-500 py-3'>Learn More</a>
            </button>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>

      
    </>
  )
}

export default Service
