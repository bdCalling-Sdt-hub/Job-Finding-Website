"use client";
import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd'; // Import Ant Design components
import { CiImageOn, CiUser } from 'react-icons/ci';
import { MdOutlinePassword } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Page = () => {
    // State to manage which tab is active
    const [activeTab, setActiveTab] = useState('general');
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [userInfo, setUserInfo] = useState({
        username: 'Anika Alam',
        email: 'anika@gmail.com',
        phone: '0188888134',
    });

    // Handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Handle modal visibility
    const handleShowAntModalForEdit = () => {
        setShowModal(true); // Show modal when "Edit Profile" is clicked
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close modal
    };

    // Handle input change in modal
    const handleInputChange = (e, field) => {
        setUserInfo({ ...userInfo, [field]: e.target.value });
    };

    const handleSaveChanges = () => {
        // Here you would typically save the changes to a backend or state
        console.log('Updated User Info:', userInfo);
        setShowModal(false); // Close the modal after saving changes
    };

    const [image, setImage] = useState(null); // State to hold the uploaded image

    // Handle the image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Display the selected image as a preview
        }
    };


    // State to manage password visibility
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    // Function to toggle password visibility
    const togglePasswordVisibility = (field) => {
        setShowPassword({
            ...showPassword,
            [field]: !showPassword[field],
        });
    };


    return (
        <div className="p-6 w-full max-w-4xl mx-auto bg-gray-50 my-10">
            {/* Title */}
            <h1 className="text-3xl font-semibold text-center mb-8">MY SETTINGS</h1>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-6">
                <button
                    onClick={() => handleTabChange('general')}
                    className={`flex items-center gap-2 px-6 py-2 mr-4 rounded-lg cursor-pointer ${activeTab === 'general'
                        ? 'bg-[#553283] text-white'
                        : 'bg-gray-200 text-gray-700'
                        }`}
                >
                    <CiUser className='text-xl' />General
                </button>
                <button
                    onClick={() => handleTabChange('password')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-lg cursor-pointer ${activeTab === 'password'
                        ? 'bg-[#553283] text-white'
                        : 'bg-gray-200 text-gray-700'
                        }`}
                >
                    <MdOutlinePassword className='text-xl' />Password
                </button>
            </div>

            {/* Content based on active tab */}
            <div className="p-5 bg-white rounded-2xl">
                {activeTab === 'general' && (
                    <div>
                        {/* Profile Picture */}
                        <div className="mb-6">
                            <img
                                src="/Images/Auth/logo2.png"
                                alt="Profile"
                                className="w-24 h-24 border-2 border-gray-300 rounded-full mx-auto"
                            />
                        </div>

                        {/* User Info */}
                        <div className="space-y-6">
                            <div>
                                <label className="block font-semibold mb-2">User Name</label>
                                <input
                                    type="text"
                                    disabled
                                    value={userInfo.username}
                                    className="w-full p-3 border border-gray-300 text-gray-400 rounded-lg focus:ring-2 focus:ring-[#553283]"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    disabled
                                    value={userInfo.email}
                                    className="w-full p-3 border border-gray-300 text-gray-400 rounded-lg focus:ring-2 focus:ring-[#553283]"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-2">Phone Number</label>
                                <input
                                    type="text"
                                    disabled
                                    value={userInfo.phone}
                                    className="w-full p-3 border border-gray-300 text-gray-400 rounded-lg focus:ring-2 focus:ring-[#553283]"
                                />
                            </div>
                        </div>

                        {/* Edit Profile Button */}
                        <div className="mt-8 flex justify-center">
                            <button onClick={handleShowAntModalForEdit} className="bg-[#553283] text-white font-semibold py-3 px-8 rounded-lg">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'password' && (
                    <div>
                        <div className="space-y-6">
                            {/* Current Password Field */}
                            <div>
                                <label className="block font-semibold mb-2">Current Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword.current ? 'text' : 'password'}
                                        placeholder="Current Password"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#553283]"
                                    />
                                    <div
                                        className="absolute right-3 top-4 cursor-pointer"
                                        onClick={() => togglePasswordVisibility('current')}
                                    >
                                        {!showPassword.current ? (
                                            <FaEyeSlash className="text-gray-500" />
                                        ) : (
                                            <FaEye className="text-gray-500" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* New Password Field */}
                            <div>
                                <label className="block font-semibold mb-2">New Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword.new ? 'text' : 'password'}
                                        placeholder="New Password"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#553283]"
                                    />
                                    <div
                                        className="absolute right-3 top-4 cursor-pointer"
                                        onClick={() => togglePasswordVisibility('new')}
                                    >
                                        {!showPassword.new ? (
                                            <FaEyeSlash className="text-gray-500" />
                                        ) : (
                                            <FaEye className="text-gray-500" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <label className="block font-semibold mb-2">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword.confirm ? 'text' : 'password'}
                                        placeholder="Confirm Password"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#553283]"
                                    />
                                    <div
                                        className="absolute right-3 top-4 cursor-pointer"
                                        onClick={() => togglePasswordVisibility('confirm')}
                                    >
                                        {!showPassword.confirm ? (
                                            <FaEyeSlash className="text-gray-500" />
                                        ) : (
                                            <FaEye className="text-gray-500" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-center">
                            <button className="cursor-pointer bg-[#553283] text-white font-semibold py-3 px-8 rounded-lg">
                                Save Changes
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Ant Design Modal for Edit Profile */}
            <Modal
                title="Edit Profile"
                visible={showModal}
                onCancel={handleCloseModal}
                footer={null} // We will add custom buttons in the modal footer
                centered
            >
                <div className="space-y-6">
                    {/* imgae upload */}
                    <div className="relative">
                        <label htmlFor="" className="block font-semibold mb-2">Upload Profile Image</label>

                        {/* File Input */}
                        <Input
                            type="file"
                            onChange={handleImageChange}
                            className="w-full p-3 border border-gray-300"
                            accept="image/*" // Only image files allowed
                        />

                        {/* Icon */}
                        <CiImageOn className='text-2xl absolute right-4 top-8' />

                        {/* Image Preview */}
                        {image && (
                            <div className="mt-4">
                                <img
                                    src={image}
                                    alt="Profile Preview"
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">User Name</label>
                        <Input
                            value={userInfo.username}
                            onChange={(e) => handleInputChange(e, 'username')}
                            className="w-full p-3 border border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-2">Email</label>
                        <Input
                            value={userInfo.email}
                            disabled
                            onChange={(e) => handleInputChange(e, 'email')}
                            className="w-full p-3 border border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-2">Phone Number</label>
                        <Input
                            value={userInfo.phone}
                            onChange={(e) => handleInputChange(e, 'phone')}
                            className="w-full p-3 border border-gray-300"
                        />
                    </div>
                </div>

                <div className="mt-6 flex justify-between">
                    <Button onClick={handleCloseModal} className="bg-gray-500 text-white py-2 px-6 rounded-lg">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveChanges} className="bg-[#553283] text-white py-2 px-6 rounded-lg">
                        Save Changes
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default Page;
