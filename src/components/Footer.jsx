import React from 'react'
import Image from 'next/image';
import white_logo from '../assets/white_logo.png';
import location from '../assets/location_on.png';
import Phone from '../assets/wifi_calling_3.png';
import Mail from '../assets/mail.png';
import Arrow from '../assets/arrow_back_ios_new.png';

const Footer = () => {
    return (
        <div className='footer_bg h-[100vh] w-full grid grid-cols-1  text-white'>
            <div className='h-[50vh]'></div>
            <div className='lg:h-[50vh] h-full w-full flex flex-col lg:flex-row bg-[#262626] px-3  lg:px-28 md:px-5 gap-10 lg:gap-6  items-center'>
                <div className='flex flex-col w-full gap-5 pr-gap-1010 xl: lg:w-2/6'>
                    <Image src={white_logo} alt="/" />
                    <p className='text-justify xl:text-lg'>From the vibrant landscapes of Sri Lanka to the allure of global destinations, we invite you to embark on a journey with us.</p>
                </div>
                <div className='flex flex-col w-full gap-10 lg:gap-5 lg:flex-row lg:w-4/6'>
                    <div className='grid w-full grid-cols-2 gap-5 md:w-3/5'>

                        {/*  */}
                        <div className='flex flex-col gap-5'>
                            <h1>Quick Link</h1>
                            <hr className='border-[#EB268F] border-2 w-40 ' />
                            <div className='flex items-center gap-2'>
                            <Image src={Arrow} alt="/" />
                                <span>Home</span>
                            </div>
                            <div className='flex items-center gap-2'>
                            <Image src={Arrow} alt="/" />
                                <span>Tours</span>
                            </div>
                            <div className='flex items-center gap-2'>
                            <Image src={Arrow} alt="/" />
                                <span>Destinations</span>
                            </div>
                            <div className='flex items-center gap-2'>
                            <Image src={Arrow} alt="/" />
                                <span>Contact Us</span>
                            </div>
                        </div>

                        {/*  */}
                        <div className='flex flex-col gap-5'>
                            <h1>Information</h1>
                            <hr className='border-[#EB268F] border-2 w-40' />
                            <div className='flex items-center gap-2'>
                            <Image src={Arrow} alt="/" />
                                <span>About Us</span>
                            </div>
                            <div className='flex items-center gap-2'>
                            <Image src={Arrow} alt="/" />
                                <span>Blog</span>
                            </div>
                            <div className='flex items-center gap-2'>
                            <Image src={Arrow} alt="/" />
                                <span>Privacy Policy</span>
                            </div>
                            <div className='flex items-center gap-2'>
                            <Image src={Arrow} alt="/" />
                                <span>Terms & Conditions</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full pb-10 lg:pb-0 lg:w-2/5'>
                        <div className='flex flex-col gap-5'>
                            <h1>Get in Touch</h1>
                            <hr className='border-[#EB268F] border-2 w-40' />
                            <div className='flex gap-5 lg:flex-col xl:flex-row xl:text-sm'>
                                <div className='flex items-center gap-2'>
                                <Image src={location} alt="/" />
                                    <span>99 Roving St., Pku</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                <Image src={Phone} alt="/" />
                                    <span>+94 78 875 5092</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-2 xl:text-sm'>
                            <Image src={Mail} alt="/" />
                                <span>thecapitallanka@gmail.com</span>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h1 className='text-lg font-bold'>Social Media :</h1>
                                <div className='flex gap-3'>
                                    <div className='bg-[#EB268F] p-1 flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 hover:bg-[#bc4283] hover:cursor-pointer' >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M16.0003 2.71973C8.66699 2.71973 2.66699 8.70639 2.66699 16.0798C2.66699 22.7464 7.54699 28.2798 13.9203 29.2798V19.9464H10.5337V16.0798H13.9203V13.1331C13.9203 9.78639 15.907 7.94639 18.9603 7.94639C20.4137 7.94639 21.9337 8.19973 21.9337 8.19973V11.4931H20.2537C18.6003 11.4931 18.0803 12.5197 18.0803 13.5731V16.0798H21.787L21.187 19.9464H18.0803V29.2798C21.2222 28.7835 24.0833 27.1804 26.1469 24.7598C28.2105 22.3392 29.3409 19.2606 29.3337 16.0798C29.3337 8.70639 23.3337 2.71973 16.0003 2.71973Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className='bg-[#EB268F] p-1 flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 hover:bg-[#bc4283] hover:cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="white" />
                                            <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className='bg-[#EB268F] p-1 flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 hover:bg-[#bc4283] hover:cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_1_1921)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46112 23.4473V7.99898H0.326953V23.4473H5.46112V23.4473ZM2.89458 5.89054C4.68441 5.89054 5.79933 4.70329 5.79933 3.22087C5.76548 1.70549 4.68441 0.551758 2.92814 0.551758C1.17159 0.551805 0.0234375 1.70554 0.0234375 3.22091C0.0234375 4.70334 1.13775 5.89059 2.86078 5.89059L2.89458 5.89054ZM8.30269 23.4473C8.30269 23.4473 8.37005 9.44844 8.30269 7.99902H13.4377V10.2394H13.4036C14.0788 9.18515 15.2952 7.63626 18.0648 7.63626C21.4438 7.63626 23.9765 9.84421 23.9765 14.5894V23.4474H18.8424V15.1829C18.8424 13.1063 18.0995 11.6893 16.241 11.6893C14.8228 11.6893 13.9777 12.6446 13.6065 13.5681C13.4707 13.8967 13.4377 14.3584 13.4377 14.8201V23.4473H8.30269Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_1921">
                                                    <rect width="24" height="24" rx="2" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className='bg-[#EB268F] p-1 flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 hover:bg-[#bc4283] hover:cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_1_1927)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58613 15.1029V8.36877C11.9768 9.49368 13.8283 10.5804 16.0181 11.752C14.212 12.7536 11.9768 13.8775 9.58613 15.1029ZM22.9092 5.01955C22.4968 4.47624 21.794 4.05332 21.0457 3.9133C18.8463 3.49564 5.12518 3.49445 2.92698 3.9133C2.32693 4.02579 1.7926 4.29769 1.3336 4.72014C-0.600435 6.51522 0.00559941 16.1417 0.471777 17.701C0.667809 18.3759 0.921228 18.8627 1.24038 19.1822C1.65157 19.6047 2.21456 19.8956 2.86123 20.026C4.67214 20.4006 14.0016 20.61 21.0074 20.0822C21.6529 19.9698 22.2243 19.6695 22.6749 19.2291C24.4631 17.4412 24.3412 7.27417 22.9092 5.01955Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_1927">
                                                    <rect width="24" height="24" rx="2" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full py-[36px] text-center text-white bg-[#3E4095] px-3'>
                <span>Copyright © 2023 CH Asian Holidays. All Rights Reserved.  |  Developed By  Mindcode Digital Solutions (Pvt) Ltd </span>
            </div>
        </div>
    )
}

export default Footer
