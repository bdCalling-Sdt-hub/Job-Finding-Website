import React, { useState } from 'react';

const StepFive = ({ handleNextStep }) => {
    // State for form fields
    const [pronouns, setPronouns] = useState('She/Her');
    const [gender, setGender] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [jobNotification, setJobNotification] = useState('');
    const [howDidYouHear, setHowDidYouHear] = useState('');
    const [otherPronouns, setOtherPronouns] = useState('');

    // Handle changes for dropdown and input fields
    const handlePronounChange = (e) => setPronouns(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleEthnicityChange = (e) => setEthnicity(e.target.value);
    const handleJobNotificationChange = (e) => setJobNotification(e.target.value);
    const handleHowDidYouHearChange = (e) => setHowDidYouHear(e.target.value);
    const handleOtherPronounsChange = (e) => setOtherPronouns(e.target.value);

    return (
        <div>
            {/* Step Title */}
            <div className='flex justify-center my-10'>
                <span className='text-3xl font-semibold'>Step 5</span>
            </div>

            {/* Form Content */}
            <div className="p-6 w-full rounded-2xl border border-[#7ed957] mx-auto">

                {/* Pronouns Section */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                        <label className="block text-xl font-semibold mb-2">Pronouns:</label>
                        <select
                            value={pronouns}
                            onChange={handlePronounChange}
                            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:outline-none"
                        >
                            <option value="She/Her">She/Her</option>
                            <option value="He/Him">He/Him</option>
                            <option value="They/Them">They/Them</option>
                            <option value="He/They">He/They</option>
                            <option value="She/They">She/They</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* If 'Other' is selected, show input field for custom pronouns */}
                    {pronouns === 'Other' && (
                        <div className="mt-2">
                            <label className="text-lg font-semibold">Other Pronouns:</label>
                            <input
                                type="text"
                                value={otherPronouns}
                                onChange={handleOtherPronounsChange}
                                placeholder="Enter how you identify yourself"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:outline-none"
                            />
                        </div>
                    )}

                    {/* Gender Identity Section */}
                    <div>
                        <label className="block text-xl font-semibold mb-2">Gender Identity:</label>
                        <select
                            value={gender}
                            onChange={handleGenderChange}
                            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:outline-none"
                        >
                            <option value="">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Non-binary">Non-binary</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                    </div>

                    {/* Ethnicity Section */}
                    <div>
                        <label className="block text-xl font-semibold mb-2">Ethnicity:</label>
                        <select
                            value={ethnicity}
                            onChange={handleEthnicityChange}
                            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:outline-none"
                        >
                            <option value="">Select your ethnicity</option>
                            <option value="Caucasian">Caucasian</option>
                            <option value="Hispanic">Hispanic</option>
                            <option value="African American">African American</option>
                            <option value="Asian">Asian</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">
                    Why are we asking? We aim to foster an inclusive work environment. To help us improve, we'd like to know more about you. Sharing is optional.
                </p>

                <hr className="my-8 h-[1px] bg-[#7ed957] border-none" />

                <div className="grid md:grid-cols-3 gap-4 mb-6">

                    {/* Job Email Notification Section */}
                    <div>
                        <label className="block text-xl font-semibold mb-2">Job Email Notification:</label>
                        <select
                            value={jobNotification}
                            onChange={handleJobNotificationChange}
                            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:outline-none"
                        >
                            <option value="">Select notification preference</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Never">Never</option>
                        </select>
                        <p className="text-sm text-gray-600 mt-1">
                            Choose how often you would like to receive job alerts.
                        </p>
                    </div>

                    {/* How Did You Hear About Us Section */}
                    <div>
                        <label className="block text-xl font-semibold mb-2">How Did You Hear About Us?</label>
                        <select
                            value={howDidYouHear}
                            onChange={handleHowDidYouHearChange}
                            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:outline-none"
                        >
                            <option value="">Select</option>
                            <option value="Friend">Friend</option>
                            <option value="Facebook/Instagram">Facebook/Instagram</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Google">Google</option>
                            <option value="Outdoor Ads">Outdoor Ads</option>
                            <option value="Other">Other</option>
                        </select>
                        <p className="text-sm text-gray-600 mt-1">
                            This helps us reach more job seekers like you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-center mt-10">
                <button
                    className="bg-[#7ed957] text-white font-semibold cursor-pointer py-3 w-[200px] rounded capitalize text-center"
                    onClick={handleNextStep}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default StepFive;
