"use client";
import UserProdileInfo from '@/Components/User/UserProdileInfo';
import React, { useState } from 'react';
import { LuUserRound } from 'react-icons/lu';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const Page = () => {
    // State to track which tab is selected
    const [selectedTab, setSelectedTab] = useState('general');

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="p-6 w-[90%] mx-auto ">
            <h1 className="text-5xl font-bold mb-6 text-center">My Profile</h1>
            <div className="md:flex justify-center space-x-4 space-y-2 md:space-y-0">
                {/* Tab for General */}
                <div
                    onClick={() => handleTabChange('general')}
                    className={`w-full md:w-[300px] cursor-pointer px-6 py-2 rounded-lg text-lg font-semibold text-center 
        ${selectedTab === 'general' ? 'bg-[#dcf8d2] border border-[#dbffce]' : 'border border-[#a2ff81]'}`}
                >
                    <span
                        className={`${selectedTab === 'general' ? 'text-[#000]' : 'text-gray-700'} flex items-center justify-center gap-1`}
                    >
                        <LuUserRound className="text-xl" />
                        General
                    </span>
                </div>

                {/* Tab for Enhance Profile */}
                <div
                    onClick={() => handleTabChange('enhance')}
                    className={`w-full md:w-[300px] cursor-pointer px-6 py-2 rounded-lg text-lg font-semibold text-center 
        ${selectedTab === 'enhance' ? 'bg-[#dcf8d2] border border-[#dcf8d2]' : 'border border-[#a2ff81]'}`}
                >
                    <span
                        className={`${selectedTab === 'enhance' ? 'text-[#000]' : 'text-gray-700'} flex items-center justify-center gap-1`}
                    >
                        <IoMdCheckmarkCircleOutline className="text-xl" />
                        Enhance Profile
                    </span>
                </div>
            </div>

            <div className="mt-6">
                {selectedTab === 'general' && (
                    <div>
                        <UserProdileInfo />
                    </div>
                )}
                {selectedTab === 'enhance' && (
                    <div>
                        update user info form
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
