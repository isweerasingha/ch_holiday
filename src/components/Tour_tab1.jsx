"use client";
import { Fade } from "react-awesome-reveal";

import React, { useState } from 'react'
import Image from 'next/image';
import Img1 from '../assets/Tab1_image.png';

import Download from '../assets/icon _download_.png';
import Play_circle from '../assets/icon _play circle filled_.png';
import QA from '../assets/icon _question answer_.png';

import Left from '../assets/chevron_left_black_24dp 1.png';
import Right from '../assets/chevron_right_black_24dp 1.png';
import Down from '../assets/icon _keyboard arrow down_.png';
import Up from '../assets/icon _keyboard arrow up_.png';

import Ella from '../assets/Ella.png';
import Kandy from '../assets/Kandy.png';
import Sigiriya from '../assets/Sigiriya.png';

import Check from '../assets/material-symbols_check-circle.png';

import { Group, Collapse, Box } from '@mantine/core';

import Collaps_icon from '../assets/Collaps_icon.png';

import Hotel from '../assets/hotel.png';
import Meal from '../assets/meal.png';
import Clock from '../assets/clock.png';
import Vehicle from '../assets/vehicle.png';

import Pinnawala from '../assets/pinnawala.png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// // import required modules
// import { Pagination, Autoplay } from "swiper/modules";

const highlightsData = [
    {
        id: 1,
        img: Check,
        description: "Discover the best of Sri Lanka by car",
    },
    {
        id: 2,
        img: Check,
        description: "Relax on beautiful Sri Lanka beaches",
    },
    {
        id: 3,
        img: Check,
        description: "Visit the Dambulla Cave Temple and Matale spice garden",
    },
    {
        id: 4,
        img: Check,
        description: "Savour traditional food and try fresh ceylon team",
    },
    {
        id: 5,
        img: Check,
        description: "Sunbathe, dive and snorkel in Benthota",
    },
    {
        id: 6,
        img: Check,
        description: "Discover the best of Sri Lanka by car",
    },
    {
        id: 7,
        img: Check,
        description: "Relax on beautiful Sri Lanka beaches",
    },
    {
        id: 8,
        img: Check,
        description: "Visit the Dambulla Cave Temple and Matale spice garden",
    },
    {
        id: 9,
        img: Check,
        description: "Savour traditional food and try fresh ceylon team",
    },
    {
        id: 10,
        img: Check,
        description: "Sunbathe, dive and snorkel in Benthota",
    },

];


