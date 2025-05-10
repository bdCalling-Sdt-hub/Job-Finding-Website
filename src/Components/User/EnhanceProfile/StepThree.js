import React, { useState } from 'react';

const StepThree = ({ handleNextStep }) => {

    // State for Company Size Preference
    const [selectedCompanySizes, setSelectedCompanySizes] = useState([]);

    // State for Industry Interests
    const [selectedIndustries, setSelectedIndustries] = useState([]);

    // Company size options
    const companySizes = [
        '1-20 employees',
        '21-100 employees',
        '101-200 employees',
        '201-500 employees',
        '501-1000 employees',
        '1001+ employees',
    ];

    // Industry interests options
    const industries = [
        'B2C',
        'Retail',
        'B2B',
        'AI',
        'Security',
        'Enterprise',
        'Marketplace',
        'Education',
        'Productivity',
        'Hardware',
        'Real Estate',
        'SaaS',
        'Media',
        'eCommerce',
        'Science',
        'More options',
    ];

    // Handle Company Size Selection
    const handleCompanySizeClick = (size) => {
        setSelectedCompanySizes((prevSizes) =>
            prevSizes.includes(size)
                ? prevSizes.filter((item) => item !== size)
                : [...prevSizes, size]
        );
    };

    // Handle Industry Selection
    const handleIndustryClick = (industry) => {
        setSelectedIndustries((prevIndustries) =>
            prevIndustries.includes(industry)
                ? prevIndustries.filter((item) => item !== industry)
                : [...prevIndustries, industry]
        );
    };

    // ====================== Step 2 ======================
    // State to track selected technologies
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [otherTechnology, setOtherTechnology] = useState('');

    // List of technologies
    const technologies = [
        'GSuite',
        'MSOffice',
        'Slack',
        'Notion',
        'Design',
        'ServiceNow',
        'Tableau',
        'SQL',
        'Salesforce',
        'Confluence',
        'Canva',
        'Zoom'
    ];

    // Handle tag click
    const handleTechnologyClick = (technology) => {
        setSelectedTechnologies((prevSelected) =>
            prevSelected.includes(technology)
                ? prevSelected.filter((item) => item !== technology)
                : [...prevSelected, technology]
        );
    };

    // Handle 'Other' input change
    const handleOtherTechnologyChange = (e) => {
        setOtherTechnology(e.target.value);
    };


    // ====================== Step 3 ======================
    const [salary, setSalary] = useState(70000); // Default to 70k (€)

    // Handle slider change
    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    };

    // Convert the slider value to a string with a "k" suffix
    const salaryValue = `${(salary / 1000).toFixed(0)}k`;


    return (
        <div>
            <div className='flex justify-center my-10'>
                <span className='text-3xl font-semibold'>Step 3</span>
            </div>

            <div className="space-y-10">
                {/* Company Size Preference Section */}
                <div className='p-6 w-full rounded-2xl border border-[#7ed957] '>
                    <h2 className="text-2xl font-semibold mb-4">Company Size Preference:</h2>
                    <div className="flex flex-wrap gap-4">
                        {companySizes.map((size) => (
                            <div
                                key={size}
                                onClick={() => handleCompanySizeClick(size)}
                                className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer 
                ${selectedCompanySizes.includes(size)
                                        ? 'bg-[#f4ffee] text-[#7ed957] border border-[#7ed957]'
                                        : 'border border-gray-200 text-gray-700'} 
                transition-colors duration-300 ease-in-out`}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Industry Interests Section */}
                <div className='p-6 w-full rounded-2xl border border-[#7ed957] '>
                    <h2 className="text-2xl font-semibold mb-4">Industry Interests:</h2>
                    <div className="flex flex-wrap gap-4">
                        {industries.map((industry) => (
                            <div
                                key={industry}
                                onClick={() => handleIndustryClick(industry)}
                                className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer 
                ${selectedIndustries.includes(industry)
                                        ? 'bg-[#f4ffee] text-[#7ed957] border border-[#7ed957]'
                                        : 'border border-gray-200 text-gray-700'} 
                transition-colors duration-300 ease-in-out`}
                            >
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 w-full rounded-2xl border border-[#7ed957]">
                    <h2 className="text-2xl font-semibold mb-4">Preferred Technologies:</h2>

                    <div className="flex flex-wrap gap-4 mb-6">
                        {technologies.map((technology) => (
                            <div
                                key={technology}
                                onClick={() => handleTechnologyClick(technology)}
                                className={`px-6 py-3 rounded-full text-lg font-semibold cursor-pointer 
              ${selectedTechnologies.includes(technology)
                                        ? 'bg-[#f4ffee] text-[#7ed957] border border-[#7ed957]'
                                        : 'border border-gray-200 text-gray-700'} 
              transition-colors duration-300 ease-in-out`}
                            >
                                {technology}
                            </div>
                        ))}
                    </div>

                    {/* 'Other' technology input */}
                    <div className="flex flex-col">
                        <label htmlFor="otherTechnology" className="text-lg font-semibold text-gray-700 mb-2">Other:</label>
                        <input
                            id="otherTechnology"
                            type="text"
                            value={otherTechnology}
                            onChange={handleOtherTechnologyChange}
                            placeholder="Type here"
                            className="px-6 py-3 max-w-96 border border-[#7ed957] rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-colors duration-300 ease-in-out"
                        />
                    </div>
                </div>

                <div className="p-6 w-full rounded-2xl border border-[#7ed957]">
                    <h2 className="text-2xl font-semibold mb-4">Minimum Expected Yearly Salary (€):</h2>

                    <div className="relative">
                        {/* Salary Range Slider */}
                        <input
                            type="range"
                            min="15000"
                            max="120000"
                            step="1000"
                            value={salary}
                            onChange={handleSalaryChange}
                            className="w-full h-2 !accent-[#7ed957] bg-[#7ed957] rounded-full cursor-pointer"
                        />

                        {/* Tooltip displaying selected salary */}
                        <div
                            className="absolute top-[-30px] left-[calc(100%*var(--value)/120000-10px)] 
                    transform -translate-x-1/2 bg-[#7d46b8] text-white p-2 rounded-md"
                            style={{ '--value': salary }}
                        >
                            {salaryValue}
                        </div>

                        {/* Salary Range Labels */}
                        <div className="flex justify-between text-gray-700 mt-2">
                            <span>15k</span>
                            <span>120k+</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex justify-center mt-10'>
                <button className='bg-[#7ed957] text-white font-semibold cursor-pointer py-3 w-[200px] rounded capitalize text-center ' onClick={handleNextStep}>next</button>
            </div>
        </div>
    );
}

export default StepThree;
