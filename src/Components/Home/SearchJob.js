'use client'
import { useState } from "react";
import React from "react";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { Select } from "antd";

const { Option } = Select;

const SearchJob = () => {
    const [activeTab, setActiveTab] = useState("featured");

    return (
        <div className=" mx-auto w-[90vw]">
            <div className="md:flex items-center gap-3 space-y-3 md:space-y-0">
                {/* Search Input Container */}
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
                        <div>
                            <h2 className="text-xl font-semibold">Tab 1 Content</h2>
                            <p>This is the content of Tab 1.</p>
                        </div>
                    }
                    {activeTab === "New" &&
                        <div>
                            <h2 className="text-xl font-semibold">Tab 2 Content</h2>
                            <p>This is the content of Tab 2.</p>
                        </div>}
                </div>
            </div>

        </div>
    );
};

export default SearchJob;
