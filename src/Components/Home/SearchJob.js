'use client'
import { useState } from "react";
import React from "react";
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaUsers } from "react-icons/fa";
import { Select } from "antd";
import Link from "next/link";

const { Option } = Select;

const companies = [
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
    {
        id: 3,
        name: "CodeFusion Labs",
        location: "Sylhet, Bangladesh",
        employees: "50-200 Employee",
        description:
            "Empowering developers with AI-driven tools for seamless software development.",
        jobs: 12,
        image: "/Images/Home/companies.png",
    },
];

const SearchJob = () => {
    const [activeTab, setActiveTab] = useState("featured");

    return (
        <div className="mx-auto w-[90vw]">
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

            <div className="my-20">
                <h2 className="md:text-4xl text-2xl font-bold text-center mt-10 pb-5 border-b border-gray-500">Discover Companies</h2>
            </div>

            <div className="w-full  mx-auto my-20">
                {/* Tab Buttons */}
                <div className="flex justify-center items-center gap-10">
                    <button
                        className={`py-2 cursor-pointer px-6  border-b-2 transition ${activeTab === "featured" ? "border-[#553283] text-[#553283] font-semibold" : "border-transparent"
                            }`}
                        onClick={() => setActiveTab("featured")}
                    >
                        Featured
                    </button>
                    <button
                        className={`py-2 cursor-pointer px-6  border-b-2 transition ${activeTab === "New" ? "border-[#553283] text-[#553283] font-semibold" : "border-transparent"
                            }`}
                        onClick={() => setActiveTab("New")}
                    >
                        New
                    </button>
                </div>

                {/* Tab Content */}
                <div className="py-10">
                    {activeTab === "featured" &&
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 md:gap-10 items-end">
                            {companies.map((company, index) => (
                                <Link href={`/companies/profile`} key={company.id} className="">
                                    <div className="p-5 border border-[#6a40a1] rounded-xl">
                                        <div className="relative mb-5">
                                            <img className="w-full" src={company.image} alt={company.name} />
                                            <Link href={`/companies/profile/jobs`} className="absolute -bottom-6 right-8 bg-[#f5eff7] px-8 py-3 rounded-md text-[#553283]">
                                                {company.jobs} Jobs
                                            </Link>
                                        </div>
                                        <h2 className="text-xl font-medium">{company.name}</h2>
                                        <p className="text-gray-800 flex items-center gap-2 my-5"><FaMapMarkerAlt />{company.location}</p>
                                        <p className="text-gray-800 flex items-center gap-2 my-5"><FaUsers />{company.employees}</p>

                                        <p className=" text-[#2b2b2b6e]">{company.description}</p>

                                        <button className="mt-3 text-[#7ed957] border border-[#7ed957] cursor-pointer hover:bg-[#7ed957] hover:text-white transition px-8 py-3 rounded-md font-semibold">Follow</button>
                                    </div>

                                    {
                                        index === 1 && (
                                            <div className="mt-5 hidden md:flex items-center justify-center">
                                                <Link href="/companies" className="px-10 text-center duration-500  py-3   md:w-auto  border border-[#7ed957] cursor-pointer rounded-full bg-[#7ed957] text-white transition font-medium shadow-sm  ">All Companies</Link>
                                            </div>
                                        )
                                    }
                                    {
                                        index === 2 && (
                                            <div className="mt-5 flex md:hidden items-center justify-center">
                                                <Link href="/companies" className="px-10 duration-500  py-3 w-full md:w-auto  border border-[#7ed957] cursor-pointer text-center rounded-full bg-[#7ed957] text-white transition font-medium shadow-sm">All Companies</Link>
                                            </div>
                                        )
                                    }

                                </Link>
                            ))}
                        </div>
                    }
                    {activeTab === "New" &&

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 md:gap-10 items-end">
                            {companies.map((company, index) => (
                                <Link href={`/companies/profile`} key={company.id} className="">
                                    <div className="p-5 border border-[#6a40a1] rounded-xl">
                                        <div className="relative mb-5">
                                            <img className="w-full" src={company.image} alt={company.name} />
                                            <Link href={`/companies/profile/jobs`} className="absolute -bottom-6 right-8 bg-[#f5eff7] px-8 py-3 rounded-md text-[#553283]">
                                                {company.jobs} Jobs
                                            </Link>
                                        </div>
                                        <h2 className="text-xl font-medium">{company.name}</h2>
                                        <p className="text-gray-800 flex items-center gap-2 my-5"><FaMapMarkerAlt />{company.location}</p>
                                        <p className="text-gray-800 flex items-center gap-2 my-5"><FaUsers />{company.employees}</p>

                                        <p className=" text-[#2b2b2b6e]">{company.description}</p>

                                        <button className="mt-3 text-[#7ed957] border border-[#7ed957] cursor-pointer hover:bg-[#7ed957] hover:text-white transition px-8 py-3 rounded-md font-semibold">Follow</button>
                                    </div>

                                    {
                                        index === 1 && (
                                            <div className="mt-5 hidden md:flex items-center justify-center">
                                                <Link href="/companies" className="px-10  duration-500  py-3 w-full md:w-auto  border border-[#7ed957] cursor-pointer  rounded-full bg-[#7ed957] text-white transition font-medium shadow-sm">All Companies</Link>
                                            </div>
                                        )
                                    }
                                    {
                                        index === 2 && (
                                            <div className="mt-5 flex md:hidden items-center justify-center">
                                                <Link href="/companies" className="px-10 duration-500  py-3 w-full md:w-auto  border border-[#7ed957] text-center cursor-pointer  rounded-full bg-[#7ed957] text-white transition font-medium shadow-sm">All Companies</Link>
                                            </div>
                                        )
                                    }

                                </Link>
                            ))}
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default SearchJob;
