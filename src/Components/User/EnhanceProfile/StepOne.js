import React, { useState } from 'react';

const StepOne = ({ handleNextStep }) => {


    // Step 1: Create a list of options and their selected state
    const [selectedTags, setSelectedTags] = useState([]);

    // List of all possible factors
    const factors = [
        'Challenging work',
        'Diversity & inclusion',
        'Advanced tech',
        'Career growth',
        'Flexibility & wellbeing',
        'Recognition & reward',
        'Great colleagues',
        'Transparency & respect',
        'Progressive leadership',
        'Innovative products',
        'Data-driven decisions',
        'Meaningful work',
        'Company Culture'
    ];

    // Step 2: Handle tag selection and unselection
    const handleTagClick = (tag) => {
        setSelectedTags((prevSelectedTags) =>
            prevSelectedTags.includes(tag)
                ? prevSelectedTags.filter((item) => item !== tag)
                : [...prevSelectedTags, tag]
        );
    };


    // ================================= 2nd Step ================================
    // Step 1: Create a state to track the selected location
    const [selectedLocation, setSelectedLocation] = useState('');

    // List of locations
    const locations = [
        'Nicosia',
        'Limassol',
        'Larnaca',
        'Paphos',
        'Ammochostos',
        'Remote'
    ];

    // Step 2: Handle tag click
    const handleTagClickLocation = (location) => {
        setSelectedLocation(location === selectedLocation ? '' : location);
    };

    // ======================= 3rd Step ================================

    // State to track selected remote work location
    const [remoteLocation, setRemoteLocation] = useState('');

    // State to track visa requirement
    const [visaRequirement, setVisaRequirement] = useState('');

    // Handle location tag click
    const handleRemoteLocationClick = (location) => {
        setRemoteLocation(location === remoteLocation ? '' : location);
    };

    // Handle visa button click
    const handleVisaClick = (visa) => {
        setVisaRequirement(visa === visaRequirement ? '' : visa);
    };




    return (
        <div>
            <div className='flex justify-center my-10'>
                <span className='text-3xl font-semibold'>Step 1</span>
            </div>


            <div className="p-6 w-full border-2 border-[#7ed957] rounded-2xl">
                <h2 className="text-2xl font-medium mb-6 ">
                    What are the three most important factors you look for in a new job?
                </h2>
                <div className="flex flex-wrap gap-4 ">
                    {factors.map((factor) => (
                        <div
                            key={factor}
                            onClick={() => handleTagClick(factor)}
                            className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer 
              ${selectedTags.includes(factor) ? 'bg-[#f4ffee] text-[#7ed957] border border-[#7ed957]' : 'border border-gray-200 text-gray-700'} 
              transition-colors duration-300 ease-in-out`}
                        >
                            {factor}
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 my-10 w-full border-2 border-[#7ed957] rounded-2xl">
                <h2 className="text-xl font-semibold mb-4">Preferred Work Location:</h2>

                <div className="flex flex-wrap gap-4">
                    {locations.map((location) => (
                        <div
                            key={location}
                            onClick={() => handleTagClickLocation(location)}
                            className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer 
              ${selectedLocation === location ? 'bg-[#f4ffee] text-[#7ed957] border border-[#7ed957]' : 'bg-white text-gray-700 border border-gray-300'} 
              transition-all duration-300 ease-in-out`}
                        >
                            {location}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
                {/* Remote Work Location Section */}
                <div className='p-6 w-full space-y-8 border-2 border-[#7ed957] rounded-2xl'>
                    <h2 className="text-xl font-semibold mb-4">Remote Work Location:</h2>
                    <div className="flex flex-wrap gap-4">
                        {['Within Cyprus', 'Other EMEA location', 'Other global location'].map((location) => (
                            <div
                                key={location}
                                onClick={() => handleRemoteLocationClick(location)}
                                className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer 
                ${remoteLocation === location ? 'bg-[#f4ffee] text-[#7ed957] border border-[#7ed957]' : 'bg-white text-gray-700 border border-gray-300'} 
                transition-all duration-300 ease-in-out`}
                            >
                                {location}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visa Requirement Section */}
                <div className='p-6 w-full space-y-8 border-2 border-[#7ed957] rounded-2xl'>
                    <h2 className="text-xl font-semibold mb-4">Visa Requirement for Current Location:</h2>
                    <div className="flex gap-4">
                        {['Yes', 'No'].map((visa) => (
                            <div
                                key={visa}
                                onClick={() => handleVisaClick(visa)}
                                className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer 
                ${visaRequirement === visa ? 'bg-[#f4ffee] text-[#7ed957] border border-[#7ed957]' : 'bg-white text-gray-700 border border-gray-300'} 
                transition-all duration-300 ease-in-out`}
                            >
                                {visa}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className='flex justify-center mt-10'>
                <button className='bg-[#7ed957] text-white font-semibold cursor-pointer py-3 w-[200px] rounded capitalize text-center ' onClick={handleNextStep}>next</button>
            </div>
        </div>
    );
}

export default StepOne;
