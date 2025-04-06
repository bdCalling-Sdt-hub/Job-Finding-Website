'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import React, { useState, useEffect } from 'react';
import { CiLocationOn } from 'react-icons/ci';

const CompanyProfileHeader = () => {
    const pathname = usePathname(); // Get the current route pathname
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Ensuring usePathname is used only on the client-side
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Render nothing during SSR

    return (
        <div className='w-[90%] mx-auto'>
            <div className='bg-[url("/Images/Company/profile-banner.png")] bg-cover bg-center lg:h-72 h-52 flex items-center justify-center shadow-lg mb-20 relative'>
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="z-10 text-white flex items-center gap-5 absolute lg:-bottom-10  lg:left-20 left-5">
                    {/* Content inside the image container */}
                    <div className='lg:w-[150px] w-[100px]  lg:h-[150px] h-[100px]  rounded-lg p-3 border-2 border-[#7ed957] bg-white flex items-center justify-center'>
                        <img src="/Images/Jobs/PopulerSearch/companyLogo.png" alt="Company Logo" />
                    </div>
                    <div>
                        <h2 className='lg:text-3xl text-2xl font-semibold text-white'>Brac International</h2>
                        <p className='flex items-center gap-2 text-gray-300'><CiLocationOn className='text-xl' /> Dhaka, Bangladesh </p>
                    </div>
                </div>
            </div>

            {/* Navigation Links */}
            <div className='flex items-center justify-center uppercase gap-10 text-gray-500 font-semibold'>
                <Link href="/companies/profile">
                    <p className={`border-b-2 ${pathname === "/companies/profile" ? 'border-[#7ed957] text-[#7ed957] ' : 'border-transparent'}`}>Profile</p>
                </Link>
                <Link href="/companies/profile/team">
                    <p className={`border-b-2  ${pathname === "/companies/profile/team" ? 'border-[#7ed957] text-[#7ed957]' : 'border-transparent'}`}>Team</p>
                </Link>
                <Link href="/companies/profile/culture">
                    <p className={`border-b-2  ${pathname === "/companies/profile/culture" ? 'border-[#7ed957] text-[#7ed957]' : 'border-transparent'}`}>Culture</p>
                </Link>
                <Link href="/companies/profile/jobs">
                    <p className={`border-b-2  ${pathname === "/companies/profile/jobs" ? 'border-[#7ed957] text-[#7ed957]' : 'border-transparent'}`}>Jobs</p>
                </Link>
            </div>
        </div>
    );
}

export default CompanyProfileHeader;
