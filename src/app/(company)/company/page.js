'use client';
import CompanyStutas from '@/Components/Companies/CompanyStutas';
import MyCompanyDetails from '@/Components/Companies/MyCompanyDetails';
import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { GiFemale } from 'react-icons/gi';
import { MdMale } from 'react-icons/md';
import { PiBagLight } from 'react-icons/pi';
import { TbArrowUpRightCircle } from 'react-icons/tb';

const Page = () => {


    const handleSetup = () => {
        window.location.href = '/company/setup';
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold'>My Company</h1>

            <div className='flex items-center justify-center h-[80vh]'>
                <div>
                    <img src="/UserProfile/dashboard-home.png" alt="" />
                    <h2 className='text-center font-semibold text-4xl mt-10'>Setup your company!</h2>
                    <p className='text-center my-2 '>Setup your company and connect with top talent!</p>
                    <div className='flex items-center justify-center'>
                        <button onClick={handleSetup} className='cursor-pointer bg-[#553283] text-white py-3 px-5 rounded-lg'>Setup Now</button>
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Total Job Postings */}
                    <div className=" border-2 border-[#7ed957] p-6 rounded-lg space-x-4">
                        <div className="text-4xl bg-[#7ed957] w-16 h-16 flex items-center justify-center mb-2 mx-auto text-white p-2 rounded-full">
                            <PiBagLight />
                        </div>
                        <div className='text-center'>
                            <h3 className="text-3xl text-[#553283] font-semibold">120</h3>
                            <p className="text-sm text-[#553283] font-semibold mt-1">Total Job Postings</p>
                        </div>
                    </div>

                    {/* Total Applicants */}
                    <div className=" border-2 border-[#7ed957] p-6 rounded-lg  space-x-4">
                        <div className="text-4xl bg-[#7ed957] w-16 h-16 flex items-center justify-center mb-2 mx-auto text-white p-2 rounded-full">
                            <FaUsers />
                        </div>
                        <div className='text-center'>
                            <h3 className="text-3xl text-[#553283] font-semibold">120</h3>
                            <p className="text-sm text-[#553283] font-semibold mt-1">Total Applicants</p>
                        </div>
                    </div>

                    {/* Male Applicants */}
                    <div className=" border-2 border-[#7ed957] p-6 rounded-lg space-x-4">
                        <div className="text-4xl bg-[#7ed957] w-16 h-16 flex items-center justify-center mb-2 mx-auto text-white p-2 rounded-full">
                            <MdMale />
                        </div>
                        <div className='text-center'>
                            <h3 className="text-3xl text-[#553283] font-semibold">20</h3>
                            <p className="text-sm text-[#553283] font-semibold mt-1">Male Applicants</p>
                        </div>
                    </div>

                    {/* Female Applicants */}
                    <div className=" border-2 border-[#7ed957] p-6 rounded-lg  space-x-4">
                        <div className="text-4xl bg-[#7ed957] w-16 h-16 flex items-center justify-center mb-2 mx-auto text-white p-2 rounded-full">
                            <GiFemale />
                        </div>
                        <div className='text-center'>
                            <h3 className="text-3xl text-[#553283] font-semibold">25</h3>
                            <p className="text-sm text-[#553283] font-semibold mt-1">Female Applicants</p>
                        </div>
                    </div>
                </div>
            </div>

            <CompanyStutas />
            <MyCompanyDetails />

        </div>
    );
}

export default Page;
