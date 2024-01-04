"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "../../assets/tours_hero.png";
import Footer from "@/components/Footer";

import Arrow from "../../assets/arrow_back_ios_new.png";
import PopularPackCard from "@/components/PopularPackCard";

import PopularPackImg1 from "../../assets/popularPack_img1.png";
import PopularPackImg2 from "../../assets/popularPack_img2.png";
import PopularPackImg3 from "../../assets/popularPack_img3.png";
import PopularPackImg4 from "../../assets/popularPack_img4.png";
import PopularPackImg5 from "../../assets/popularPack_img5.png";
import PopularPackImg6 from "../../assets/popularPack_img6.png";
import routes from "@/constants/routes";

const tours = [
  {
    id: 1,
    image: PopularPackImg1,
    days: "3",
    location: "Galle, Sri Lanka",
    price: "$136",
    rate: "4.0 (24)",
  },
  {
    id: 2,
    image: PopularPackImg2,
    days: "3",
    location: "Galle, Sri Lanka",
    price: "$136",
    rate: "4.0 (24)",
  },
  {
    id: 3,
    image: PopularPackImg3,
    days: "3",
    location: "Galle, Sri Lanka",
    price: "$136",
    rate: "4.0 (24)",
  },
  {
    id: 4,
    image: PopularPackImg4,
    days: "3",
    location: "Galle, Sri Lanka",
    price: "$136",
    rate: "4.0 (24)",
  },
  {
    id: 5,
    image: PopularPackImg5,
    days: "3",
    location: "Galle, Sri Lanka",
    price: "$136",
    rate: "4.0 (24)",
  },
  {
    id: 6,
    image: PopularPackImg6,
    days: "3",
    location: "Galle, Sri Lanka",
    price: "$136",
    rate: "4.0 (24)",
  },
];

const Tours = () => {
  const [tourPackages, setTourPackages] = useState(tours);
  return (
    <div className="w-full">
      <Navbar />
      <div className="relative w-full">
        <Image src={hero} alt="/" className="w-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#0000004a] flex justify-center items-center text-white">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold">Tours</h1>
            <div className="flex items-center justify-center gap-2 md:text-xl">
              <h1 className="font-bold">Home</h1>
              <Image src={Arrow} alt="/" className="w-4" />
              <h1>Tours</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-3 px-3 py-10 lg:gap-10 md:grid-cols-3 lg:py-20 lg:px-28 md:px-10">
        {tourPackages.map((tour, index) => (
          <Link href={routes.TOUR_PACKAGE_MORE_INFO}>
            <PopularPackCard
              key={tour.id}
              Img={tour.image}
              Days={tour.days}
              Location={tour.location}
              Price={tour.price}
              Rate={tour.rate}
            />
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Tours;
