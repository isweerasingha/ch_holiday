import React from "react";
import Image from "next/image";

const DestinationCard = ({ Img, status, Place, Desc }) => {
  return (
    <div>
      <div className="relative overflow-hidden group">
        <Image src={Img} alt="/" className="w-full" />
        <div className="absolute top-0 left-0 z-30 flex items-end justify-center w-full h-full bg-gradient-to-t from-[#000000be] to-transparent group">
          <div className="relative flex flex-col gap-2 px-10 pb-10 overflow-hidden text-center text-white duration-200 md:px-3 lg:px-10 group-hover:pb-28">
            <h1 className="z-50 text-2xl font-bold">{Place}</h1>
            <p className="z-50">{Desc}</p>
            <div className="flex justify-center w-full"></div>
          </div>
        </div>

        <div className="absolute z-40 w-full h-full duration-300 -bottom-full group-hover:bottom-0 bg-gradient-to-t from-[#fc0afc6a] to-[#ff57577e] flex justify-center items-end pb-10">
          <button className="bg-white border-2  lg:py-[17px] lg:px-[55px] py-[10px] px-[20px] uppercase font-bold text-[#EB268F] text-[16px] hover:scale-105 duration-200 hover:shadow-xl">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
