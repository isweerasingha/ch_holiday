'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import hero from '../../../assets/destination_more_info_hero.svg';
import Footer from '@/components/Footer';

import Arrow from '../../../assets/arrow_back_ios_new.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Carousel_img1 from '../../../assets/des_more_carousel_img1.svg';

import highlidhts_icon1 from '../../../assets/highlidhts_icon1.svg';
import highlidhts_icon2 from '../../../assets/highlidhts_icon2.svg';
import highlidhts_icon3 from '../../../assets/highlidhts_icon3.svg';
import highlidhts_icon4 from '../../../assets/highlidhts_icon4.svg';
import highlidhts_icon5 from '../../../assets/highlidhts_icon5.svg';
import highlidhts_icon6 from '../../../assets/highlidhts_icon6.svg';

import about_greece_image from '../../../assets/about_greece_image.svg';

import Check from '../../../assets/material-symbols_check-circle.png';

import Left from '../../../assets/chevron_left_black_24dp 1.png';
import Right from '../../../assets/chevron_right_black_24dp 1.png';

import food1 from '../../../assets/food1.svg';
import food2 from '../../../assets/food2.svg';
import food3 from '../../../assets/food3.svg';

import bus from '../../../assets/bus.svg';
import boat from '../../../assets/boat.svg';
import car from '../../../assets/car.svg';
import taxi from '../../../assets/taxi.svg';

import hotel1 from '../../../assets/hotel1.svg';
import hotel2 from '../../../assets/hotel2.svg';
import hotel3 from '../../../assets/hotel3.svg';

import { Group, Collapse, Box } from '@mantine/core';

import Down from '../../../assets/icon _keyboard arrow down_.png';
import Up from '../../../assets/icon _keyboard arrow up_.png';

import Rectangle from '../../../assets/Rectangle 82.svg';


