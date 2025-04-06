'use client';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaInstagram, FaRegCopy } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiFacebookBoxLine } from 'react-icons/ri';

// Import Swiper and Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Corrected CSS import path for Swiper
import 'swiper/css/pagination';  // Import pagination styles
import { PiGenderFemale } from 'react-icons/pi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import FoundingTeam from '@/Components/Companies/Profile/FoundingTeam';
import Testomonial from '@/Components/Companies/Profile/Testomonial';
import SliderWithVideoThumbnail from '@/Components/Companies/Profile/SliderWithVideoTubmnail';

const Page = () => {
    // State to track current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Swiper reference
    const swiperRef = useRef(null);

    const images = [
        "/Images/Company/SliderImage/proflie-slider.png",
        "/Images/Company/SliderImage/proflie-slider2.png",
        "/Images/Company/SliderImage/proflie-slider2.png",
        "/Images/Company/SliderImage/proflie-slider.png",
        "/Images/Company/SliderImage/proflie-slider2.png",
        "/Images/Company/SliderImage/proflie-slider.png",
        "/Images/Company/SliderImage/proflie-slider2.png",
        "/Images/Company/SliderImage/proflie-slider.png",
    ];

    return (
        <div className='w-[90%] mx-auto py-10'>
            <div className='lg:flex items-center gap-10 space-y-5 bg-[#fffff9] p-10 rounded-lg shadow'>
                <div>
                    <h2 className='text-4xl font-medium mb-3'>About </h2>
                    <p>Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                </div>
                <span className='hidden lg:block w-[10px] bg-[#7ed957] h-40'></span>
                <div className='min-w-[300px]'>
                    <div className='flex justify-center '>
                        <button className='cursor-pointer py-3 px-8 border-[#7ed957] border text-[#7ed957] font-semibold hover:bg-[#7ed957] hover:text-white hover:border-[#7ed957] rounded-lg '>Follow</button>
                    </div>
                    <div className='flex items-center gap-5 mt-5 mb-2 justify-center'>
                        <RiFacebookBoxLine />
                        <FaInstagram />
                        <CiLinkedin />
                        <FaXTwitter />
                    </div>
                    <div className='flex items-center gap-2 justify-center'>
                        <Link href="https://www.companyname.com" className='text-[#7ed957] font-medium text-lg hover:underline'>
                            www.companyname.com
                        </Link>
                        <FaRegCopy className='text-[#7ed957] cursor-pointer text-xl' />
                    </div>
                </div>
            </div>

            {/* Image Slider with Swiper */}
            <div className="relative py-10">
                <Swiper
                    ref={swiperRef}  // Reference to the Swiper instance
                    spaceBetween={10}
                    slidesPerView={2}  // Default to 2 items per view
                    loop={true}         // Loop through slides
                    pagination={{
                        clickable: true,  // Enable clickable dots
                    }}
                    navigation={false}   // Disable the default prev/next buttons
                    onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)} // Update currentIndex when slide changes
                    breakpoints={{
                        640: {
                            slidesPerView: 2, // For small screens, show 2 slides (phones)
                        },
                        1024: {
                            slidesPerView: 4, // For larger screens, show 4 slides (tablets or desktops)
                        },
                    }}
                    className="mySwiper"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img src={src} alt={`Slider Image ${index}`} className="w-full object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>


                {/* Custom Prev and Next Buttons */}
                <div className="flex justify-center mt-4 gap-5">
                    <button
                        onClick={() => swiperRef.current.swiper.slidePrev()}  // Go to previous slide
                        className="cursor-pointer py-2 px-4 bg-[#7ed957] text-white rounded-md hover:bg-[#6bb944]"
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => swiperRef.current.swiper.slideNext()}  // Go to next slide
                        className="cursor-pointer py-2 px-4 bg-[#7ed957] text-white rounded-md hover:bg-[#6bb944]"
                    >
                        Next
                    </button>
                </div>
            </div>


            <div className="bg-[#fffff9] border border-[#e0e0e0] rounded-lg shadow-md flex items-center justify-center md:gap-10 gap-5 md:p-10 p-5">
                {/* Left Card for Diversity Rate */}
                <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-sm mb-3">Diversity Rate</p>
                    <div className="flex items-center gap-2">
                        <PiGenderFemale className="text-2xl text-[#553283]" /> {/* Gender icon */}
                        <span className="text-2xl font-semibold">60% Employee</span>
                    </div>
                </div>

                {/* Divider between the two cards */}
                <div className="border-l-2 border-[#7ed957] mx-4 h-24"></div>

                {/* Right Card for Growth Rate */}
                <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-sm mb-3">Growth Rate</p>
                    <div className="flex items-center gap-2">
                        <IoAnalyticsSharp className="text-2xl text-[#7ed957]" /> {/* Growth icon */}
                        <span className="text-2xl font-semibold">40%</span>
                    </div>
                </div>
            </div>

            <FoundingTeam />
            <Testomonial />

            <SliderWithVideoThumbnail />



        </div>
    );
};

export default Page;
