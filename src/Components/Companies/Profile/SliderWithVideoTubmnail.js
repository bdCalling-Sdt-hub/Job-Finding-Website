'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlay } from 'react-icons/fa';
import 'swiper/css';  // Swiper styles

const SliderWithVideoThumbnail = () => {
    const images = [
        "/Images/Company/SliderImage/proflie-slider.png",  // Update with the correct path
        "/Images/Company/SliderImage/proflie-slider2.png", // Update with the correct path
        "/Images/Company/SliderImage/proflie-slider.png", // Update with the correct path
        "/Images/Company/SliderImage/proflie-slider2.png", // Update with the correct path
        "/Images/Company/SliderImage/proflie-slider.png", // Update with the correct path
        "/Images/Company/SliderImage/proflie-slider2.png", // Update with the correct path
    ];

    return (
        <div className="mt-20 mb-10">

            <Swiper
                spaceBetween={10}
                slidesPerView={1}  // Show 3 items at once
                loop={true}         // Enable infinite loop
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} w-3 h-3 bg-[#7ed957] rounded-full"></span>`;
                    },
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1, // For small screens, show 1 slide
                    },
                    768: {
                        slidesPerView: 2, // For medium screens, show 2 slides
                    },
                    1024: {
                        slidesPerView: 4, // For larger screens, show 3 slides
                    },
                }}
                className="mySwiper"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative group">
                            <img
                                src={src}
                                alt={`Slider Image ${index}`}
                                className="w-full h-64 object-cover rounded-md"
                            />
                            <div className="absolute cursor-pointer w-20 h-20 mx-auto rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-[#7ed957] duration-300">
                                <FaPlay className="text-white text-4xl cursor-pointer" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderWithVideoThumbnail;
