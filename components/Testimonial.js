import React from 'react'
import Image from 'next/image'

import { AiFillStar } from 'react-icons/ai'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { reviews } from '../constants/constants';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonial = () => {
  return (
    <div className='container px-0 mt-48' id='testimonials'>
        <h3 className="text-center font-mono text-main">03. Testimonials</h3>
        <h2 className="text-3xl text-center md:text-6xl text-white/90 font-bold">People&apos;s Quotes About Me</h2>
       <div className="mt-20 w-full md:w-[600px] mx-auto">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{clickable: true}}
                pagination={{ clickable: true, dynamicBullets: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                loop
                autoplay={{delay: 3000}}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center items-center flex-col text-center">
                            <div className="img flex justify-center items-center flex-col">
                                <Image src={review.image} height={50} width={50} className="rounded-full" />
                                <div className="text-center">
                                    <div className="flex justify-center items-center">
                                        <span className="text-main/80 text-lg">{review.name}</span>
                                        <span className="ml-2 mr-1 text-[#F4DA80]"> {review.stars}</span>
                                        <AiFillStar className="fill-[#F4DA80]" />
                                    </div>
                                    <p className="text-white/60">{review.country}</p>
                                </div>
                                
                            </div>
                            <div className="desc w-[400px] mt-10">
                                <p className="p-3 text-white/60">{review.message}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
       </div>
    </div>
  )
}

export default Testimonial