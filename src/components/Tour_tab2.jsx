"use client";
import { Fade } from "react-awesome-reveal";

import React, { useState } from 'react'
import Image from 'next/image';
import Check_green from '../assets/check_green.png';
import Cancel from '../assets/cancel.png';

const inclusionsData = [
    {
        id: 1,
        img: Check_green,
        description: "Airport pick up and drop off",
    },
    {
        id: 2,
        img: Check_green,
        description: "Assistance at the airport",
    },
    {
        id: 3,
        img: Check_green,
        description: "Private luxury car (air-conditioned)",
    },
    {
        id: 4,
        img: Check_green,
        description: "Private English speaking driver for the entire Journey",
    },
    {
        id: 5,
        img: Check_green,
        description: "Sri Lanka handicraft factory visit",
    },
    {
        id: 6,
        img: Check_green,
        description: "Kandy city tour - 2 hours",
    },
    {
        id: 7,
        img: Check_green,
        description: "Colombo city tour - 3 hour",
    },
    {
        id: 8,
        img: Check_green,
        description: "Sri Lanka cultural dance visit - Free",
    },
    {
        id: 9,
        img: Check_green,
        description: "Ceylon gem factory visit",
    },
    {
        id: 10,
        img: Check_green,
        description: "Ceylon batik clothing factory visit",
    },
    {
        id: 11,
        img: Check_green,
        description: "Fuel & local insurance for the vehicle",
    },
    {
        id: 12,
        img: Check_green,
        description: "All government taxes",
    },
];

const exclusionsData = [
    {
        id: 1,
        img: Cancel,
        description: "Air-tickets are not included in this package",
    },
    {
        id: 2,
        img: Cancel,
        description: "Air-tickets are not included in this package",
    },
    {
        id: 3,
        img: Cancel,
        description: "This package excludes the sightseeing entrance charges (Unless Specified)",
    },
    {
        id: 4,
        img: Cancel,
        description: "This package excludes the sightseeing entrance charges (Unless Specified)",
    },
    {
        id: 5,
        img: Cancel,
        description: "Meals not mentioned in the itinerary",
    },
    {
        id: 6,
        img: Cancel,
        description: "Meals not mentioned in the itinerary",
    },
    {
        id: 7,
        img: Cancel,
        description: "Camera and video permits are excluded",
    },
    {
        id: 8,
        img: Cancel,
        description: "Camera and video permits are excluded",
    },

];

const Tour_tab2 = () => {

    const [inclusions, setInclusions] = useState(inclusionsData);

    const [exclusions, setExclusions] = useState(exclusionsData);

    return (
        <div className='flex flex-col gap-10 lg:gap-14'>

            <Fade>
                <div className='flex flex-col px-3 lg:px-28 md:px-10'>
                    <h1 className='text-2xl font-bold text-[#262626]'>Inclusions :</h1>
                    <div className='grid w-full grid-cols-1 gap-3 pt-6 md:gap-5 lg:pt-10 md:grid-cols-2'>

                        {inclusions.map((inclusion) => (
                            <div className='flex items-center gap-3'>
                                <Image src={inclusion.img} alt='/' />
                                <span>{inclusion.description}</span>
                            </div>
                        ))}

                    </div>
                </div>

                <div className='flex flex-col px-3 lg:px-28 md:px-10'>
                    <h1 className='text-2xl font-bold text-[#262626]'>Exclusions :</h1>
                    <div className='grid w-full grid-cols-1 gap-3 pt-6 md:gap-5 lg:pt-10 md:grid-cols-2'>
                    {exclusions.map((exclusion) => (
                            <div className='flex items-center gap-3'>
                                <Image src={exclusion.img} alt='/' />
                                <span>{exclusion.description}</span>
                            </div>
                        ))}
                    </div>

                    <hr className='w-full mt-6 lg:mt-10' />

                </div>

                <div className='flex flex-col gap-6 px-3 lg:px-28 md:px-10'>
                    <h1 className='text-2xl font-bold text-[#262626]'>Documentation</h1>

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
                    <h1 className='text-2xl font-bold text-[#262626]'>Cancelation Policy</h1>

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
                    <h1 className='text-2xl font-bold text-[#262626]'>What is an ETA?</h1>

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
