'use client'

import React, { useState, useEffect,useRef } from 'react';
import Image from 'next/image';

import Image1 from '../../src/assets/Hero Section Images 1.svg';
import Image2 from '../../src/assets/Hero Section Images 2.svg';
import Image3 from '../../src/assets/Hero Section Images 3.svg';
import Image4 from '../../src/assets/Hero Section Images 4.svg';
import Image5 from '../../src/assets/Hero Section Images 5.svg';

import GREECE from '../../src/assets/greece.png';
import AFRICA from '../../src/assets/africa.png';
import FRANCE from '../../src/assets/france.png';

// import { Carousel } from '@mantine/carousel';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

const HomeCarousel = () => {

    const [scrolling, setScrolling] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


  

    return (
        <>
            <div className={`w-full lg:h-[100vh] md:h-[80vh] h-[50vh] poppin_font relative ${scrolling ? "lg:mt-20 md:mt-28 mt-24" : ""}`}>
                <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[Pagination,Autoplay]}
                    loop={true}
                    className="mySwiper "
                >
                    <SwiperSlide >
                        <div className=''>
                            <Image src={Image1} alt="/" className='w-full lg:h-[100vh] md:h-[80vh] h-[50vh]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <Image src={Image2} alt="/" className='w-full lg:h-[100vh] md:h-[80vh] h-[50vh]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <Image src={Image3} alt="/" className='w-full lg:h-[100vh] md:h-[80vh] h-[50vh]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <Image src={Image4} alt="/" className='w-full lg:h-[100vh] md:h-[80vh] h-[50vh]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <Image src={Image5} alt="/" className='w-full lg:h-[100vh] md:h-[80vh] h-[50vh]' />
                        </div>
                    </SwiperSlide>

                </Swiper>

                {/* <Carousel orientation="vertical" height={200} withIndicators>
                    <Carousel.Slide> <div className=''>
                        <Image src={Image1} alt="/" className='w-full lg:h-[100vh] md:h-[80vh] h-[50vh]' />
                    </div></Carousel.Slide>
                    <Carousel.Slide> <div className=''>
                        <Image src={Image1} alt="/" className='w-full lg:h-[100vh] md:h-[80vh] h-[50vh]' />
                    </div></Carousel.Slide>

                </Carousel> */}


                <div className='lg:w-[50%] md:w-[70%] w-[100%] lg:h-[100vh] absolute   top-0 z-30  flex text-white'>
                    <div className='flex flex-col justify-center gap-6 px-3 md:gap-10 lg:px-28 md:px-10'>
                        <h1 className='mt-10 text-3xl font-bold md:mt-16 lg:mt-0 md:text-7xl'>Explore the Unexplored!</h1>
                        <span className='text-base md:text-xl'>Get ready for your Next Trip with CH Asian Holidays as your Reliable Traveling Partner</span>
                        <div className='flex justify-start gap-6 '>
                            <button className='bg-[#EB268F] lg:py-[17px] lg:px-[40px] w-full py-[10px] px-[20px] uppercase text-white hover:bg-[#C8207A] font-medium text-[16px] duration-300'>Tale a Tour</button>
                            <button className='bg-transparent border-2 border-white w-full lg:py-[17px] lg:px-[40px] py-[10px] px-[20px] uppercase text-white hover:bg-white hover:text-[#EB268F] duration-300 font-medium text-[16px]'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col px-3 lg:px-28 md:px-5 md:flex-row'>
                <div className='z-40 flex flex-col justify-end w-full gap-6 py-8 lg:w-1/4 md:w-1/3 md:py-0'>
                    <p className='text-4xl font-bold'>Top Picks for Global Destinations</p>
                    <span className='text-sm text-[#8C8C8C]'>What’s your dream holiday destination around the world?</span>
                    <div className='flex gap-4'>
                        <button className=' bg-[#3E4095] hover:bg-[#35367F] hover:cursor-pointer active:scale-105'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                <g clipPath="url(#clip0_1_778)">
                                    <path d="M30 14.4318L27.336 11.7998L16 22.9998L27.336 34.1998L30 31.5678L21.3468 22.9998L30 14.4318Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_778">
                                        <rect width="44.8" height="44.8" fill="white" transform="translate(0.599609 0.599609)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button className='bg-[#EB268F] hover:bg-[#C8207A] hover:cursor-pointer active:scale-105'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                <g clipPath="url(#clip0_1_773)">
                                    <path d="M18.664 11.7998L16 14.4318L24.6532 22.9998L16 31.5678L18.664 34.1998L30 22.9998L18.664 11.7998Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_773">
                                        <rect width="44.8" height="44.8" fill="white" transform="translate(0.599609 0.599609)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='z-40 grid w-full grid-cols-1 gap-5 md:-mt-16 lg:w-3/4 md:w-2/3 lg:grid-cols-3 md:grid-cols-2'>
                 
                 
                    {/* 1 */}
                    <div className='relative flex justify-center overflow-hidden group'>
                        <Image src={GREECE} alt="/" className='w-full' />
                        <div className='absolute w-full h-full bg-transparent top-0 hover:bg-[#000000a5] duration-500 p-5'>
                            <div className='w-full '>
                                <span className='mt-5 text-white'>GREECE</span>
                            </div>

                        </div>
                        <button className='bg-transparent border-2 border-white w-[80%] lg:py-[17px] lg:px-[10px] py-[10px] px-[20px] uppercase text-white hover:bg-white hover:text-[#EB268F] font-medium absolute text-[13px] xl:text-[16px] -bottom-full group-hover:bottom-6 duration-300'>VIEW DESTINATION</button>

                    </div>

                    {/* 2 */}
                    <div className='relative justify-center hidden overflow-hidden group md:flex'>
                        <Image src={AFRICA} alt="/" className='w-full' />
                        <div className='absolute w-full h-full bg-transparent top-0 hover:bg-[#000000a5] duration-500 p-5'>
                            <div className='w-full '>
                                <span className='mt-5 text-white'>AFRICA</span>
                            </div>

                        </div>
                        <button className='bg-transparent border-2 border-white w-[80%] lg:py-[17px] lg:px-[10px] py-[10px] px-[20px] uppercase text-white hover:bg-white hover:text-[#EB268F] font-medium absolute text-[13px] xl:text-[16px] -bottom-full group-hover:bottom-6 duration-300'>VIEW DESTINATION</button>

                    </div>

                    {/* 3 */}
                    <div className='relative justify-center hidden overflow-hidden group lg:flex'>
                        <Image src={FRANCE} alt="/" className='w-full' />
                        <div className='absolute w-full h-full bg-transparent top-0 hover:bg-[#000000a5] duration-500 p-5'>
                            <div className='w-full '>
                                <span className='mt-5 text-white'>FRENCH</span>
                            </div>

                        </div>
                        <button className='bg-transparent border-2 border-white w-[80%] lg:py-[17px] lg:px-[10px] py-[10px] px-[20px] uppercase text-white hover:bg-white hover:text-[#EB268F] font-medium absolute text-[13px] xl:text-[16px] -bottom-full group-hover:bottom-6 duration-300'>VIEW DESTINATION</button>

                    </div>

               

                </div>
            </div>

        </>
    )
}

export default HomeCarousel
