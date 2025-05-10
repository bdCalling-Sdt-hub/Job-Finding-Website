import React from 'react';
import { MdOutlineNotificationsActive } from 'react-icons/md';

const CompanyHeader = () => {
    return (
        <div className='bg-[#e0f6d7] p-5 flex items-center justify-end border-b-2 border-[#553283]'>

            <div className='relative cursor-pointer' >
                <MdOutlineNotificationsActive className='text-4xl ' />
                <span className='absolute -top-3 -right-3 bg-[#7ed957] text-white p-1 rounded-full w-6  h-6 flex items-center justify-center text-xs  '>12</span>
            </div>
        </div>
    );
}

export default CompanyHeader;
