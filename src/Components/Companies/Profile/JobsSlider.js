import React from 'react';
import Slider from 'react-slick';
import { FaRegBookmark } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { PiBagSimpleThin } from 'react-icons/pi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import Link from 'next/link';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JobsSlider = () => {
    // Sample jobs data
    const jobsData = [
        {
            id: 1,
            title: 'Sr. UIX Designer',
            company: 'BRAC',
            companyLogo: '/Images/Jobs/PopulerSearch/companyLogo.png',
            location: 'Dhaka, Bangladesh',
            jobType: 'Full-Time',
            level: 'Executive Level',
            postedTime: '3 Days Ago',
            imageUrl: '/Images/Jobs/PopulerSearch/popujerjobSwarch.png',
        },
        {
            id: 2,
            title: 'Sr. UIX Designer',
            company: 'BRAC',
            companyLogo: '/Images/Jobs/PopulerSearch/companyLogo.png',
            location: 'Dhaka, Bangladesh',
            jobType: 'Full-Time',
            level: 'Executive Level',
            postedTime: '3 Days Ago',
            imageUrl: '/Images/Jobs/PopulerSearch/popujerjobSwarch.png',
        },
        {
            id: 3,
            title: 'Sr. UIX Designer',
            company: 'BRAC',
            companyLogo: '/Images/Jobs/PopulerSearch/companyLogo.png',
            location: 'Dhaka, Bangladesh',
            jobType: 'Full-Time',
            level: 'Executive Level',
            postedTime: '3 Days Ago',
            imageUrl: '/Images/Jobs/PopulerSearch/popujerjobSwarch.png',
        },
    ];

    // Slick settings
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false, // Disable center mode for better control of spacing
        focusOnSelect: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="jobs-slider-container my-10">
            <h2 className="text-center text-3xl font-bold mb-8">Jobs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {jobsData.map((item) => (
                    <div key={item.id} className="p-4 border border-[#553283] bg-white shadow rounded-lg mx-2">
                        <div className="relative">
                            <img className="w-full" src={item.imageUrl} alt={item.title} />
                            <span className="cursor-pointer absolute w-12 h-12 flex items-center justify-center rounded-full -bottom-4 right-4 border-2 border-[#553283] bg-[#eadaff] text-[#553283]">
                                <FaRegBookmark />
                            </span>
                        </div>

                        <div className="mt-5 space-y-3">
                            <img className="w-24" src={item.companyLogo} alt={item.company} />
                            <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
                            <p className="text-gray-600 flex items-center gap-3">
                                <CiLocationOn />
                                {item.location}
                            </p>
                            <p className="text-gray-600 flex items-center gap-3">
                                <PiBagSimpleThin />
                                {item.jobType}
                            </p>
                            <p className="text-gray-600 flex items-center gap-3">
                                <TbBrandGoogleAnalytics />
                                {item.level}
                            </p>
                            <div className="mt-3 flex justify-between items-center">
                                <p>Posted: {item.postedTime}</p>
                                <Link href={`/jobs/details/${item.id}`} className="py-3 cursor-pointer px-8 font-semibold text-[#553283] border-2 rounded-lg border-[#553283] hover:bg-[#553283] hover:text-white duration-500">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-5 flex justify-center'>
                <Link href={'/companies/profile/jobs'} className='py-3 cursor-pointer px-8 font-semibold bg-[#553283] text-white border-2 rounded-lg inline-block border-[#553283] hover:bg-[#553283] hover:text-white duration-500'>All Jobs</Link>
            </div>
        </div>
    );
};

export default JobsSlider;
