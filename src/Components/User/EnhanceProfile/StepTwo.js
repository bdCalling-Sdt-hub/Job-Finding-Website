import { message } from 'antd';
import React, { useState } from 'react';

const StepTwo = ({ handleNextStep }) => {


    // State to track selected languages
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [otherLanguage, setOtherLanguage] = useState('');

    // List of languages
    const languages = [
        'Greek',
        'French',
        'Italian',
        'German',
        'Russian',
        'Spanish',
        'Ukrainian',
        'Turkish',
        'Indian'
    ];

    // Handle tag click (to select/unselect a language)
    const handleLanguageClick = (language) => {
        setSelectedLanguages((prevSelectedLanguages) =>
            prevSelectedLanguages.includes(language)
                ? prevSelectedLanguages.filter((item) => item !== language)
                : [...prevSelectedLanguages, language]
        );
    };

    // Handle input change for the 'Other' field
    const handleOtherLanguageChange = (e) => {
        setOtherLanguage(e.target.value);
    };

    // ======================= Step 2: Create a list of options and their selected state =============
    // Step 1: Create a state to track the selected job start timeframe
    const [selectedTimeframe, setSelectedTimeframe] = useState('');

    // List of timeframes
    const timeframes = [
        'ASAP',
        'Within a few months',
        'Open to the right role',
        'Just exploring',
    ];

    // Step 2: Handle timeframe tag click
    const handleTimeframeClick = (timeframe) => {
        setSelectedTimeframe(timeframe === selectedTimeframe ? '' : timeframe);
    };

    // ======================= Step 3: Create a list of options and their selected state =============

    // Step 1: Create a state to track the selected job roles
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [otherRole, setOtherRole] = useState('');

    // List of job roles
    const jobRoles = [
        'Software Engineering',
        'Data',
        'Other Engineering',
        'Product',
        'Design',
        'Operations & Strategy',
        'Sales & Account Management',
        'Marketing',
        'People, HR & Recruitment',
        'Finance',
        'Legal & Compliance',
        'Other'
    ];

    // Step 2: Handle job role tag click
    const handleJobRoleClick = (role) => {
        setSelectedRoles((prevSelectedRoles) =>
            prevSelectedRoles.includes(role)
                ? prevSelectedRoles.filter((item) => item !== role)
                : [...prevSelectedRoles, role]
        );
    };

    // Handle 'Other' input change
    const handleOtherRoleChange = (e) => {
        setOtherRole(e.target.value);
    };


    // ======================= Step 4: Create a list of options and their selected state =============
    // Step 1: Create a state to track selected role levels
    const [selectedLevels, setSelectedLevels] = useState([]);

    // List of role levels
    const roleLevels = [
        'Internships',
        'Entry-level/Graduate',
        'Junior (1-2 years)',
        'Mid-level (3-4 years)',
        'Senior (5-8 years)',
        'Expert/Leadership (9+ years)',
    ];

    // Step 2: Handle role level tag click
    const handleRoleLevelClick = (level) => {
        if (selectedLevels.includes(level)) {
            // If already selected, deselect it
            setSelectedLevels(selectedLevels.filter((item) => item !== level));
       

        } else if (selectedLevels.length < 2) {
            // If less than 2 selected, add it
            setSelectedLevels([...selectedLevels, level]);
        }
    };


    return (
        <div>
            <div className='flex justify-center my-10'>
                <span className='text-3xl font-semibold'>Step 2</span>
            </div>

            <div className="p-6 w-full border rounded-2xl mx-auto border-[#7ed957]">
                <h2 className="text-2xl font-semibold mb-4">Languages for Work (Excluding English):</h2>

                <div className="flex flex-wrap gap-4 mb-6">
                    {languages.map((language) => (
                        <div
                            key={language}
                            onClick={() => handleLanguageClick(language)}
                            className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer 
              ${selectedLanguages.includes(language) ? 'bg-[#f4ffee] text-[#7ed957] border border-[#7ed957]' : 'border border-gray-200 text-gray-700'} 
              transition-colors duration-300 ease-in-out`}
                        >
                            {language}
                        </div>
                    ))}
                </div>

                {/* 'Other' language input */}
                <div className="flex flex-col">
                    <label htmlFor="otherLanguage" className="text-lg font-semibold text-gray-700 mb-2">Other:</label>
                    <input
                        id="otherLanguage"
                        type="text"
                        value={otherLanguage}
                        onChange={handleOtherLanguageChange}
                        placeholder="Type here"
                        className="px-6 py-3 border max-w-96 border-[#7ed957] rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-colors duration-300 ease-in-out"
                    />
                </div>
            </div>

            <div className="p-6 w-full border rounded-2xl mx-auto border-[#7ed957] my-10">
                <h2 className="text-2xl font-semibold mb-4">Job Start Timeframe:</h2>

                <div className="flex flex-wrap gap-4">
                    {timeframes.map((timeframe) => (
                        <div
                            key={timeframe}
                            onClick={() => handleTimeframeClick(timeframe)}
                            className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer 
              ${selectedTimeframe === timeframe ? 'bg-[#f4ffee] text-[#7ed957] border border-[#7ed957]' : 'border border-gray-200 text-gray-700'} 
              transition-colors duration-300 ease-in-out`}
                        >
                            {timeframe}
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 w-full mx-auto rounded-2xl border border-[#7ed957] my-10">
                <h2 className="text-2xl font-semibold mb-4">Preferred Job Roles:</h2>

                <div className="flex flex-wrap gap-4 mb-6">
                    {jobRoles.map((role) => (
                        role === 'Other' ? (
                            // 'Other' role will be the input field
                            <div key={role} className="w-full">
                                <label htmlFor="otherRole" className="block text-lg font-semibold text-gray-700 mb-2">Other:</label>
                                <input
                                    id="otherRole"
                                    type="text"
                                    value={otherRole}
                                    onChange={handleOtherRoleChange}
                                    placeholder="Type here"
                                    className="px-6 py-3  border border-[#7ed957] rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-colors duration-300 ease-in-out"
                                />
                            </div>
                        ) : (
                            // Display job role tags
                            <div
                                key={role}
                                onClick={() => handleJobRoleClick(role)}
                                className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer 
                ${selectedRoles.includes(role) ? 'bg-[#f4ffee] text-[#7ed957] border border-[#7ed957]' : 'border border-gray-200 text-gray-700'} 
                transition-colors duration-300 ease-in-out`}
                            >
                                {role}
                            </div>
                        )
                    ))}
                </div>
            </div>

            <div className="p-6 w-full border rounded-2xl mx-auto border-[#7ed957] mt-10">
                <h2 className="text-2xl font-semibold mb-4">Desired Role Level (select up to 2):</h2>

                <div className="flex flex-wrap gap-4 mb-6">
                    {roleLevels.map((level) => (
                        <div
                            key={level}
                            onClick={() => handleRoleLevelClick(level)}
                            className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer 
              ${selectedLevels.includes(level)
                                    ? 'bg-[#f4ffee] text-[#7ed957] border border-[#7ed957]'
                                    : 'border border-gray-200 text-gray-700'} 
              transition-colors duration-300 ease-in-out`}
                        >
                            {level}
                        </div>
                    ))}
                </div>
            </div>


            <div className='flex justify-center mt-10'>
                <button className='bg-[#7ed957] text-white font-semibold cursor-pointer py-3 w-[200px] rounded capitalize text-center ' onClick={handleNextStep}>next</button>
            </div>
        </div>
    );
}

export default StepTwo;
