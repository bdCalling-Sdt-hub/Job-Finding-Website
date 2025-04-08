'use client';
import React, { useState } from 'react';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { IoAnalyticsSharp, IoBagOutline } from 'react-icons/io5';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { CiCirclePlus } from 'react-icons/ci';

const Page = () => {
    // State for toggling collapsible sections
    const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);
    const [isTechStackOpen, setIsTechStackOpen] = useState(false);

    return (
        <div className='w-[90%] mx-auto py-10'>
            <div className='bg-[#fffff9] border border-[#7ed957] rounded-lg shadow-md lg:flex items-center justify-center md:gap-10 gap-5 md:p-10 p-5 space-y-5'>
                <div>
                    <h2 className='text-3xl font-semibold mb-5'>Mission We Are Working on</h2>
                    <p>
                        Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus.
                    </p>
                </div>
                <div>
                    <img className='w-full lg:min-w-[300px] h-[250px]' src="/Images/Company/SliderImage/proflie-slider.png" alt="" />
                </div>
            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                    <div className='bg-[url("/Images/whyKarma.png")] bg-cover bg-center h-[300px] shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-10 lg:my-5 border-r-2 border-b-2 border-[#7ed957]'>
                        <IoBagOutline className='text-4xl text-[#7ed957]' />
                        <h2 className='text-3xl font-medium my-5'>Innovation</h2>
                        <p className='text-right text-[#777]'>
                            Endisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                        </p>
                    </div>
                    <div className='bg-[url("/Images/whyKarma.png")] bg-cover bg-center h-[300px] shadow-[0,0,10px_rgba(0,0,0,0.1)] rounded-lg p-10 my-5 border-r-2 border-b-2 border-[#7ed957]'>
                        <HiOutlineBuildingOffice2 className='text-4xl text-[#7ed957]' />
                        <h2 className='text-3xl font-medium my-5'>Innovation</h2>
                        <p className='text-right text-[#777]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium?
                        </p>
                    </div>
                    <div className='bg-[url("/Images/whyKarma.png")] bg-cover bg-center h-[300px] shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-10 lg:my-5 border-r-2 border-b-2 border-[#7ed957]'>
                        <IoAnalyticsSharp className='text-4xl text-[#7ed957]' />
                        <h2 className='text-3xl font-medium my-5'>Innovation</h2>
                        <p className='text-right text-[#777]'>
                            Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia.
                        </p>
                    </div>
                </div>
            </div>


            {/* Collapsible Sections */}
            <div className='my-10'>
                {/* Benefits We Offer */}
                <div className='bg-[#f4f7f6] border-b border-[#7ed957] rounded-lg p-5'>
                    <div onClick={() => setIsBenefitsOpen(!isBenefitsOpen)} className='flex cursor-pointer justify-between items-center'>
                        <h3 className='text-2xl font-semibold'>Benefits We Offer</h3>
                        <button

                            className='text-[#7ed957] text-3xl'
                        >
                            {isBenefitsOpen ? <CiCirclePlus /> : <CiCirclePlus />}
                        </button>
                    </div>
                    {isBenefitsOpen && (
                        <ul className='list-disc list-inside space-y-5 mt-4'>
                            <li className='text-[#555] flex items-center gap-4'>
                                <FaBagShopping className='text-[#7ed957]' />
                                Unlimited access to all features
                            </li>
                            <li className='text-[#555] flex items-center gap-4'>
                                <FaBagShopping className='text-[#7ed957]' />
                                24/7 customer support
                            </li>
                            <li className='text-[#555] flex items-center gap-4'>
                                <FaBagShopping className='text-[#7ed957]' />
                                Monthly updates
                            </li>
                            <li className='text-[#555] flex items-center gap-4'>
                                <FaBagShopping className='text-[#7ed957]' />
                                New features
                            </li>
                        </ul>
                    )}
                </div>

                {/* Technology Stack */}
                <div className='bg-[#f4f7f6] border-b border-[#7ed957] rounded-lg p-5 mt-5'>
                    <div onClick={() => setIsTechStackOpen(!isTechStackOpen)} className='cursor-pointer flex justify-between items-center'>
                        <h3 className='text-2xl font-semibold'>Technology Stack</h3>
                        <button

                            className='text-[#7ed957] text-3xl'
                        >
                            {isTechStackOpen ? <CiCirclePlus /> : <CiCirclePlus />}
                        </button>
                    </div>
                    {isTechStackOpen && (
                        <ul className='list-disc list-inside space-y-5 mt-4'>
                            <li className='text-[#555] flex items-center gap-4'>
                                <IoAnalyticsSharp className='text-[#7ed957]' />
                                Technology 1
                            </li>
                            <li className='text-[#555] flex items-center gap-4'>
                                <IoAnalyticsSharp className='text-[#7ed957]' />
                                Technology 2
                            </li>
                            <li className='text-[#555] flex items-center gap-4'>
                                <IoAnalyticsSharp className='text-[#7ed957]' />
                                Technology 3
                            </li>
                            <li className='text-[#555] flex items-center gap-4'>
                                <IoAnalyticsSharp className='text-[#7ed957]' />
                                Technology 4
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            <div className='grid md:grid-cols-2  xl:grid-cols-4 gap-5 my-10 lg:my-20'>
                <img className='w-full' src="/Images/Company/SliderImage/proflie-slider.png" alt="" />
                <img className='w-full' src="/Images/Company/SliderImage/proflie-slider2.png" alt="" />
                <img className='w-full' src="/Images/Company/SliderImage/proflie-slider3.png" alt="" />
                <img className='w-full' src="/Images/Company/SliderImage/proflie-slider4.png" alt="" />
            </div>



        </div>
    );
};

export default Page;
