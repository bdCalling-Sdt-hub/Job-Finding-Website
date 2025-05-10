"use client";
import UserProdileInfo from '@/Components/User/UserProdileInfo';
import React, { useState } from 'react';
import { LuUserRound } from 'react-icons/lu';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import StepOne from '@/Components/User/EnhanceProfile/StepOne';
import StepTwo from '@/Components/User/EnhanceProfile/StepTwo';
import StepThree from '@/Components/User/EnhanceProfile/StepThree';
import StepFour from '@/Components/User/EnhanceProfile/StepFour';
import StepFive from '@/Components/User/EnhanceProfile/StepFive';
import { message } from 'antd';
import { toast, ToastContainer } from 'react-toastify';

const Page = () => {
    // State to track which tab is selected
    const [selectedTab, setSelectedTab] = useState('general');

    // State to track current step in Enhance Profile
    const [currentStep, setCurrentStep] = useState(1);

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    // Function to handle next step in Enhance Profile
    const handleNextStep = () => {

        if (currentStep === 4) {
            // message.success('Profile updated successfully');
            toast.success('Profile updated successfully');

            setCurrentStep(1);
        }

        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    return (
        <div className="md:p-6 w-[90%] mx-auto ">
            <ToastContainer position="top-right" theme="colored"
            />
            <h1 className="text-5xl font-bold mb-6 text-center">My Profile</h1>
            <div className="md:flex justify-center space-x-4 space-y-2 md:space-y-0 ">
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

            <div className="my-6">
                {selectedTab === 'general' && (
                    <div>
                        <UserProdileInfo />
                    </div>
                )}
                {selectedTab === 'enhance' && (
                    <div>
                        <div>
                            {currentStep === 1 && (
                                <div>
                                    <StepOne handleNextStep={handleNextStep} />
                                </div>
                            )}
                            {currentStep === 2 && (
                                <div>
                                    <StepTwo handleNextStep={handleNextStep} />
                                </div>
                            )}
                            {currentStep === 3 && (
                                <div>
                                    <StepThree handleNextStep={handleNextStep} />
                                </div>
                            )}
                            {currentStep === 4 && (
                                <div>
                                    <StepFour handleNextStep={handleNextStep} />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
