'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaRegBookmark } from 'react-icons/fa';
import { PiBagSimpleThin } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
const tabs = ['Featured', 'IT Company', 'Marketing', 'Retail'];

const tabData = {
    Featured: [
        { id: 1, title: 'Top Agency', description: 'Best services for startups and enterprises.' },
        { id: 2, title: 'Design Studio', description: 'Creative solutions and brand identities.' },
        { id: 3, title: 'Design ', description: 'Creative solutions and brand identities.' }
    ],
    'IT Company': [
        { id: 1, title: 'TechXpert', description: 'Experts in software and cloud solutions.' },
        { id: 2, title: 'NextSoft', description: 'Innovating with modern web apps.' }
    ],
    Marketing: [
        { id: 1, title: 'GrowthGenius', description: 'Results-driven digital marketing.' },
        { id: 2, title: 'BrandBooster', description: 'We amplify your business.' }
    ],
    Retail: [
        { id: 1, title: 'StyleHub', description: 'Trendy and affordable fashion.' },
        { id: 2, title: 'HomeNest', description: 'Quality home essentials at your doorstep.' }
    ],
};

const PopularSearches = () => {
    const [activeTab, setActiveTab] = useState('Featured');

    return (
        <div className="w-[90%]  mx-auto py-10 ">
            <h2 className="text-3xl font-semibold text-primary mb-6 md:text-left text-center">Popular Searches</h2>

            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-5 md:gap-0 space-x-4 mb-10  ">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 cursor-pointer px-4 md:text-xl font-semibold transition border-b-2 ${activeTab === tab
                            ? 'border-primary text-[#553283]'
                            : 'border-transparent text-gray-500 hover:text-primary'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
                {tabData[activeTab]?.map((item) => (
                    <div key={item.id} className="p-4 border border-[#553283] bg-white shadow rounded-lg">
                        <div className='relative'>
                            <img className='w-full' src="/Images/Jobs/PopulerSearch/popujerjobSwarch.png" alt="" />
                            <span className='cursor-pointer absolute w-12 h-12 flex items-center justify-center rounded-full -bottom-4 right-4 border-2 border-[#553283] bg-[#eadaff] text-[#553283]'><FaRegBookmark /></span>
                        </div>

                        <div className='mt-5 space-y-3'>
                            <img className='w-24 ' src="/Images/Jobs/PopulerSearch/companyLogo.png" alt="" />
                            <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
                            <p className="text-gray-600 flex items-center gap-3"><CiLocationOn />Dhaka, Bangladesh</p>
                            <p className="text-gray-600 flex items-center gap-3"><PiBagSimpleThin />Full-Time</p>
                            <p className="text-gray-600 flex items-center gap-3"><TbBrandGoogleAnalytics />Dhaka, Bangladesh</p>
                            <div className='mt-3 flex justify-between items-center'>
                                <p>Posted: 3 Days Ago</p>
                                <Link href={'/jobs/details/1'} className='py-3 cursor-pointer px-8 font-semibold text-[#553283] border-2 rounded-lg border-[#553283] hover:bg-[#553283] hover:text-white duration-500  '>Apply Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex items-center justify-center'>
                <Link href={'/jobs/all-jobs'} className='py-3 px-10 font-semibold mt-10 cursor-pointer text-[#fff] rounded-full bg-[#7ed957]'>All Jobs</Link>
            </div>

        </div>
    );
};

export default PopularSearches;
