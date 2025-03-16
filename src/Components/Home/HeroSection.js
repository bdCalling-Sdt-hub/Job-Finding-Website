import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <div className='md:min-h-[70vh] min-h-[50vh] bg-gradient-to-b  to-[#ffffff] from-[#7d54b3] flex justify-center items-center'>
            <div className='md:max-w-[500px] px-5 md:px-0'>
                <h1 className='text-3xl md:text-5xl font-bold text-center text-white'>Your <span className='text-[#7ed957]'>Career Journey</span> Starts Here</h1>
                <p className='text-center mt-5 text-gray-200 font-medium'>Join a thriving community of professionals and connect with top employers.</p>
                <div className='mt-5 flex justify-center'>
                    <Link href="/login" className='bg-[#7ed957] font-semibold text-white py-3 px-8 rounded-md hover:bg-[#67a74b] transition text-center' >Sign In</Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
