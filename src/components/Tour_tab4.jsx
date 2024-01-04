"use client";
import { Fade } from "react-awesome-reveal";

import React from 'react'
import Image from 'next/image';
import Calander from '../assets/Calander.png';
import Hotel from '../assets/mdi_bed.png';
import Meal from '../assets/game-icons_hot-meal.png';
import Car from '../assets/mingcute_car-fill.png';
import Check_green from '../assets/check_green.png';

const Tour_tab4 = () => {
  return (
    <div className='flex flex-col gap-10 lg:gap-14'>

      <Fade>
        <div className='flex flex-col gap-6 px-3 lg:px-28 md:px-10'>
          <h1 className='text-2xl font-bold'>Sri Lanka Tour Package 3 Days Private Tour - Summery</h1>

          <div className='flex flex-col gap-3'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className='px-3 text-white lg:px-28 md:px-10'>
          <div className='p-6 bg-[#3E4095] grid lg:grid-cols-4 md:grid-cols-2 gap-10 lg:gap-0 grid-cols-1'>

            <div className='flex flex-col items-center justify-center gap-2 pb-5 border-b-2 md:border-e-2 md:border-b-0 md:pb-0'>
              <Image src={Calander} alt='/' />
              <h1>No of Days</h1>
              <span>03</span>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 pb-5 border-b-2 lg:border-e-2 md:border-b-0 md:pb-0'>
              <Image src={Hotel} alt='/' />
              <h1>Accommodation</h1>
              <span>4-5 Star / Boutique</span>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 pb-5 border-b-2 md:border-e-2 md:border-b-0 md:pb-0'>
              <Image src={Meal} alt='/' />
              <h1>Meal Plan</h1>
              <span>Breakfast & Dinner</span>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 pb-5 md:pb-0'>
              <Image src={Car} alt='/' />
              <h1>Transportation</h1>
              <span>Private Car (Air Conditioned)</span>
            </div>

          </div>
        </div>

        <div className='flex flex-col px-3 lg:px-28 md:px-10'>

          <div className='grid w-full grid-cols-1 gap-10 md:gap-5 md:grid-cols-2'>
            <div className='flex flex-col gap-3 md:gap-5'>

              <h1 className='text-2xl font-bold'>Activities Covered</h1>

              <div className='flex items-center gap-3'>
                <Image src={Check_green} alt='/' />
                <span>Visit the Pinnawala Elephant Orphanage</span>
              </div>
              <div className='flex items-center gap-3'>
                <Image src={Check_green} alt='/' />
                <span>Enjoy a Kandy City Tour</span>
              </div>
              <div className='flex items-center gap-3'>
                <Image src={Check_green} alt='/' />
                <span>Enjoy a Cultural Dance</span>
              </div>
              <div className='flex items-center gap-3'>
                <Image src={Check_green} alt='/' />
                <span>Visit the Temple of Tooth Relic</span>
              </div>
              <div className='flex items-center gap-3'>
                <Image src={Check_green} alt='/' />
                <span>Sightsee the Colombo City Tour</span>
              </div>
            </div>
            <div className='flex flex-col gap-3 md:gap-5'>

              <h1 className='text-2xl font-bold'>Locations Covered</h1>

              <div className='flex items-center gap-3'>
                <Image src={Check_green} alt='/' />
                <span>Colombo</span>
              </div>
              <div className='flex items-center gap-3'>
                <Image src={Check_green} alt='/' />
                <span>Kandy</span>
              </div>
            </div>
          </div>
        </div>

      </Fade>
    </div>
  )
}

export default Tour_tab4
