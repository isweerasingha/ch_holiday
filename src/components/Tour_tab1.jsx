"use client";
import { Fade } from "react-awesome-reveal";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Img1 from "../assets/Tab1_image.png";

import Download from "../assets/icon _download_.png";
import Play_circle from "../assets/icon _play circle filled_.png";
import QA from "../assets/icon _question answer_.png";

import Left from "../assets/chevron_left_black_24dp 1.png";
import Right from "../assets/chevron_right_black_24dp 1.png";
import Down from "../assets/icon _keyboard arrow down_.png";
import Up from "../assets/icon _keyboard arrow up_.png";

import Check from "../assets/material-symbols_check-circle.png";

import { Group, Collapse, Box } from "@mantine/core";

import Collaps_icon from "../assets/Collaps_icon.png";

import Hotel from "../assets/hotel.png";
import Meal from "../assets/meal.png";
import Clock from "../assets/clock.png";
import Vehicle from "../assets/vehicle.png";

import Pinnawala from "../assets/pinnawala.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import http from "@/services/http";
import apiRoutes from "@/constants/apiRoutes";

const Tour_tab1 = ({ tourData }) => {
  const [openedSchedules, setOpenedSchedules] = useState([]);

  const handleOpenedSchedule = (index) => {
    const newOpenedSchedules = [...openedSchedules];
    newOpenedSchedules[index] = !newOpenedSchedules[index];
    setOpenedSchedules(newOpenedSchedules);
  };

  return (
    <div className="w-full">
      <Fade>
        <div className="grid grid-cols-1 px-3 pb-10 md:grid-cols-2 lg:px-28 md:px-10">
          <Image src={tourData.images[0].original} alt="/" width={500} height={100}/>
          <div className="flex items-center justify-center py-6 md:py-0 lg:px-20 md:px-6">
            <div className="flex flex-col w-full gap-3 lg:gap-5">
              <h1 className="text-2xl font-bold lg:text-4xl text-[#262626]">
                {tourData.title}
              </h1>
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-bold">{tourData.numberOfDays}</h1>
                <span>5.0 (15)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex justify-between w-1/2">
                  <span>Start and end in </span>
                  <span>:</span>
                </div>
                <div className="w-1/2">{tourData.startingCity}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex justify-between w-1/2">
                  <span>Max group size</span>
                  <span>:</span>
                </div>
                <div className="w-1/2">{tourData.maxGroupSize}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex justify-between w-1/2">
                  <span>Age Range</span>
                  <span>:</span>
                </div>
                <div className="w-1/2">{tourData.ageGroups}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex justify-between w-1/2">
                  <span>Operated in</span>
                  <span>:</span>
                </div>
                <div className="w-1/2">{tourData.operatedLanguage}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#3E4095] py-6 grid md:grid-cols-3 lg:px-28 md:px-10 px-3 w-full text-white grid-cols-1 gap-6 md:gap-0">
          <div className="flex flex-col items-center justify-center gap-3 pb-5 border-b-2 md:border-e-2 md:border-b-0 md:flex-row md:pb-0">
            <a
              href={tourData.pdfFile ? tourData.pdfFile : ""}
              className="flex flex-col items-center justify-center md:flex-row"
            >
              <Image src={Download} alt="/" />
              <h1>Download Tour Guide PDF Brochure</h1>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 pb-5 border-b-2 md:border-e-2 md:border-b-0 md:flex-row md:pb-0">
            <a
              href={tourData.videoLink}
              target="_blank"
              className="flex flex-col items-center justify-center md:flex-row"
            >
              <Image src={Play_circle} alt="/" />
              <h1>Watch Video</h1>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 pb-5 border-b-2 md:border-b-0 md:flex-row md:pb-0">
            <Image src={QA} alt="/" />
            <h1>Ask a Question</h1>
          </div>
        </div>

        <div className="px-3 py-10 text-center lg:px-28 md:px-10 lg:py-20">
          <h1 className="text-2xl font-bold text-[#262626]">
            Locations You&apos;ll View
          </h1>
          <p className="pt-10">{tourData.locationDescription}</p>
          <div className="w-full pt-10">
            <div className="flex justify-end gap-4">
              <button className=" bg-[#3E4095] hover:bg-[#31327a] hover:cursor-pointer swiper-button-prev">
                <Image src={Left} alt="/" />
              </button>
              <button className="bg-[#EB268F] hover:bg-[#792c55] hover:cursor-pointer swiper-button-next">
                <Image src={Right} alt="/" />
              </button>
            </div>
          </div>

          {/* lg */}
          <div className="pt-10">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
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
              modules={[Pagination, Autoplay, Navigation]}
              loop={true}
            >
              {tourData.locations?.map((location, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <Image
                      src={location.image.original}
                      alt="/"
                      width={100}
                      height={100}
                      className="w-full"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000be] to-transparent flex justify-center items-end">
                      <div className="flex flex-col gap-2 px-10 pb-10 text-center text-white md:px-3 lg:px-10">
                        <h1 className="text-2xl font-bold">{location.title}</h1>
                        <p>{location.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col px-3 lg:px-28 md:px-10">
          <h1 className="text-2xl font-bold text-[#262626]">Highlights</h1>
          <div className="grid w-full grid-cols-1 gap-3 pt-6 md:gap-5 lg:pt-10 md:grid-cols-2">
            {tourData.highlights?.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image src={Check} alt="/" />
                <span>{highlight.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col px-3 pt-10 lg:pt-20 lg:px-28 md:px-10">
          <h1 className="text-2xl font-bold text-[#262626]">The Schedule</h1>
          <p className="pt-6 lg:pt-10">{tourData.scheduleDescription}</p>
        </div>

        <div className="flex flex-col px-3 pt-10 lg:pt-20 lg:px-28 md:px-10">
          <h1 className="text-2xl font-bold text-[#262626]">Introduction</h1>
          <p className="pt-6 lg:pt-10">{tourData.scheduleIntroduction}</p>
        </div>

        <div className="flex flex-col w-full px-3 pt-10 lg:pt-20 lg:px-28 md:px-10">
          {tourData.schedules?.map((schedule, index) => (
            <Box key={index}>
              <Group justify="between" mb={5}>
                <div
                  className="flex items-center justify-between w-full"
                  onClick={() => handleOpenedSchedule(index)}
                >
                  <div className="flex items-center gap-5">
                    <Image
                      src={Collaps_icon}
                      alt="/"
                      className="w-12 md:w-16"
                    />
                    <h1 className="text-xl font-bold text-[#262626]">
                      {schedule.title}
                    </h1>
                    <span className="hidden md:block">
                      {schedule.locationName}
                    </span>
                  </div>

                  <div>
                    {!openedSchedules[index] ? (
                      <Image src={Down} alt="/" />
                    ) : (
                      <Image src={Up} alt="/" />
                    )}
                  </div>
                </div>
              </Group>

              <Collapse
                in={openedSchedules[index]}
                transitionDuration={500}
                transitionTimingFunction="linear"
              >
                <div className="flex flex-col w-full gap-2 px-5 mx-5 border-black md:mx-8 md:px-10 border-s-2">
                  <h1 className="text-lg font-medium md:hidden">
                    {schedule.locationName}
                  </h1>
                  <p className="text-sm text-justify md:text-base">
                    {schedule.description}
                  </p>
                  <div className="flex flex-col gap-5 pt-5 md:gap-3">
                    <div className="flex gap-5 md:items-center">
                      <Image src={Hotel} alt="/" className="h-fit" />
                      <div className="flex flex-col md:gap-1 md:items-center md:flex-row">
                        <span className="font-bold">Accomodation : </span>
                        <span>{schedule.accommodation}</span>
                      </div>
                    </div>

                    <div className="flex gap-5 md:items-center">
                      <Image src={Meal} alt="/" className="h-fit" />
                      <div className="flex flex-col md:gap-1 md:items-center md:flex-row">
                        <span className="font-bold">Meal Plan : </span>
                        <span> {schedule.mealPlan}</span>
                      </div>
                    </div>

                    <div className="flex gap-5 md:items-center">
                      <Image src={Clock} alt="/" className="h-fit" />
                      <div className="flex flex-col md:gap-1 md:items-center md:flex-row">
                        <span className="font-bold">Travel Time : </span>
                        <span> {schedule.travelTime}</span>
                      </div>
                    </div>

                    <div className="flex gap-5 md:items-center">
                      <Image src={Vehicle} alt="/" className="h-fit" />
                      <div className="flex flex-col md:gap-1 md:items-center md:flex-row">
                        <span className="font-bold">Transfer Mode :</span>
                        <span>{schedule.transferMode}</span>
                      </div>
                    </div>
                  </div>

                  <Image
                    src={schedule.image.original}
                    width={500}
                    height={30}
                    alt="/"
                    className="w-full pt-5"
                  />
                </div>
              </Collapse>
            </Box>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Tour_tab1;
