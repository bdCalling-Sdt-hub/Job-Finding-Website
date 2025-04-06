'use client';
import { Select } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaSearch, FaUsers } from 'react-icons/fa';

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const companies = [
        // === Same company data as before ===
        {
            id: 1,
            name: "TechNova Solutions",
            location: "Dhaka, Bangladesh",
            employees: "200-500 Employee",
            description:
                "AI won’t replace designers, but designers who use AI will replace those who don’t. Similar to how calculators were once thought to replace.",
            jobs: 20,
            image: "/Images/Home/companies.png",
        },
        {
            id: 2,
            name: "InnoTech Systems",
            location: "Chittagong, Bangladesh",
            employees: "100-300 Employee",
            description:
                "Innovation drives the future. Our AI-powered solutions help businesses scale faster than ever.",
            jobs: 15,
            image: "/Images/Home/companies.png",
        },
        // Add more companies as needed...
        // Dummy duplication for pagination
        ...Array.from({ length: 30 }, (_, i) => ({
            id: i + 3,
            name: `Company ${i + 3}`,
            location: "Sylhet, Bangladesh",
            employees: "50-200 Employee",
            description:
                "Empowering developers with AI-driven tools for seamless software development.",
            jobs: 12,
            image: "/Images/Home/companies.png",
        }))
    ];

    // PAGINATION LOGIC
    const totalPages = Math.ceil(companies.length / itemsPerPage);
    const paginatedCompanies = companies.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const renderPageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 4) {
                pageNumbers.push(1, 2, 3, 4, 5, "...", totalPages);
            } else if (currentPage >= totalPages - 3) {
                pageNumbers.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return pageNumbers.map((number, index) => {
            const isCurrent = number === currentPage;
            const isDots = number === "...";

            return (
                <button
                    key={index}
                    disabled={isDots}
                    onClick={() => !isDots && setCurrentPage(number)}
                    className={`w-10 h-10 border rounded-md mx-1 ${isCurrent
                        ? "bg-[#553283] text-white font-semibold"
                        : "hover:bg-[#553283] hover:text-white text-[#553283]"
                        } ${isDots ? "cursor-default" : "cursor-pointer"}`}
                >
                    {number}
                </button>
            );
        });
    };

    return (
        <div >

            {/* === Top Search Section === */}
            <section className="bg-gradient-to-b from-[#e0f6d7] to-[#ffffff]  py-10">
                <div className='w-[90%] mx-auto py-10'>
                    <h2 className='md:text-4xl text-2xl font-bold text-center my-5'>Companies For You</h2>
                    <div className="md:flex items-center gap-3 space-y-3 md:space-y-0">
                        <div className="grid md:grid-cols-3 space-y-1 md:space-y-0 w-full md:border border-purple-500 md:rounded-full overflow-hidden md:shadow-md bg-white">
                            <div className="flex border items-center px-4 py-3 border-r border-purple-300">
                                <FaSearch className="text-gray-500 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search by job, keyword, or company"
                                    className="w-full bg-transparent outline-none text-gray-700"
                                />
                            </div>
                            <div className="flex  border items-center px-4 py-3 border-r border-purple-300">
                                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="w-full bg-transparent outline-none text-gray-700"
                                />
                            </div>
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
                        <button className="px-6 py-3 w-full md:w-auto  border border-[#7ed957] cursor-pointer text-[#7ed957] rounded-lg hover:bg-[#7ed957] hover:text-white transition font-medium shadow-sm">
                            Browse
                        </button>
                    </div>
                </div>
            </section>
            <div className='w-[90%] mx-auto py-10'>
                {/* === Company Cards === */}
                <h2 className='md:text-3xl text-2xl font-semibold  my-5'>More Companies</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 md:gap-10">
                    {paginatedCompanies.map((company) => (
                        <div key={company.id}>
                            <div className="p-5 border border-[#6a40a1] rounded-xl h-full">
                                <div className="relative mb-5">
                                    <img className="w-full" src={company.image} alt={company.name} />
                                    <span className="absolute -bottom-6 right-8 bg-[#f5eff7] px-8 py-3 rounded-md text-[#553283]">
                                        {company.jobs} Jobs
                                    </span>
                                </div>
                                <h2 className="text-xl font-medium">{company.name}</h2>
                                <p className="text-gray-800 flex items-center gap-2 my-5"><FaMapMarkerAlt />{company.location}</p>
                                <p className="text-gray-800 flex items-center gap-2 my-5"><FaUsers />{company.employees}</p>
                                <p className=" text-[#2b2b2b6e]">{company.description}</p>
                                <Link href={`/companies/profile`} className="mt-3 inline-block text-[#7ed957] border border-[#7ed957] cursor-pointer hover:bg-[#7ed957] hover:text-white transition px-8 py-3 rounded-md font-semibold">Follow</Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* === Pagination UI === */}
                <div className="flex items-center justify-center mt-10">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border cursor-pointer  rounded-md mx-1 text-[#553283] hover:bg-[#553283] hover:text-white disabled:opacity-50"
                    >
                        &lt; Back
                    </button>
                    {renderPageNumbers()}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 cursor-pointer  py-2 border rounded-md mx-1 text-white bg-[#553283] hover:opacity-90 disabled:opacity-50"
                    >
                        Next &gt;
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Page;
