'use client'; // Ensures this component runs on the client side

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct hook to use in Next.js 13+
import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoIosLogOut } from 'react-icons/io';
import { IoDocumentTextOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineHomeWork } from 'react-icons/md';
import { PiBagLight } from 'react-icons/pi';
import { RxCross1 } from "react-icons/rx";
import Swal from 'sweetalert2';


const CompanySidebar = () => {
    const pathname = usePathname(); // Get current path using usePathname from next/navigation

    // Function to determine if the current route matches the link
    const isActive = (path) => {
        return pathname === path; // Compare the current route with the path
    };

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleShowLogout = () => {

        Swal.fire({
            title: 'Are you sure to logout?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('companyToken');
                window.location.href = '/login';
            }
        })



    };

    return (
        <div>
            {/* Menu Icon for Mobile */}
            <div className='absolute top-5 left-5 cursor-pointer md:hidden'>
                <CiMenuFries onClick={handleShowMenu} className='text-3xl' />
            </div>

            {/* Sidebar for Desktop */}
            <div
                className={` md:min-w-[250px]  min-h-screen  md:block ${showMenu ? 'block' : 'hidden'} md:relative`}
            >
                <div className='fixed top-0 h-screen bg-[#e0f6d7] border-r-2 border-[#553283] p-5'>
                    <Link href='/'>
                        <img className='w-48 mx-auto' src='/Images/Auth/logo2.png' alt='Company Logo' />
                    </Link>

                    <ul className='space-y-2 mt-10'>
                        <Link
                            href='/company'
                            className={`font-semibold flex items-center gap-2 py-3 px-5 border-l-4 ${isActive('/company') ? 'border-[#553283] bg-white text-[#553283]' : 'border-transparent text-[#7c7c7c]'}`}
                        >
                            <MdOutlineHomeWork className='text-2xl' />My Companies
                        </Link>
                        <Link
                            href='/company/joblisting'
                            className={`font-semibold flex items-center gap-2 py-3 px-5 border-l-4 ${isActive('/company/joblisting') ? 'border-[#553283] bg-white text-[#553283]' : 'border-transparent text-[#7c7c7c]'}`}
                        >
                            <PiBagLight className='text-2xl' /> Job Listing
                        </Link>
                        <Link
                            href='/company/careerresources'
                            className={`font-semibold flex items-center gap-2 py-3 px-5 border-l-4 ${isActive('/company/careerresources') ? 'border-[#553283] bg-white text-[#553283]' : 'border-transparent text-[#7c7c7c]'}`}
                        >
                            <IoDocumentTextOutline className='text-2xl' />Career Resources
                        </Link>
                        <Link
                            href='/company/settings'
                            className={`font-semibold flex items-center gap-2 py-3 px-5 border-l-4 ${isActive('/company/settings') ? 'border-[#553283] bg-white text-[#553283]' : 'border-transparent text-[#7c7c7c]'}`}
                        >
                            <IoSettingsOutline className='text-2xl' />Settings
                        </Link>
                    </ul>

                    <div className='absolute bottom-10 ml-12'>
                        <button
                            onClick={handleShowLogout}
                            className='cursor-pointer py-3 px-8 bg-[#c91e1e] text-white rounded-lg flex items-center gap-2'>
                            Logout <IoIosLogOut />
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar for Mobile */}
            <div
                className={`md:hidden w-[100vw] fixed top-0 left-0 z-50 bg-[#e0f6d7] h-screen p-5 transform transition-transform ${showMenu ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className='absolute top-5 right-5 cursor-pointer'>
                    <RxCross1 onClick={handleShowMenu} className='text-3xl' />
                </div>

                <div>
                    <img className='w-48 mx-auto' src='/Images/Auth/logo2.png' alt='Company Logo' />
                </div>

                <ul className='space-y-2 mt-10'>
                    <Link
                        onClick={handleShowMenu}
                        href='/company'
                        className={`font-semibold flex items-center gap-2 py-3 px-5 border-l-4 ${isActive('/company') ? 'border-[#553283] bg-white text-[#553283]' : 'border-transparent text-[#7c7c7c]'}`}
                    >
                        <MdOutlineHomeWork className='text-2xl' />My Companies
                    </Link>
                    <Link
                        onClick={handleShowMenu}
                        href='/company/joblisting'
                        className={`font-semibold flex items-center gap-2 py-3 px-5 border-l-4 ${isActive('/company/joblisting') ? 'border-[#553283] bg-white text-[#553283]' : 'border-transparent text-[#7c7c7c]'}`}
                    >
                        <PiBagLight className='text-2xl' /> Job Listing
                    </Link>
                    <Link
                        onClick={handleShowMenu}
                        href='/company/careerresources'
                        className={`font-semibold flex items-center gap-2 py-3 px-5 border-l-4 ${isActive('/company/careerresources') ? 'border-[#553283] bg-white text-[#553283]' : 'border-transparent text-[#7c7c7c]'}`}
                    >
                        <IoDocumentTextOutline className='text-2xl' />Career Resources
                    </Link>
                    <Link
                        onClick={handleShowMenu}
                        href='/company/settings'
                        className={`font-semibold flex items-center gap-2 py-3 px-5 border-l-4 ${isActive('/company/settings') ? 'border-[#553283] bg-white text-[#553283]' : 'border-transparent text-[#7c7c7c]'}`}
                    >
                        <IoSettingsOutline className='text-2xl' />Settings
                    </Link>
                </ul>

                <div className='absolute bottom-10 ml-12'>
                    <button
                        onClick={handleShowLogout}
                        className='cursor-pointer py-3 px-8 bg-[#c91e1e] text-white rounded-lg flex items-center gap-2'>
                        Logout <IoIosLogOut />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompanySidebar;