const Tour_tab1 = () => {

    const [highlights, setHighlights] = useState(highlightsData);

    const [opened1, setOpened1] = useState(false);
    const handleOpened1 = () => {
        setOpened1(!opened1);
    };

    const [opened2, setOpened2] = useState(false);
    const handleOpened2 = () => {
        setOpened2(!opened2);
    };

    const [opened3, setOpened3] = useState(false);
    const handleOpened3 = () => {
        setOpened3(!opened3);
    };

    const [opened4, setOpened4] = useState(false);
    const handleOpened4 = () => {
        setOpened4(!opened4);
    };

    const [opened5, setOpened5] = useState(false);
    const handleOpened5 = () => {
        setOpened5(!opened5);
    };

    const [opened6, setOpened6] = useState(false);
    const handleOpened6 = () => {
        setOpened6(!opened6);
    };

    return (
        <div className='w-full'>

            <Fade>
                <div className='grid grid-cols-1 px-3 pb-10 md:grid-cols-2 lg:px-28 md:px-10'>
                    <Image src={Img1} alt='/' />
                    <div className='flex items-center justify-center py-6 md:py-0 lg:px-20 md:px-6'>
                        <div className='flex flex-col w-full gap-3 lg:gap-5'>
                            <h1 className='text-2xl font-bold lg:text-4xl text-[#262626]'>Lifetime Experience In Sri Lanka</h1>
                            <div className='flex items-center gap-3'>
                                <h1 className='text-lg font-bold'>8 Days</h1>
                                <span>5.0 (15)</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='flex justify-between w-1/2'>
                                    <span>Start and end in </span>
                                    <span>:</span>
                                </div>
                                <div className='w-1/2'>Colombo</div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='flex justify-between w-1/2'>
                                    <span>Max group size</span>
                                    <span>:</span>
                                </div>
                                <div className='w-1/2'>15</div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='flex justify-between w-1/2'>
                                    <span>Age Range</span>
                                    <span>:</span>
                                </div>
                                <div className='w-1/2'>1 to 75</div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='flex justify-between w-1/2'>
                                    <span>Operated in</span>
                                    <span>:</span>
                                </div>
                                <div className='w-1/2'>English, German, Spanish</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#3E4095] py-6 grid md:grid-cols-3 lg:px-28 md:px-10 px-3 w-full text-white grid-cols-1 gap-6 md:gap-0'>
                    <div className='flex flex-col items-center justify-center gap-3 pb-5 border-b-2 md:border-e-2 md:border-b-0 md:flex-row md:pb-0'>
                        <Image src={Download} alt='/' />
                        <h1>Download Tour Guide PDF Brochure</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3 pb-5 border-b-2 md:border-e-2 md:border-b-0 md:flex-row md:pb-0'>
                        <Image src={Play_circle} alt='/' />
                        <h1>Watch Video</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3 pb-5 border-b-2 md:border-b-0 md:flex-row md:pb-0'>
                        <Image src={QA} alt='/' />
                        <h1>Ask a Question</h1>
                    </div>
                </div>

                <div className='px-3 py-10 text-center lg:px-28 md:px-10 lg:py-20'>
                    <h1 className='text-2xl font-bold text-[#262626]'>Locations You&apos;ll View</h1>
                    <p className='pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <div className='w-full pt-10'>
                        <div className='flex justify-end gap-4'>
                            <button className=' bg-[#3E4095] hover:bg-[#31327a] hover:cursor-pointer swiper-button-prev'>
                                <Image src={Left} alt='/' />
                            </button>
                            <button className='bg-[#EB268F] hover:bg-[#792c55] hover:cursor-pointer swiper-button-next'>
                                <Image src={Right} alt='/' />
                            </button>

                        </div>
                    </div>

                    {/* lg */}
                    <div className='pt-10'>
                        <Swiper
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                }
                            }}
                            modules={[Pagination, Autoplay, Navigation]}
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={3}
                        >

                            <SwiperSlide>
                                <div className='relative'>
                                    <Image src={Ella} alt='/' className='w-full' />
                                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000be] to-transparent flex justify-center items-end'>
                                        <div className='flex flex-col gap-2 px-10 pb-10 text-center text-white md:px-3 lg:px-10'>
                                            <h1 className='text-2xl font-bold'>Ella</h1>
                                            <p>Nestled hills, tea plantations, waterfalls,
                                                and Nine Arch Bridge.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='relative'>
                                    <Image src={Kandy} alt='/' className='w-full' />
                                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000be] to-transparent flex justify-center items-end'>
                                        <div className='flex flex-col gap-2 px-10 pb-10 text-center text-white md:px-3 lg:px-10'>
                                            <h1 className='text-2xl font-bold'>Kandy</h1>
                                            <p>Cultural capital, Temple of the Tooth,
                                                Kandy Lake, and cultural performances.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='relative'>
                                    <Image src={Sigiriya} alt='/' className='w-full' />
                                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000be] to-transparent flex justify-center items-end'>
                                        <div className='flex flex-col gap-2 px-10 pb-10 text-center text-white md:px-3 lg:px-10'>
                                            <h1 className='text-2xl font-bold'>Sigiriya</h1>
                                            <p>UNESCO site, Sigiriya Rock Fortress,
                                                ancient city, and mesmerizing frescoes.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='relative'>
                                    <Image src={Sigiriya} alt='/' className='w-full' />
                                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000be] to-transparent flex justify-center items-end'>
                                        <div className='flex flex-col gap-2 px-10 pb-10 text-center text-white md:px-3 lg:px-10'>
                                            <h1 className='text-2xl font-bold'>Sigiriya</h1>
                                            <p>UNESCO site, Sigiriya Rock Fortress,
                                                ancient city, and mesmerizing frescoes.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>



                </div>

                <div className='flex flex-col px-3 lg:px-28 md:px-10'>
                    <h1 className='text-2xl font-bold text-[#262626]'>Highlights</h1>
                    <div className='grid w-full grid-cols-1 gap-3 pt-6 md:gap-5 lg:pt-10 md:grid-cols-2'>

                        {highlights.map((highlight) => (
                            <div className='flex items-center gap-3'>
                                <Image src={highlight.img} alt='/' />
                                <span>{highlight.description}</span>
                            </div>
                        ))}

          
                       
                    </div>
                </div>

                <div className='flex flex-col px-3 pt-10 lg:pt-20 lg:px-28 md:px-10'>
                    <h1 className='text-2xl font-bold text-[#262626]'>The Schedule</h1>
                    <p className='pt-6 lg:pt-10'>Begin and conclude in Colombo! You have an 8-day tour package with the In-depth Cultural tour Lifetime Experience in Sri Lanka that includes travel to Negombo, Sri Lanka, as well as 12 other locations. A hotel stay, a professional guide, meals, transportation, and other amenities are all included in the
                        Lifetime Experience in Sri Lanka.
                    </p>
                </div>

                <div className='flex flex-col px-3 pt-10 lg:pt-20 lg:px-28 md:px-10'>
                    <h1 className='text-2xl font-bold text-[#262626]'>Introduction</h1>
                    <p className='pt-6 lg:pt-10'>This exclusive 8-day tour is thoughtfully planned to include both beach and city time, as well as nature and wildlife, history and culture. The cozy hotels and resorts in Sri Lanka will provide you with the warm hospitality of the country. Sri Lanka is well-known for being a complete travel destination because it has everything a traveler could possibly want, including beaches, mountains, historical sites, wildlife, and a vibrant local culture. Your tour guide, who speaks multiple languages and is well-versed in every facet of this amazing nation, will show you around a lot of intriguing locations and impart his wisdom on Sri Lankan history and customs. We are therefore confident that you will have a fantastic, fulfilling vacation and treasured memories that will last a lifetime.
                    </p>
                </div>

                <div className='flex flex-col w-full px-3 pt-10 lg:pt-20 lg:px-28 md:px-10'>
                    <Box   >
                        <Group justify="between" mb={5}>
                            <div className='flex items-center justify-between w-full' onClick={handleOpened1}>
                                <div className='flex items-center gap-5'>
                                    <Image src={Collaps_icon} alt='/' className='w-12 md:w-16' />
                                    <h1 className='text-xl font-bold text-[#262626]'>Day 01</h1>
                                    <span className='hidden md:block'>Airport or hotel pick-up / Welcome to Sri Lanka!</span>
                                </div>

                                <div>{
                                    !opened1 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                </div>
                            </div>
                        </Group>

                        <Collapse in={opened1} transitionDuration={500} transitionTimingFunction="linear">
                            <div className='flex flex-col w-full gap-2 px-5 mx-5 border-black md:mx-8 md:px-10 border-s-2'>
                                <h1 className='text-lg font-medium md:hidden'>Airport or hotel pick-up / Welcome to Sri Lanka!</h1>
                                <p className='text-sm text-justify md:text-base'>This exclusive 8-day tour is thoughtfully planned to include both beach and city time, as well as nature and wildlife, history and culture. The cozy hotels and resorts in Sri Lanka will provide you with the warm hospitality of the country. Sri Lanka is well-known for being a complete travel destination because it has everything a traveler could possibly want, including beaches, mountains, historical sites, wildlife, and a vibrant local culture. Your tour guide, who speaks multiple languages and is well-versed in every facet of this amazing nation, will show you around a lot of intriguing locations and impart his wisdom on Sri Lankan history and customs. We are therefore confident that you will have a fantastic, fulfilling vacation and treasured memories that will last a lifetime</p>
                            </div>
                        </Collapse>
                    </Box>

                    <Box   >
                        <Group justify="between" mb={5}>
                            <div className='flex items-center justify-between w-full' onClick={handleOpened2}>
                                <div className='flex items-center gap-5'>
                                    <Image src={Collaps_icon} alt='/' className='w-12 md:w-16' />
                                    <h1 className='text-xl font-bold text-[#262626]'>Day 02</h1>
                                    <span className='hidden md:block'>Pinnawala Elephant Orphanage</span>
                                </div>

                                <div>{
                                    !opened2 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                </div>
                            </div>
                        </Group>

                        <Collapse in={opened2} transitionDuration={500} transitionTimingFunction="linear">
                            <div className='flex flex-col w-full gap-2 px-5 mx-5 border-black md:mx-8 md:px-10 border-s-2'>
                                <h1 className='text-lg font-medium md:hidden'>Pinnawala Elephant Orphanage</h1>
                                <p className='text-sm text-justify md:text-base'>The orphanage was originally founded to afford care and protection to the many orphaned Elephants found in the jungles of
                                    Sri Lanka. The elephants are taken to the river twice a day for a bath, and all the babies less than three years of age are still bottle-fed by the mahouts and volunteers. The main attraction is clearly to observe the elephants bathing which is quite a spectacle. Entrance Ticket – USD 10 Per Adult</p>
                                <div className='flex flex-col gap-5 pt-5 md:gap-3'>
                                    <div className='flex gap-5 md:items-center'>
                                        <Image src={Hotel} alt='/' className='h-fit' />
                                        <div className='flex flex-col md:gap-1 md:items-center md:flex-row'>
                                            <span className='font-bold'>Accomodation : </span>
                                            <span> Mahaweli Reach (5 Star Hotel)</span>
                                        </div>
                                    </div>

                                    <div className='flex gap-5 md:items-center'>
                                        <Image src={Meal} alt='/' className='h-fit' />
                                        <div className='flex flex-col md:gap-1 md:items-center md:flex-row'>
                                            <span className='font-bold'>Meal Plan : </span>
                                            <span> Breakfast & Dinner</span>
                                        </div>
                                    </div>

                                    <div className='flex gap-5 md:items-center'>
                                        <Image src={Clock} alt='/' className='h-fit' />
                                        <div className='flex flex-col md:gap-1 md:items-center md:flex-row'>
                                            <span className='font-bold'>Travel Time : </span>
                                            <span> Airport to Kandy - 2 hours (approx.)</span>
                                        </div>
                                    </div>

                                    <div className='flex gap-5 md:items-center'>
                                        <Image src={Vehicle} alt='/' className='h-fit' />
                                        <div className='flex flex-col md:gap-1 md:items-center md:flex-row'>
                                            <span className='font-bold'>Transfer Mode :</span>
                                            <span>Private Car (Air Conditioned)</span>
                                        </div>
                                    </div>

                                </div>

                                <Image src={Pinnawala} alt='/' className='w-full pt-5' />
                            </div>
                        </Collapse>
                    </Box>

                    <Box   >
                        <Group justify="between" mb={5}>
                            <div className='flex items-center justify-between w-full' onClick={handleOpened3}>
                                <div className='flex items-center gap-5'>
                                    <Image src={Collaps_icon} alt='/' className='w-12 md:w-16' />
                                    <h1 className='text-xl font-bold text-[#262626]'>Day 03</h1>
                                    <span className='hidden md:block'>Kandy City Tour  </span>
                                </div>

                                <div>{
                                    !opened3 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                </div>
                            </div>
                        </Group>

                        <Collapse in={opened3} transitionDuration={500} transitionTimingFunction="linear">
                            <div className='flex flex-col w-full gap-2 px-5 mx-5 border-black md:mx-8 md:px-10 border-s-2'>
                                <h1 className='text-lg font-medium md:hidden'>Kandy City Tour </h1>

                            </div>
                        </Collapse>
                    </Box>

                    <Box   >
                        <Group justify="between" mb={5}>
                            <div className='flex items-center justify-between w-full' onClick={handleOpened4}>
                                <div className='flex items-center gap-5'>
                                    <Image src={Collaps_icon} alt='/' className='w-12 md:w-16' />
                                    <h1 className='text-xl font-bold text-[#262626]'>Day 04</h1>
                                    <span className='hidden md:block'>Spice Garden</span>
                                </div>

                                <div>{
                                    !opened4 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                </div>
                            </div>
                        </Group>

                        <Collapse in={opened4} transitionDuration={500} transitionTimingFunction="linear">
                            <div className='flex flex-col w-full gap-2 px-5 mx-5 border-black md:mx-8 md:px-10 border-s-2'>
                                <h1 className='text-lg font-medium md:hidden'>Spice Garden</h1>

                            </div>
                        </Collapse>
                    </Box>

                    <Box   >
                        <Group justify="between" mb={5}>
                            <div className='flex items-center justify-between w-full' onClick={handleOpened5}>
                                <div className='flex items-center gap-5'>
                                    <Image src={Collaps_icon} alt='/' className='w-12 md:w-16' />
                                    <h1 className='text-xl font-bold text-[#262626]'>Day 05</h1>
                                    <span className='hidden md:block'>Madhu River with Safari</span>
                                </div>

                                <div>{
                                    !opened5 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                </div>
                            </div>
                        </Group>

                        <Collapse in={opened5} transitionDuration={500} transitionTimingFunction="linear">
                            <div className='flex flex-col w-full gap-2 px-5 mx-5 border-black md:mx-8 md:px-10 border-s-2'>
                                <h1 className='text-lg font-medium md:hidden'>Madhu River with Safari</h1>

                            </div>
                        </Collapse>
                    </Box>

                    <Box   >
                        <Group justify="between" mb={5}>
                            <div className='flex items-center justify-between w-full' onClick={handleOpened6}>
                                <div className='flex items-center gap-5 text-[#262626]'>
                                    <Image src={Collaps_icon} alt='/' className='w-12 md:w-16' />
                                    <h1 className='text-xl font-bold'>Day 06</h1>
                                    <span className='hidden md:block'>Colombo City Tour / Airport or Hotel Drop-Off</span>
                                </div>

                                <div>{
                                    !opened6 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                </div>
                            </div>
                        </Group>

                        <Collapse in={opened6} transitionDuration={500} transitionTimingFunction="linear">
                            <div className='flex flex-col w-full gap-2 px-5 mx-5 border-black md:mx-8 md:px-10 border-s-2'>
                                <h1 className='text-lg font-medium md:hidden'>Colombo City Tour / Airport or Hotel Drop-Off</h1>

                            </div>
                        </Collapse>
                    </Box>


                </div>
            </Fade>

        </div>
    )
}

export default Tour_tab1
