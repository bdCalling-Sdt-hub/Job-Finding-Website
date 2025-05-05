import React from 'react';

const UserProfileInfo = () => {
    return (
        <div className="p-8">
            <div className="flex space-x-8">
                {/* Left side: Profile Image */}
                <div className="w-48 h-48 flex-shrink-0">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Right side: Personal Information */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-semibold">Personal Information</h2>
                    {/* sdf */}
                    <div className="flex space-x-4">
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-600">Full Name</span>
                            <p className="text-lg font-semibold">Jeremy Rodriguez</p>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-600">Date of Birth</span>
                            <p className="text-lg font-semibold">1 January, 2000</p>
                        </div>
                        <div className="border-l-2 border-gray-300 h-24 mx-4"></div>
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-600">Email</span>
                            <p className="text-lg font-semibold">abc@gmail.com</p>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-600">Gender</span>
                            <p className="text-lg font-semibold">Male</p>
                        </div>
                    </div>

                    <div className="border-l-2 border-gray-300 h-24 mx-4"></div>

                    <div className="flex space-x-4">

                        <div className="flex flex-col">
                            <span className="font-medium text-gray-600">Phone Number</span>
                            <p className="text-lg font-semibold">+880-122332454</p>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-600">Gender</span>
                            <p className="text-lg font-semibold">Male</p>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-600">Address</span>
                            <p className="text-lg font-semibold">Nicosia, Cyprus</p>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-600">Nationality</span>
                            <p className="text-lg font-semibold">Bangladeshi</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserProfileInfo;