const DestinationMoreInfo = () => {


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

    const [opened7, setOpened7] = useState(false);
    const handleOpened7 = () => {
        setOpened7(!opened7);
    };

    const [opened8, setOpened8] = useState(false);
    const handleOpened8 = () => {
        setOpened8(!opened8);
    };

    const [opened9, setOpened9] = useState(false);
    const handleOpened9 = () => {
        setOpened9(!opened9);
    };

    const [opened10, setOpened10] = useState(false);
    const handleOpened10 = () => {
        setOpened10(!opened10);
    };

    const [opened11, setOpened11] = useState(false);
    const handleOpened11 = () => {
        setOpened11(!opened11);
    };

    const [opened12, setOpened12] = useState(false);
    const handleOpened12 = () => {
        setOpened12(!opened12);
    };


    return (
        <div className='w-full'>

            <Navbar />

            <div className='relative w-full'>
                <Image src={hero} alt="/" className='w-full' />
                <div className='absolute top-0 left-0 w-full h-full bg-[#0000004a] flex justify-center items-center text-white'>
                    <div className='flex flex-col gap-1 text-center md:gap-4'>
                        <h1 className='text-xl font-bold md:text-5xl'>Greece</h1>
                        <div className='flex items-center justify-center gap-2 mt-5 text-sm md:text-xl'>
                            <h1 className='font-bold'>Home</h1>
                            <Image src={Arrow} alt="/" className='w-4' />
                            <h1>Destination</h1>
                            <Image src={Arrow} alt="/" className='hidden w-4 md:flex' />
                            <span className='text-sm'>More info</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full gap-10 px-3 py-10 lg:gap-20 lg:py-20 lg:px-28 md:px-10'>

                <div className='w-full'>
                    <Swiper
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        //   loop={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper">
                        <SwiperSlide>
                            <Image src={Carousel_img1} alt="/" className='w-full' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={Carousel_img1} alt="/" className='w-full' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={Carousel_img1} alt="/" className='w-full' />
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className='flex flex-col w-full gap-10 py-10 text-center'>
                    <h1 className='text-[33px] font-bold'>Highlights</h1>

                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>

                        {/*  */}
                        <div className='flex flex-col gap-5 p-5 border-2 h-72'>
                            <div className='flex items-center gap-3'>
                                <Image src={highlidhts_icon1} alt="/" />
                                <h1 className='xl:text-[23px] text-[19px] font-bold'>Luxurious Oceanfront</h1>
                            </div>
                            <p className='text-[16px] text-justify'>5-star rating, free Wi-Fi, flat-screen TV, iPod dock, air conditioning, minibar, balcony with ocean view, furnished lounge, one-bedroom bungalows with dining area, roof deck and plunge pool.</p>
                        </div>


                        {/*  */}
                        <div className='flex flex-col gap-5 p-5 border-2 h-72'>
                            <div className='flex items-center gap-3'>
                                <Image src={highlidhts_icon2} alt="/" />
                                <h1 className='xl:text-[23px] text-[19px] font-bold'>Extensive Amenities</h1>
                            </div>
                            <p className='text-[16px] text-justify'>5-star rating, free Wi-Fi, flat-screen TV, iPod dock, air conditioning, minibar, balcony with ocean view, furnished lounge, one-bedroom bungalows with dining area, roof deck and plunge pool.</p>
                        </div>


                        {/*  */}
                        <div className='flex flex-col gap-5 p-5 border-2 h-72'>
                            <div className='flex items-center gap-3'>
                                <Image src={highlidhts_icon3} alt="/" />
                                <h1 className='xl:text-[23px] text-[19px] font-bold'>Delicious Dining</h1>
                            </div>
                            <p className='text-[16px] text-justify'>Matador Room, The Market, The Matador, Ocean Terrace, poolside bars and cabanas.</p>
                        </div>

                        {/*  */}
                        <div className='flex flex-col gap-5 p-5 border-2 h-72'>
                            <div className='flex items-center gap-3'>
                                <Image src={highlidhts_icon4} alt="/" />
                                <h1 className='xl:text-[23px] text-[19px] font-bold'>Nearby Attractions</h1>
                            </div>
                            <p className='text-[16px] text-justify'>Bayshore Golf Course, Bass Museum of Arts, Art Deco District.</p>
                        </div>

                        {/*  */}
                        <div className='flex flex-col gap-5 p-5 border-2 h-72'>
                            <div className='flex items-center gap-3'>
                                <Image src={highlidhts_icon5} alt="/" />
                                <h1 className='xl:text-[23px] text-[19px] font-bold'>Great Service</h1>
                            </div>
                            <p className='text-[16px] text-justify'>Guests praise friendly and professional staff, personalized experience, excellent customer service.</p>
                        </div>


                        {/*  */}
                        <div className='flex flex-col gap-5 p-5 border-2 h-72'>
                            <div className='flex items-center gap-3'>
                                <Image src={highlidhts_icon6} alt="/" />
                                <h1 className='xl:text-[23px] text-[19px] font-bold'>Comfortable Stay</h1>
                            </div>
                            <p className='text-[16px] text-justify'>Lovely and clean rooms, no comforter, nowhere to hang towels, cheap and generic hairdryer.</p>
                        </div>

                    </div>
                </div>

                <div className='grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0'>
                    <div className='flex flex-col justify-center gap-5 lg:gap-10'>
                        <h1 className='font-bold text-[33px]'>About The Greece</h1>
                        <p className='text-justify'>Welcome to Greece, a captivating destination that seamlessly blends ancient history with breathtaking natural beauty. Nestled in southeastern Europe, Greece is renowned for its rich cultural heritage, spanning thousands of years. From the iconic white-washed buildings overlooking the azure Aegean Sea to the ancient ruins that whisper tales of gods and heroes, Greece offers a truly enchanting experience. Immerse yourself in the warmth of Greek hospitality, savor delectable Mediterranean cuisine, and explore a landscape that ranges from idyllic beaches to rugged mountains. Whether you&apos;re drawn to the historical wonders of Athens, the idyllic islands of Santorini and Mykonos, or the tranquil villages of Crete, Greece beckons with a tapestry of experiences waiting to be discovered. Join us on a journey to a land where myth and reality intertwine, and every corner reveals a piece of a timeless and extraordinary story.</p>
                    </div>
                    <div className='flex items-center justify-center w-full lg:justify-end lg:pl-10 xl:pl-0'>
                        <Image src={about_greece_image} alt="/" className='' />
                    </div>
                </div>

            </div>

            <div className='flex flex-col w-full gap-10 px-3 py-10 lg:py-20 lg:px-28 md:px-10 bg-[#f5f5f5] text-center'>
                <h1 className='font-bold text-[33px]'>Travel Essentials</h1>

                <div className='flex flex-col gap-6'>

                    {/*  */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-3'>
                            <Image src={Check} alt="/" className='' />
                            <h1 className='xl:text-[23px] text-[19px] font-bold'>Weather Information :</h1>
                        </div>
                        <p className='text-[16px] text-justify'>Greece enjoys a Mediterranean climate, characterized by hot, dry summers and mild, wet winters. Summers (June to August) boast temperatures ranging from 25°C to 35°C (77°F to 95°F), making it ideal for beach vacations. Winters (December to February) are milder, with temperatures ranging from 5°C to 15°C (41°F to 59°F). Be sure to check the specific weather conditions for your chosen travel dates and pack accordingly.</p>
                    </div>

                    {/*  */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-3'>
                            <Image src={Check} alt="/" className='' />
                            <h1 className='xl:text-[23px] text-[19px] font-bold'>Time Zone:</h1>
                        </div>
                        <p className='text-[16px] text-justify'>Greece operates on Eastern European Time (EET), which is UTC+2 during Standard Time and UTC+3 during Daylight Saving Time (from the last Sunday in March to the last Sunday in October).</p>
                    </div>

                    {/*  */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-3'>
                            <Image src={Check} alt="/" className='' />
                            <h1 className='xl:text-[23px] text-[19px] font-bold'>Visa and Entry Requirements:</h1>
                        </div>
                        <p className='text-[16px] text-justify'>Most visitors to Greece, including citizens of the EU, the USA, Canada, Australia, and many other countries, can enter for short stays (up to 90 days) without a visa. However, it&apos;s essential to check the specific entry requirements based on your nationality before traveling.</p>
                    </div>

                    {/*  */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-3'>
                            <Image src={Check} alt="/" className='' />
                            <h1 className='xl:text-[23px] text-[19px] font-bold'>Currency Exchange:</h1>
                        </div>
                        <p className='text-[16px] text-justify'>The official currency is the Euro (EUR). Currency exchange services are widely available, and credit cards are widely accepted. ATMs are also easily accessible in major cities and tourist areas. Ensure you have travel insurance that covers medical expenses and potential travel disruptions. Additionally, carry essential documents, including a valid passport, any required visas, and contact information for your country&apos;s embassy or consulate in Greece. Feel free to reach out to our customer support for any additional information or assistance with your travel essentials. Your journey to Greece awaits</p>
                    </div>

                </div>
            </div>

            <div className='flex flex-col w-full gap-10 px-3 py-10 text-center lg:py-20 lg:px-28 md:px-10'>

                <div className='flex flex-col gap-5 text-start'>

                    <div className='w-full text-center'>
                        <h1 className='font-bold text-[33px] text-center'>Local Cuisine</h1>
                    </div>
                    <h1 className='xl:text-[23px] text-[19px] font-bold'>Culinary Delights of Greece:</h1>
                    <p className='text-[16px] text-justify'>Indulge your taste buds in the culinary wonders of Greece, where traditional flavors and fresh ingredients take center stage. Savor iconic dishes such as moussaka, aubergine-based and layered with minced meat, and souvlaki, skewered and grilled meat often served with pita. Don&apos;t miss the chance to enjoy a Greek salad with feta cheese, olives, and olive oil. Seafood lovers can relish the catch of the day in coastal towns, and be sure to try baklava for a sweet finale. Pair your meals with local wines or ouzo, an anise-flavored aperitif, for a truly authentic dining experience.</p>
                </div>

                <div className='w-full'>

                    <div className='w-full'>
                        <div className='flex justify-end gap-4'>
                            <button className=' bg-[#3E4095] hover:bg-[#35367F] hover:cursor-pointer active:scale-105'>
                                <Image src={Left} alt='/' />
                            </button>
                            <button className='bg-[#EB268F] hover:bg-[#C8207A] hover:cursor-pointer active:scale-105'>
                                <Image src={Right} alt='/' />
                            </button>

                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6 pt-10 md:grid-cols-3'>

                        <div className='relative overflow-hidden group'>
                            <Image src={food1} alt='/' className='w-full' />
                            <div className='absolute -bottom-full w-full h-full bg-gradient-to-t from-[#000000be] to-transparent flex justify-center items-end group-hover:top-0 group-hover:left-0 duration-500'>
                                <div className='flex flex-col gap-2 px-10 pb-10 text-center text-white md:px-3 lg:px-10'>
                                    <h1 className='xl:text-[23px] text-[19px] font-bold'>Greek Yogurt</h1>
                                </div>
                            </div>
                        </div>
                        <div className='relative overflow-hidden group'>
                            <Image src={food2} alt='/' className='w-full' />
                            <div className='absolute -bottom-full w-full h-full bg-gradient-to-t from-[#000000be] to-transparent flex justify-center items-end group-hover:top-0 group-hover:left-0 duration-500'>
                                <div className='flex flex-col gap-2 px-10 pb-10 text-center text-white md:px-3 lg:px-10'>
                                    <h1 className='xl:text-[23px] text-[19px] font-bold'>Greek Yogurt</h1>
                                </div>
                            </div>
                        </div>
                        <div className='relative overflow-hidden group'>
                            <Image src={food3} alt='/' className='w-full' />
                            <div className='absolute -bottom-full w-full h-full bg-gradient-to-t from-[#000000be] to-transparent flex justify-center items-end group-hover:top-0 group-hover:left-0 duration-500'>
                                <div className='flex flex-col gap-2 px-10 pb-10 text-center text-white md:px-3 lg:px-10'>
                                    <h1 className='xl:text-[23px] text-[19px] font-bold'>Greek Yogurt</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='flex flex-col w-full gap-5 lg:gap-7 px-3 py-10 lg:py-20 lg:px-28 md:px-10 bg-[#3E4095] text-center items-center text-white'>
                <h1 className='text-[33px] font-bold'>Customer Booking Contact Information</h1>
                <p className='text-[16px] text-justify'>For any assistance, inquiries, or to make a booking, our dedicated customer support team is ready to help you.</p>
                <div className='w-full'>
                    <button className='bg-transparent border-2 border-white lg:py-[17px] lg:px-[40px] py-[10px] px-[20px] uppercase text-white hover:bg-white hover:text-[#EB268F] duration-300 font-medium text-[16px]'>Book Now</button>
                </div>
            </div>

            <div className='flex flex-col w-full gap-10 px-3 py-10 lg:gap-20 lg:py-20 lg:px-28 md:px-10'>

                <div className='flex flex-col w-full gap-5 py-10 text-center'>
                    <h1 className='text-[33px] font-bold'>Transportation</h1>

                    <div className='flex justify-center w-full'>
                        <div className='w-full lg:w-2/3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>

                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6 pt-5 md:grid-cols-2'>

                        {/*  */}
                        <div className='flex flex-col h-48 gap-5 p-5 border-2 group  hover:bg-[#EB268F] duration-300'>
                            <div className='flex items-center gap-3'>
                                <div className='flex justify-center w-1/4 p-6 group-hover:bg-white'>
                                    <Image src={bus} alt="/" className='w-full' />
                                </div>

                                <div className='flex flex-col items-start w-3/4 gap-3 group-hover:text-white'>
                                    <h1 className='xl:text-[23px] text-[19px] font-bold'>Public Transportation</h1>
                                    <p className='text-[16px] text-justify'>In major cities like Athens, buses, trams, and the metro provide efficient and cost-effective ways to navigate. Consider purchasing a reloadable transportation card for convenience.</p>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className='flex flex-col h-48 gap-5 p-5 border-2 group  hover:bg-[#EB268F] duration-300'>
                            <div className='flex items-center gap-3'>
                                <div className='flex justify-center w-1/4 p-6 group-hover:bg-white'>
                                    <Image src={boat} alt="/" className='w-full' />
                                </div>

                                <div className='flex flex-col items-start w-3/4 gap-3 group-hover:text-white'>
                                    <h1 className='xl:text-[23px] text-[19px] font-bold'>Ferries and Boats</h1>
                                    <p className='text-[16px] text-justify'>With numerous islands dotting the Aegean and Ionian Seas, ferries and boats are essential for island hopping. Ensure you check schedules and book tickets in advance during peak seasons.</p>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className='flex flex-col h-48 gap-5 p-5 border-2 group  hover:bg-[#EB268F] duration-300'>
                            <div className='flex items-center gap-3'>
                                <div className='flex justify-center w-1/4 p-6 group-hover:bg-white'>
                                    <Image src={car} alt="/" className='w-full' />
                                </div>

                                <div className='flex flex-col items-start w-3/4 gap-3 group-hover:text-white'>
                                    <h1 className='xl:text-[23px] text-[19px] font-bold'>Car Rentals</h1>
                                    <p className='text-[16px] text-justify'>Renting a car provides flexibility, especially when exploring the mainland and less accessible areas. Greece has a well-maintained road network, and driving allows you to discover hidden gems..</p>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className='flex flex-col h-48 gap-5 p-5 border-2 group  hover:bg-[#EB268F] duration-300'>
                            <div className='flex items-center gap-3'>
                                <div className='flex justify-center w-1/4 p-6 group-hover:bg-white'>
                                    <Image src={taxi} alt="/" className='w-full' />
                                </div>

                                <div className='flex flex-col items-start w-3/4 gap-3 group-hover:text-white'>
                                    <h1 className='xl:text-[23px] text-[19px] font-bold'>Taxis</h1>
                                    <p className='text-[16px] text-justify'>Taxis are readily available in urban centers. Confirm fares before the journey or ensure the meter is running.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='flex flex-col w-full gap-10 px-3 py-10 lg:py-20 lg:px-28 md:px-10 bg-[#f5f5f5] text-center'>

                <h1 className='text-[33px] font-bold'>Accommodations</h1>

                <div className='flex justify-center w-full'>
                    <div className='w-full lg:w-2/3'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>

                    </div>
                </div>

                <div className='w-full'>

                    <div className='w-full'>
                        <div className='flex justify-end gap-4'>
                            <button className=' bg-[#3E4095] hover:bg-[#35367F] hover:cursor-pointer active:scale-105'>
                                <Image src={Left} alt='/' />
                            </button>
                            <button className='bg-[#EB268F] hover:bg-[#C8207A] hover:cursor-pointer active:scale-105'>
                                <Image src={Right} alt='/' />
                            </button>

                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6 pt-10 md:grid-cols-3'>

                        <div className=''>
                            <Image src={hotel1} alt='/' className='w-full' />
                            <div className='flex flex-col w-full h-48 gap-3 p-3 text-center bg-white lg:p-6 md:h-64 lg:h-52'>
                                <h1 className='xl:text-[23px] text-[19px] font-bold'>Luxurious Resorts</h1>
                                <p className='text-[16px] text-center'>Experience opulence in seaside resorts with stunning views, private beaches, and world-class amenities. Ideal for a relaxing getaway.</p>
                            </div>
                        </div>
                        <div className='relative overflow-hidden group'>
                            <Image src={hotel2} alt='/' className='w-full' />
                            <div className='flex flex-col w-full h-48 gap-3 p-3 text-center bg-white lg:p-6 md:h-64 lg:h-52'>
                                <h1 className='xl:text-[23px] text-[19px] font-bold'>Charming Villas</h1>
                                <p className='text-[16px] text-center'>Explore the rustic charm of Greece by staying in traditional villas. Enjoy the comfort of a home away from home while immersing yourself in local culture.</p>
                            </div>
                        </div>
                        <div className='relative overflow-hidden group'>
                            <Image src={hotel3} alt='/' className='w-full' />
                            <div className='flex flex-col w-full h-48 gap-3 p-3 text-center bg-white lg:p-6 md:h-64 lg:h-52'>
                                <h1 className='xl:text-[23px] text-[19px] font-bold'>Budget-Friendly Options</h1>
                                <p className='text-[16px] text-center'>Hostels and budget hotels are available, especially in popular tourist areas, providing economical choices without compromising on comfort.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className='flex flex-col items-center w-full gap-10 px-3 py-10 lg:px-28 md:px-10 lg:py-20'>
                <div className='flex flex-col items-center w-full gap-4 lg:w-2/3 '>
                    <h1 className='text-[33px] font-bold'>Travel Tips</h1>
                    <p className='text-[16px] text-center'>Make the Most of Your Greek Adventure with These Tips</p>
                </div>

                <div className='grid w-full grid-cols-1 gap-10 lg:grid-cols-2'>

                    <div className='flex flex-col w-full gap-10'>

                        {/* 1 */}
                        <div className='w-full'>
                            <Box>
                                <Group justify="between" mb={5}>
                                    <div className='flex items-center justify-between w-full' onClick={handleOpened1}>
                                        <div className='flex items-center gap-5'>

                                            <h1 className='font-bold text-[23px]'>Respect Local Customs</h1>

                                        </div>

                                        <div>{
                                            !opened1 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                        </div>
                                    </div>
                                </Group>

                                <Collapse in={opened1} transitionDuration={500} transitionTimingFunction="linear">
                                    <div className='flex flex-col w-full gap-3 '>
                                        <div className='flex gap-3'>
                                            <p className='text-[16px] text-justify'>Greeks are known for their warmth and hospitality. Embrace local customs, such as greeting with a friendly &quot;Kalimera&quot; (Good morning) and showing respect in religious sites.</p>
                                        </div>
                                    </div>
                                </Collapse>
                            </Box>
                        </div>

                        {/* 2 */}
                        <div className='w-full'>
                            <Box>
                                <Group justify="between" mb={5}>
                                    <div className='flex items-center justify-between w-full' onClick={handleOpened2}>
                                        <div className='flex items-center gap-5'>

                                            <h1 className='font-bold text-[23px]'>Cash and Cards</h1>

                                        </div>

                                        <div>{
                                            !opened2 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                        </div>
                                    </div>
                                </Group>

                                <Collapse in={opened2} transitionDuration={500} transitionTimingFunction="linear">
                                    <div className='flex flex-col w-full gap-3 '>
                                        <div className='flex gap-3'>
                                            <p className='text-[16px] text-justify'>While major credit cards are widely accepted, it&apos;s advisable to carry some cash, especially in smaller towns and on islands. ATMs are available in urban centers.</p>
                                        </div>
                                    </div>
                                </Collapse>
                            </Box>
                        </div>

                        {/* 3 */}
                        <div className='w-full'>
                            <Box>
                                <Group justify="between" mb={5}>
                                    <div className='flex items-center justify-between w-full' onClick={handleOpened3}>
                                        <div className='flex items-center gap-5'>

                                            <h1 className='font-bold text-[23px]'>Hydrate and Stay Cool</h1>

                                        </div>

                                        <div>{
                                            !opened3 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                        </div>
                                    </div>
                                </Group>

                                <Collapse in={opened3} transitionDuration={500} transitionTimingFunction="linear">
                                    <div className='flex flex-col w-full gap-3 '>
                                        <div className='flex gap-3'>
                                            <p className='text-[16px] text-justify'>Summers can be hot, so stay hydrated. Carry a reusable water bottle and take breaks in shaded areas to avoid overheating while sightseeing.</p>
                                        </div>
                                    </div>
                                </Collapse>
                            </Box>
                        </div>

                        {/* 4 */}
                        <div className='w-full'>
                            <Box>
                                <Group justify="between" mb={5}>
                                    <div className='flex items-center justify-between w-full' onClick={handleOpened4}>
                                        <div className='flex items-center gap-5'>

                                            <h1 className='font-bold text-[23px]'>Emergency Contacts</h1>

                                        </div>

                                        <div>{
                                            !opened4 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                        </div>
                                    </div>
                                </Group>

                                <Collapse in={opened4} transitionDuration={500} transitionTimingFunction="linear">
                                    <div className='flex flex-col w-full gap-3 '>
                                        <div className='flex gap-3'>
                                            <p className='text-[16px] text-justify'>Keep a list of emergency contacts, including local authorities and the contact information for your embassy or consulate.</p>
                                        </div>
                                    </div>
                                </Collapse>
                            </Box>
                        </div>

                    </div>

                    <div className='flex flex-col gap-10'>
                        {/* 5 */}
                        <div className='w-full'>
                            <Box>
                                <Group justify="between" mb={5}>
                                    <div className='flex items-center justify-between w-full' onClick={handleOpened7}>
                                        <div className='flex items-center gap-5'>

                                            <h1 className='font-bold text-[23px]'>Sun Protection</h1>

                                        </div>

                                        <div>{
                                            !opened7 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                        </div>
                                    </div>
                                </Group>

                                <Collapse in={opened7} transitionDuration={500} transitionTimingFunction="linear">
                                    <div className='flex flex-col w-full gap-3 '>
                                        <div className='flex gap-3'>
                                            <p className='text-[16px] text-justify'>Greece enjoys abundant sunshine, especially in the summer. Pack sunscreen, a hat, and sunglasses to stay protected while exploring outdoor attractions.</p>
                                        </div>
                                    </div>
                                </Collapse>
                            </Box>
                        </div>

                        {/* 6 */}
                        <div className='w-full'>
                            <Box>
                                <Group justify="between" mb={5}>
                                    <div className='flex items-center justify-between w-full' onClick={handleOpened8}>
                                        <div className='flex items-center gap-5'>

                                            <h1 className='font-bold text-[23px]'>Island-Hopping Planning</h1>

                                        </div>

                                        <div>{
                                            !opened8 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                        </div>
                                    </div>
                                </Group>

                                <Collapse in={opened8} transitionDuration={500} transitionTimingFunction="linear">
                                    <div className='flex flex-col w-full gap-3 '>
                                        <div className='flex gap-3'>
                                            <p className='text-[16px] text-justify'>If you&apos;re planning to explore multiple islands, check ferry schedules
                                                in advance, especially during peak seasons. Booking tickets ahead
                                                of time ensures smoother island-hopping experiences.</p>
                                        </div>
                                    </div>
                                </Collapse>
                            </Box>
                        </div>

                        {/* 7 */}
                        <div className='w-full'>
                            <Box>
                                <Group justify="between" mb={5}>
                                    <div className='flex items-center justify-between w-full' onClick={handleOpened9}>
                                        <div className='flex items-center gap-5'>

                                            <h1 className='font-bold text-[23px]'>Local Cuisine Exploration</h1>

                                        </div>

                                        <div>{
                                            !opened9 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                        </div>
                                    </div>
                                </Group>

                                <Collapse in={opened9} transitionDuration={500} transitionTimingFunction="linear">
                                <div className='flex flex-col w-full gap-3 '>
                                        <div className='flex gap-3'>
                                            <p className='text-[16px] text-justify'>Venture beyond tourist areas to discover authentic local eateries. Greeks take pride in their cuisine, and exploring traditional tavernas can lead to delightful culinary experiences.</p>
                                        </div>
                                    </div>
                                </Collapse>
                            </Box>
                        </div>

                        {/* 8 */}
                        <div className='w-full'>
                            <Box>
                                <Group justify="between" mb={5}>
                                    <div className='flex items-center justify-between w-full' onClick={handleOpened10}>
                                        <div className='flex items-center gap-5'>

                                            <h1 className='font-bold text-[23px]'>Footwear for Exploration</h1>

                                        </div>

                                        <div>{
                                            !opened10 ? <Image src={Down} alt='/' /> : <Image src={Up} alt='/' />}

                                        </div>
                                    </div>
                                </Group>

                                <Collapse in={opened10} transitionDuration={500} transitionTimingFunction="linear">
                                <div className='flex flex-col w-full gap-3 '>
                                        <div className='flex gap-3'>
                                            <p className='text-[16px] text-justify'>Comfortable walking shoes are essential, especially when exploring archaeological sites and cobblestone streets.
A sturdy pair will enhance your comfort during your adventures.</p>
                                        </div>
                                    </div>
                                </Collapse>
                            </Box>
                        </div>
 
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default DestinationMoreInfo
