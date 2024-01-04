"use client";
import { Fade } from "react-awesome-reveal";

import React from 'react'
import Image from 'next/image';
import Check_green from '../assets/check_green.png';
import Cancel from '../assets/cancel.png';

const Tour_tab2 = () => {
    return (
        <div className='flex flex-col gap-10 lg:gap-14'>
            
            <Fade> 
            <div className='flex flex-col px-3 lg:px-28 md:px-10'>
                <h1 className='text-2xl font-bold'>Inclusions :</h1>
                <div className='grid w-full grid-cols-1 gap-3 pt-6 md:gap-5 lg:pt-10 md:grid-cols-2'>
                    <div className='flex flex-col gap-3 md:gap-5'>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>Airport pick up and drop off</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>Assistance at the airport</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>Private luxury car (air-conditioned)</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>Private English speaking driver for the entire Journey</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>Sri Lanka handicraft factory visit</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>Kandy city tour - 2 hours</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 md:gap-5'>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>Colombo city tour - 3 hour</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>Sri Lanka cultural dance visit - Free</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>Ceylon gem factory visit</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>Ceylon batik clothing factory visit</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>Fuel & local insurance for the vehicle</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Check_green} alt='/' />
                            <span>All government taxes</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col px-3 lg:px-28 md:px-10'>
                <h1 className='text-2xl font-bold'>Exclusions :</h1>
                <div className='grid w-full grid-cols-1 gap-3 pt-6 md:gap-5 lg:pt-10 md:grid-cols-2'>
                    <div className='flex flex-col gap-3 md:gap-5'>
                        <div className='flex items-center gap-3'>
                            <Image src={Cancel} alt='/' />
                            <span>Air-tickets are not included in this package</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Cancel} alt='/' />
                            <span>This package excludes the sightseeing entrance charges (Unless Specified)</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Cancel} alt='/' />
                            <span>Meals not mentioned in the itinerary</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Cancel} alt='/' />
                            <span>Camera and video permits are excluded</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 md:gap-5'>
                        <div className='flex items-center gap-3'>
                            <Image src={Cancel} alt='/' />
                            <span>Air-tickets are not included in this package</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Cancel} alt='/' />
                            <span>This package excludes the sightseeing entrance charges (Unless Specified)</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Cancel} alt='/' />
                            <span>Meals not mentioned in the itinerary</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={Cancel} alt='/' />
                            <span>Camera and video permits are excluded</span>
                        </div>
                    </div>
                </div>

                <hr className='w-full mt-6 lg:mt-10' />

            </div>

            <div className='flex flex-col gap-6 px-3 lg:px-28 md:px-10'>
                <h1 className='text-2xl font-bold'>Documentation</h1>

                <h1 className='mt-3 text-xl font-bold'>For confirmation need the following</h1>
                <div className='flex flex-col gap-3'>
                    <span>. Valid Passport (minimum 06 months)</span>
                    <span>. Flight Tickets</span>
                    <span>. Payment mode</span>
                    <span>. Full payment to provide you with the final confirmations</span>
                </div>

                <h1 className='mt-3 text-xl font-bold'>This is to keep you informed that the following documents will be checked for Indian passengers traveling to Sri Lanka under tourism protocol during check-in at the Airport.</h1>
                <div className='flex flex-col gap-3'>
                    <span>. Valid Passport (minimum 06 months)</span>
                    <span>. Approved ETA visa</span>
                    <span>. Confirmed ticket for onward and return journey</span>
                    <span>. Hotel Confirmation Voucher 01 Copy</span>
                </div>

                <hr className='w-full mt-6 lg:mt-10' />

            </div>

            <div className='flex flex-col gap-6 px-3 lg:px-28 md:px-10'>
                <h1 className='text-2xl font-bold'>Cancelation Policy</h1>

                <h1 className='mt-3 text-xl font-bold'>For confirmation need the following</h1>
                <div className='flex flex-col gap-3'>
                    <span>The cancellation policy will be applicable for any reduction of rooms after the release period.</span>
                    <span>Cancellation Charges 14 days or less – 100% cancellation charge.</span>
                </div>

                <h1 className='mt-3 text-xl font-bold'>How to apply for a visa? </h1>
                <div className='flex flex-col gap-3'>
                    <p>Go through the below mail and enter your details http://www.eta.gov.lk/slvisa/ </p>
                </div>

                <hr className='w-full mt-6 lg:mt-10' />

            </div>

            <div className='flex flex-col gap-6 px-3 lg:px-28 md:px-10'>
                <h1 className='text-2xl font-bold'>What is an ETA?</h1>

                <div className='flex flex-col gap-3'>
                    <p>There is no requirement to endorse the ETA on the passport. View sample ETA approval notice and/ ETA is an official authorization for a Short Visit to Sri Lanka and is issued electronically. The ETA is introduced to provide an efficient, reliable, and simplified service to those who visit Sri Lanka. ETA holders will be issued a 30-day Short Visit visa at the port of entry in Sri Lanka. The ETA will be effective from the 1st of January 2012. The ETA is issued through an online system. No passport copies, documents, or photographs are or referral notice. ETA portal (http://www.eta.gov.lk/slvisa/)</p>
                </div>

                <h1 className='mt-3 text-xl font-bold'>On arrival at the port of entry in Sri Lanka</h1>
                <div className='flex flex-col gap-3'>
                    <p>Upon arrival, produce your passport, vaccination card, and negative PCR test report to the immigration officer at the port of entry to obtain the necessary clearance. You should bring a copy of the ETA approval notice along with you. We&apos;d like to bring your attention to the &apos;things you need to know &apos; for your safety as you make your way to an amazing time that is So Sri Lanka!</p>
                </div>

            </div>
            
            </Fade>
        </div>
    )
}

export default Tour_tab2
