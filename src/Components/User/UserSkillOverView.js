import React from 'react';

const UserSkillOverView = () => {
    return (
        <div className="bg-whitemx-auto">
            {/* Title Section */}
            <div className="text-3xl font-semibold mb-6 text-gray-800">
                Discover Me
            </div>

            {/* Grid Layout Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className=" space-y-8 md:border-r-2 border-gray-200">

                    <div>
                        <h2>What are the three most important factors you look for in a new job?</h2>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Advanced tech
                            </div>
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Flexibility & wellbeing
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Company Size Preference:</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                21-100 employees
                            </div>
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                101-200 employees
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Languages for Work (Excluding English):</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Limassol
                            </div>
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Paphos
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h2>Preferred Job Roles:</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Software Engineering
                            </div>
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Product
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h2>Industry Interests:</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                B2C
                            </div>
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                B2B
                            </div>
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Marketplace
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Pronouns:</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                She/Her
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Column */}
                <div className="space-y-8 md:border-r-2 border-gray-200">
                    <div>
                        <h2>Preferred Work Location:</h2>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Limassol
                            </div>
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Paphos
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Remote Work Location:</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3" >
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Other EMEA location
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h2>Job Start Timeframe:
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                ASAP
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h2>Desired Role Level (select up to 2):</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Junior (1-2 years)
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h2>Preferred Technologies:
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Notion
                            </div>
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Design
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div className="space-y-8 ">
                    <div>

                        <div>
                            <h2>Visa Requirement for Current Location:</h2>
                        </div>
                        <div className="flex flex-wrap space-y-3 gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                No
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>
                                <h2>Minimum Expected Yearly Salary (€):</h2>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-3">
                                <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                    24k
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Gender:</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                Female
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Ethnicity:</h2>
                        </div>
                        <div className="bg-[#dcf8d2] mt-3 w-auto inline-block text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                            Asian
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSkillOverView;
