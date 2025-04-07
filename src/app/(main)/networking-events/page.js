'use client';
import React, { useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';

const Page = () => {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(5); // Initially on page 5
    const totalPages = 17; // Set total number of pages

    // Handle page change
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='w-[90%] mx-auto py-10'>
            <div className='py-10'>
                <Link href='/' className='flex items-center gap-2'>
                    <IoArrowBack className='text-2xl' /> Back
                </Link>
                <h2 className='text-5xl font-semibold text-primary text-center my-10'>
                    Networking Events
                </h2>

                <div className='w-full max-w-lg mx-auto'>
                    <div className='flex items-center border-2 border-[#7ed957] rounded-lg px-2 shadow-[0_0_10px_rgba(126,237,87,0.5)]'>
                        <FaSearch className='text-gray-400 text-xl' />
                        <input
                            type='text'
                            placeholder='How to grab attention'
                            className='flex-grow h-12 bg-transparent outline-none pl-3 pr-4 text-gray-700'
                        />
                        <button className='cursor-pointer bg-[#7ed957] text-white py-2 px-4 rounded-lg ml-2'>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <h2 className='text-3xl font-medium text-primary my-5'>Upcoming Networking Events</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {[...Array(4)].map((_, index) => (
                    <div className='bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-3' key={index}>
                        <img src='/Images/Blog/event.png' alt='' />
                        <div className='flex items-center justify-between gap-2 my-3 text-sm text-gray-500'>
                            <div className='flex items-center gap-2 my-3 text-sm text-gray-500'>
                                <CiCalendar className='text-xl' />
                                <span>1 February, 2025</span>
                            </div>
                            <span className='bg-[#ffff684f] text-[#b8af36] font-semibold px-2 py-1 rounded-lg'>Upcomeing</span>
                        </div>
                        <h2 className='my-3 font-semibold'>This is my Best Blog Post Ever</h2>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit unde natus consequuntur omnis
                            architecto culpa laudantium perferendis eum reprehenderit praesentium.
                        </p>

                        <Link
                            href={`/networking-events/${++index}`}
                            className='flex cursor-pointer items-center font-semibold mt-10 gap-2 text-[#553283]'
                        >
                            Read More <FaArrowRight className='text-xl' />
                        </Link>
                    </div>
                ))}
            </div>

            <h2 className='text-3xl font-medium text-primary mb-5 mt-20'>Recent Events</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {[...Array(4)].map((_, index) => (
                    <div className='bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-3' key={index}>
                        <img src='/Images/Blog/event.png' alt='' />
                        <div className='flex items-center justify-between gap-2 my-3 text-sm text-gray-500'>
                            <div className='flex items-center gap-2 my-3 text-sm text-gray-500'>
                                <CiCalendar className='text-xl' />
                                <span>1 February, 2025</span>
                            </div>
                            <span className='bg-[#f4edff] text-[#6836b8] font-semibold px-2 py-1 rounded-lg'>Recent </span>
                        </div>
                        <h2 className='my-3 font-semibold'>This is my Best Blog Post Ever</h2>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit unde natus consequuntur omnis
                            architecto culpa laudantium perferendis eum reprehenderit praesentium.
                        </p>

                        <Link
                            href={`/networking-events/${++index}`}
                            className='flex cursor-pointer items-center font-semibold mt-10 gap-2 text-[#553283]'
                        >
                            Read More <FaArrowRight className='text-xl' />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className='flex items-center justify-center gap-4 mt-10'>
                {/* Previous Button */}
                <button
                    onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                    className='flex cursor-pointer items-center bg-white border text-[#553283] py-2 px-4 rounded-lg hover:bg-[#7ed957] hover:text-white'
                >
                    <IoArrowBack className='mr-2' /> Back
                </button>

                {/* Page Numbers */}
                <div className='flex items-center gap-2'>
                    {currentPage > 1 && (
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            className='py-2 cursor-pointer px-4 border text-sm rounded-md text-[#553283]'
                        >
                            {currentPage - 1}
                        </button>
                    )}
                    <button className='py-2 cursor-pointer px-4 bg-[#7ed957] text-white rounded-md'>{currentPage}</button>
                    {currentPage < totalPages && (
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            className='py-2 px-4 border cursor-pointer text-sm rounded-md text-[#553283]'
                        >
                            {currentPage + 1}
                        </button>
                    )}
                </div>

                {/* Next Button */}
                <button
                    onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
                    className='flex items-center cursor-pointer bg-white border text-[#553283] py-2 px-4 rounded-lg hover:bg-[#7ed957] hover:text-white'
                >
                    Next <FaArrowRight className='ml-2' />
                </button>
            </div>



        </div>
    );
};

export default Page;
