import React from 'react';
import { IoAnalyticsSharp, IoBagOutline } from 'react-icons/io5';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Page = () => {
    return (
        <div className='w-[90%] mx-auto my-10'>
            <div className='max-w-[500px] text-center mx-auto'>
                <h1 className='text-4xl font-medium mb-5'>Why Karma</h1>
                <p className='text-[#777]'>Korem ipsum dolor sit amet, consectetur adipiscing elit. Korem ipsum dolor sit amet, consectetur adipiscing elit. Korem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                <div className='  bg-[url("/Images/whyKarma.png")] bg-cover bg-center h-[300px] shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-10 lg:my-5 border-r-2 border-b-2 border-[#553283] '>
                    <IoBagOutline className='text-4xl text-[#553283]' />
                    <h2 className='text-3xl font-medium   my-5'>Innovation</h2>
                    <p className='text-right text-[#777]'>endisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium?</p>
                </div>
                <div className='  bg-[url("/Images/whyKarma.png")] bg-cover bg-center h-[300px] shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-10 my-5 border-r-2 border-b-2 border-[#553283] '>
                    <HiOutlineBuildingOffice2 className='text-4xl text-[#553283]' />
                    <h2 className='text-3xl font-medium   my-5'>Innovation</h2>
                    <p className='text-right text-[#777]'>endisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='  bg-[url("/Images/whyKarma.png")] bg-cover bg-center h-[300px] shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-10 lg:my-5 border-r-2 border-b-2 border-[#553283] '>
                    <IoAnalyticsSharp className='text-4xl text-[#553283]' />
                    <h2 className='text-3xl font-medium   my-5'>Innovation</h2>
                    <p className='text-right text-[#777]'>endisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, facere maiores! </p>
                </div>
            </div>

        </div>
    );
}

export default Page;
