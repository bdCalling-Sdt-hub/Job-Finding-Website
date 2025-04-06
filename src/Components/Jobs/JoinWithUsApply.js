'use client';
import React, { useState } from 'react';
import { LuBookmark } from 'react-icons/lu';
import { Modal, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const JoinWithUsApply = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const showModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // File upload handler (optional: you can add custom logic)
    const handleUpload = (info) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    return (
        <div className='lg:p-10 p-5 py-10 shadow-[0px_0px_5px_0px_#eadaff] rounded-4xl bg-[#fffff9] my-10 lg:flex space-y-5 items-center justify-center gap-10 lg:w-4/5 mx-auto'>
            <div className='text-center'>
                <h2 className='text-4xl font-medium'>Start Your Journey With Us</h2>
                <p className='my-5 text-[#777]'>Apply Now or bookmark job for later application</p>
                <div className='flex items-center justify-center gap-3'>
                    <div>
                        <button
                            onClick={showModal} // Trigger modal open
                            className='hover:bg-[#553283] cursor-pointer duration-300 hover:text-white border-2 border-[#553283] py-2 px-8 rounded-lg text-[#553283] font-semibold'>
                            Apply Now
                        </button>
                    </div>
                    <div>
                        <button className='hover:bg-[#553283] cursor-pointer duration-300 hover:text-white border-2 border-[#553283] p-2 bg-[#eadaff] rounded-full text-[#553283] font-semibold'>
                            <LuBookmark className='text-2xl' />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <img className='lg:w-[300px] w-full rounded-2xl' src="/Images/Jobs/jobDetails/joinwithusAndApplyButton.png" alt="" />
            </div>

            {/* Modal Component */}
            <Modal
                title="Apply Job: UIX Designer"
                visible={isModalOpen} // Modal visibility
                onCancel={handleCancel} // Close on cancel
                footer={null} // No default footer
            >
                <div>
                    {/* Cover Letter Upload Section */}
                    <h2 className='mb-2 font-semibold'>Cover Letter</h2>
                    <Upload.Dragger
                        name="coverLetter"
                        action="/upload.do" // Replace with your backend upload URL
                        onChange={handleUpload}
                    >
                        <div>
                            <img className='w-12 mb-3 mx-auto' src="/Images/upload.png" alt="" />
                        </div>
                        <p className="!text-[#777]">Drag your file(s) to start uploading</p>
                        <Button className='cursor-pointer py-2 px-8 border-2 border-[#553283] font-semibold mt-3 text-[#553283] rounded-lg'>
                            Browse files
                        </Button>
                    </Upload.Dragger>
                </div>
                <br />
                {/* Short Video Upload Section */}
                <div>
                    <h2 className='mb-2 font-semibold'>Short Video</h2>
                    <Upload.Dragger
                        name="shortVideo"
                        action="/upload.do" // Replace with your backend upload URL
                        onChange={handleUpload}
                    >
                        <div>
                            <img className='w-12 mb-3 mx-auto' src="/Images/upload.png" alt="" />
                        </div>
                        <p className="!text-[#777]">Drag your file(s) to start uploading</p>
                        <Button className='cursor-pointer py-2 px-8 border-2 border-[#553283] font-semibold mt-3 text-[#553283] rounded-lg'>
                            Browse files
                        </Button>
                    </Upload.Dragger>
                </div>

                {/* Apply Button */}
                <div className='mt-5'>
                    <button
                        onClick={handleCancel}
                        className='cursor-pointer py-2 hover:bg-[#553283] duration-300 hover:text-white px-8 border-2 border-[#553283] font-semibold w-full text-[#553283] rounded-lg'>
                        Apply Now
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default JoinWithUsApply
