import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import hero from '../../assets/destination_hero.png';
import Footer from '@/components/Footer';

import Arrow from '../../assets/arrow_back_ios_new.png';
 
import Greece from '../../assets/greecee.png';
import Africa from '../../assets/africaa.png';
import France1 from '../../assets/francee.png';
import Europe from '../../assets/europe.png';
import France2 from '../../assets/francee2.png';
import India from '../../assets/india.png';
import DestinationCard from '@/components/DestinationCard';

const page = () => {
    return (
        <div className='w-full'>
            <Navbar />
            <div className='relative w-full'>
                <Image src={hero} alt="/" className='w-full' />
                <div className='absolute top-0 left-0 w-full h-full bg-[#0000004a] flex justify-center items-center text-white'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-5xl font-bold'>Destination</h1>
                        <div className='flex items-center justify-center gap-2 md:text-xl'>
                            <h1 className='font-bold'>Home</h1>
                            <Image src={Arrow} alt="/" className='w-4' />
                            <h1>Destination</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid w-full grid-cols-1 gap-3 px-3 py-10 lg:gap-10 md:grid-cols-3 lg:py-20 lg:px-28 md:px-10'>
                <DestinationCard Img={Greece} Place="Greece" Desc="Experience the ancient history & beaches"/>
                <DestinationCard Img={Africa} Place="Africa" Desc="Embark on a journey for your lifetime"/>
                <DestinationCard Img={France1} Place="France" Desc="Indulge in the art, culture, and cuisine"/>
                <DestinationCard Img={Europe} Place="Europe" Desc="Experience the rich history & landscapes"/>
                <DestinationCard Img={France2} Place="France" Desc="Vibrant culture, stunning beaches, cuisine"/>
                <DestinationCard Img={India} Place="India" Desc="A Tapestry of Diversity, History, and Spiritual Riches"/>
            </div>

            <Footer />
        </div>
    )
}

export default page
