import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image';
import hero from '../../assets/tours_hero.png';
import Footer from '@/components/Footer';

import Arrow from '../../assets/arrow_back_ios_new.png';
import PopularPackCard from '@/components/PopularPackCard';

import PopularPackImg1 from '../../assets/popularPack_img1.png';
import PopularPackImg2 from '../../assets/popularPack_img2.png';
import PopularPackImg3 from '../../assets/popularPack_img3.png';
import PopularPackImg4 from '../../assets/popularPack_img4.png';
import PopularPackImg5 from '../../assets/popularPack_img5.png';
import PopularPackImg6 from '../../assets/popularPack_img6.png';

const Tours = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className='relative w-full'>
        <Image src={hero} alt="/" className='w-full' />
        <div className='absolute top-0 left-0 w-full h-full bg-[#0000004a] flex justify-center items-center text-white'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-5xl font-bold'>Tours</h1>
            <div className='flex items-center justify-center gap-2 md:text-xl'>
              <h1 className='font-bold'>Home</h1>
              <Image src={Arrow} alt="/" className='w-4' />
              <h1>Tours</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='grid w-full grid-cols-1 gap-3 px-3 py-10 lg:gap-10 md:grid-cols-3 lg:py-20 lg:px-28 md:px-10'>
      <PopularPackCard Img={PopularPackImg1} Days={"3"} Location={"Galle, Sri Lanka"} Price={"$136"} Rate={"4.0 (24)"} />
      <PopularPackCard Img={PopularPackImg2} Days={"3"} Location={"Galle, Sri Lanka"} Price={"$136"} Rate={"4.0 (24)"} />
      <PopularPackCard Img={PopularPackImg3} Days={"3"} Location={"Galle, Sri Lanka"} Price={"$136"} Rate={"4.0 (24)"} />
      <PopularPackCard Img={PopularPackImg4} Days={"3"} Location={"Galle, Sri Lanka"} Price={"$136"} Rate={"4.0 (24)"} />
      <PopularPackCard Img={PopularPackImg5} Days={"3"} Location={"Galle, Sri Lanka"} Price={"$136"} Rate={"4.0 (24)"} />
      <PopularPackCard Img={PopularPackImg6} Days={"3"} Location={"Galle, Sri Lanka"} Price={"$136"} Rate={"4.0 (24)"} />
      </div>

      <Footer/>
    </div>
  )
}

export default Tours
