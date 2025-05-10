"use client";
import React, { useState } from 'react';
import { PiBag } from 'react-icons/pi';
import { BsCheck2Circle } from "react-icons/bs";
import { HiOutlineBookmark } from 'react-icons/hi2';
import Link from 'next/link';


const jobsData = {
    applied: [
        {
            companyName: 'Brac International',
            jobTitle: 'UI/UX Designer',
            datePosted: '1 February, 2025',
            applicationDeadline: '10 February, 2025',
            salaryRange: '€1,000–€1,200',
            applicants: 16,
            status: 'Expired',
        },
        {
            companyName: 'Brac International',
            jobTitle: 'Web Developer',
            datePosted: '15 January, 2025',
            applicationDeadline: '25 February, 2025',
            salaryRange: '€2,000–€2,500',
            applicants: 10,
            status: 'Active',
        },
    ],
    shortlisted: [
        {
            companyName: 'Tech Corp',
            jobTitle: 'Frontend Developer',
            datePosted: '10 January, 2025',
            applicationDeadline: '20 February, 2025',
            salaryRange: '€2,500–€3,000',
            applicants: 12,
            status: 'Active',
        },
    ],
    bookmarked: [
        {
            companyName: 'Innovate Ltd.',
            jobTitle: 'Product Manager',
            datePosted: '12 February, 2025',
            applicationDeadline: '5 March, 2025',
            salaryRange: '€3,000–€3,500',
            applicants: 8,
            status: 'Expired',
        },
    ],
};

const Page = () => {
    const [activeTab, setActiveTab] = useState('applied'); // Default to 'applied' tab

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="md:p-6 w-[90%] mx-auto">
            <h2 className="text-4xl font-semibold  mb-6 text-center">MY Jobs</h2>

            {/* Tab Navigation */}
            <div className="mb-6 flex items-center justify-center gap-2 flex-wrap ">
                <button
                    onClick={() => handleTabChange('applied')}
                    className={`px-6 py-3 mr-4 rounded-lg cursor-pointer flex items-center gap-3 ${activeTab === 'applied'
                        ? 'bg-[#7ed957] text-white'
                        : 'border border-[#7ed957] text-gray-700'
                        }`}
                >
                    <PiBag className='text-2xl' />Applied Jobs
                </button>
                <button
                    onClick={() => handleTabChange('shortlisted')}
                    className={`px-6 py-3 mr-4 rounded-lg cursor-pointer flex items-center gap-3 ${activeTab === 'shortlisted'
                        ? 'bg-[#7ed957] text-white'
                        : 'border border-[#7ed957] text-gray-700'
                        }`}
                >
                    <BsCheck2Circle className='text-2xl' />Shortlisted Jobs
                </button>
                <button
                    onClick={() => handleTabChange('bookmarked')}
                    className={`px-6 py-3 rounded-lg cursor-pointer flex items-center gap-3 ${activeTab === 'bookmarked'
                        ? 'bg-[#7ed957] text-white'
                        : 'border border-[#7ed957] text-gray-700'
                        }`}
                >
                    <HiOutlineBookmark className='text-2xl' />Bookmarked Jobs
                </button>
            </div>

            {/* Job Listings for Active Tab */}
            <div className="space-y-4 my-10">
                {jobsData[activeTab].map((job, index) => (
                    <div
                        key={index}
                        className="p-5 border border-gray-300 rounded-lg lg:flex justify-between items-center"
                    >
                        <div className='w-full grid grid-cols-1 items-center md:grid-cols-4 space-y-8'>

                            <div className='flex gap-4 items-start '>
                                <img className='w-12' src="/Images/Jobs/PopulerSearch/companyLogo.png" alt="" />
                                <div className='text-center'>
                                    <h3 className='text-xl font-semibold'>{job.companyName}</h3>
                                    <span>Company</span>
                                </div>
                            </div>

                            <div className='text-center'>
                                <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
                                <span>Job Title</span>
                            </div>

                            <div className='text-center'>
                                <h3 className="text-xl font-semibold">Full Time</h3>
                                <span>Job Type</span>
                            </div>

                            <div className='text-center'>
                                <h3 className='text-xl font-semibold'>{job.salaryRange}</h3>
                                <span>Salary</span>
                            </div>


                            <div className='text-center'>
                                <h3 className='text-xl font-semibold'>{job.datePosted}</h3>
                                <span>Date Posted</span>
                            </div>

                            <div className='text-center'>
                                <h2 className='text-xl font-semibold'>{job.applicationDeadline}</h2>
                                <span>Application Deadline</span>
                            </div>


                            <div className='text-center'>
                                <h3 className='text-xl font-semibold'>{job.applicants}</h3>
                                <span>Applicants</span>
                            </div>

                            <div className='text-center'>
                                <span
                                    className={`px-4 py-1 mb-1 inline-block rounded-lg ${job.status === 'Active'
                                        ? 'bg-[#7ed9572a] text-green-500'
                                        : 'bg-[#d619193b] text-red-500'
                                        }`}
                                >
                                    {job.status}
                                </span>
                                <span className='block'>Status</span>
                            </div>

                        </div>

                        <div className="flex min-w-48 flex-col items-center justify-center">
                            <Link href={`/jobs/details/${index}`} className="mt-2 cursor-pointer bg-[#7ed957] text-white py-2 px-4 rounded-lg hover:bg-[#7ed957]">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
