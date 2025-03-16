import React from 'react';

const Elevate = () => {
    return (
        <div className='bg-[#7ed957] py-10 md:py-20'>
            <div className="w-[90%] md:w-[70%] bg-white mx-auto pt-10 px-10 rounded-2xl md:flex items-center justify-center gap-10 space-y-5">
                <div className='text-center'>
                    <h2 className='text-3xl'>ELEVATE YOUR CAREER WITH US</h2>
                    <p className='my-5 text-gray-700'>Get the latest job updates and career insights delivered to you.</p>
                    <div className='space-x-3 space-y-4'>
                        <button className='cursor-pointer py-3 px-8 bg-[#553283] text-white rounded-lg '>Find Jobs</button>
                        <button className='cursor-pointer py-3 px-8 border border-[#553283] text-[#553283] font-semibold rounded-lg '>View Applications</button>
                    </div>
                </div>
                <div className=''>
                    <img className='w-[300px]' src="/Images/Home/elevate-1.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Elevate;

