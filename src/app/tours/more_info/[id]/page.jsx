"use client";
import { Fade } from "react-awesome-reveal";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import hero from "../../../../assets/tours_moreinfo_hero.png";
import Footer from "@/components/Footer";
import Arrow from "../../../../assets/arrow_back_ios_new.png";
import { Loader, Skeleton, Tabs, rem } from "@mantine/core";
import { HiBriefcase } from "react-icons/hi";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { MdSummarize } from "react-icons/md";
import Tour_tab1 from "@/components/Tour_tab1";
import Tour_tab2 from "@/components/Tour_tab2";
import Tour_tab4 from "../../../../components/Tour_tab4";
import Tour_tab3 from "@/components/Tour_tab3";
import http from "@/services/http";
import apiRoutes from "@/constants/apiRoutes";

const TourMoreInfo = ({ params }) => {
  const [tourData, setTourData] = useState();
  const iconStyle = { width: rem(20), height: rem(20) };

  useEffect(() => {
    fetchTourData();
  }, []);

  const fetchTourData = async () => {
    try {
      const response = await http().get(apiRoutes.GET_TOUR_DATA + params.id);
      console.log("Tour Data", response.data);
      setTourData(response.data);
    } catch (err) {
      console.log("Error fetching Tour", err);
    }
  };

  return (
    <div>
      <Navbar />

      {tourData ? (
        <Fade>
          <div className="relative w-full">
            <Image src={hero} alt="/" className="w-full" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#0000004a] flex justify-center items-center text-white">
              <div className="flex flex-col gap-1 text-center md:gap-4">
                <h1 className="text-xl font-bold md:text-5xl px-12 md:px-28 lg:px-64">
                  {tourData.headerTitle}
                </h1>
                <div className="flex items-center justify-center gap-2 mt-5 text-sm md:text-xl">
                  <h1 className="font-bold">Home</h1>
                  <Image src={Arrow} alt="/" className="w-4" />
                  <h1>Tours</h1>
                  <Image src={Arrow} alt="/" className="hidden w-4 md:flex" />
                  <span className="hidden text-sm md:flex">
                    {tourData.headerTitle}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-10 lg:pt-20">
            <Tabs
              color="#EB268F"
              variant="pills"
              radius="xs"
              defaultValue="Package_Details"
            >
              <Tabs.List className="px-3 lg:px-28 md:px-10">
                <Tabs.Tab
                  value="Package_Details"
                  leftSection={<HiBriefcase style={iconStyle} />}
                  className="bg-[#EB268F] w-full md:w-auto flex justify-start"
                >
                  Tour Package Details
                </Tabs.Tab>
                <Tabs.Tab
                  value="Inclusions_Exclusions"
                  leftSection={<FaArrowUpFromGroundWater style={iconStyle} />}
                  className="bg-[#EB268F] w-full md:w-auto flex justify-start"
                >
                  Inclusions & Exclusions
                </Tabs.Tab>
                <Tabs.Tab
                  value="Hotels_Pricing"
                  leftSection={<FaSackDollar style={iconStyle} />}
                  className="bg-[#EB268F] w-full md:w-auto flex justify-start"
                >
                  Hotels & Pricing
                </Tabs.Tab>
                <Tabs.Tab
                  value="Summery"
                  leftSection={<MdSummarize style={iconStyle} />}
                  className="bg-[#EB268F] w-full md:w-auto flex justify-start"
                >
                  Summery
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="Package_Details" className="py-10">
                <Tour_tab1 tourData={tourData} />
              </Tabs.Panel>

              <Tabs.Panel value="Inclusions_Exclusions" className="py-10">
                <Tour_tab2 />
              </Tabs.Panel>

              <Tabs.Panel value="Hotels_Pricing" className="py-10">
                <Tour_tab3 />
              </Tabs.Panel>

              <Tabs.Panel value="Summery" className="py-10">
                <Tour_tab4 />
              </Tabs.Panel>
            </Tabs>
          </div>
        </Fade>
      ) : (
        <div className="w-full py-24 px-5 lg:px-10">
          <Skeleton height={100} circle mb="xl" />
          <Skeleton height={15} radius="sm" mb="sm" />
          <Skeleton height={15} radius="sm" mb="sm" />
          <Skeleton height={15} radius="sm" mb="sm" />
          <Skeleton height={15} radius="sm" mb="sm" />
          <Skeleton height={15} width="70%" radius="sm" />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TourMoreInfo;
