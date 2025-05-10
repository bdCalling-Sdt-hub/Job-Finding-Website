import React from 'react';
import { FaIndustry, FaRegCalendarAlt } from 'react-icons/fa';
import { PiBagLight, PiSuitcaseSimpleBold, PiUsersThree } from 'react-icons/pi';
import { MdLocationOn, MdOutlineHomeWork } from 'react-icons/md';
import { RiUserFollowLine } from 'react-icons/ri';
import { GrLocation } from 'react-icons/gr';
import { CiCalendar } from 'react-icons/ci';

const MyCompanyDetails = () => {
    return (
        <div className="">
            <h2 className="text-xl font-semibold mb-4">My Company</h2>

            <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-5'>
                <div className="border border-[#a675d8] rounded-lg p-5 bg-white ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        {/* Logo */}
                        <div className="flex flex-col items-center  h-full">
                            <img src="/Images/Auth/logo2.png" alt="Company Logo" className="w-48 border border-[#a675d8] p-4 rounded-lg h-48 object-contain" />
                            <span className="text-sm text-gray-500 mt-2">Company Logo</span>
                        </div>

                        {/* Info Section */}
                        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-20 text-center">
                            <div>
                                <p className="text-lg font-semibold">Tech</p>
                                <div className="flex justify-center items-center gap-1 text-gray-500 mt-1">
                                    <MdOutlineHomeWork className='text-xl' /> Industry
                                </div>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Nicosia, Cyprus</p>
                                <div className="flex justify-center items-center gap-1 text-gray-500 mt-1">
                                    <GrLocation className='text-xl' /> Location
                                </div>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">1 February, 2025</p>
                                <div className="flex justify-center items-center gap-1 text-gray-500 mt-1">
                                    <CiCalendar className='text-xl' /> Registration Date
                                </div>
                            </div>

                            {/* Stats */}
                            <div>
                                <p className="text-lg font-semibold">16</p>
                                <div className="flex justify-center items-center gap-1 text-gray-500 mt-1">
                                    <PiBagLight className='text-xl' /> Number of Job Posts
                                </div>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">16</p>
                                <div className="flex justify-center items-center gap-1 text-gray-500 mt-1">
                                    <PiUsersThree className='text-xl' /> Application Received
                                </div>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">1,200</p>
                                <div className="flex justify-center items-center gap-1 text-gray-500 mt-1">
                                    <PiUsersThree className='text-xl' /> Total Followers
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Name + Edit Button */}
                    <div className="mt-6 ml-5 flex justify-between items-center">
                        <div>
                            <p className="text-2xl font-bold">Karma International</p>
                            <p className="text-sm text-gray-500">Company Name</p>
                        </div>
                        <button className="bg-[#5d3395] text-white px-6 py-2 cursor-pointer rounded-md hover:bg-[#4b267d]">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCompanyDetails;
