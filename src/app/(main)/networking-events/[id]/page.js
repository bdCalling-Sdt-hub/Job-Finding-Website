'use client'; // Ensure that this is a client-side component

import Link from 'next/link';
import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import { GiSandsOfTime } from "react-icons/gi";

const Page = ({ params }) => {
    const id = params.id; // Extract the blog ID from the URL parameters
    console.log(id); // Log the ID to the console for debugging

    return (
        <div className='w-[90%] mx-auto py-10'>
            {/* Back button */}
            <Link href="/blog" className='flex items-center  gap-2'>
                <IoArrowBack className='text-2xl' /> Back
            </Link>


            <div className='my-10 md:flex space-y-5 items-center justify-between border-1 border-[#553283] shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-5'>
                <div className='md:flex space-y-5 items-center gap-5'>
                    <img className='w-full md:w-32 md:h-20' src="/Images/Blog/event.png" alt="" />
                    <div>
                        <h2 className='text-3xl font-semibold mb-3'>Title</h2>
                        <div className='flex items-center justify-start gap-2'>
                            <span className='flex items-center gap-2 bg-[#5532835d] text-[#553283] rounded-lg px-2 py-1 '><CiCalendar className='text-xl' /> 1st February, 2025</span>
                            <span className='flex items-center gap-2 bg-[#5532835d] text-[#553283] rounded-lg px-2 py-1 '><GiSandsOfTime className='text-xl' /> 1st February, 2025</span>
                        </div>
                    </div>
                </div>
                <button className='md:w-auto w-full bg-[#553283] text-white py-3 px-6 cursor-pointer rounded-lg'>Check Out Event</button>
            </div>



            <div className=''>
                <div className='bg-[url("/Images/Blog/event-banner.png")] bg-cover bg-center h-[300px] sm:h-[550px] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] w-full'>
                </div>

                <div className='flex items-center gap-2 my-5 text-sm text-gray-500'>
                    <img className='w-10 h-10 rounded-full' src="/Images/Jobs/jobDetails/meetTeam-video2.png" alt="" />
                    <div>
                        <h2 className='font-semibold text-xl text-[#553283]'>John Doe</h2>
                        <p className='text-gray-500'>Posted on : 27th January 2022</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <h2 className='text-2xl font-medium mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                    <p className='text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-2xl font-medium mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                    <p className='text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-2xl font-medium mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                    <p className='text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                </div>
            </div>

            <div>
                <h2 className='text-3xl font-medium text-primary mt-10 mb-5'>Upcoming Events</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {[...Array(4)].map((_, index) => (
                        <div className='bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-3' key={index}>
                            <img src='/Images/Blog/event.png' alt='' />
                            <div className='flex items-center justify-between gap-2 my-3 text-sm text-gray-500'>
                                <div className='flex items-center gap-2 my-3 text-sm text-gray-500'>
                                    <CiCalendar className='text-xl' />
                                    <span>1 February, 2025</span>
                                </div>
                                <span className='bg-[#ffff684f] text-[#bdb110] font-semibold px-2 py-1 rounded-lg'>Upcomeing</span>
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

            </div>

            <hr className='my-20' />

            <div className='w-[350px] mx-auto mt-20 mb-10'>
                <h2 className='text-3xl font-medium text-primary mt-10 mb-5 text-center' > Join our website and start your career journey.</h2>
                <div className='flex items-center justify-center gap-2'>
                    <Link href="/login" className='bg-[#7ed957] text-white py-3 px-8 rounded-md hover:bg-[#7ed957] transition cursor-pointer'>Sign In</Link>
                </div>
            </div>




        </div>
    );
};

export default Page;
