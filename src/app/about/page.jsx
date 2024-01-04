"use client";
import { Fade } from "react-awesome-reveal";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import hero from "../../assets/About_hero.svg";
import Footer from "@/components/Footer";

import Arrow from "../../assets/arrow_back_ios_new.png";

import About_img1 from "../../assets/About_img1.png";
import About_img2 from "../../assets/About_img2.png";

import Bridge from "../../assets/nine_arch_bridge.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import boy1 from "../../assets/boy1.svg";
import girl from "../../assets/girl.svg";
import boy2 from "../../assets/boy2.svg";

import FB from "../../assets/fb.svg";
import Linkedin from "../../assets/linkedin.svg";
import Insta from "../../assets/insta.svg";

import { Group, Collapse, Box } from "@mantine/core";

import Down from "../../assets/icon _keyboard arrow down_.png";
import Up from "../../assets/icon _keyboard arrow up_.png";

import Rectangle from "../../assets/Rectangle 82.svg";

const About = () => {
  const [opened1, setOpened1] = useState(false);
  const handleOpened1 = () => {
    setOpened1(!opened1);
  };

  const [opened2, setOpened2] = useState(false);
  const handleOpened2 = () => {
    setOpened2(!opened2);
  };

  const [opened3, setOpened3] = useState(false);
  const handleOpened3 = () => {
    setOpened3(!opened3);
  };

  const [opened4, setOpened4] = useState(false);
  const handleOpened4 = () => {
    setOpened4(!opened4);
  };

  const [opened5, setOpened5] = useState(false);
  const handleOpened5 = () => {
    setOpened5(!opened5);
  };

  const [opened6, setOpened6] = useState(false);
  const handleOpened6 = () => {
    setOpened6(!opened6);
  };

  const [opened7, setOpened7] = useState(false);
  const handleOpened7 = () => {
    setOpened7(!opened7);
  };

  const [opened8, setOpened8] = useState(false);
  const handleOpened8 = () => {
    setOpened8(!opened8);
  };

  const [opened9, setOpened9] = useState(false);
  const handleOpened9 = () => {
    setOpened9(!opened9);
  };

  const [opened10, setOpened10] = useState(false);
  const handleOpened10 = () => {
    setOpened10(!opened10);
  };

  const [opened11, setOpened11] = useState(false);
  const handleOpened11 = () => {
    setOpened11(!opened11);
  };

  const [opened12, setOpened12] = useState(false);
  const handleOpened12 = () => {
    setOpened12(!opened12);
  };

  return (
    <div className="w-full">
      <Navbar />

      <Fade>
        <div className="relative w-full">
          <Image src={hero} alt="/" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#0000004a] flex justify-center items-center text-white">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold">About Us</h1>
              <div className="flex items-center justify-center gap-2 md:text-xl">
                <h1 className="font-bold">Home</h1>
                <Image src={Arrow} alt="/" className="w-4" />
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col w-full gap-10 py-10 lg:gap-20 lg:py-20">

          <Fade>
            <div className="grid w-full grid-cols-1 px-3 md:grid-cols-2 lg:px-28 md:px-10">
              <div className="flex items-center justify-center">
                <Image src={About_img2} alt="/" className="w-full" />
              </div>
              <div className="flex flex-col justify-center gap-6 md:pl-10 xl:pl-20">
                <h1 className="md:text-[33px] text-[28px] font-bold">
                  Welcome to CH Asian Holidays, your gateway to unforgettable travel
                  experiences in the beautiful island of Sri Lanka.{" "}
                </h1>
                <p className="text-[13px] text-justify">
                  We are a passionate team dedicated to curating exceptional
                  journeys that immerse you in the rich culture, history, and
                  natural wonders of this tropical paradise.
                </p>
              </div>
            </div>
          </Fade>

          <Fade>
            <div className="grid w-full grid-cols-1 px-3 md:grid-cols-2 lg:px-28 md:px-10">
              <div className="flex items-center justify-center md:hidden">
                <Image src={About_img1} alt="/" className="w-full" />
              </div>

              <div className="flex flex-col justify-center gap-6 md:pr-10 xl:pr-10">
                <h1 className="md:text-[33px] text-[28px] font-bold">
                  Who We Are{" "}
                </h1>
                <p className="text-[13px] text-justify">
                  At CH Asian Holidays, we believe that travel is not just about
                  reaching a destination but about the experiences that shape your
                  journey. Founded in the heart of Sri Lanka, our team consists of
                  seasoned travel enthusiasts who are committed to providing you
                  with personalized and seamless travel solutions. We take pride in
                  showcasing the best of Sri Lanka, ensuring that every moment of
                  your vacation is filled with joy and discovery.
                </p>
              </div>

              <div className="items-center justify-center hidden md:flex">
                <Image src={About_img1} alt="/" className="w-full" />
              </div>
            </div>
          </Fade>

          <Fade>
            <div className="relative w-full ">
              <Image src={Bridge} alt="/" className="w-full h-[50vh] md:h-full" />
              <div className="absolute top-0 left-0 w-full h-full bg-[#000000b6] flex justify-center items-center text-white px-3 lg:px-28 md:px-10 py-3">
                <div className="flex flex-col items-center w-full gap-4 md:w-2/3 ">
                  <h1 className="md:text-[33px] text-[28px] font-bold">
                    Our Vision
                  </h1>
                  <p className="text-[16px] text-center">
                    Our vision is to be the preferred travel partner for those
                    seeking authentic and immersive experiences in Sri Lanka. We aim
                    to redefine travel by creating tailor-made itineraries that
                    reflect the unique interests and preferences of our clients.
                    Whether you are a solo traveler, a couple on a romantic getaway,
                    or a family seeking adventure, we strive to turn your travel
                    dreams into reality.
                  </p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade>
            <div className="flex flex-col items-center w-full gap-10 px-3 lg:px-28 md:px-10">
              <div className="flex flex-col items-center w-full gap-4 md:w-2/3 ">
                <h1 className="text-[33px] font-bold">What Sets Us Apart</h1>
                <p className="text-[16px] text-center">
                  At CH Asian Holidays, we take pride in our distinctive approach to
                  travel, setting us apart as your premier choice for exploring Sri
                  Lanka. Discover the elements that make your journey with us
                  extraordinary.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col items-center gap-5 p-5 text-center border-b lg:border-e">
                  <Image src="" alt="/" className="w-full" />
                  <h1 className="text-[23px] font-bold ">
                    Tailored Sri Lankan Adventures
                  </h1>
                  <p className="text-[16px] text-center">
                    Explore the wonders of Sri Lanka with our thoughtfully curated
                    tour packages. Immerse yourself in the cultural richness,
                    historical marvels, and natural beauty of this tropical paradise
                    with personalized itineraries designed to suit your preferences.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-5 p-5 text-center border-b lg:border-s">
                  <Image src="" alt="/" className="w-full" />
                  <h1 className="text-[23px] font-bold">
                    Global Odyssey Expeditions
                  </h1>
                  <p className="text-[16px] text-center">
                    Venture beyond borders with CH Asian Holidays and discover the
                    world&apos;s most iconic destinations. Our international tour
                    packages offer a diverse range of experiences, from exploring
                    historical landmarks to basking on exotic beaches, ensuring you
                    create memories that span continents.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-5 p-5 text-center border-b lg:border-t lg:border-e lg:border-b-0">
                  <Image src="" alt="/" className="w-full" />
                  <h1 className="text-[23px] font-bold">Expertly Guided Tours</h1>
                  <p className="text-[16px] text-center">
                    Benefit from the knowledge and passion of our experienced guides
                    who accompany you on every journey. Our professional team is
                    dedicated to providing insights into the local culture, history,
                    and attractions, enhancing your travel experience with engaging
                    and informative guidance.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-5 p-5 text-center border-b lg:border-t lg:border-s lg:border-b-0">
                  <Image src="" alt="/" className="w-full" />
                  <h1 className="text-[23px] font-bold">
                    Luxurious Accommodations
                  </h1>
                  <p className="text-[16px] text-center">
                    {" "}
                    Enjoy a touch of indulgence during your travels with CH Asian
                    Holidays. We partner with premium hotels and resorts, ensuring
                    that your stay is not only comfortable but also adds a touch of
                    luxury to your overall travel experience.
                  </p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade>
            <div className="flex flex-col items-center w-full gap-10 px-3 py-10 lg:px-28 md:px-10 lg:py-20 bg-[#f5f5f5]">
              <div className="flex flex-col items-center w-full gap-4 md:w-2/3 ">
                <h1 className="text-[33px] font-bold">Our Team Members</h1>
                <p className="text-[16px] text-center">
                  Discover the faces behind CH Asian Holidays, a team united by a
                  shared love for travel and a commitment to crafting unforgettable
                  journeys. Meet the passionate individuals dedicated to ensuring
                  every step of your adventure, from planning to execution, is
                  infused with enthusiasm and professionalism.
                </p>
              </div>

              <div className="hidden w-full md:flex">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="grid grid-cols-3 mySwiper"
                >
                  <SwiperSlide>
                    <div className="relative">
                      <Image src={boy1} alt="/" className="" />
                      <div className="absolute top-0 left-0 flex items-end w-full h-full px-3 ">
                        <div className="flex flex-col items-center w-full gap-2 p-3 bg-[#3E4095] text-white">
                          <h1 className="font-bold ">Mr. Alexander Turner</h1>
                          <span className="text-sm">Founder & CEO</span>
                          <div className="flex justify-between w-1/2 pt-2">
                            <div className="">
                              <Image src={FB} alt="/" className="w-6" />
                            </div>
                            <div className="">
                              <Image src={Linkedin} alt="/" className="" />
                            </div>
                            <div className="">
                              <Image src={Insta} alt="/" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative">
                      <Image src={girl} alt="/" className="" />
                      <div className="absolute top-0 left-0 flex items-end w-full h-full px-3 ">
                        <div className="flex flex-col items-center w-full gap-2 p-3 bg-[#3E4095] text-white">
                          <h1 className="font-bold ">Ms. Emerson Jane</h1>
                          <span className="text-sm">Lead Travel Consultant</span>
                          <div className="flex justify-between w-1/2 pt-2">
                            <div className="">
                              <Image src={FB} alt="/" className="w-6" />
                            </div>
                            <div className="">
                              <Image src={Linkedin} alt="/" className="" />
                            </div>
                            <div className="">
                              <Image src={Insta} alt="/" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative">
                      <Image src={boy2} alt="/" className="" />
                      <div className="absolute top-0 left-0 flex items-end w-full h-full px-3 ">
                        <div className="flex flex-col items-center w-full gap-2 p-3 bg-[#3E4095] text-white">
                          <h1 className="font-bold ">Mr. Rahul Patel </h1>
                          <span className="text-sm">
                            Customer Experience Manager
                          </span>
                          <div className="flex justify-between w-1/2 pt-2">
                            <div className="">
                              <Image src={FB} alt="/" className="w-6" />
                            </div>
                            <div className="">
                              <Image src={Linkedin} alt="/" className="" />
                            </div>
                            <div className="">
                              <Image src={Insta} alt="/" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative">
                      <Image src={girl} alt="/" className="" />
                      <div className="absolute top-0 left-0 flex items-end w-full h-full px-3 ">
                        <div className="flex flex-col items-center w-full gap-2 p-3 bg-[#3E4095] text-white">
                          <h1 className="font-bold ">Ms. Emerson Jane</h1>
                          <span className="text-sm">Lead Travel Consultant</span>
                          <div className="flex justify-between w-1/2 pt-2">
                            <div className="">
                              <Image src={FB} alt="/" className="w-6" />
                            </div>
                            <div className="">
                              <Image src={Linkedin} alt="/" className="" />
                            </div>
                            <div className="">
                              <Image src={Insta} alt="/" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="flex w-full md:hidden">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="grid grid-cols-3 mySwiper md:hidden"
                >
                  <SwiperSlide>
                    <div className="relative">
                      <Image src={boy1} alt="/" className="" />
                      <div className="absolute top-0 left-0 flex items-end w-full h-full px-3 ">
                        <div className="flex flex-col items-center w-full gap-2 p-3 bg-[#3E4095] text-white">
                          <h1 className="font-bold ">Mr. Alexander Turner</h1>
                          <span className="text-sm">Founder & CEO</span>
                          <div className="flex justify-between w-1/2 pt-2">
                            <div className="">
                              <Image src={FB} alt="/" className="w-6" />
                            </div>
                            <div className="">
                              <Image src={Linkedin} alt="/" className="" />
                            </div>
                            <div className="">
                              <Image src={Insta} alt="/" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative">
                      <Image src={girl} alt="/" className="" />
                      <div className="absolute top-0 left-0 flex items-end w-full h-full px-3 ">
                        <div className="flex flex-col items-center w-full gap-2 p-3 bg-[#3E4095] text-white">
                          <h1 className="font-bold ">Ms. Emerson Jane</h1>
                          <span className="text-sm">Lead Travel Consultant</span>
                          <div className="flex justify-between w-1/2 pt-2">
                            <div className="">
                              <Image src={FB} alt="/" className="w-6" />
                            </div>
                            <div className="">
                              <Image src={Linkedin} alt="/" className="" />
                            </div>
                            <div className="">
                              <Image src={Insta} alt="/" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative">
                      <Image src={boy2} alt="/" className="" />
                      <div className="absolute top-0 left-0 flex items-end w-full h-full px-3 ">
                        <div className="flex flex-col items-center w-full gap-2 p-3 bg-[#3E4095] text-white">
                          <h1 className="font-bold ">Mr. Rahul Patel </h1>
                          <span className="text-sm">
                            Customer Experience Manager
                          </span>
                          <div className="flex justify-between w-1/2 pt-2">
                            <div className="">
                              <Image src={FB} alt="/" className="w-6" />
                            </div>
                            <div className="">
                              <Image src={Linkedin} alt="/" className="" />
                            </div>
                            <div className="">
                              <Image src={Insta} alt="/" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative">
                      <Image src={girl} alt="/" className="" />
                      <div className="absolute top-0 left-0 flex items-end w-full h-full px-3 ">
                        <div className="flex flex-col items-center w-full gap-2 p-3 bg-[#3E4095] text-white">
                          <h1 className="font-bold ">Ms. Emerson Jane</h1>
                          <span className="text-sm">Lead Travel Consultant</span>
                          <div className="flex justify-between w-1/2 pt-2">
                            <div className="">
                              <Image src={FB} alt="/" className="w-6" />
                            </div>
                            <div className="">
                              <Image src={Linkedin} alt="/" className="" />
                            </div>
                            <div className="">
                              <Image src={Insta} alt="/" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </Fade>

          <Fade>
            <div className="flex flex-col items-center w-full gap-10 px-3 lg:px-28 md:px-10">
              <div className="flex flex-col items-center w-full gap-4 lg:w-2/3 ">
                <h1 className="text-[33px] font-bold">
                  Frequently Asked Questions (FAQ)
                </h1>
                <p className="text-[16px] text-center">
                  Explore answers to commonly asked questions about booking,
                  customization, inclusions, and more. Find the information you need
                  to plan your perfect journey with CH Asian Holidays.
                </p>
              </div>

              <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="flex flex-col gap-10">
                  {/* 1 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened1}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              1. How do I book a tour with CH Asian Holidays?
                            </h1>
                          </div>

                          <div>
                            {!opened1 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened1}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Explore our website and select your desired tour
                              package.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Follow the easy booking process or contact our
                              customer support for assistance.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              {" "}
                              Confirm your reservation and make secure online
                              payments.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>

                  {/* 2 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened2}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              2. What is included in the tour packages?
                            </h1>
                          </div>

                          <div>
                            {!opened2 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened2}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Our packages typically include accommodation,
                              transportation, guided tours, and specified
                              activities.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Check the detailed itinerary for each package to
                              understand the inclusions.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>

                  {/* 3 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened3}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              3. Can I customize my tour itinerary?
                            </h1>
                          </div>

                          <div>
                            {!opened3 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened3}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Yes, we offer customizable options for most tour
                              packages.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Contact our travel specialists to discuss your
                              preferences and create a personalized itinerary.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>

                  {/* 4 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened4}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              4. How do I make payments for the tour?
                            </h1>
                          </div>

                          <div>
                            {!opened4 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened4}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Secure online payment options are available through
                              our website.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              We accept major credit/debit cards for convenient
                              transactions.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>

                  {/* 5 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened5}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              5. Is there a cancellation policy?
                            </h1>
                          </div>

                          <div>
                            {!opened5 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened5}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Refer to our terms and conditions for information on
                              cancellations.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Cancellation policies may vary based on the type of
                              tour and time of cancellation.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>

                  {/* 6 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened6}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              6. Are there group discounts available?
                            </h1>
                          </div>

                          <div>
                            {!opened6 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened6}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Group discounts may be applicable for certain tour
                              packages.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Contact our team for details on group rates and
                              special offers.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>
                </div>

                <div className="flex flex-col gap-10">
                  {/* 7 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened7}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              7. What type of accommodation do you provide?
                            </h1>
                          </div>

                          <div>
                            {!opened7 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened7}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Accommodations vary based on the tour package.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              We strive to offer comfortable and reputable lodging
                              options suitable for different preferences and
                              budgets.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>

                  {/* 8 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened8}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              8. Do your tours include transportation?
                            </h1>
                          </div>

                          <div>
                            {!opened8 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened8}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Yes, transportation is generally included in our tour
                              packages.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Details about the mode of transportation will be
                              provided in the itinerary.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>

                  {/* 9 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened9}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              9. How do I obtain visas for international tours?
                            </h1>
                          </div>

                          <div>
                            {!opened9 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened9}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              We can provide guidance on visa requirements and
                              assist with the application process.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Ensure you check visa requirements well in advance of
                              your travel dates.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>

                  {/* 10 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened10}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              10. Is travel insurance included in the packages?
                            </h1>
                          </div>

                          <div>
                            {!opened10 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened10}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Travel insurance is not automatically included but can
                              be arranged upon request.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              It is advisable to have comprehensive travel insurance
                              for your journey.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>

                  {/* 11 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened11}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              11. What safety measures are in place during tours?
                            </h1>
                          </div>

                          <div>
                            {!opened11 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened11}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Your safety is our priority. Our tours adhere to local
                              regulations and safety standards.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Our guides are trained to handle emergencies and
                              ensure a secure travel experience.Our guides are
                              trained to handle emergencies and ensure a secure
                              travel experience.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>

                  {/* 12 */}
                  <div className="w-full">
                    <Box>
                      <Group justify="between" mb={5}>
                        <div
                          className="flex items-center justify-between w-full"
                          onClick={handleOpened12}
                        >
                          <div className="flex items-center gap-5">
                            <h1 className="font-bold text-[23px]">
                              12. How can I contact CH Asian Holidays for further
                              assistance?
                            </h1>
                          </div>

                          <div>
                            {!opened12 ? (
                              <Image src={Down} alt="/" />
                            ) : (
                              <Image src={Up} alt="/" />
                            )}
                          </div>
                        </div>
                      </Group>

                      <Collapse
                        in={opened12}
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                      >
                        <div className="flex flex-col w-full gap-3 ">
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Visit our &apos;Contact Us&apos; page for phone numbers, email
                              addresses, and our physical address.
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Image src={Rectangle} alt="/" />
                            <span>
                              Our customer support team is available to assist you
                              with any queries or concerns.
                            </span>
                          </div>
                        </div>
                      </Collapse>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

        </div>

        <Footer />
      </Fade>
    </div>
  );
};

export default About;
