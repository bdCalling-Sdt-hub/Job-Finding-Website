'use client';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';
import { CiCalendar } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';

const Page = () => {


    return (
        <div className='w-[90%] mx-auto py-10'>
            <div className='py-10'>
                <Link href='/' className='flex items-center gap-2'>
                    <IoArrowBack className='text-2xl' /> Back
                </Link>
                <h2 className='text-5xl font-semibold text-primary text-center my-10'>
                    Career Resources
                </h2>
            </div>

            <div>
                <h2 className='text-4xl font-medium text-primary my-10'>Blog Posts & Articles</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 items-start gap-5'>
                    <div className='lg:col-span-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-3'  >
                        <img src='/Images/Blog/card-image.png' alt='' />
                        <div className='flex items-center gap-2 my-3 text-sm text-gray-500'>
                            <CiCalendar className='text-xl' />
                            <span>1 February, 2025</span>
                        </div>
                        <h2 className='my-3 font-semibold'>This is my Best Blog Post Ever</h2>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit unde natus consequuntur omnis
                            architecto culpa laudantium perferendis eum reprehenderit praesentium.
                        </p>

                        <Link
                            href={`/blog/1`}
                            className='flex cursor-pointer items-center font-semibold mt-10 gap-2 text-[#553283]'
                        >
                            Read More <FaArrowRight className='text-xl' />
                        </Link>
                    </div>
                    <div className='lg:col-span-2 space-y-5'>
                        {
                            [...Array(3)].map((_, index) =>

                                <div className=' lg:flex items-center gap-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-3'  >
                                    <img className='lg:w-1/4' src='/Images/Blog/card-image.png' alt='' />
                                    <div>
                                        <div className='flex items-center gap-2 my-3 text-sm text-gray-500'>
                                            <CiCalendar className='text-xl' />
                                            <span>1 February, 2025</span>
                                        </div>
                                        <h2 className='my-3 font-semibold'>This is my Best Blog Post Ever</h2>
                                        <p className='text-gray-600'>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit unde natus consequuntur omnis
                                            architecto culpa laudantium perferendis eum reprehenderit praesentium.
                                        </p>

                                        <Link
                                            href={`/blog/1`}
                                            className='flex cursor-pointer items-center font-semibold mt-10 gap-2 text-[#553283]'
                                        >
                                            Read More <FaArrowRight className='text-xl' />
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <Link href='/blog' className='cursor-pointer py-3 px-12 bg-[#7ed957] text-white rounded-full mt-10'>All Blogs</Link>
                </div>
            </div>

            <div>
                <h2 className='text-4xl font-medium text-primary my-10'>Networking Activities</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 items-start gap-5'>
                    <div className='lg:col-span-2 space-y-5'>
                        {
                            [...Array(3)].map((_, index) =>

                                <div className=' lg:flex items-center gap-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-3'  >
                                    <img className='lg:w-1/4' src='/Images/Blog/card-image.png' alt='' />
                                    <div>
                                        <div className='flex items-center gap-2 my-3 text-sm text-gray-500'>
                                            <CiCalendar className='text-xl' />
                                            <span>1 February, 2025</span>
                                        </div>
                                        <h2 className='my-3 font-semibold'>This is my Best Blog Post Ever</h2>
                                        <p className='text-gray-600'>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit unde natus consequuntur omnis
                                            architecto culpa laudantium perferendis eum reprehenderit praesentium.
                                        </p>

                                        <Link
                                            href={`/blog/1`}
                                            className='flex cursor-pointer items-center font-semibold mt-10 gap-2 text-[#553283]'
                                        >
                                            Read More <FaArrowRight className='text-xl' />
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='lg:col-span-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-3'  >
                        <img src='/Images/Blog/card-image.png' alt='' />
                        <div className='flex items-center gap-2 my-3 text-sm text-gray-500'>
                            <CiCalendar className='text-xl' />
                            <span>1 February, 2025</span>
                        </div>
                        <h2 className='my-3 font-semibold'>This is my Best Blog Post Ever</h2>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit unde natus consequuntur omnis
                            architecto culpa laudantium perferendis eum reprehenderit praesentium.
                        </p>

                        <Link
                            href={`/blog/1`}
                            className='flex cursor-pointer items-center font-semibold mt-10 gap-2 text-[#553283]'
                        >
                            Read More <FaArrowRight className='text-xl' />
                        </Link>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <Link href='/networking-events' className='cursor-pointer py-3 px-12 bg-[#7ed957] text-white rounded-full mt-10'>All Activities</Link>
                </div>
            </div>

        </div>
    );
};

export default Page;
