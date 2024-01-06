import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

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

const HomePopularPackages = () => {
  const [tourPackages, setTourPackages] = useState([]);

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
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-home-packages",
          prevEl: ".swiper-button-prev-home-packages",
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
        {tourPackages?.map((tour, index) => (
          <SwiperSlide key={index}>
            <Link href={routes.TOUR_PACKAGE_MORE_INFO + tour.id}>
              <PopularPackCard
                Img={tour.image.original}
                Days={tour.days}
                Location={tour.location}
                Price={tour.price}
                Rate={tour.rate}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomePopularPackages;
