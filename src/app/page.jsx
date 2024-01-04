'use client'

import HomeCarousel from "@/components/HomeCarousel";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Couple from '../assets/couple.png';

import PopularPackImg1 from '../assets/popularPack_img1.png';
import PopularPackImg2 from '../assets/popularPack_img2.png';
import PopularPackImg3 from '../assets/popularPack_img3.png';

import PopularPackCard from "@/components/PopularPackCard";

import Couple2 from '../assets/couple2.png';
import LightHouse from '../assets/light_house.png';

import Star1 from '../assets/Star1.png';
import Star2 from '../assets/Star2.png';

import earth_icon from '../assets/earth_icon.png';
import money_icon from '../assets/money_icon.png';
import quality_icon from '../assets/quality_icon.png';
import paper_icon from '../assets/paper_icon.png';
import guide_icon from '../assets/guide_icon.png';

import Person from '../assets/person.png';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full poppin_font">
      <Navbar />
      <HomeCarousel />

      <div className="flex flex-col w-full gap-6 px-3 py-10 text-center md:gap-10 md:py-20 bg1 lg:px-28 md:px-5" >
        <span className="text-[#EB268F] text-xl font-medium">SINCE 2020</span>
        <div className="flex flex-col gap-3 md:gap-5">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Planning your next perfect</h1>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">island trip is now hurdle-free</h1>
        </div>
        <div className="grid md:grid-cols-5 lg:gap-[36px] text-white grid-cols-2 gap-3 md:gap-6 box">

          {/*  */}
          <div class="">
            <div className="w-full h-48 card-container xl:w-60 xl:h-60 lg:h-40 lg:w-40 md:h-36 md:w-36">
              <div className="card">
                <div class="front face bg-[#3E4095]">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-3 font-bold text-white">
                    <Image src={earth_icon} alt="/" />
                    <span>24/7 Availability</span>
                  </div>
                </div>
                <div class="back face">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-xl font-bold text-white">
                    <span>24/7 Availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div class="md:mt-24 xl:mt-36">
            <div className="w-full h-48 card-container xl:w-60 xl:h-60 lg:h-40 lg:w-40 md:h-36 md:w-36">
              <div className="card">
                <div class="front face bg-[#3E4095]">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-3 font-bold text-white">
                    <Image src={money_icon} alt="/" />
                    <span>Affordable Prices</span>
                  </div>
                </div>
                <div class="back face">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-xl font-bold text-white">
                    <span>Affordable Prices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div class="md:mt-48 xl:mt-72">
            <div className="w-full h-48 card-container xl:w-60 xl:h-60 lg:h-40 lg:w-40 md:h-36 md:w-36">
              <div className="card">
                <div class="front face bg-[#3E4095]">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-3 font-bold text-white">
                    <Image src={quality_icon} alt="/" />
                    <span>Quality Services</span>
                  </div>
                </div>
                <div class="back face">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-xl font-bold text-white">
                    <span>Quality Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/*  */}
          <div class="md:mt-24 xl:mt-36">
            <div className="w-full h-48 card-container xl:w-60 xl:h-60 lg:h-40 lg:w-40 md:h-36 md:w-36">
              <div className="card">
                <div class="front face bg-[#3E4095]">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-3 font-bold text-white">
                    <Image src={paper_icon} alt="/" />
                    <span>Easy to reach</span>
                  </div>
                </div>
                <div class="back face">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-xl font-bold text-white">
                    <span>Easy to reach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div class="">
            <div className="w-full h-48 card-container xl:w-60 xl:h-60 lg:h-40 lg:w-40 md:h-36 md:w-36">
              <div className="card">
                <div class="front face bg-[#3E4095]">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-3 font-bold text-white">
                    <Image src={guide_icon} alt="/" />
                    <span>City Guide</span>
                  </div>
                </div>
                <div class="back face">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-xl font-bold text-white">
                    <span>City Guide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>

      <div className="grid w-full grid-cols-1 px-3 lg:grid-cols-2 bg2 lg:pr-28 lg:pl-12 md:px-5">
        <div className="relative hidden lg:block">
          <Image src={Couple} alt="/" className='lg:h-[110vh] xl:h-[90vh] md:h-full h-[50vh] absolute w-auto bottom-0' />
        </div>
        <div className="flex flex-col justify-center gap-[34px] lg:py-16 md:py-10 py-5 text-white lg:pl-10">
          <div className="flex flex-col text-4xl font-medium">
            <h1>Them Best Great</h1>
            <h1>Tourism is right here</h1>
          </div>

          <hr className="w-32 border" />
          <p className="text-[16px] text-justify">Embark on a journey of unparalleled tourism experiences with &apos;Them Best Great Tourism,&apos; exclusively presented on our website. Here, we invite you to delve into a world of extraordinary destinations and meticulously crafted itineraries that redefine the very essence of exploration. Whether you seek cultural immersion, natural wonders, or thrilling adventures, our platform is your gateway to a diverse tapestry of travel possibilities. Join us in discovering the best that global tourism has to offer, and let your wanderlust find its perfect match with &apos;Them Best Great Tourism.</p>
          <div className="w-full">
            <button className='bg-transparent border-2 border-white  lg:py-[17px] lg:px-[55px] py-[10px] px-[20px] uppercase text-white hover:bg-white hover:text-[#EB268F] duration-300 font-medium text-[16px]'>Learn More</button>
          </div>
        </div>
        <div className="flex justify-center w-full lg:hidden">
          <Image src={Couple} alt="/" className='h-fit ' />
        </div>
      </div>

      <div className="w-full px-3 py-10 lg:px-28 md:px-5 md:py-20">
        <div className="flex flex-col w-full gap-3 text-center">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Uncover the Mesmerizing</h1>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Sri Lanka tour packages</h1>
          <span className="mt-4">Aesthetic, Nature Lover, Adventurous or Religious – What’s on your mind?</span>
        </div>

        <div className="flex justify-between w-full py-10">
          <div className="flex items-center gap-3 text-2xl font-bold">
            <h1>Popular Packages</h1>
            <hr className="hidden w-12 border-2 border-black md:block" />
          </div>

          <div className='flex gap-4'>
            <button className=' bg-[#3E4095] hover:bg-[#35367F] hover:cursor-pointer active:scale-105'>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                <g clip-path="url(#clip0_1_778)">
                  <path d="M30 14.4318L27.336 11.7998L16 22.9998L27.336 34.1998L30 31.5678L21.3468 22.9998L30 14.4318Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1_778">
                    <rect width="44.8" height="44.8" fill="white" transform="translate(0.599609 0.599609)" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className='bg-[#EB268F] hover:bg-[#C8207A] hover:cursor-pointer active:scale-105'>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                <g clip-path="url(#clip0_1_773)">
                  <path d="M18.664 11.7998L16 14.4318L24.6532 22.9998L16 31.5678L18.664 34.1998L30 22.9998L18.664 11.7998Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1_773">
                    <rect width="44.8" height="44.8" fill="white" transform="translate(0.599609 0.599609)" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          <PopularPackCard Img={PopularPackImg1} Days={"3"} Location={"Galle, Sri Lanka"} Price={"$136"} Rate={"4.0 (24)"} />
          <PopularPackCard Img={PopularPackImg2} Days={"5"} Location={"Kandy, Sri Lanka"} Price={"$525"} Rate={"4.0 (24)"} />
          <PopularPackCard Img={PopularPackImg3} Days={"7"} Location={"Colombo, Sri Lanka"} Price={"$850"} Rate={"3.5 (18)"} />

        </div>

        <div className="flex justify-center w-full pt-12">
          <button className='bg-[#3E4095] lg:py-[17px] lg:px-[55px]  py-[10px] px-[20px] uppercase text-white hover:bg-[#35367F] font-medium text-[16px]'>View More Packages</button>
        </div>
      </div>

      <div className="w-full px-3 lg:px-28 md:px-5 bg3 poppin_font">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2">
          <div className="items-end justify-center hidden lg:flex">
            <Image src={Couple2} alt="/" className="" />
          </div>
          <div className="flex flex-col gap-10 py-10 md:py-16">
            <h1 className="text-5xl font-medium text-white">Why Us</h1>
            <div className="flex flex-col gap-5">

              {/*  */}
              <div className="flex p-4 bg-white hover:bg-[#EB268F] group duration-200 flex-col md:flex-row group-hover:text-white">
                <div className="">
                  <div className="bg-[#EB268F] w-20 h-20 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                      <g clip-path="url(#clip0_1_917)">
                        <path d="M32.3418 38.0304H42.0544C43.2916 35.6056 44.0546 32.8978 44.2241 30.0308H33.172C33.1083 32.8406 32.8244 35.5487 32.3418 38.0304Z" fill="white" />
                        <path d="M18.7295 40.4653C20.0614 45.0979 22.0958 47.8842 24.0006 47.8842C25.9054 47.8842 27.9395 45.0979 29.2716 40.4653H18.7295Z" fill="white" />
                        <path d="M17.2314 43.6042C16.849 42.6308 16.5093 41.579 16.2134 40.4653H7.41309C10.4358 44.7721 15.0882 47.8483 20.4739 48.7949C19.2389 47.6585 18.136 45.9063 17.2314 43.6042Z" fill="white" />
                        <path d="M30.7689 43.6042C29.8646 45.9063 28.7616 47.6585 27.5264 48.7949C32.9122 47.8483 37.5648 44.7721 40.5877 40.4653H31.7871C31.4911 41.579 31.1514 42.6307 30.7689 43.6042Z" fill="white" />
                        <path d="M33.1722 27.5959H44.2243C44.0548 24.7281 43.2916 22.0204 42.0544 19.5952H32.3418C32.8244 22.0773 33.1085 24.7858 33.1722 27.5959Z" fill="white" />
                        <path d="M15.7413 29.2043C15.8637 29.3123 15.9967 29.335 16.0869 29.335C16.1769 29.335 16.31 29.3123 16.4322 29.2043C16.8464 28.8384 26.5778 20.1443 26.5778 11.3153C26.5778 5.5146 21.8716 0.794922 16.0869 0.794922C10.302 0.794922 5.5957 5.5146 5.5957 11.3155C5.5957 20.1444 15.3271 28.8386 15.7413 29.2043ZM11.8168 11.3155C11.8168 8.94264 13.7323 7.01214 16.0869 7.01214C18.4413 7.01214 20.3569 8.94264 20.3569 11.3155C20.3569 13.6883 18.4413 15.6188 16.0869 15.6188C13.7323 15.6188 11.8168 13.6882 11.8168 11.3155Z" fill="white" />
                        <path d="M5.63415 20.2383C4.58122 22.4959 3.93103 24.9788 3.77637 27.5959H10.7777C9.11827 25.7004 7.15318 23.1448 5.63415 20.2383Z" fill="white" />
                        <path d="M28.5543 15.0146C28.3799 15.74 28.1603 16.4563 27.9053 17.1601H29.2709C29.0502 16.3926 28.8098 15.677 28.5543 15.0146Z" fill="white" />
                        <path d="M30.7686 14.0218C31.1511 14.9952 31.4909 16.047 31.7868 17.1607H40.5871C37.8094 13.2031 33.6549 10.2861 28.8203 9.10449C28.9026 9.5811 28.9603 10.0659 28.9889 10.5587C29.6412 11.5161 30.2393 12.6739 30.7686 14.0218Z" fill="white" />
                        <path d="M30.7384 27.5959C30.6699 24.6423 30.3545 21.9469 29.8686 19.5952H26.8651C25.3094 22.7673 23.1773 25.5621 21.3965 27.5959H30.7384Z" fill="white" />
                        <path d="M18.044 31.0296C17.8254 31.2224 17.581 31.3783 17.3203 31.4982C17.4446 33.8795 17.7281 36.0752 18.1319 38.0304H29.868C30.354 35.6791 30.6693 32.984 30.7378 30.0308H19.1031C18.5137 30.611 18.1227 30.9601 18.044 31.0296Z" fill="white" />
                        <path d="M12.8553 30.0308H3.77637C3.9459 32.8978 4.70857 35.6056 5.94606 38.0304H15.6581C15.2526 35.9443 14.9917 33.885 14.8797 31.5529C14.401 31.5123 13.3337 30.5685 12.8553 30.0308Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_917">
                          <rect width="48" height="48" fill="white" transform="translate(0 0.794922)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-2 mt-3 md:pl-4 md:mt-0">
                  <h1 className="text-[#EB268F] group-hover:text-white">All Around the world tours </h1>
                  <span className="text-sm text-justify group-hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</span>
                </div>
              </div>

              {/*  */}
              <div className="flex p-4 bg-white hover:bg-[#EB268F] group duration-200 flex-col md:flex-row group-hover:text-white">
                <div className="">
                  <div className="bg-[#EB268F] w-20 h-20 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="55" viewBox="0 0 54 55" fill="none">
                      <g clip-path="url(#clip0_1_942)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.55223 46.9768C7.55657 45.203 8.55054 43.4687 10.1695 41.5276L0.807089 35.5238C0.216781 35.2641 0.229802 34.8987 0.572702 34.4674L2.55631 32.7507C2.91657 32.5263 3.29854 32.4294 3.71088 32.5439L15.2653 34.5246L24.8925 23.9519L2.41741 8.53295C1.84881 8.19403 1.80106 7.81108 2.38703 7.36652L5.62938 4.74314L34.9278 13.093L43.5827 3.70876C46.4865 1.16022 49.3078 0.0201924 51.4737 0.561593C52.6674 0.860904 53.0884 1.22184 53.4574 2.35746C54.1735 4.58469 53.0624 7.5778 50.4364 10.6589L41.1824 19.4358L49.4163 49.1468L46.8294 52.4348C46.391 53.0247 46.0134 52.9762 45.6792 52.404L30.4701 29.6168L20.0442 39.3752L21.9974 51.0923C22.1103 51.5061 22.0191 51.8934 21.7934 52.2632L20.1006 54.2747C19.6796 54.6225 19.315 54.6357 19.0589 54.037L13.1384 44.5427C11.2156 46.1889 9.50545 47.1969 7.74755 47.1969C7.58695 47.1925 7.55223 47.1353 7.55223 46.9768Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_942">
                          <rect width="53.3361" height="54.0873" fill="white" transform="translate(0.333984 0.429688)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-2 mt-3 md:pl-4 md:mt-0">
                  <h1 className="text-[#EB268F] group-hover:text-white">Private & Customized Tours </h1>
                  <span className="text-sm text-justify group-hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</span>
                </div>
              </div>

              {/*  */}
              <div className="flex p-4 bg-white hover:bg-[#EB268F] group duration-200 flex-col md:flex-row group-hover:text-white">
                <div className="">
                  <div className="bg-[#EB268F] w-20 h-20 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                      <g clip-path="url(#clip0_1_954)">
                        <path d="M17.1707 18.4637H21.2428C21.398 15.6479 21.9241 13.1144 22.7231 11.1289C19.8365 12.5082 17.7208 15.2114 17.1707 18.4637ZM17.1707 21.7972C17.7218 25.0494 19.8365 27.7527 22.7231 29.1319C21.9231 27.1464 21.398 24.6129 21.2428 21.7972H17.1707ZM27.0025 29.9945C27.8036 29.2184 29.1661 26.4089 29.4432 21.7972H24.5607C24.8388 26.4078 26.2014 29.2184 27.0025 29.9945ZM24.5617 18.4637H29.4443C29.1672 13.853 27.8046 11.0425 27.0035 10.2664C26.2014 11.0425 24.8388 13.853 24.5617 18.4637ZM31.2819 29.1319C34.1685 27.7527 36.2842 25.0494 36.8342 21.7972H32.7622C32.6069 24.6129 32.0819 27.1464 31.2819 29.1319ZM47.0035 0.129395H10.335C6.6525 0.129395 3.66797 3.11392 3.66797 6.7964V46.7984C3.66797 50.4809 6.6525 53.4655 10.335 53.4655H47.0035C48.8442 53.4655 50.337 51.9727 50.337 50.132V3.4629C50.337 1.62218 48.8442 0.129395 47.0035 0.129395ZM38.6698 43.4649H15.3352C14.4185 43.4649 13.6685 42.7149 13.6685 41.7982C13.6685 40.8815 14.4185 40.1314 15.3352 40.1314H38.6698C39.5865 40.1314 40.3365 40.8815 40.3365 41.7982C40.3365 42.7149 39.5865 43.4649 38.6698 43.4649ZM27.0025 33.4644C19.6386 33.4644 13.6685 27.4943 13.6685 20.1304C13.6685 12.7665 19.6386 6.7964 27.0025 6.7964C34.3664 6.7964 40.3365 12.7665 40.3365 20.1304C40.3365 27.4943 34.3664 33.4644 27.0025 33.4644ZM31.2819 11.1289C32.0819 13.1144 32.6069 15.6479 32.7622 18.4637H36.8342C36.2842 15.2114 34.1685 12.5082 31.2819 11.1289Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_954">
                          <rect width="53.3361" height="53.3361" fill="white" transform="translate(0.333984 0.129395)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-2 mt-3 md:pl-4 group-hover:text-white md:mt-0">
                  <h1 className="text-[#EB268F] group-hover:text-white">Immigration & Passport Help </h1>
                  <span className="text-sm text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</span>
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
            <div className="flex flex-col text-4xl font-bold">
              <h1>We make your Journey</h1>
              <h1>Worth Remembering!</h1>
            </div>
            <p className="text-[16px] text-justify">Crack the myths, unearth the secrets and explore the beauty of Srilankan Islands! Srilanka is full of exotic beaches, beautiful scenery, and adventurous excursions. Plan your visit to dig deeper into the exciting locations and make your trip one of the most amazing ones. With CH Asian Holidays, you won’t have to worry about planning, accommodating and booking, making it easier for you to spend every second of your holiday tour in Sri Lanka the perfect one!</p>
            <div className="flex justify-start w-full ">
              <button className='bg-[#3E4095] lg:py-[17px] lg:px-[55px]  py-[10px] px-[20px] uppercase text-white hover:bg-[#35367F] font-medium text-[16px]'>View DESTINATIONS</button>
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
              <span>Testimonials & Reviews </span>
              <h1 className="text-5xl font-bold">What People Say</h1>
              <p>Sed congue mollis orci et tempus. Etiam semper elit id turpis ornare posuere a sit amet elit. Nulla facilisi. Nullam augue lectus, lobortis et risus id, ornare porttitor arcu. Pellentesque habitant morbi tristique senectus et netus.</p>
              <div>
                <button className='bg-white lg:py-[17px] lg:px-[55px] font-bold py-[10px] px-[20px] text-[#3E4095] hover:bg-[#e6e6e6]  text-[16px] uppercase'>Contact Us</button>
              </div>
            </div>
            <div className="bg-[#ececf4] flex flex-col md:p-8 lg:p-16 p-6 gap-6 justify-between">
              <div className="flex gap-2">
                <Image src={Star1} alt="/" />
                <Image src={Star1} alt="/" />
                <Image src={Star1} alt="/" />
                <Image src={Star1} alt="/" />
                <Image src={Star2} alt="/" />
              </div>

              <p>Nulla mollis tristique blandit. Nam at accumsan felis, vitae pharetra nunc. Morbi imperdiet dui eu facilisis vestibulum.
                Sed dignissim non nibh auctor finibus. Integer mollis varius.</p>

              <div className="flex items-center justify-between">
                <div className="flex gap-5">
                  <div className="flex items-center justify-center w-24 h-24 overflow-hidden rounded-full">
                    <Image src={Person} alt="/" className="w-full h-full" />
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <h1 className="text-2xl font-bold md:text-xl lg:text-2xl">Kumto Warming</h1>
                    <span>Designation</span>
                  </div>
                </div>
                <div className="justify-center hidden md:flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="33" viewBox="0 0 45 33" fill="none">
                    <g clip-path="url(#clip0_1_1744)">
                      <path d="M10.1097 0.499868C11.5045 0.492056 12.8842 0.78762 14.1534 1.36607C15.4225 1.94453 16.5507 2.79204 17.4597 3.84987C18.463 4.94972 19.2441 6.23331 19.7597 7.62987C20.3176 9.05782 20.6058 10.5768 20.6097 12.1099C20.525 15.5514 19.4486 18.8952 17.5097 21.7399C15.3658 25.064 12.5316 27.888 9.19972 30.0199C6.27305 31.9465 3.97305 32.9132 2.29972 32.9199C1.69253 32.9427 1.10045 32.7274 0.649722 32.3199C0.433625 32.1149 0.263835 31.8661 0.151732 31.5901C0.0396285 31.3142 -0.0121993 31.0175 -0.000278375 30.7199C0.0435514 30.1637 0.245792 29.6317 0.582511 29.1869C0.91923 28.7421 1.37633 28.403 1.89972 28.2099C4.36854 27.056 6.61854 25.4827 8.54972 23.5599C9.88305 22.1332 10.5497 21.0832 10.5497 20.4099C10.5497 19.7799 10.0497 19.4099 9.04972 19.2599L8.38972 19.1599L7.63972 19.1099C5.56019 18.832 3.67029 17.7561 2.36972 16.1099C1.00799 14.3665 0.300312 12.201 0.369722 9.98987C0.333149 7.60856 1.23055 5.30761 2.86972 3.57987C3.78688 2.57963 4.90749 1.78727 6.15627 1.25603C7.40504 0.724784 8.75305 0.466956 10.1097 0.499868Z" fill="#3E4095" />
                      <path d="M34.0697 0.499923C35.4647 0.49009 36.8451 0.784748 38.1146 1.36334C39.384 1.94193 40.512 2.79053 41.4197 3.84992C42.4265 4.94715 43.208 6.23146 43.7197 7.62992C44.2775 9.05787 44.5657 10.5769 44.5697 12.1099C44.485 15.5514 43.4085 18.8953 41.4697 21.7399C39.3294 25.0636 36.4986 27.8876 33.1697 30.0199C30.2297 31.9466 27.9264 32.9133 26.2597 32.9199C25.653 32.9396 25.0621 32.7247 24.6097 32.3199C24.3936 32.1149 24.2238 31.8661 24.1117 31.5902C23.9996 31.3143 23.9478 31.0175 23.9597 30.7199C24.0059 30.1645 24.209 29.6336 24.5454 29.1892C24.8818 28.7448 25.3376 28.4052 25.8597 28.2099C28.3312 27.0556 30.5845 25.4824 32.5197 23.5599C33.8497 22.1299 34.5197 21.0799 34.5197 20.4099C34.5197 19.7399 34.0197 19.4099 33.0197 19.2599L32.3697 19.1599L31.6197 19.1099C29.5366 18.8345 27.6426 17.7584 26.3397 16.1099C24.978 14.3665 24.2703 12.201 24.3397 9.98992C24.3074 7.60938 25.2042 5.30998 26.8397 3.57992C27.7565 2.582 28.8757 1.79109 30.1224 1.25997C31.3692 0.728855 32.7149 0.469741 34.0697 0.499923Z" fill="#3E4095" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1744">
                        <rect width="44.57" height="32.42" fill="white" transform="translate(0 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className='flex gap-4 mt-6'>
                <button className=' bg-[#3E4095] hover:bg-[#35367F] hover:cursor-pointer active:scale-105'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                    <g clip-path="url(#clip0_1_778)">
                      <path d="M30 14.4318L27.336 11.7998L16 22.9998L27.336 34.1998L30 31.5678L21.3468 22.9998L30 14.4318Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_778">
                        <rect width="44.8" height="44.8" fill="white" transform="translate(0.599609 0.599609)" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className='bg-[#EB268F] hover:bg-[#C8207A] hover:cursor-pointer active:scale-105'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                    <g clip-path="url(#clip0_1_773)">
                      <path d="M18.664 11.7998L16 14.4318L24.6532 22.9998L16 31.5678L18.664 34.1998L30 22.9998L18.664 11.7998Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_773">
                        <rect width="44.8" height="44.8" fill="white" transform="translate(0.599609 0.599609)" />
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

    </div>
  );
}
