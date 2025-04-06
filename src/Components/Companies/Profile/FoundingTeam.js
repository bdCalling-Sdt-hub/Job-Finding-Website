'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';  // Swiper styles

const FoundingTeam = () => {
    const swiperRef = useRef(null);  // Create a reference to the Swiper instance

    const teamMembers = [
        {
            name: 'Anika Alam',
            role: 'Founder',
            image: '/Images/Company/39b9193c1832d333fbb7deb71ce0baa7.png', // Update with the correct path
        },
        {
            name: 'John Doe',
            role: 'Co-Founder',
            image: '/Images/Company/39b9193c1832d333fbb7deb71ce0baa7.png', // Update with the correct path
        },
        {
            name: 'Sarah Smith',
            role: 'CTO',
            image: '/Images/Company/39b9193c1832d333fbb7deb71ce0baa7.png', // Update with the correct path
        },
        {
            name: 'James Brown',
            role: 'COO',
            image: '/Images/Company/39b9193c1832d333fbb7deb71ce0baa7.png', // Update with the correct path
        },
    ];

    return (
        <div className='py-10 lg:flex items-center justify-between gap-10'>
            <div className='lg:flex hidden flex-col items-center justify-between gap-5 h-96'>
                <h2 className="text-3xl font-medium text-center mb-5">Meet the Founding Team</h2>
                {/* Navigation Arrows */}
                <div className="flex justify-center gap-3">
                    <button
                        className="cursor-pointer p-2 bg-[#553283] text-white rounded-full"
                        onClick={() => swiperRef.current.swiper.slidePrev()}  // Go to previous slide
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="cursor-pointer p-2 bg-[#553283] text-white rounded-full"
                        onClick={() => swiperRef.current.swiper.slideNext()}  // Go to next slide
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            <Swiper
                ref={swiperRef}  // Connect Swiper to the ref
                spaceBetween={20}
                slidesPerView={1}  // Show 3 items at once
                loop={true}         // Enable infinite loop
                breakpoints={{
                    640: {
                        slidesPerView: 1, // For small screens, show 1 slide
                    },
                    768: {
                        slidesPerView: 2, // For medium screens, show 2 slides
                    },
                    1024: {
                        slidesPerView: 3, // For larger screens, show 3 slides
                    },
                }}
                className="mySwiper"
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="lg:max-w-4/5 mx-auto bg-white border rounded-lg shadow-lg p-4">
                            <img src={member.image} alt={member.name} className="w-full h-96 object-cover rounded-md mb-4" />
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex lg:hidden justify-center gap-3 mt-5">
                <button
                    className="cursor-pointer p-2 bg-[#553283] text-white rounded-full"
                    onClick={() => swiperRef.current.swiper.slidePrev()}  // Go to previous slide
                >
                    <FaChevronLeft />
                </button>
                <button
                    className="cursor-pointer p-2 bg-[#553283] text-white rounded-full"
                    onClick={() => swiperRef.current.swiper.slideNext()}  // Go to next slide
                >
                    <FaChevronRight />
                </button>
            </div>

        </div>
    );
};

export default FoundingTeam;
