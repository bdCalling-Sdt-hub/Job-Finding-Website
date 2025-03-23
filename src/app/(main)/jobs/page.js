import { Select } from 'antd';
import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Page = () => {
    return (
        <div>
            <section className="bg-gradient-to-b from-[#e7d5ff] to-[#ffffff]  py-10">
                <div className='w-[90%] mx-auto py-10'>
                    <button>Back</button>
                    <h2 className='md:text-4xl text-2xl font-bold text-center my-5'>Jobs For You</h2>
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
        </div>
    );
}

export default Page;
