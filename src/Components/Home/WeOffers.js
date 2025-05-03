import Link from 'next/link';
import React from 'react';

const WeOffers = () => {
    return (
        <div className='bg-gray-100'>
            <div className="w-[90%] mx-auto ">
                <div className="py-10">
                    <h2 className="md:text-4xl text-2xl font-bold text-center pb-5 border-b border-gray-500">Discover Companies</h2>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 md:gap-10 gap-5 py-10">
                    <div className='space-y-5'>
                        <div className='text-center bg-white shadow rounded-xl py-10 min-h-[150px] flex items-center justify-center'>
                            <p className='text-xl font-medium'>Curated Job <br />
                                Opportunities</p>
                        </div>
                        <Link className='block' href="/jobs">
                            <img className='w-full' src="/Images/Home/weoffer-1.png" alt="" />
                        </Link>
                    </div>
                    <div className='space-y-5'>
                        <Link className='block' href="/companies">
                            <img className='w-full' src="/Images/Home/weoffer-2.png" alt="" />
                        </Link>
                        <div className='text-center bg-white shadow rounded-xl py-10 min-h-[150px] flex items-center justify-center'>
                            <p className='text-xl font-medium'>Company Insights</p>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <div className='text-center bg-white shadow rounded-xl py-10 min-h-[150px] flex items-center justify-center'>
                            <p className='text-xl font-medium'>Career Resources</p>
                        </div>
                        <Link className='block' href="/resources">
                            <img className='w-full' src="/Images/Home/weoffer-3.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeOffers;
