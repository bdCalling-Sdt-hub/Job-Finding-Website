import React from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { MdOutlineCancel } from 'react-icons/md';

const Page = () => {
    return (
        <div className='w-[90%] mx-auto my-10'>
            <div className='max-w-[500px] mx-auto text-center'>
                <h2 className='text-3xl font-medium mb-3'> Choose the Perfect Plan for You</h2>
                <p className='text-[#777]'>Flexible subscription packages designed to match your needs—unlock premium features and enhance your experience.</p>
            </div>

            <div className='flex items-start justify-center gap-5 py-10 '>
                <div className='bg-[#553283] w-full lg:w-[400px] p-5 rounded-lg text-white mt-10 border-r-2 border-b-2 border-[#7ed957]'>
                    <h2 className='text-4xl font-medium'>$123 <span className='text-sm'>/monhly</span></h2>
                    <h3 className='text-3xl font-medium my-5 uppercase'>Basic Plan</h3>

                    <p className='text-[#fafafa]'>This plan includes</p>

                    <div className='bg-amber-50 p-3 rounded-2xl mt-1'>
                        <ul className='  space-y-5 p-3'>
                            <li className='text-[#555] flex items-center gap-2 hover:bg-[#f5f5f5] rounded-lg'>
                                <FaRegCircleCheck className='text-[#7ed957]' /> Unlimited access to all features
                            </li>
                            <li className='text-[#555] flex items-center gap-2 hover:bg-[#f5f5f5]  rounded-lg'>
                                <FaRegCircleCheck className='text-[#7ed957]' /> 24/7 customer support
                            </li>
                            <li className='text-[#555] flex items-center gap-2 hover:bg-[#f5f5f5]  rounded-lg'>
                                <FaRegCircleCheck className='text-[#7ed957]' /> Monthly updates
                            </li>
                            <li className='text-[#555] flex items-center gap-2 hover:bg-[#f5f5f5] rounded-lg'>
                                <FaRegCircleCheck className='text-[#7ed957]' /> New features
                            </li>
                            {/* Deleted/Strikethrough Items */}
                            <li className='text-[#555]  rounded-lg '>
                                <del className='text-[#d95757] line-through flex items-center gap-2'>
                                    <MdOutlineCancel className='text-[#d95757]' /> Others feature
                                </del>
                            </li>
                            <li className='text-[#555]  rounded-lg '>
                                <del className='text-[#d95757] line-through flex items-center gap-2'>
                                    <MdOutlineCancel className='text-[#d95757]' /> Others 2  feature
                                </del>
                            </li>
                            <li className='text-[#555] rounded-lg '>
                                <del className='text-[#d95757] line-through flex items-center gap-2'>
                                    <MdOutlineCancel className='text-[#d95757]' /> Others 3 feature
                                </del>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='bg-[#7ed957] cursor-pointer text-white p-3 w-full rounded-lg mt-5'>Upgrade</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Page;
