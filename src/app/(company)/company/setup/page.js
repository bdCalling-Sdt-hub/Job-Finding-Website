'use client';

import SetupTabsOne from '@/Components/Companies/Setup/SetupTabsOne';
import SetupTabsThree from '@/Components/Companies/Setup/SetupTabsThree';
import SetupTabsTwo from '@/Components/Companies/Setup/SetupTabsTwo';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { GoChevronLeft } from 'react-icons/go';
import { GrUserSettings } from 'react-icons/gr';
import { PiUsersThree } from 'react-icons/pi';

const Page = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return <SetupTabsOne />;
            case 'team':
                return <SetupTabsTwo />;
            case 'culture':
                return <SetupTabsThree />;
            default:
                return null;
        }
    };

    return (
        <div className="">
            {/* Back Link */}
            <Link
                className="flex items-center gap-2 text-2xl font-semibold mb-4"
                href="/company"
            >
                <GoChevronLeft className="text-2xl" />
                Company Profile Setup
            </Link>

            <div className='bg-white border-2 p-4 rounded shadow-sm border-[#553283]  my-10'>
                {/* Tabs */}
                <div className="border-b border-gray-300 mb-4 flex gap-10">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`py-2 border-b-2 md:text-xl text-sm cursor-pointer flex items-center gap-2 ${activeTab === 'profile' ? 'border-[#7ed957] text-[#7ed957]' : 'border-transparent text-gray-500'
                            } font-medium`}
                    >
                        <CiUser className='text-xl md:block hidden' /> Profile Setup
                    </button>
                    <button
                        onClick={() => setActiveTab('team')}
                        className={`py-2 border-b-2 md:text-xl text-sm cursor-pointer flex items-center gap-2 ${activeTab === 'team' ? 'border-[#7ed957] text-[#7ed957]' : 'border-transparent text-gray-500'
                            } font-medium`}
                    >
                        <PiUsersThree className='text-xl md:block hidden' /> Team Setup
                    </button>
                    <button
                        onClick={() => setActiveTab('culture')}
                        className={`py-2 border-b-2 md:text-xl text-sm cursor-pointer flex items-center gap-2 ${activeTab === 'culture' ? 'border-[#7ed957] text-[#7ed957]' : 'border-transparent text-gray-500'
                            } font-medium`}
                    >
                        <GrUserSettings className='text-xl md:block hidden' /> Culture Setup
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-10">
                    {renderTabContent()}
                </div>
            </div>


        </div>
    );
};

export default Page;
