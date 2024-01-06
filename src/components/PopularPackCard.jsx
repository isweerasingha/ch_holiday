"use client";
import { Fade } from "react-awesome-reveal";

import React from "react";
import Image from "next/image";

const PopularPackCard = ({ Img, Days, Location, Price, Rate }) => {
  return (
    <div>
      <Fade>
        <div className="relative flex flex-col">
          <div className="relative w-full overflow-hidden group">
            <Image
              width={100}
              height={50}
              src={Img}
              alt="/"
              className="w-full duration-300 group-hover:scale-110"
            />
          </div>
          <div className="xl:p-6 lg:p-2 p-6 md:p-4 bg-[#1C1D43] text-white">
            <div className="flex justify-between gap-3">
              <div className="flex flex-col items-start w-3/5 gap-3 pr-2 border-e-2">
                <span className="text-start">
                  Sri Lanka Tour Package {Days} Days | Private Tour
                </span>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 10.74 5.5 12.37 6.41 13.84C7.36 15.38 8.61 16.7 9.57 18.24C10.04 18.99 10.38 19.69 10.74 20.5C11 21.05 11.21 22 12 22C12.79 22 13 21.05 13.25 20.5C13.62 19.69 13.95 18.99 14.42 18.24C15.38 16.71 16.63 15.39 17.58 13.84C18.5 12.37 19 10.74 19 9C19 5.13 15.87 2 12 2ZM12 11.75C10.62 11.75 9.5 10.63 9.5 9.25C9.5 7.87 10.62 6.75 12 6.75C13.38 6.75 14.5 7.87 14.5 9.25C14.5 10.63 13.38 11.75 12 11.75Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-sm">{Location}</span>
                </div>
              </div>
              <div className="flex flex-col justify-start w-2/5 gap-3 text-start">
                <span className="text-sm">{Days} Days</span>
                <div className="flex items-center gap-1">
                  <h1 className="font-bold">{Price} /</h1>
                  <span className="text-sm"> Person</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16.23 18L12 15.45L7.77 18L8.89 13.19L5.16 9.96L10.08 9.54L12 5L13.92 9.53L18.84 9.95L15.11 13.18L16.23 18Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-sm">{Rate}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex gap-3 px-5 py-2 text-white top-3 right-3 bg-[#EB268F]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16.23 18L12 15.45L7.77 18L8.89 13.19L5.16 9.96L10.08 9.54L12 5L13.92 9.53L18.84 9.95L15.11 13.18L16.23 18Z"
                fill="white"
              />
            </svg>
            <span>Featured</span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default PopularPackCard;
