import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Loader, Skeleton } from "@mantine/core";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import PopularPackCard from "@/components/PopularPackCard";

import PopularPackImg1 from "../../assets/popularPack_img1.png";
import PopularPackImg2 from "../../assets/popularPack_img2.png";
import PopularPackImg3 from "../../assets/popularPack_img3.png";
import PopularPackImg4 from "../../assets/popularPack_img4.png";
import PopularPackImg5 from "../../assets/popularPack_img5.png";
import PopularPackImg6 from "../../assets/popularPack_img6.png";
import { useEffect, useState } from "react";
import routes from "@/constants/routes";
import http from "@/services/http";
import apiRoutes from "@/constants/apiRoutes";

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

const TourPackages = () => {
  const [tourPackages, setTourPackages] = useState();

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await http().get(apiRoutes.LIST_TOUR_PACKAGES);
      console.log("Tour Packages", response.data);
      setTourPackages(response.data);
    } catch (err) {
      console.log("Error fetching Tour", err);
    }
  };

  return (
    <>
      {tourPackages ? (
        <div className="grid w-full grid-cols-1 gap-3 px-3 py-10 lg:gap-10 md:grid-cols-3 lg:py-20 lg:px-28 md:px-10">
          {tourPackages.map((tour, index) => (
            <Link key={index} href={routes.TOUR_PACKAGE_MORE_INFO + tour.id}>
              <PopularPackCard
                Img={tour.image.original}
                Days={tour.days}
                Location={tour.location}
                Price={tour.price}
                Rate={tour.rate}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-20 py-24 px-10">
          {[1, 2, 3,4,5,6].map(() => (
            <div className="w-full">
              <Skeleton height={50} circle mb="xl" />
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} mt={6} radius="xl" />
              <Skeleton height={8} mt={6} width="70%" radius="xl" />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TourPackages;
