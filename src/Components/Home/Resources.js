import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Resources = () => {
    return (
        <div className=' my-20'>
            <div className="w-[90%] mx-auto ">
                <div className="py-10 ">
                    <h2 className="md:text-4xl text-2xl font-bold text-center pb-5 border-b border-gray-500">Resources</h2>
                </div>
                <div className='grid xl:grid-cols-2 gap-10 py-10 lg:px-20 items-center'>
                    <div>
                        <h2 className='md:text-5xl text-2xl'>Empowering your journey <br /> with expert insights.</h2>
                        <ul className='space-y-5 mt-10'>
                            <li className='flex items-center gap-2'><FaCheck className='text-xl' />Proven strategies to land your dream job.</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-xl' />Stay ahead with trending industry skills.</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-xl' />Practical advice for career growth.</li>
                        </ul>
                    </div>
                    <div className='md:bg-[url("/Images/Home/Resources.png")] bg-no-repeat w-full min-h-[600px] bg-center bg-cover relative'>
                        {/* <img src="/Images/Home/resources.png" alt="" /> */}
                        <div className='md:absolute bottom-0 grid md:grid-cols-3 grid-cols-2 gap-3' >
                            <div className='bg-white p-5 shadow rounded-lg'>
                                <span className='bg-[#f4edff] text-[#6836b8] font-semibold p-2 rounded-lg'>Featured</span>
                                <h2 className='my-5 text-xl'>The Ultimate Guide to Acing Interviews</h2>
                                <p className='text-[#bbb]'>Stand out from the competition with confidence.</p>
                                <Link href="/blog/1" className='mt-5 inline-block text-center p-2 px-5 w-full rounded-lg text-[#7ed957] border broder-[#7ed957]'>View Article</Link>
                            </div>
                            <div className='bg-white p-5 shadow rounded-lg'>
                                <span className='bg-[#f4edff] text-[#6836b8] font-semibold p-2 rounded-lg'>Featured</span>
                                <h2 className='my-5 text-xl'>Top 5 Skills Every Professional Needs in 2025</h2>
                                <p className='text-[#bbb]'>Stay competitive by mastering the skills that matter most.</p>
                                <Link href="/blog/1" className='mt-5 inline-block text-center p-2 px-5 w-full rounded-lg text-[#7ed957] border broder-[#7ed957]'>View Article</Link>
                            </div>
                            <div className='bg-white p-5 shadow rounded-lg'>
                                <span className='bg-[#f4edff] text-[#6836b8] font-semibold p-2 rounded-lg'>Featured</span>
                                <h2 className='my-5 text-xl'>How to Build a Winning Personal Brand</h2>
                                <p className='text-[#bbb]'>Craft an authentic professional image that opens doors.</p>
                                <Link href="/blog/1" className='inline-block text-center mt-5 p-2 px-5 w-full rounded-lg text-[#7ed957] border broder-[#7ed957]'>View Article</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resources;

