"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../src/assets/Logo.png";
import Logo2 from "../../src/assets/logo2.png";
import Image from "next/image";
import { CloseOutlined } from "@ant-design/icons";
import routes from "@/constants/routes";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`z-50 flex flex-col w-full   poppin_font `}>
      {/*  */}
      <div className="flex justify-between bg-[#3E4095] w-full lg:px-28 md:px-5 px-3 text-white py-3 ">
        <div className="flex items-center gap-2 md:gap-5">
          <div className="flex items-center gap-2 md:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.08 14.82 15.69 14.9 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM19 12H21C21 7.03 16.97 3 12 3V5C15.87 5 19 8.13 19 12ZM15 12H17C17 9.24 14.76 7 12 7V9C13.66 9 15 10.34 15 12Z"
                fill="white"
              />
            </svg>
            <label className="text-[13px]">+94 78 875 5092</label>
          </div>
          |
          <div className="flex items-center gap-2 md:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"
                fill="white"
              />
            </svg>
            <label className="text-[13px]">thecapitallanka@gmail.com</label>
          </div>
        </div>
        <div className="hidden gap-3 md:flex">
          <div className="bg-[#EB268F] p-1 flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 hover:bg-[#bc4283] hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16.0003 2.71973C8.66699 2.71973 2.66699 8.70639 2.66699 16.0798C2.66699 22.7464 7.54699 28.2798 13.9203 29.2798V19.9464H10.5337V16.0798H13.9203V13.1331C13.9203 9.78639 15.907 7.94639 18.9603 7.94639C20.4137 7.94639 21.9337 8.19973 21.9337 8.19973V11.4931H20.2537C18.6003 11.4931 18.0803 12.5197 18.0803 13.5731V16.0798H21.787L21.187 19.9464H18.0803V29.2798C21.2222 28.7835 24.0833 27.1804 26.1469 24.7598C28.2105 22.3392 29.3409 19.2606 29.3337 16.0798C29.3337 8.70639 23.3337 2.71973 16.0003 2.71973Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="bg-[#EB268F] p-1 flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 hover:bg-[#bc4283] hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                fill="white"
              />
              <path
                d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="bg-[#EB268F] p-1 flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 hover:bg-[#bc4283] hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1_1921)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.46112 23.4473V7.99898H0.326953V23.4473H5.46112V23.4473ZM2.89458 5.89054C4.68441 5.89054 5.79933 4.70329 5.79933 3.22087C5.76548 1.70549 4.68441 0.551758 2.92814 0.551758C1.17159 0.551805 0.0234375 1.70554 0.0234375 3.22091C0.0234375 4.70334 1.13775 5.89059 2.86078 5.89059L2.89458 5.89054ZM8.30269 23.4473C8.30269 23.4473 8.37005 9.44844 8.30269 7.99902H13.4377V10.2394H13.4036C14.0788 9.18515 15.2952 7.63626 18.0648 7.63626C21.4438 7.63626 23.9765 9.84421 23.9765 14.5894V23.4474H18.8424V15.1829C18.8424 13.1063 18.0995 11.6893 16.241 11.6893C14.8228 11.6893 13.9777 12.6446 13.6065 13.5681C13.4707 13.8967 13.4377 14.3584 13.4377 14.8201V23.4473H8.30269Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1921">
                  <rect width="24" height="24" rx="2" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="bg-[#EB268F] p-1 flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 hover:bg-[#bc4283] hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1_1927)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.58613 15.1029V8.36877C11.9768 9.49368 13.8283 10.5804 16.0181 11.752C14.212 12.7536 11.9768 13.8775 9.58613 15.1029ZM22.9092 5.01955C22.4968 4.47624 21.794 4.05332 21.0457 3.9133C18.8463 3.49564 5.12518 3.49445 2.92698 3.9133C2.32693 4.02579 1.7926 4.29769 1.3336 4.72014C-0.600435 6.51522 0.00559941 16.1417 0.471777 17.701C0.667809 18.3759 0.921228 18.8627 1.24038 19.1822C1.65157 19.6047 2.21456 19.8956 2.86123 20.026C4.67214 20.4006 14.0016 20.61 21.0074 20.0822C21.6529 19.9698 22.2243 19.6695 22.6749 19.2291C24.4631 17.4412 24.3412 7.27417 22.9092 5.01955Z"
                  fill="white"
                />
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

      {/*  */}
      <div
        className={`flex justify-between px-3 py-3 bg-white lg:px-28 md:px-5 ${
          scrolling ? "shadow-lg fixed  duration-500 z-50 w-full" : ""
        }`}
      >
        <div>
          <Link href={routes.HOME}>
            <Image
              src={Logo}
              alt="Description of your image"
              className="w-32 lg:w-56 md:w-36"
            />
          </Link>
        </div>
        <li className="items-center hidden gap-5 font-bold md:flex">
          <ul>
            <Link href={routes.HOME}>Home</Link>
          </ul>
          <ul>
            <Link href={routes.ALL_TOUR_PACKAGES}>Tours</Link>
          </ul>
          <ul>
            <Link href={routes.ALL_DESTINATIONS}>Destinations</Link>
          </ul>
          <ul>
            <Link href={routes.ABOUT_US}>About Us</Link>
          </ul>
          <ul>
            <Link href={routes.CONTACT_US}>Contact Us</Link>
          </ul>
        </li>
        <div className="flex items-center">
          <button className="bg-[#3E4095] lg:py-[17px] lg:px-[55px] md:py-[10px] md:px-[35px] uppercase text-white hover:bg-[#31327a] font-medium text-[16px] hidden md:flex">
            Book Now
          </button>
          <svg
            onClick={handleNav}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="md:hidden"
          >
            <path
              d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
              fill="#3E4095"
            />
          </svg>
        </div>
      </div>

      <div
        className={
          nav
            ? "top-0 left-0 fixed w-[90%] border-r h-[100vh] bg-white ease-in-out duration-500 p-3 items-center z-50"
            : "fixed left-[-100%] duration-500 h-[100vh] p-3 ease-in-out top-0 w-[80%] backdrop-blur-3xl bg-[#3E4095] z-50"
        }
      >
        <div className="flex items-center justify-end text-xl md:hidden">
          <CloseOutlined onClick={handleNav} />
        </div>

        <div className="flex justify-center w-full">
          <Image
            src={Logo2}
            alt="Description of your image"
            className="w-32 lg:w-56 md:w-36"
          />
        </div>

        <ul className="flex flex-col gap-5 mt-5 font-bold text-center uppercase">
          <li className=""> Home </li>
          <li className=""> Tours </li>
          <li className=""> Destinations </li>
          <li className=""> Blog </li>
          <li className=""> About Us </li>
          <li className=""> Contact Us </li>
        </ul>
        <div className="flex justify-center w-full pb-5 mt-5 border-b-2">
          <button className="bg-[#3E4095]  py-[10px]  px-[35px] uppercase text-white hover:bg-[#31327a] font-medium text-[16px]">
            Book Now
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-5">
          <div className="bg-[#EB268F] p-1 flex justify-center items-center w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16.0003 2.71973C8.66699 2.71973 2.66699 8.70639 2.66699 16.0798C2.66699 22.7464 7.54699 28.2798 13.9203 29.2798V19.9464H10.5337V16.0798H13.9203V13.1331C13.9203 9.78639 15.907 7.94639 18.9603 7.94639C20.4137 7.94639 21.9337 8.19973 21.9337 8.19973V11.4931H20.2537C18.6003 11.4931 18.0803 12.5197 18.0803 13.5731V16.0798H21.787L21.187 19.9464H18.0803V29.2798C21.2222 28.7835 24.0833 27.1804 26.1469 24.7598C28.2105 22.3392 29.3409 19.2606 29.3337 16.0798C29.3337 8.70639 23.3337 2.71973 16.0003 2.71973Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="bg-[#EB268F] p-1 flex justify-center items-center w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                fill="white"
              />
              <path
                d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="bg-[#EB268F] p-1 flex justify-center items-center w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1_1921)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.46112 23.4473V7.99898H0.326953V23.4473H5.46112V23.4473ZM2.89458 5.89054C4.68441 5.89054 5.79933 4.70329 5.79933 3.22087C5.76548 1.70549 4.68441 0.551758 2.92814 0.551758C1.17159 0.551805 0.0234375 1.70554 0.0234375 3.22091C0.0234375 4.70334 1.13775 5.89059 2.86078 5.89059L2.89458 5.89054ZM8.30269 23.4473C8.30269 23.4473 8.37005 9.44844 8.30269 7.99902H13.4377V10.2394H13.4036C14.0788 9.18515 15.2952 7.63626 18.0648 7.63626C21.4438 7.63626 23.9765 9.84421 23.9765 14.5894V23.4474H18.8424V15.1829C18.8424 13.1063 18.0995 11.6893 16.241 11.6893C14.8228 11.6893 13.9777 12.6446 13.6065 13.5681C13.4707 13.8967 13.4377 14.3584 13.4377 14.8201V23.4473H8.30269Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1921">
                  <rect width="24" height="24" rx="2" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="bg-[#EB268F] p-1 flex justify-center items-center w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1_1927)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.58613 15.1029V8.36877C11.9768 9.49368 13.8283 10.5804 16.0181 11.752C14.212 12.7536 11.9768 13.8775 9.58613 15.1029ZM22.9092 5.01955C22.4968 4.47624 21.794 4.05332 21.0457 3.9133C18.8463 3.49564 5.12518 3.49445 2.92698 3.9133C2.32693 4.02579 1.7926 4.29769 1.3336 4.72014C-0.600435 6.51522 0.00559941 16.1417 0.471777 17.701C0.667809 18.3759 0.921228 18.8627 1.24038 19.1822C1.65157 19.6047 2.21456 19.8956 2.86123 20.026C4.67214 20.4006 14.0016 20.61 21.0074 20.0822C21.6529 19.9698 22.2243 19.6695 22.6749 19.2291C24.4631 17.4412 24.3412 7.27417 22.9092 5.01955Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1927">
                  <rect width="24" height="24" rx="2" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-5 text-sm text-center">
          <span>Copyright © 2023 CH Asian Holidays. All Rights Reserved.</span>
          <span>Developed By Mindcode Digital Solutions (Pvt) Ltd </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
