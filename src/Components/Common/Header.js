'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for menu toggle

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex justify-between items-center w-[90%] mx-auto py-4'>
            {/* Logo */}
            <Link href="/">
                <img className='md:w-42 w-24' src="/Images/Auth/logo2.png" alt="Logo" />
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-10'>
                <Link href="/" className='text-gray-700 hover:text-[#7ed957] transition'>Explore Companies</Link>
                <Link href="/jobs" className='text-gray-700 hover:text-[#7ed957] transition'>Browse Jobs</Link>
            </div>

            {/* Sign In Button (Hidden on Small Screens) */}
            <div className='hidden md:block'>
                <Link className='bg-[#7ed957]  text-white py-3 px-8 rounded-md hover:bg-[#7ed957] transition' href="/login">
                    Sign In
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className='md:hidden  text-gray-700'
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX className='text-3xl' /> : <FiMenu className='text-3xl' />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className='absolute top-20 duration-500 left-0 w-full bg-white shadow-lg p-4 flex flex-col space-y-4 md:hidden'>
                    <Link href="/" className='text-gray-700 hover:text-[#7ed957] transition'>Explore Companies</Link>
                    <Link href="/" className='text-gray-700 hover:text-[#7ed957] transition'>Browse Jobs</Link>
                    <Link className='bg-[#7ed957] text-center text-white py-3 px-8 rounded-md hover:bg-[#7ed957] transition' href="/login">
                        Sign In
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;
