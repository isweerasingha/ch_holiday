"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import hero from "../../assets/destination_hero.png";
import Footer from "@/components/Footer";

import Arrow from "../../assets/arrow_back_ios_new.png";

import Greece from "../../assets/greecee.png";
import Africa from "../../assets/africaa.png";
import France1 from "../../assets/francee.png";
import Europe from "../../assets/europe.png";
import France2 from "../../assets/francee2.png";
import India from "../../assets/india.png";
import DestinationCard from "@/components/DestinationCard";
import routes from "@/constants/routes";

const destinationsData = [
  {
    id: 1,
    image: Greece,
    place: "Greece",
    description: "Experience the ancient history & beaches",
  },
  {
    id: 2,
    image: Africa,
    place: "Africa",
    description: "Embark on a journey for your lifetime",
  },
  {
    id: 3,
    image: France1,
    place: "France",
    description: "Indulge in the art, culture, and cuisine",
  },
  {
    id: 4,
    image: Europe,
    place: "Europe",
    description: "Experience the rich history & landscapes",
  },
  {
    id: 5,
    image: France2,
    place: "France",
    description: "Vibrant culture, stunning beaches, cuisine",
  },
  {
    id: 6,
    image: India,
    place: "India",
    description: "A Tapestry of Diversity, History, and Spiritual Riches",
  },
];

const Destinations = () => {
  const [destinations, setDestinations] = useState(destinationsData);

  return (
    <div className="w-full">
      <Navbar />
      <div className="relative w-full">
        <Image src={hero} alt="/" className="w-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#0000004a] flex justify-center items-center text-white">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold">Destination</h1>
            <div className="flex items-center justify-center gap-2 md:text-xl">
              <h1 className="font-bold">Home</h1>
              <Image src={Arrow} alt="/" className="w-4" />
              <h1>Destination</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-3 px-3 py-10 lg:gap-10 md:grid-cols-3 lg:py-20 lg:px-28 md:px-10">
        {destinations.map((destination) => (
          <Link key={destination.id} href={routes.DESTINATION_MORE_INFO}>
            <DestinationCard
              Img={destination.image}
              Place={destination.place}
              Desc={destination.description}
            />
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Destinations;
