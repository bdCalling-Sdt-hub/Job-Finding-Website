import Link from 'next/link';
import React from 'react';
import { LuCheck } from "react-icons/lu";

const CareerInsights = () => {
    return (
        <div className="w-[90%] mx-auto py-10 ">
            <Link href="/resources" className='block text-4xl font-semibold text-primary mb-6 text-center border-b border-gray-500 pb-5'>Career Insights for Job Seekers</Link>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                <div>
                    <h2 className='md:text-3xl text-2xl text-primary mb-6 '>Stay informed and empowered with expert advice and resources.</h2>
                    <ul>
                        <li className='flex items-center gap-2 my-2'><LuCheck className='text-xl' />Proven strategies to land your dream job.</li>
                        <li className='flex items-center gap-2 my-2'><LuCheck className='text-xl' />Stay ahead with trending industry skills.</li>
                        <li className='flex items-center gap-2 my-2'><LuCheck className='text-xl' />Practical advice for career growth.</li>
                    </ul>
                </div>
                <div>
                    <img src="/Images/Jobs/careerInsights.png" alt="" />
                </div>
            </div>

        </div>
    );
}

export default CareerInsights;
