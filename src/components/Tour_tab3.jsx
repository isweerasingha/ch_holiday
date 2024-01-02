import React from 'react'
import Image from 'next/image';
import Table1 from '../assets/Table1.png';
import Table2 from '../assets/Table2.png';
import Check from '../assets/material-symbols_check-circle.png';

const Tour_tab3 = () => {



    return (
        <div className='flex flex-col gap-10 lg:gap-14'>
            <div className='flex flex-col gap-6 px-3 lg:px-44 md:px-10'>
                <Image src={Table1} alt='/' className='w-full' />

            </div>

            <div className='flex flex-col px-3 lg:px-28 md:px-10'>

                <div className='w-full gap-10 md:gap-5 '>
                    <div className='flex flex-col gap-5 md:gap-6'>

                        <h1 className='text-xl font-bold md:text-2xl'>Payments – Can be made in India in INR / We can collect INR and USD on arrival</h1>

                        <p className='text-sm font-bold md:text-base'>
                            Payments – Can be made in India in INR / We can collect INR and USD on arrival
                        </p>

                        <div className='flex flex-col gap-3 text-sm'>
                            <div className='flex items-center gap-3'>
                                <Image src={Check} alt='/' />
                                <span>Rates are per person In USD.</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Image src={Check} alt='/' />
                                <span>Rates are Subject to Change as per local currency fluctuations</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Image src={Check} alt='/' />
                                <span>Rates could also change basis decision by the govt or any operator</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Image src={Check} alt='/' />
                                <span>Payment needs to be made in advance or on the spot</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col gap-6 px-3 lg:px-44 md:px-10'>
                <Image src={Table2} alt='/' className='w-full' />

            </div>
            

        </div>
    )
}

export default Tour_tab3
