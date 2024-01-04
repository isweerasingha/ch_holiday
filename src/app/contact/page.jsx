'use client'
import React from 'react';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import hero from '../../assets/contact_hero.svg';
import Footer from '@/components/Footer';

import Arrow from '../../assets/arrow_back_ios_new.png';

import Location from '../../assets/location_on.png';
import Email from '../../assets/mail.png';
import Phone from '../../assets/wifi_calling_3.png';

const page = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className='relative w-full'>
        <Image src={hero} alt="/" className='w-full' />
        <div className='absolute top-0 left-0 w-full h-full bg-[#0000004a] flex justify-center items-center text-white'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-5xl font-bold'>Contact Us</h1>
            <div className='flex items-center justify-center gap-2 md:text-xl'>
              <h1 className='font-bold'>Home</h1>
              <Image src={Arrow} alt="/" className='w-4' />
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-full gap-10 px-3 py-10 lg:gap-20 lg:py-20 lg:px-28 md:px-10'>

        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0'>
          <div className='flex flex-col gap-5 lg:pr-20'>
            <h1 className='text-[33px] font-bold'>We're here to assist you on your journey</h1>
            <p>Feel free to reach out to us for any inquiries, support, or travel-related assistance. Our dedicated team is committed to ensuring your travel experience is seamless and enjoyable. Whether you have questions about bookings, need assistance with your itinerary, or have feedback to share, we're here to help. Simply fill out the form below, and we'll get back to you as soon as possible. Your journey begins with us, and we're here to make it extraordinary.</p>
            <h1 className='font-bold text-[19px] border-b-2 pb-3'>Opening Hours</h1>

            <div className='flex gap-10 pb-3 border-b-2 text-[16px]'>
              <span>Monday - Saturday</span>
              <span>08:00am - 07:00pm</span>
            </div>

            <div className='flex gap-6'>
              <div className='w-[72px] h-[72px] flex justify-center items-center bg-[#EB268F]'>
                <Image src={Location} alt="/" className='w-8' />
              </div>
              <div className='flex flex-col gap-3'>
                <span className='text-[16px]'>Visit Us</span>
                <span className='text-[19px] font-bold'>99 Roving St., Big City, Pku 234</span>
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='w-[72px] h-[72px] flex justify-center items-center bg-[#EB268F]'>
                <Image src={Email} alt="/" className='w-8' />
              </div>
              <div className='flex flex-col gap-3'>
                <span className='text-[16px]'>Email Address</span>
                <span className='text-[19px] font-bold'>thecapitallanka@gmail.com</span>
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='w-[72px] h-[72px] flex justify-center items-center bg-[#EB268F]'>
                <Image src={Phone} alt="/" className='w-8' />
              </div>
              <div className='flex flex-col gap-3'>
                <span className='text-[16px]'>Phone</span>
                <span className='text-[19px] font-bold'>+94776973331</span>
              </div>
            </div>

          </div>

          {/* form */}
          <div className='bg-[#35367F] p-[48px] flex flex-col text-white gap-6'>
            <span className='text-[16px]'>Fill the form</span>
            <h1 className='text-[40px] font-bold'>Get In Touch</h1>
            <input type='text' className='w-full p-3 text-black bg-white border-none rounded-md outline-none' placeholder='Enter your name here' />
            <input type='text' className='w-full p-3 text-black bg-white border-none rounded-md outline-none' placeholder='Enter your email address here' />
            <input type='text' className='w-full p-3 text-black bg-white border-none rounded-md outline-none' placeholder='Enter your phone number here' />
            <textarea placeholder='Enter your message here' className='w-full p-3 text-black bg-white border-none rounded-md outline-none h-36'></textarea>
            <div>
              <button className='text-white uppercase px-[32px] py-[17px] bg-[#EB268F] rounded-md hover:bg-[#C8207A] active:scale-105'>Send Message</button>
            </div>
          </div>
        </div>

        <div className="w-full ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2359.4692824886374!2d80.43961601886635!3d5.9756551892499035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNTgnMzEuMCJOIDgwwrAyNicyMy40IkU!5e0!3m2!1sen!2slk!4v1700993671529!5m2!1sen!2slk"

          height="350"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          title="cozybusy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full"></iframe>

      </div>

      </div>


 


      <Footer />
    </div>
  )
}

export default page
