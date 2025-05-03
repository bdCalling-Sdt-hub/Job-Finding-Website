'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

// Tab data
const tabs = ['Featured', 'IT Company', 'Marketing', 'Finance'];

const tabData = {
    Featured: [
        { id: 1, title: 'TechCorp', description: 'Leading software development company. lorem   There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you' },
        { id: 2, title: 'DesignMinds', description: 'Creative design and branding studio. lorem     There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dott look even slightly believable. If you are going to use a passage of Lorem Ipsum, you' },
        { id: 3, title: 'DesignMinds', description: 'Creative design and branding studio. lorem     There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dott look even slightly believable. If you are going to use a passage of Lorem Ipsum, you' },
    ],
    'IT Company': [
        { id: 1, title: 'CloudTech', description: 'Innovative cloud solutions for businesses. lorem     There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dott look even slightly believable. If you are going to use a passage of Lorem Ipsum, you' },
        { id: 2, title: 'NextGenSoft', description: 'Next-generation software applications. lorem   There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dott look even slightly believable. If you are going to use a passage of Lorem Ipsum, you' },
    ],
    Marketing: [
        { id: 1, title: 'GrowthMark', description: 'Digital marketing and SEO services. lorem   There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you' },
        { id: 2, title: 'AdBooster', description: 'Expert marketing solutions for businesses. lorem     There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dott look even slightly believable. If you are going to use a passage of Lorem Ipsum, you' },
    ],
    Finance: [
        { id: 1, title: 'StyleHub', description: 'Affordable fashion and lifestyle products. lorem  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dott look even slightly believable. If you are going to use a passage of Lorem Ipsum, you' },
        { id: 2, title: 'HomeNest', description: 'Home essentials and décor at great prices. lorem  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dott look even slightly believable. If you are going to use a passage of Lorem Ipsum, you' },
    ],
};

const FindJobsbyCompanies = () => {
    const [activeTab, setActiveTab] = useState('Featured'); // Default active tab

    return (
        <div className='w-[90%] mx-auto py-10'>
            <h2 className='text-4xl font-semibold text-primary mb-6 md:text-left text-center'>
                Find Jobs by Companies
            </h2>

            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-5 md:gap-0 space-x-4 mb-10">
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-end gap-5">
                {tabData[activeTab]?.map((company, index) => (
                    <Link href="/companies/profile" key={company.id} className="">
                        <div className="p-5 border border-[#6a40a1] rounded-xl">
                            <div className="relative mb-5">
                                <img className="w-full" src={'/Images/Home/companies.png'} alt={company.name} />
                                <Link href="/companies/profile/jobs" className="absolute -bottom-6 right-8 bg-[#f5eff7] px-8 py-3 rounded-md text-[#553283]">
                                    It Jobs
                                </Link>
                            </div>
                            <h2 className="text-xl font-medium"> Google </h2>
                            <p className="text-gray-800 flex companys-center gap-2 my-5"><FaMapMarkerAlt /> Dhaka , Bangladesh </p>
                            <p className="text-gray-800 flex companys-center gap-2 my-5"><FaUsers /> 200-500 Employees </p>

                            <p className=" text-[#2b2b2b6e]">{company.description}</p>

                            <button className="mt-3 text-[#7ed957] border border-[#7ed957] cursor-pointer hover:bg-[#7ed957] hover:text-white transition px-8 py-3 rounded-md font-semibold">Follow</button>
                        </div>

                        {
                            index === 1 && (
                                <div className="mt-5 hidden md:flex companys-center justify-center">
                                    <button className="px-10  duration-500  py-3 w-full md:w-auto  border border-[#7ed957] cursor-pointer  rounded-full bg-[#7ed957] text-white transition font-medium shadow-sm">All Companies</button>
                                </div>
                            )
                        }
                        {
                            index === 2 && (
                                <div className="mt-5 flex md:hidden companys-center justify-center">
                                    <button className="px-10 duration-500  py-3 w-full md:w-auto  border border-[#7ed957] cursor-pointer  rounded-full bg-[#7ed957] text-white transition font-medium shadow-sm">All Companies</button>
                                </div>
                            )
                        }

                    </Link>
                ))}
            </div>


        </div>
    );
};

export default FindJobsbyCompanies;
