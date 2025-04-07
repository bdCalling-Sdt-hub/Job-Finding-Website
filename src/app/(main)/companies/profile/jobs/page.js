'use client';
import { Select } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaBriefcase, FaMapMarkerAlt, FaRegBookmark, FaSearch } from 'react-icons/fa';
import { PiBagSimpleThin } from 'react-icons/pi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';

const Page = () => {


    const tabData = [
        { id: 1, title: 'Top Agency', description: 'Best services for startups and enterprises.' },
        { id: 2, title: 'Design Studio', description: 'Creative solutions and brand identities.' },
        { id: 3, title: 'Design', description: 'Creative solutions and brand identities.' },
        { id: 4, title: 'Web Services', description: 'Building the future of the web.' },
        { id: 5, title: 'AppDev Agency', description: 'Innovative mobile app development.' },
        { id: 6, title: 'Brand Masters', description: 'Branding solutions for companies.' },
        { id: 7, title: 'Creative Studio', description: 'Creative solutions for marketing and branding.' },
        { id: 8, title: 'Media Pro', description: 'Providing top-notch media solutions.' },
        { id: 9, title: 'Marketing Experts', description: 'Specialized in brand marketing.' },
        { id: 10, title: 'SEO Agency', description: 'Optimizing your website for better reach.' },
        { id: 11, title: 'Product Lab', description: 'Crafting products with precision and care.' },
        { id: 12, title: 'Tech Innovations', description: 'Innovative technology solutions.' },
        { id: 13, title: 'Design Labs', description: 'Pushing the boundaries of design.' },
        { id: 14, title: 'Tech Creators', description: 'Creating next-gen technology.' },
        { id: 15, title: 'UX/UI Agency', description: 'Designing user experiences that matter.' },
        { id: 16, title: 'Digital Marketing Hub', description: 'Best practices in digital marketing.' },
        { id: 17, title: 'Startup Accelerator', description: 'Helping startups grow and succeed.' },
        { id: 18, title: 'Web Solutions', description: 'Building responsive websites for businesses.' },
        { id: 19, title: 'Cloud Services', description: 'Innovative cloud computing solutions.' },
        { id: 20, title: 'E-Commerce Agency', description: 'Helping businesses grow through e-commerce.' }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Number of items per page

    // Logic for handling page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Paginate data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tabData.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <div className='w-[90%] mx-auto py-10'>
            <section className="bg-gradient-to-b  py-10">
                <div className=''>
                    {/* Search Job Container */}
                    <div className="md:flex items-center gap-3 space-y-3 md:space-y-0">
                        <div className="grid md:grid-cols-3 space-y-1 md:space-y-0 w-full md:border border-purple-500 md:rounded-full overflow-hidden md:shadow-md bg-white">
                            {/* Job Search Input */}
                            <div className="flex border items-center px-4 py-3 border-r border-purple-300">
                                <FaSearch className="text-gray-500 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search by job, keyword, or company"
                                    className="w-full bg-transparent outline-none text-gray-700"
                                />
                            </div>

                            {/* Location Input */}
                            <div className="flex  border items-center px-4 py-3 border-r border-purple-300">
                                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="w-full bg-transparent outline-none text-gray-700"
                                />
                            </div>

                            {/* Job Type Dropdown using Ant Design */}
                            <div className="flex border items-center px-4 py-3 border-r border-purple-300">
                                <FaBriefcase className="text-gray-500 mr-2" />
                                <Select
                                    showSearch
                                    placeholder="Select Job Type"
                                    optionFilterProp="label"
                                    className="w-full bg-transparent !outline-none !border-transparent !border-none text-gray-700"
                                    options={[
                                        { value: "Full Time", label: "Full Time" },
                                        { value: "Part Time", label: "Part Time" },
                                        { value: "Internship", label: "Internship" },
                                        { value: "Contract", label: "Contract" },
                                    ]}
                                />
                            </div>
                        </div>

                        {/* Browse Button */}
                        <button className="px-6 py-3 w-full md:w-auto  border border-[#7ed957] cursor-pointer text-[#7ed957] rounded-lg hover:bg-[#7ed957] hover:text-white transition font-medium shadow-sm">
                            Browse
                        </button>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {currentItems.map((item) => (
                    <div key={item.id} className="p-4 border border-[#553283] bg-white shadow rounded-lg">
                        <div className="relative">
                            <img className="w-full" src="/Images/Jobs/PopulerSearch/popujerjobSwarch.png" alt="" />
                            <span className="cursor-pointer absolute w-12 h-12 flex items-center justify-center rounded-full -bottom-4 right-4 border-2 border-[#553283] bg-[#eadaff] text-[#553283]">
                                <FaRegBookmark />
                            </span>
                        </div>

                        <div className="mt-5 space-y-3">
                            <img className="w-24" src="/Images/Jobs/PopulerSearch/companyLogo.png" alt="" />
                            <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
                            <p className="text-gray-600 flex items-center gap-3">
                                <CiLocationOn /> Dhaka, Bangladesh
                            </p>
                            <p className="text-gray-600 flex items-center gap-3">
                                <PiBagSimpleThin /> Full-Time
                            </p>
                            <p className="text-gray-600 flex items-center gap-3">
                                <TbBrandGoogleAnalytics /> Dhaka, Bangladesh
                            </p>
                            <div className="mt-3 flex justify-between items-center">
                                <div>
                                    <span className='text-[#5318a0] bg-[#eadaff] py-2 px-4 rounded-full text-[12px]'>Web Developer</span>
                                </div>
                                <div>
                                    <p className='text-sm text-gray-600 text-right'>Posted: 3 Days Ago</p>
                                    <Link href={'/jobs/details/1'} className="inline-block mt-1 py-3 cursor-pointer px-8 font-semibold text-[#553283] border-2 rounded-lg border-[#553283] hover:bg-[#553283] hover:text-white duration-500">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
