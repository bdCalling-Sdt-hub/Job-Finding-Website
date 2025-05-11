'use client';
import React, { useState } from 'react';
import { Form, Input, Upload, Button, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';

const { Dragger } = Upload;

const AddCareerResource = () => {
    // States for the image uploads
    const [publisherImage, setPublisherImage] = useState([]);
    const [blogImage, setBlogImage] = useState([]);

    // Handle file upload
    const handleUpload = (info, setter) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} uploaded successfully.`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} upload failed.`);
        }
    };

    // Handle file removal
    const handleRemove = (file, setter) => {
        message.info(`${file.name} removed.`);
        setter([]);
    };

    const onChange = (fileList, setter) => {
        setter(fileList);
    };

    return (
        <div className="p-6">
            <Link href="/company/careerresources" className="text-2xl font-semibold mb-6 flex items-center gap-1 "> <FaChevronLeft /> Add Career Resource</Link>
            <Form layout="vertical">
                {/* Publisher Name */}
                <Form.Item label="Publisher Name" name="publisherName">
                    <Input className='!py-2' placeholder="Enter title" />
                </Form.Item>

                {/* Publisher Image */}
                <Form.Item label="Publisher Image">
                    <Dragger
                        action="/upload"
                        fileList={publisherImage}
                        onChange={(info) => onChange(info.fileList, setPublisherImage)}
                        onRemove={(file) => handleRemove(file, setPublisherImage)}
                        beforeUpload={() => false}
                        accept=".jpg,.jpeg,.png"
                        showUploadList={{ showRemoveIcon: true }}
                        className="w-full cursor-pointer p-6 bg-[#5532832c] rounded-lg"
                    >
                        <div className="p-5">
                            {/* <InboxOutlined className="text-4xl text-purple-500" /> */}
                            <img className="w-12 mx-auto" src="/Images/upload.png" alt="" />
                            <p className="text-sm mt-4">Drag your file(s) to start uploading</p>
                            <p className="text-sm">OR</p>
                            <button className="mt-4 cursor-pointer py-2 px-8 border-2 border-[#553283] text-[#553283] rounded-md">
                                Browse files
                            </button>
                        </div>
                    </Dragger>
                </Form.Item>

                {/* Title of Blog */}
                <Form.Item label="Title of Blog" name="blogTitle">
                    <Input className='!py-2' placeholder="Enter title" />
                </Form.Item>

                {/* Blog Image */}
                <Form.Item label="Upload Picture of Blog">
                    <Dragger
                        action="/upload"
                        fileList={blogImage}
                        onChange={(info) => onChange(info.fileList, setBlogImage)}
                        onRemove={(file) => handleRemove(file, setBlogImage)}
                        beforeUpload={() => false}
                        accept=".jpg,.jpeg,.png"
                        showUploadList={{ showRemoveIcon: true }}
                        className="w-full cursor-pointer p-6 bg-[#5532832c] rounded-lg"
                    >
                        <div className="p-5">
                            {/* <InboxOutlined className="text-4xl text-purple-500" /> */}
                            <img className="w-12 mx-auto" src="/Images/upload.png" alt="" />
                            <p className="text-sm mt-4">Drag your file(s) to start uploading</p>
                            <p className="text-sm">OR</p>
                            <button className="mt-4 cursor-pointer py-2 px-8 border-2 border-[#553283] text-[#553283] rounded-md">
                                Browse files
                            </button>
                        </div>
                    </Dragger>
                </Form.Item>

                {/* Details */}
                <Form.Item label="Details" name="details">
                    <Input.TextArea placeholder="Enter title" rows={5} />
                </Form.Item>

                {/* Publish Button */}
                <Form.Item>
                    <button type="primary" htmlType="submit" className="w-full py-2 px-4 bg-[#553283] text-white rounded-md text-base font-medium cursor-pointer">
                        Publish
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddCareerResource;
