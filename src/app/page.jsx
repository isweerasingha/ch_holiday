"use client";
import { Fade } from "react-awesome-reveal";

import HomeCarousel from "@/components/HomeCarousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Couple from "../assets/couple.png";


import PopularPackImg1 from "../assets/popularPack_img1.png";
import PopularPackImg2 from "../assets/popularPack_img2.png";
import PopularPackImg3 from "../assets/popularPack_img3.png";

import PopularPackCard from "@/components/PopularPackCard";

import Couple2 from "../assets/couple2.png";
import LightHouse from "../assets/light_house.png";

import Star1 from "../assets/Star1.png";
import Star2 from "../assets/Star2.png";

import earth_icon from "../assets/earth_icon.png";
import money_icon from "../assets/money_icon.png";
import quality_icon from "../assets/quality_icon.png";
import paper_icon from "../assets/paper_icon.png";
import guide_icon from "../assets/guide_icon.png";

import review_vector_icon from "../assets/review_vector_icon.svg";

import Person from "../assets/person.png";
import Footer from "@/components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// // import required modules

export default function Home() {
  return (
    <div className="w-full poppin_font">
      <Navbar />
      <Fade>
        <HomeCarousel />

        <div className="flex flex-col w-full gap-6 px-3 py-10 text-center md:gap-10 md:py-20 bg1 lg:px-28 md:px-5">
          <span className="text-[#EB268F] text-[28px] font-medium">
            SINCE 2020
          </span>
          <div className="flex flex-col">
            <h1 className="text-[40px] font-bold md:text-[44px] lg:text-[48px] leading-tight text-[#262626]">
              Planning your next perfect
              <br />
              island trip is now hurdle-free
            </h1>
          </div>
          <div className="grid md:grid-cols-5 lg:gap-[36px] text-white grid-cols-2 gap-3 md:gap-6 box">
            {/*  */}
            <div className="flex justify-center">
              <div className="w-full h-48 card-container 2xl:w-60 2xl:h-60 xl:w-40 xl:h-40 lg:h-36 lg:w-36 md:h-36 md:w-36">
                <div className="card">
                  <div className="front face bg-[#3E4095]">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-3 font-bold text-white">
                      <Image src={earth_icon} alt="/" />
                      <span className="text-[16px] md:text-[13px] xl:text-[13px] 2xl:text-[16px]">24/7 Availability</span>
                    </div>
                  </div>
                  <div className="back face">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-xl font-bold text-white">
                      <Image src={earth_icon} alt="/" />
                      <span className="text-[16px] md:text-[13px] xl:text-[13px] 2xl:text-[16px]">24/7 Availability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="flex justify-center md:mt-24 lg:mt-26 2xl:mt-36">
              <div className="w-full h-48 card-container 2xl:w-60 2xl:h-60 xl:w-40 xl:h-40 lg:h-36 lg:w-36 md:h-36 md:w-36">
                <div className="card">
                  <div className="front face bg-[#3E4095]">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-3 font-bold text-white">
                      <Image src={money_icon} alt="/" />
                      <span className="text-[16px] md:text-[13px] xl:text-[13px] 2xl:text-[16px]">Affordable Prices</span>
                    </div>
                  </div>
                  <div className="back face">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-xl font-bold text-white">
                      <Image src={money_icon} alt="/" />
                      <span className="text-[16px] md:text-[13px] xl:text-[13px] 2xl:text-[16px]">Affordable Prices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="flex justify-center md:mt-48 lg:mt-52 2xl:mt-72">
              <div className="w-full h-48 card-container 2xl:w-60 2xl:h-60 xl:w-40 xl:h-40 lg:h-36 lg:w-36 md:h-36 md:w-36">
                <div className="card">
                  <div className="front face bg-[#3E4095]">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-3 font-bold text-white">
                      <Image src={quality_icon} alt="/" />
                      <span className="text-[16px] md:text-[13px] xl:text-[13px] 2xl:text-[16px]">Quality Services</span>
                    </div>
                  </div>
                  <div className="back face">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-xl font-bold text-white">
                      <Image src={quality_icon} alt="/" />
                      <span className="text-[16px] md:text-[13px] xl:text-[13px] 2xl:text-[16px]">Quality Services</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="flex justify-center md:mt-24 lg:mt-26 2xl:mt-36">
              <div className="w-full h-48 card-container 2xl:w-60 2xl:h-60 xl:w-40 xl:h-40 lg:h-36 lg:w-36 md:h-36 md:w-36">
                <div className="card">
                  <div className="front face bg-[#3E4095]">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-3 font-bold text-white">
                      <Image src={paper_icon} alt="/" />
                      <span className="text-[16px] md:text-[13px] xl:text-[13px] 2xl:text-[16px]">Easy to reach</span>
                    </div>
                  </div>
                  <div className="back face">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-xl font-bold text-white">
                      <Image src={paper_icon} alt="/" />
                      <span className="text-[16px] md:text-[13px] xl:text-[13px] 2xl:text-[16px]">Easy to reach</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="flex justify-center">
              <div className="w-full h-48 card-container 2xl:w-60 2xl:h-60 xl:w-40 xl:h-40 lg:h-36 lg:w-36 md:h-36 md:w-36">
                <div className="card">
                  <div className="front face bg-[#3E4095]">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-3 font-bold text-white">
                      <Image src={guide_icon} alt="/" />
                      <span className="text-[16px] md:text-[13px] xl:text-[13px] 2xl:text-[16px]">City Guide</span>
                    </div>
                  </div>
                  <div className="back face">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-xl font-bold text-white">
                      <Image src={guide_icon} alt="/" />
                      <span className="text-[16px] md:text-[13px] xl:text-[13px] 2xl:text-[16px]">City Guide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 px-3 lg:grid-cols-2 bg2 lg:pr-28 lg:pl-12 md:px-5">
          <div className="relative hidden lg:block">
            <Image
              src={Couple}
              alt="/"
              className="lg:h-[110vh]  xl:h-[75vh]  md:h-full h-[50vh] absolute w-auto bottom-0"
            />
          </div>
          <div className="flex flex-col justify-center gap-[34px] lg:py-16 md:py-10 py-5 text-white lg:pl-10">
            <div className="flex flex-col text-[28px] font-bold leading-tight ">
              <h1>Them Best Great
                <br/>
                Tourism is right here</h1>
            </div>

            <hr className="w-32 border" />
            <p className="text-[16px] text-justify">
              Embark on a journey of unparalleled tourism experiences with
              &apos;Them Best Great Tourism,&apos; exclusively presented on our
              website. Here, we invite you to delve into a world of
              extraordinary destinations and meticulously crafted itineraries
              that redefine the very essence of exploration. Whether you seek
              cultural immersion, natural wonders, or thrilling adventures, our
              platform is your gateway to a diverse tapestry of travel
              possibilities. Join us in discovering the best that global tourism
              has to offer, and let your wanderlust find its perfect match with
              &apos;Them Best Great Tourism.
            </p>
            <div className="w-full">
              <button className="bg-transparent border-2 border-white  lg:py-[17px] lg:px-[55px] py-[10px] px-[20px] uppercase text-white hover:bg-white hover:text-[#EB268F] duration-300 font-medium text-[16px]">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full lg:hidden">
            <Image src={Couple} alt="/" className="h-fit " />
          </div>
        </div>

        <div className="w-full px-3 py-10 lg:px-28 md:px-5 md:py-20">
          <div className="flex flex-col w-full gap-3 text-center">
            <h1 className="text-[40px] font-bold md:text-[44px] lg:text-[48px] text-[#262626] leading-tight">
              Uncover the Mesmerizing
            <br/>
              Sri Lanka tour packages
            </h1>
            <span className="mt-4 text-[16px]">
              Aesthetic, Nature Lover, Adventurous or Religious – What’s on your
              mind?
            </span>
          </div>

          <div className="flex justify-between w-full py-10">
            <div className="flex items-center gap-3 text-2xl font-bold">
              <h1 className="text-[33px]">Popular Packages</h1>
              <hr className="hidden w-12 border-2 border-black md:block" />
            </div>

            <div className="flex gap-4">
              <button className="swiper-button-prev bg-[#3E4095] hover:bg-[#35367F] hover:cursor-pointer active:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_778)">
                    <path
                      d="M30 14.4318L27.336 11.7998L16 22.9998L27.336 34.1998L30 31.5678L21.3468 22.9998L30 14.4318Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_778">
                      <rect
                        width="44.8"
                        height="44.8"
                        fill="white"
                        transform="translate(0.599609 0.599609)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="swiper-button-next bg-[#EB268F] hover:bg-[#C8207A] hover:cursor-pointer active:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_773)">
                    <path
                      d="M18.664 11.7998L16 14.4318L24.6532 22.9998L16 31.5678L18.664 34.1998L30 22.9998L18.664 11.7998Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_773">
                      <rect
                        width="44.8"
                        height="44.8"
                        fill="white"
                        transform="translate(0.599609 0.599609)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >

              <SwiperSlide>
                <PopularPackCard
                  Img={PopularPackImg1}
                  Days={"3"}
                  Location={"Galle, Sri Lanka"}
                  Price={"$136"}
                  Rate={"4.0 (24)"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <PopularPackCard
                  Img={PopularPackImg2}
                  Days={"5"}
                  Location={"Kandy, Sri Lanka"}
                  Price={"$525"}
                  Rate={"4.0 (24)"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <PopularPackCard
                  Img={PopularPackImg3}
                  Days={"7"}
                  Location={"Colombo, Sri Lanka"}
                  Price={"$850"}
                  Rate={"3.5 (18)"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PopularPackCard
                  Img={PopularPackImg3}
                  Days={"7"}
                  Location={"Colombo, Sri Lanka"}
                  Price={"$850"}
                  Rate={"3.5 (18)"}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-center w-full pt-12">
            <button className="bg-[#3E4095]  py-[17px]  px-[55px] uppercase text-white hover:bg-[#35367F] font-medium text-[16px]">
              View More Packages
            </button>
          </div>
        </div>

        <div className="w-full px-3 lg:px-28 md:px-5 bg3 poppin_font">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2">
            <div className="items-end justify-center hidden lg:flex">
              <Image src={Couple2} alt="/" className="" />
            </div>
            <div className="flex flex-col gap-10 py-10 md:py-16">
              <h1 className="text-[40px] font-bold md:text-[44px] lg:text-[48px] text-white">
                Why Us
              </h1>
              <div className="flex flex-col gap-5">
                {/*  */}
                <div className="flex p-4 bg-white hover:bg-[#EB268F] group duration-200 flex-col md:flex-row group-hover:text-white">
                  <div className="">
                    <div className="bg-[#EB268F] w-20 h-20 flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="49"
                        viewBox="0 0 48 49"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_917)">
                          <path
                            d="M32.3418 38.0304H42.0544C43.2916 35.6056 44.0546 32.8978 44.2241 30.0308H33.172C33.1083 32.8406 32.8244 35.5487 32.3418 38.0304Z"
                            fill="white"
                          />
                          <path
                            d="M18.7295 40.4653C20.0614 45.0979 22.0958 47.8842 24.0006 47.8842C25.9054 47.8842 27.9395 45.0979 29.2716 40.4653H18.7295Z"
                            fill="white"
                          />
                          <path
                            d="M17.2314 43.6042C16.849 42.6308 16.5093 41.579 16.2134 40.4653H7.41309C10.4358 44.7721 15.0882 47.8483 20.4739 48.7949C19.2389 47.6585 18.136 45.9063 17.2314 43.6042Z"
                            fill="white"
                          />
                          <path
                            d="M30.7689 43.6042C29.8646 45.9063 28.7616 47.6585 27.5264 48.7949C32.9122 47.8483 37.5648 44.7721 40.5877 40.4653H31.7871C31.4911 41.579 31.1514 42.6307 30.7689 43.6042Z"
                            fill="white"
                          />
                          <path
                            d="M33.1722 27.5959H44.2243C44.0548 24.7281 43.2916 22.0204 42.0544 19.5952H32.3418C32.8244 22.0773 33.1085 24.7858 33.1722 27.5959Z"
                            fill="white"
                          />
                          <path
                            d="M15.7413 29.2043C15.8637 29.3123 15.9967 29.335 16.0869 29.335C16.1769 29.335 16.31 29.3123 16.4322 29.2043C16.8464 28.8384 26.5778 20.1443 26.5778 11.3153C26.5778 5.5146 21.8716 0.794922 16.0869 0.794922C10.302 0.794922 5.5957 5.5146 5.5957 11.3155C5.5957 20.1444 15.3271 28.8386 15.7413 29.2043ZM11.8168 11.3155C11.8168 8.94264 13.7323 7.01214 16.0869 7.01214C18.4413 7.01214 20.3569 8.94264 20.3569 11.3155C20.3569 13.6883 18.4413 15.6188 16.0869 15.6188C13.7323 15.6188 11.8168 13.6882 11.8168 11.3155Z"
                            fill="white"
                          />
                          <path
                            d="M5.63415 20.2383C4.58122 22.4959 3.93103 24.9788 3.77637 27.5959H10.7777C9.11827 25.7004 7.15318 23.1448 5.63415 20.2383Z"
                            fill="white"
                          />
                          <path
                            d="M28.5543 15.0146C28.3799 15.74 28.1603 16.4563 27.9053 17.1601H29.2709C29.0502 16.3926 28.8098 15.677 28.5543 15.0146Z"
                            fill="white"
                          />
                          <path
                            d="M30.7686 14.0218C31.1511 14.9952 31.4909 16.047 31.7868 17.1607H40.5871C37.8094 13.2031 33.6549 10.2861 28.8203 9.10449C28.9026 9.5811 28.9603 10.0659 28.9889 10.5587C29.6412 11.5161 30.2393 12.6739 30.7686 14.0218Z"
                            fill="white"
                          />
                          <path
                            d="M30.7384 27.5959C30.6699 24.6423 30.3545 21.9469 29.8686 19.5952H26.8651C25.3094 22.7673 23.1773 25.5621 21.3965 27.5959H30.7384Z"
                            fill="white"
                          />
                          <path
                            d="M18.044 31.0296C17.8254 31.2224 17.581 31.3783 17.3203 31.4982C17.4446 33.8795 17.7281 36.0752 18.1319 38.0304H29.868C30.354 35.6791 30.6693 32.984 30.7378 30.0308H19.1031C18.5137 30.611 18.1227 30.9601 18.044 31.0296Z"
                            fill="white"
                          />
                          <path
                            d="M12.8553 30.0308H3.77637C3.9459 32.8978 4.70857 35.6056 5.94606 38.0304H15.6581C15.2526 35.9443 14.9917 33.885 14.8797 31.5529C14.401 31.5123 13.3337 30.5685 12.8553 30.0308Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_917">
                            <rect
                              width="48"
                              height="48"
                              fill="white"
                              transform="translate(0 0.794922)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-2 mt-3 md:pl-4 md:mt-0">
                    <h1 className="text-[#EB268F] group-hover:text-white text-[19px]">
                      All Around the world tours{" "}
                    </h1>
                    <span className="text-sm text-justify group-hover:text-white text-[16px]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet.
                    </span>
                  </div>
                </div>

                {/*  */}
                <div className="flex p-4 bg-white hover:bg-[#EB268F] group duration-200 flex-col md:flex-row group-hover:text-white">
                  <div className="">
                    <div className="bg-[#EB268F] w-20 h-20 flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="54"
                        height="55"
                        viewBox="0 0 54 55"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_942)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.55223 46.9768C7.55657 45.203 8.55054 43.4687 10.1695 41.5276L0.807089 35.5238C0.216781 35.2641 0.229802 34.8987 0.572702 34.4674L2.55631 32.7507C2.91657 32.5263 3.29854 32.4294 3.71088 32.5439L15.2653 34.5246L24.8925 23.9519L2.41741 8.53295C1.84881 8.19403 1.80106 7.81108 2.38703 7.36652L5.62938 4.74314L34.9278 13.093L43.5827 3.70876C46.4865 1.16022 49.3078 0.0201924 51.4737 0.561593C52.6674 0.860904 53.0884 1.22184 53.4574 2.35746C54.1735 4.58469 53.0624 7.5778 50.4364 10.6589L41.1824 19.4358L49.4163 49.1468L46.8294 52.4348C46.391 53.0247 46.0134 52.9762 45.6792 52.404L30.4701 29.6168L20.0442 39.3752L21.9974 51.0923C22.1103 51.5061 22.0191 51.8934 21.7934 52.2632L20.1006 54.2747C19.6796 54.6225 19.315 54.6357 19.0589 54.037L13.1384 44.5427C11.2156 46.1889 9.50545 47.1969 7.74755 47.1969C7.58695 47.1925 7.55223 47.1353 7.55223 46.9768Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_942">
                            <rect
                              width="53.3361"
                              height="54.0873"
                              fill="white"
                              transform="translate(0.333984 0.429688)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-2 mt-3 md:pl-4 md:mt-0">
                    <h1 className="text-[#EB268F] group-hover:text-white text-[19px]">
                      Private & Customized Tours{" "}
                    </h1>
                    <span className="text-sm text-justify group-hover:text-white text-[16px]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet.
                    </span>
                  </div>
                </div>

                {/*  */}
                <div className="flex p-4 bg-white hover:bg-[#EB268F] group duration-200 flex-col md:flex-row group-hover:text-white">
                  <div className="">
                    <div className="bg-[#EB268F] w-20 h-20 flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_954)">
                          <path
                            d="M17.1707 18.4637H21.2428C21.398 15.6479 21.9241 13.1144 22.7231 11.1289C19.8365 12.5082 17.7208 15.2114 17.1707 18.4637ZM17.1707 21.7972C17.7218 25.0494 19.8365 27.7527 22.7231 29.1319C21.9231 27.1464 21.398 24.6129 21.2428 21.7972H17.1707ZM27.0025 29.9945C27.8036 29.2184 29.1661 26.4089 29.4432 21.7972H24.5607C24.8388 26.4078 26.2014 29.2184 27.0025 29.9945ZM24.5617 18.4637H29.4443C29.1672 13.853 27.8046 11.0425 27.0035 10.2664C26.2014 11.0425 24.8388 13.853 24.5617 18.4637ZM31.2819 29.1319C34.1685 27.7527 36.2842 25.0494 36.8342 21.7972H32.7622C32.6069 24.6129 32.0819 27.1464 31.2819 29.1319ZM47.0035 0.129395H10.335C6.6525 0.129395 3.66797 3.11392 3.66797 6.7964V46.7984C3.66797 50.4809 6.6525 53.4655 10.335 53.4655H47.0035C48.8442 53.4655 50.337 51.9727 50.337 50.132V3.4629C50.337 1.62218 48.8442 0.129395 47.0035 0.129395ZM38.6698 43.4649H15.3352C14.4185 43.4649 13.6685 42.7149 13.6685 41.7982C13.6685 40.8815 14.4185 40.1314 15.3352 40.1314H38.6698C39.5865 40.1314 40.3365 40.8815 40.3365 41.7982C40.3365 42.7149 39.5865 43.4649 38.6698 43.4649ZM27.0025 33.4644C19.6386 33.4644 13.6685 27.4943 13.6685 20.1304C13.6685 12.7665 19.6386 6.7964 27.0025 6.7964C34.3664 6.7964 40.3365 12.7665 40.3365 20.1304C40.3365 27.4943 34.3664 33.4644 27.0025 33.4644ZM31.2819 11.1289C32.0819 13.1144 32.6069 15.6479 32.7622 18.4637H36.8342C36.2842 15.2114 34.1685 12.5082 31.2819 11.1289Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_954">
                            <rect
                              width="53.3361"
                              height="53.3361"
                              fill="white"
                              transform="translate(0.333984 0.129395)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-2 mt-3 md:pl-4 group-hover:text-white md:mt-0">
                    <h1 className="text-[#EB268F] group-hover:text-white text-[19px]">
                      Immigration & Passport Help{" "}
                    </h1>
                    <span className="text-sm text-justify text-[16px]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:hidden">
              <Image src={Couple2} alt="/" />
            </div>
          </div>
        </div>

        <div className="w-full px-3 py-10 lg:px-28 md:px-5 poppin_font lg:py-20">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-[34px] lg:py-20 md:py-10 py-5 lg:pr-14 bg-logo">
              <div className="flex flex-col text-[40px] font-bold md:text-[44px] lg:text-[48px] text-[#262626] leading-tight">
                <h1>We make your Journey<br/>Worth Remembering!</h1>
              </div>
              <p className="text-[16px] text-justify">
                Crack the myths, unearth the secrets and explore the beauty of
                Srilankan Islands! Srilanka is full of exotic beaches, beautiful
                scenery, and adventurous excursions. Plan your visit to dig
                deeper into the exciting locations and make your trip one of the
                most amazing ones. With CH Asian Holidays, you won’t have to
                worry about planning, accommodating and booking, making it
                easier for you to spend every second of your holiday tour in Sri
                Lanka the perfect one!
              </p>
              <div className="flex justify-start w-full ">
                <button className="bg-[#3E4095] lg:py-[17px] lg:px-[55px]  py-[10px] px-[20px] uppercase text-white hover:bg-[#35367F] font-medium text-[16px]">
                  View DESTINATIONS
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center py-10 lg:py-0">
              <Image src={LightHouse} alt="/" />
            </div>
          </div>
        </div>

        <div className="relative grid w-full grid-cols-1 poppin_font">
          <div className="w-full md:h-[370px] h-[500px] bg-tree"></div>
          <div className="md:h-[370px] h-[500px] w-full"></div>

          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full px-3 lg:px-28 md:px-5">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col bg-[#3E4095] md:p-8 lg:p-16 p-6 gap-6 text-white">
                <span className="text-[16px]">Testimonials & Reviews </span>
                <h1 className="text-[40px] font-bold md:text-[44px] lg:text-[48px]">
                  What People Say
                </h1>
                <p className="text-[16px]">
                  Sed congue mollis orci et tempus. Etiam semper elit id turpis
                  ornare posuere a sit amet elit. Nulla facilisi. Nullam augue
                  lectus, lobortis et risus id, ornare porttitor arcu.
                  Pellentesque habitant morbi tristique senectus et netus.
                </p>
                <div>
                  <button className="bg-white lg:py-[17px] lg:px-[55px] font-bold py-[10px] px-[20px] text-[#3E4095] hover:bg-[#e6e6e6]  text-[16px] uppercase">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="bg-[#ececf4] flex flex-col md:p-8 lg:p-16 p-6 justify-between">

                <Swiper
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Navigation]}
                  loop={true}
                  navigation={{
                    nextEl: ".swiper-button-next-review",
                    prevEl: ".swiper-button-prev-review",
                  }}
                  spaceBetween={20}
                  slidesPerView={1}
                  className="bg-[#ececf4]"
                >
                  <SwiperSlide>
                    <div className="flex flex-col gap-6 bg-[#ececf4] py-10">
                      <div className="flex w-1/2 gap-2 pr-10">
                        <Image src={Star1} alt="/" />
                        <Image src={Star1} alt="/" />
                        <Image src={Star1} alt="/" />
                        <Image src={Star1} alt="/" />
                        <Image src={Star2} alt="/" />
                      </div>

                      <p className="text-[16px]  text-justify">
                        Nulla mollis tristique blandit. Nam at accumsan felis, vitae
                        pharetra nunc. Morbi imperdiet dui eu facilisis vestibulum.
                        Sed dignissim non nibh auctor finibus. Integer mollis varius.
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-5">
                          <div className="flex items-center justify-center w-24 h-24 overflow-hidden rounded-full">
                            <Image src={Person} alt="/" className="w-full h-full" />
                          </div>
                          <div className="flex flex-col items-start justify-center gap-3">
                            <h1 className="text-[23px] font-bold text-[#262626] ">Kumto Warming</h1>
                            <span className="text-[16px]">Designation</span>
                          </div>
                        </div>
                        <div className="justify-center hidden md:flex">
                          <Image src={review_vector_icon} alt="/" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex flex-col gap-6 bg-[#ececf4] py-10">
                      <div className="flex w-1/2 gap-2 pr-10">
                        <Image src={Star1} alt="/" />
                        <Image src={Star1} alt="/" />
                        <Image src={Star1} alt="/" />
                        <Image src={Star1} alt="/" />
                        <Image src={Star2} alt="/" />
                      </div>

                      <p className="text-[16px] text-justify">
                        Nulla mollis tristique blandit. Nam at accumsan felis, vitae
                        pharetra nunc. Morbi imperdiet dui eu facilisis vestibulum.
                        Sed dignissim non nibh auctor finibus. Integer mollis varius.
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-5">
                          <div className="flex items-center justify-center w-24 h-24 overflow-hidden rounded-full">
                            <Image src={Person} alt="/" className="w-full h-full" />
                          </div>
                          <div className="flex flex-col items-start justify-center gap-3">
                            <h1 className="text-[23px] font-bold text-[#262626]">Kumto Warming</h1>
                            <span className="text-[16px]">Designation</span>
                          </div>
                        </div>
                        <div className="justify-center hidden md:flex">
                          <Image src={review_vector_icon} alt="/" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                </Swiper>

                <div className="flex gap-4 mt-6">
                  <button className="swiper-button-prev-review bg-[#3E4095] hover:bg-[#35367F] hover:cursor-pointer active:scale-105">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_778)">
                        <path
                          d="M30 14.4318L27.336 11.7998L16 22.9998L27.336 34.1998L30 31.5678L21.3468 22.9998L30 14.4318Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_778">
                          <rect
                            width="44.8"
                            height="44.8"
                            fill="white"
                            transform="translate(0.599609 0.599609)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button className="swiper-button-next-review bg-[#EB268F] hover:bg-[#C8207A] hover:cursor-pointer active:scale-105">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_773)">
                        <path
                          d="M18.664 11.7998L16 14.4318L24.6532 22.9998L16 31.5678L18.664 34.1998L30 22.9998L18.664 11.7998Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_773">
                          <rect
                            width="44.8"
                            height="44.8"
                            fill="white"
                            transform="translate(0.599609 0.599609)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Fade>
    </div>
  );
}
