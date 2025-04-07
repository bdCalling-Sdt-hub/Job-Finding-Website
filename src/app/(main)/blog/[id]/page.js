'use client'; // Ensure that this is a client-side component

import Link from 'next/link';
import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';

const Page = ({ params }) => {
    const id = params.id; // Extract the blog ID from the URL parameters
    console.log(id); // Log the ID to the console for debugging

    return (
        <div className='w-[90%] mx-auto py-10'>
            {/* Back button */}
            <Link href="/blog" className='flex items-center  gap-2'>
                <IoArrowBack className='text-2xl' /> Back
            </Link>

            <div className='sm:w-[80%] mx-auto'>
                <h2 className='text-3xl lg:text-5xl font-medium text-primary text-center my-10'>Step-by-step guide to choosing great font pairs</h2>
                <div className='bg-[url("/Images/Blog/blog-detials-banner.png")] bg-cover bg-center h-[300px] sm:h-[550px] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] w-full'>
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
                <h2 className='text-3xl font-medium text-primary mt-10 mb-5'>Articles</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {[...Array(4)].map((_, index) => (
                        <div className='bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-3' key={index}>
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
                                href={`/blog/${++index}`}
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
