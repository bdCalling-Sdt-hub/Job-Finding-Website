'use client';
import React, { useState } from 'react';
import { Table, Tag, Button, Modal } from 'antd';
import { IoAdd, IoEyeOutline } from 'react-icons/io5';
import Link from 'next/link';

const Page = () => {
    // State to manage the modal visibility and selected resource data
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);

    // Data for the table
    const resources = [
        {
            key: '1',
            postTitle: 'Future of UIX Designer',
            publisher: 'Brac International',
            publishingDate: '12 February, 2025',
            status: 'Published',
        },
        {
            key: '2',
            postTitle: 'Future of UIX Designer',
            publisher: 'Brac International',
            publishingDate: '12 February, 2025',
            status: 'Pending',
        },
    ];

    // Columns definition
    const columns = [
        {
            title: 'Blog Posts/Articles',
            dataIndex: 'postTitle',
            key: 'postTitle',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Publisher Name',
            dataIndex: 'publisher',
            key: 'publisher',
            render: (text) => <span className='flex items-center gap-2'>
                <img className='w-8' src="/Images/Jobs/PopulerSearch/companyLogo.png" alt="" />
                {text}
            </span>,
        },
        {
            title: 'Publishing Date',
            dataIndex: 'publishingDate',
            key: 'publishingDate',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color = '';
                if (status === 'Published') {
                    color = 'green';
                } else if (status === 'Pending') {
                    color = 'orange';
                }
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <Button
                    type="link"
                    icon={<IoEyeOutline className="text-xl" />}
                    onClick={() => showModal(record)}
                >
                    View
                </Button>
            ),
        },
    ];

    // Show modal with selected resource data
    const showModal = (resource) => {
        setSelectedResource(resource);
        setIsModalVisible(true);
    };

    // Handle modal close
    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedResource(null);
    };

    return (
        <div style={{ padding: '24px' }}>
            <div className='flex items-center justify-between mb-10'>
                <h2 className='text-3xl font-semibold'>Resources</h2>
                <Link href="/company/careerresources/add" className='h-12 flex items-center cursor-pointer justify-center gap-2 w-48 bg-[#553283] text-white rounded'>
                    <IoAdd className='text-2xl' /> Add New
                </Link>
            </div>

            <Table
                dataSource={resources}
                pagination={false}
                bordered
                style={{ background: '#fff' }}
                className="custom-table"

                columns={[...columns].map(col => ({
                    ...col,
                    onHeaderCell: () => ({
                        style: {
                            backgroundColor: '#553283',  // Set header background color
                            color: 'white',               // Set text color to white for the header
                            fontWeight: 'bold',           // Optional: make the header text bold
                        },
                    }),
                }))}
            />

            {/* Modal for View Details */}
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}

                width={1200}
                footer={null}
            >

                <h2 className='text-3xl lg:text-3xl font-medium text-primary text-center my-5'>Step-by-step guide to choosing great font pairs</h2>
                <div className='bg-[url("https://www.marketing91.com/wp-content/uploads/2020/09/Difference-between-Job-Description-and-Job-Specification.jpg")] bg-cover bg-center w-full h-[300px]'>
                </div>

                <div className='my-8'>
                    <h2 className='text-2xl font-medium mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                    <p className='text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magni, provident ipsam nihil eius minus repudiandae vel? Quis eum, numquam, eveniet veritatis molestiae inventore minima animi nesciunt odio perferendis doloremque?</p>
                </div>

                <div className='my-8'>
                    <h2 className='text-2xl font-medium mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                    <p className='text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magni, provident ipsam nihil eius minus repudiandae vel? Quis eum, numquam, eveniet veritatis molestiae inventore minima animi nesciunt odio perferendis doloremque?</p>
                </div>

                <div className='my-8'>
                    <h2 className='text-2xl font-medium mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                    <p className='text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magni, provident ipsam nihil eius minus repudiandae vel? Quis eum, numquam, eveniet veritatis molestiae inventore minima animi nesciunt odio perferendis doloremque?</p>
                </div>

                <div className='flex justify-center mt-5'>
                    <Link href="/company/careerresources/150" className='!bg-[#553283] !text-white py-2 px-10 text-base font-medium cursor-pointer rounded'>Edit</Link>
                </div>


            </Modal>

        </div>
    );
};

export default Page;
