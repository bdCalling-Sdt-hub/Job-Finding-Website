"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Modal, Button, Image } from 'antd';  // Import Ant Design Modal and Button components
import { CiLinkedin, CiLocationOn, CiMoneyBill } from 'react-icons/ci';
import { FaAngleLeft, FaAngleRight, FaRegBookmark, FaWhatsapp } from 'react-icons/fa';
import { RiFileEditLine, RiTimerLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { BiLinkAlt } from "react-icons/bi";
import { LiaFacebookSquare } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineDateRange } from 'react-icons/md';
import MeetTheTeam from '@/Components/Jobs/MeetTheTeam';
import JoinWithUsApply from '@/Components/Jobs/JoinWithUsApply';
import Dragger from 'antd/es/upload/Dragger';
// import 'antd/dist/antd.css'; // Import Ant Design styles globally



const Page = () => {

    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    // Function to open the modal
    const showModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const handleOk = () => {
        setIsModalOpen(false);
    };

    // Function to handle canceling the modal
    const handleCancel = () => {
        setIsModalOpen(false);
    };



    return (
        <div className='w-[90%] mx-auto py-10'>
            <Link className='flex items-center gap-1 mb-5' href="/jobs/all-jobs"><FaAngleLeft className='text-xl' />Back </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='md:col-span-2'>
                    <div className='bg-[#fffff9] p-5 border border-[#553283] rounded-md'>
                        <div className='flex items-center gap-3'>
                            <img className='w-20' src="/Images/Jobs/PopulerSearch/companyLogo.png" alt="" />
                            <h3 className='text-2xl font-semibold'>Brac International</h3>
                        </div>
                        <h3 className='text-2xl font-medium my-3'>Sr. Uix Designer</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
                            {/* Job Highlights */}
                            <div>
                                <h2 className="font-medium text-lg mb-4">Job Highlights</h2>
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 bg-[#f3ebff] px-4 py-2 rounded-xl shadow-[2px_2px_0px_#3d2b58] text-sm">
                                        <RiFileEditLine />Part-Time Contract
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#f3ebff] px-4 py-2 rounded-xl shadow-[2px_2px_0px_#3d2b58] text-sm">
                                        <CiLocationOn />Dhaka, Bangladesh
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#f3ebff] px-4 py-2 rounded-xl shadow-[2px_2px_0px_#3d2b58] text-sm">
                                        <CiMoneyBill /> Salary: €1,200 - €1,500
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#f3ebff] px-4 py-2 rounded-xl shadow-[2px_2px_0px_#3d2b58] text-sm">
                                        <IoTimeOutline />Experience: &lt; 2 Years
                                    </div>
                                </div>
                            </div>


                            {/* Skills & Expertise */}
                            <div className='lg:border-l-2 lg:pl-10 border-[#553283]'>
                                <h2 className="font-medium text-lg mb-4">Skills & Expertise</h2>
                                <div className="flex flex-wrap gap-3">
                                    {['Website Design', 'Figma', 'Mobile-App Design', 'Prototyping'].map((skill) => (
                                        <div
                                            key={skill}
                                            className="bg-[#f3ebff] px-4 py-2 rounded-xl shadow-[2px_2px_0px_#3d2b58] text-sm"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='mt-10 text-[#3f3f3fee] flex flex-wrap gap-3 items-center justify-between'>
                            <div>
                                <p className='mb-2'>Posted : 3 days ago</p>
                                <p>Application Deadline: 12 February, 2025</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <button onClick={showModal} className="py-3 cursor-pointer px-8 font-semibold text-[#553283] block border-2 rounded-lg border-[#553283] hover:bg-[#553283] hover:text-white duration-500">
                                    Apply Now
                                </button>
                                <span className='cursor-pointer  w-12 h-12 flex items-center justify-center rounded-full   border-2 border-[#553283] bg-[#eadaff] text-[#553283]'><FaRegBookmark /></span>
                            </div>
                        </div>

                    </div>
                    <div className='bg-[#fffff9] p-5 border border-[#553283] rounded-md mt-5'>
                        <div className='mb-5'>
                            <h2 className='font-medium text-2xl mb-4'> {'>>'} Job Description</h2>
                            <p className='text-[#313131] leading-[1.8]'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        </div>
                        <div className='mb-5'>
                            <h2 className='font-medium text-2xl mb-4'> {'>>'} Your Scope</h2>
                            <p className='text-[#313131] leading-[1.8]'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        </div>
                        <div className='mb-5'>
                            <h2 className='font-medium text-2xl mb-4'> {'>>'} Job Resposibities</h2>
                            <ul className='list-disc ml-5 leading-[1.8]'>
                                <li>
                                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                                </li>
                                <li>
                                    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                                </li>
                                <li>
                                    Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra
                                </li>
                                <li>
                                    per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                                </li>
                                <li>
                                    Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
                                </li>
                                <li>
                                    Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                                </li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h2 className='font-medium text-2xl mb-4'> {'>>'} Position Requirements</h2>
                            <ul className='list-disc ml-5 leading-[1.8]'>
                                <li>
                                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                                </li>
                                <li>
                                    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                                </li>
                                <li>
                                    Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra
                                </li>
                                <li>
                                    per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                                </li>
                                <li>
                                    Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
                                </li>
                                <li>
                                    Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                                </li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h2 className='font-medium text-2xl mb-4'> {'>>'} What’s In For You</h2>
                            <ul className='list-disc ml-5 leading-[1.8]'>
                                <li>
                                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                                </li>
                                <li>
                                    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                                </li>
                                <li>
                                    Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra
                                </li>
                                <li>
                                    per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                                </li>
                                <li>
                                    Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
                                </li>
                                <li>
                                    Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                                </li>
                            </ul>
                        </div>

                        <hr className='h-[2px] bg-black w-full mt-10' />
                        <div className='pt-5 pl-5'>
                            <h2 className='font-medium text-xl mb-4'>Share this job:</h2>
                            <div className='flex flex-wrap md:justify-start justify-center items-center gap-2 '>
                                <button className='flex items-center gap-2 py-2 px-10 bg-[#f7f7ff] text-[#6836b8] cursor-pointer rounded-lg font-semibold'><BiLinkAlt className='text-xl' />Copy Links</button>
                                <ul className='flex items-center gap-5'>
                                    <li className='cursor-pointer'><LiaFacebookSquare className='text-3xl text-[#2c2c2c]' /></li>
                                    <li className='cursor-pointer'><CiLinkedin className='text-3xl text-[#2c2c2c]' /></li>
                                    <li className='cursor-pointer'><FaWhatsapp className='text-3xl text-[#2c2c2c]' /></li>
                                    <li className='cursor-pointer'><FaXTwitter className='text-2xl text-[#2c2c2c]' /></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='md:col-span-1'>
                    <div className='bg-[#fffff9] p-5 border border-[#553283] rounded-md'>
                        <div className='flex items-center gap-3'>
                            <img className='w-20' src="/Images/Jobs/PopulerSearch/companyLogo.png" alt="" />
                            <h3 className='text-2xl font-semibold'>Brac International</h3>
                        </div>
                        <div className='grid grid-cols-3 gap-2 my-5'>
                            <Image className='w-full' src="/Images/Jobs/jobDetails/Rectangle 22.png" alt="" />
                            <Image className='w-full' src="/Images/Jobs/jobDetails/Rectangle 23.png" alt="" />
                            <Image className='w-full' src="/Images/Jobs/jobDetails/Rectangle 24.png" alt="" />
                            <Image className='w-full' src="/Images/Jobs/jobDetails/Rectangle 25.png" alt="" />
                            <Image className='w-full' src="/Images/Jobs/jobDetails/Rectangle 26.png" alt="" />
                            <Image className='w-full' src="/Images/Jobs/jobDetails/Rectangle 27.png" alt="" />
                        </div>
                        <div className='flex items-center flex-wrap justify-center gap-5'>
                            <button className='cursor-pointer py-3 px-10 rounded-full bg-[#7ed957] text-white font-semibold'>View Company </button>
                            <button className='cursor-pointer py-3 px-10 rounded-full border-[#553283] border text-[#553283] font-semibold relative'> <span className='absolute top-2 left-2 bg-[#7ed957] text-white w-8 h-8 flex items-center justify-center text-sm rounded-full'>9+</span><span className='ml-2'>All Jobs</span></button>
                        </div>

                        <hr className='h-[2px] bg-gray-400 border-0 w-full my-5' />

                        <div className='my-10'>
                            <div className="grid lg:grid-cols-2 gap-3">
                                <div className="flex items-center justify-center  font-medium gap-3 bg-[#f3ebff] px-4 py-3 rounded-xl shadow-[2px_2px_0px_#3d2b58] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 22" fill="none">
                                        <path d="M22.909 12.2832C22.5817 12.2832 22.3636 12.5014 22.3636 12.8286V19.9196C22.3636 20.2468 22.1454 20.465 21.8181 20.465H2.18172C1.85444 20.465 1.63629 20.2468 1.63629 19.9196V12.8286C1.63629 12.5014 1.41808 12.2832 1.09085 12.2832C0.763613 12.2832 0.54541 12.5014 0.54541 12.8286V19.9196C0.54541 20.8468 1.25449 21.5559 2.18177 21.5559H21.8181C22.7454 21.5559 23.4545 20.8468 23.4545 19.9196V12.8286C23.4545 12.5014 23.2363 12.2832 22.909 12.2832Z" fill="#09091B" />
                                        <path d="M22.3636 4.6473H1.63636C0.709078 4.6473 0 5.35638 0 6.28366V9.77459C0 10.5382 0.545437 11.1927 1.25456 11.3564L9.8182 13.2655V15.0109C9.8182 15.3382 10.0364 15.5563 10.3636 15.5563H13.6364C13.9636 15.5563 14.1818 15.3381 14.1818 15.0109V13.2655L22.7454 11.3564C23.4546 11.1927 24 10.5382 24 9.77454V6.28362C24 5.35638 23.2909 4.6473 22.3636 4.6473ZM13.0909 14.4655H10.9091V12.2837H13.0909V14.4655ZM22.9091 9.77454C22.9091 10.0473 22.7454 10.2655 22.4727 10.32L14.1818 12.1745V11.7382C14.1818 11.4109 13.9636 11.1927 13.6364 11.1927H10.3636C10.0364 11.1927 9.8182 11.4109 9.8182 11.7382V12.1745L1.52728 10.32C1.25456 10.2655 1.09092 10.0473 1.09092 9.77459V6.28366C1.09092 5.95638 1.30913 5.73823 1.63636 5.73823H22.3636C22.6909 5.73823 22.9091 5.95643 22.9091 6.28366V9.77454ZM14.7273 0.829102H9.27272C8.34544 0.829102 7.63636 1.53818 7.63636 2.46546V3.0109C7.63636 3.33818 7.85456 3.55634 8.1818 3.55634C8.50903 3.55634 8.72723 3.33813 8.72723 3.0109V2.46546C8.72723 2.13818 8.94544 1.92002 9.27267 1.92002H14.7272C15.0545 1.92002 15.2727 2.13823 15.2727 2.46546V3.0109C15.2727 3.33818 15.4909 3.55634 15.8181 3.55634C16.1454 3.55634 16.3635 3.33813 16.3635 3.0109V2.46546C16.3636 1.53818 15.6546 0.829102 14.7273 0.829102Z" fill="#09091B" />
                                    </svg>
                                    <span>Saas/ Cloud Services</span>
                                </div>
                                <div className="flex items-center justify-center  font-medium gap-2 bg-[#f3ebff] px-4 py-3 rounded-xl shadow-[2px_2px_0px_#3d2b58] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 25" fill="none">
                                        <circle cx="12" cy="8.19238" r="2.5" stroke="#09091B" stroke-linecap="round" />
                                        <path d="M13.7679 6.69238C13.9657 6.34982 14.2607 6.07359 14.6154 5.89864C14.9702 5.72368 15.3689 5.65786 15.7611 5.70949C16.1532 5.76112 16.5213 5.92789 16.8187 6.1887C17.1161 6.44952 17.3295 6.79266 17.4319 7.17474C17.5342 7.55683 17.521 7.96069 17.3939 8.33526C17.2667 8.70983 17.0313 9.03829 16.7175 9.27909C16.4037 9.51989 16.0255 9.66223 15.6308 9.6881C15.2361 9.71397 14.8426 9.62221 14.5 9.42443" stroke="#09091B" />
                                        <path d="M10.2321 6.69238C10.0343 6.34982 9.73935 6.07359 9.38458 5.89864C9.02981 5.72368 8.63113 5.65786 8.23895 5.70949C7.84677 5.76112 7.47871 5.92789 7.18131 6.1887C6.88391 6.44952 6.67053 6.79266 6.56815 7.17474C6.46577 7.55683 6.47899 7.96069 6.60614 8.33526C6.73329 8.70983 6.96866 9.03829 7.28248 9.27909C7.5963 9.51989 7.97448 9.66223 8.36919 9.6881C8.76391 9.71397 9.15743 9.62221 9.5 9.42443" stroke="#09091B" />
                                        <path d="M12 12.6924C16.0802 12.6924 17.1335 15.9945 17.4054 17.6994C17.4924 18.2448 17.0523 18.6924 16.5 18.6924H7.5C6.94771 18.6924 6.50763 18.2448 6.59461 17.6994C6.86649 15.9945 7.91976 12.6924 12 12.6924Z" stroke="#09091B" stroke-linecap="round" />
                                        <path d="M19.2964 15.6086L18.8113 15.7301L19.2964 15.6086ZM13.0869 12.7783L12.7177 12.4412L12.0972 13.1207L13.0049 13.2715L13.0869 12.7783ZM17.1811 16.6924L16.7008 16.8313L16.8053 17.1924H17.1811V16.6924ZM15.4998 12.1924C16.5275 12.1924 17.2493 12.695 17.7781 13.3993C18.3175 14.1177 18.6343 15.023 18.8113 15.7301L19.7814 15.4872C19.5902 14.7239 19.2327 13.671 18.5778 12.7989C17.9124 11.9126 16.92 11.1924 15.4998 11.1924V12.1924ZM13.4562 13.1154C13.9565 12.5674 14.6105 12.1924 15.4998 12.1924V11.1924C14.2826 11.1924 13.3734 11.723 12.7177 12.4412L13.4562 13.1154ZM13.0049 13.2715C15.3055 13.6538 16.2788 15.3725 16.7008 16.8313L17.6614 16.5534C17.1903 14.925 16.0188 12.7587 13.1689 12.2851L13.0049 13.2715ZM18.3948 16.1924H17.1811V17.1924H18.3948V16.1924ZM18.8113 15.7301C18.8651 15.9449 18.7073 16.1924 18.3948 16.1924V17.1924C19.2655 17.1924 20.015 16.4201 19.7814 15.4872L18.8113 15.7301Z" fill="#09091B" />
                                        <path d="M10.913 12.7783L10.995 13.2715L11.9027 13.1207L11.2823 12.4412L10.913 12.7783ZM4.70355 15.6086L5.18857 15.7301L4.70355 15.6086ZM6.8188 16.6924V17.1924H7.19465L7.2991 16.8313L6.8188 16.6924ZM8.50011 12.1924C9.38944 12.1924 10.0434 12.5674 10.5438 13.1154L11.2823 12.4412C10.6266 11.723 9.71735 11.1924 8.50011 11.1924V12.1924ZM5.18857 15.7301C5.36566 15.023 5.6824 14.1177 6.22179 13.3993C6.7506 12.695 7.47238 12.1924 8.50011 12.1924V11.1924C7.07993 11.1924 6.08755 11.9126 5.42211 12.7989C4.76725 13.671 4.40968 14.7239 4.21853 15.4872L5.18857 15.7301ZM5.6051 16.1924C5.29259 16.1924 5.13477 15.9449 5.18857 15.7301L4.21853 15.4872C3.9849 16.4201 4.73436 17.1924 5.6051 17.1924V16.1924ZM6.8188 16.1924H5.6051V17.1924H6.8188V16.1924ZM7.2991 16.8313C7.72116 15.3725 8.69448 13.6538 10.995 13.2715L10.831 12.2851C7.98113 12.7587 6.80962 14.925 6.3385 16.5534L7.2991 16.8313Z" fill="#09091B" />
                                    </svg>
                                    <span>501-1000 Employee</span>
                                </div>
                                <div className="flex items-center justify-center  font-medium gap-2 bg-[#f3ebff] px-4 py-3 rounded-xl shadow-[2px_2px_0px_#3d2b58] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 25" fill="none">
                                        <rect x="3" y="6.19238" width="18" height="15" rx="2" stroke="#09091B" />
                                        <path d="M3 11.1924L21 11.1924" stroke="#09091B" stroke-linecap="round" />
                                        <path d="M9 16.1924H15" stroke="#09091B" stroke-linecap="round" />
                                        <path d="M8 3.19238L8 7.19238" stroke="#09091B" stroke-linecap="round" />
                                        <path d="M16 3.19238L16 7.19238" stroke="#09091B" stroke-linecap="round" />
                                    </svg> Founded in 2015
                                </div>
                                <div className="flex items-center justify-center  font-medium gap-2 bg-[#f3ebff] px-4 py-3 rounded-xl shadow-[2px_2px_0px_#3d2b58] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 25" fill="none">
                                        <path d="M19.5 12.1924C19.5 17.2104 14.0117 20.5951 12.4249 21.4688C12.1568 21.6164 11.8432 21.6164 11.5751 21.4688C9.98831 20.5951 4.5 17.2104 4.5 12.1924C4.5 7.69238 8.13401 4.69238 12 4.69238C16 4.69238 19.5 7.69238 19.5 12.1924Z" stroke="#09091B" />
                                        <circle cx="12" cy="12.1924" r="3.5" stroke="#09091B" />
                                    </svg>
                                    Dhaka , Bangladesh
                                </div>
                            </div>
                        </div>
                        <hr className='h-[2px] bg-gray-400 border-0 w-full my-5' />

                        <div>
                            <h2 className='text-2xl font-semibold'>Company Details</h2>
                            <p className='my-5 leading-[1.8]'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        </div>

                        <hr className='h-[2px] bg-gray-400 border-0 w-full my-5' />
                        <div>
                            <h2 className='text-2xl font-semibold mb-3'>Company Location</h2>
                            <p className='underline'>524 Broadway, New York, NY 10012-4408 </p>
                            <div className='flex justify-center mt-10'>
                                <button className='cursor-pointer py-3 px-8 border-2 font-semibold  hover:bg-[#553283] hover:text-white duration-300 border-[#553283] text-[#553283] rounded-lg '>Follow</button>
                            </div>
                        </div>

                    </div>

                    <div className='bg-[#fffff9] p-5 border border-[#553283] rounded-md mt-5 '>
                        <h2 className='text-2xl font-medium flex items-center gap-3'>
                            {`>>`}
                            <span>Deliverables</span>
                        </h2>
                        <ul>
                            <li className='flex items-center gap-3 my-8 text-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 33" fill="none">
                                    <path d="M11.3325 16.8594L20.6659 16.8594" stroke="#7ED957" stroke-width="2" stroke-linecap="round" />
                                    <path d="M11.3325 20.8594L16.6659 20.8594" stroke="#7ED957" stroke-width="2" stroke-linecap="round" />
                                    <path d="M7.33301 12.4028C7.33301 10.3856 7.33301 9.377 7.60034 8.56134C8.13318 6.93554 9.4082 5.66053 11.034 5.12768C11.8497 4.86035 12.8583 4.86035 14.8755 4.86035V4.86035C15.7583 4.86035 16.1998 4.86035 16.6209 4.9276C17.4539 5.06063 18.244 5.38788 18.9271 5.88286C19.2724 6.13309 19.5845 6.44522 20.2088 7.06949L22.1475 9.00814C23.0771 9.93775 23.5419 10.4026 23.8743 10.945C24.169 11.4259 24.3862 11.9502 24.5178 12.4986C24.6663 13.1172 24.6663 13.7746 24.6663 15.0893V18.927C24.6663 21.9373 24.6663 23.4424 24.0805 24.5922C23.5652 25.6036 22.7429 26.4259 21.7315 26.9412C20.5818 27.527 19.0544 27.527 15.9997 27.527V27.527C12.9449 27.527 11.4176 27.527 10.2678 26.9412C9.25644 26.4259 8.43417 25.6036 7.91885 24.5922C7.33301 23.4424 7.33301 21.9373 7.33301 18.927V12.4028Z" stroke="#7ED957" stroke-width="2" />
                                    <path d="M16.6675 4.86035V4.86035C16.6675 7.30613 16.6675 8.52901 17.058 9.49684C17.6043 10.8504 18.6775 11.9236 20.031 12.4698C20.9988 12.8604 22.2217 12.8604 24.6675 12.8604V12.8604" stroke="#7ED957" stroke-width="2" />
                                </svg>
                                <span>A detailed CV outlining professional background, education, and achievements.</span>
                            </li>
                            <li className='flex items-center gap-3 my-8 text-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 33" fill="none">
                                    <path d="M5.33301 16.9702C5.33301 15.3446 5.33301 14.5318 5.49082 13.7923C5.83656 12.1721 6.73293 10.7218 8.02744 9.68795C8.61831 9.21607 9.34529 8.85258 10.7993 8.1256L11.2294 7.91053C12.7588 7.14583 13.5235 6.76349 14.3155 6.572C15.4223 6.3044 16.577 6.3044 17.6838 6.572C18.4759 6.76349 19.2406 7.14583 20.77 7.91053L21.2001 8.1256C22.6541 8.85258 23.381 9.21607 23.9719 9.68795C25.2664 10.7218 26.1628 12.1721 26.5085 13.7923C26.6663 14.5318 26.6663 15.3446 26.6663 16.9702V16.9702C26.6663 19.5027 26.6663 20.7689 26.3499 21.7983C25.652 24.0678 23.8754 25.8444 21.6059 26.5422C20.5765 26.8587 19.3103 26.8587 16.7778 26.8587H15.2216C12.6891 26.8587 11.4228 26.8587 10.3935 26.5422C8.12391 25.8444 6.3473 24.0678 5.64949 21.7983C5.33301 20.7689 5.33301 19.5027 5.33301 16.9702V16.9702Z" stroke="#7ED957" stroke-width="2" />
                                    <path d="M5.33301 13.5244L7.23394 15.4253C8.57795 16.7694 10.4008 17.5244 12.3015 17.5244H19.6978C21.5985 17.5244 23.4214 16.7694 24.7654 15.4253L26.6663 13.5244" stroke="#7ED957" stroke-width="2" stroke-linecap="round" />
                                </svg>
                                <span>A personalized cover letter highlighting your skills, experience, and enthusiasm for the role.</span> </li>
                            <li className='flex items-center gap-3 my-8 text-sm'>
                                <svg className='-ml-1' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 33" fill="none">
                                    <path d="M16.2437 17.9803C18.0658 18.8913 18.0658 21.4915 16.2437 22.4026C14.6 23.2244 12.666 22.0291 12.666 20.1914C12.666 18.3537 14.6 17.1584 16.2437 17.9803Z" stroke="#7ED957" stroke-width="2" />
                                    <path d="M16.6663 4.86035H14.4997C10.5416 4.86035 7.33301 8.06897 7.33301 12.027V20.3604C7.33301 24.3184 10.5416 27.527 14.4997 27.527H17.4997C21.4577 27.527 24.6663 24.3184 24.6663 20.3603V12.8604M16.6663 4.86035V4.86035C17.5201 4.86035 18.3388 5.19949 18.9425 5.80316L23.7235 10.5842C24.3272 11.1879 24.6663 12.0066 24.6663 12.8604V12.8604M16.6663 4.86035V5.69368C16.6663 9.65172 19.875 12.8604 23.833 12.8604H24.6663" stroke="#7ED957" stroke-width="2" />
                                </svg>
                                <span> A brief recording explaining why you're the ideal candidate for this position.</span>
                            </li>
                        </ul>
                    </div>
                    <div className='bg-[#fffff9] p-5 border border-[#553283] rounded-md mt-5 '>
                        <h2 className='  text-2xl text-primary mb-6 '>Job Overview</h2>
                        <div className='grid grid-cols-2   xl:grid-cols-3 gap-5'>
                            <div>
                                <MdOutlineDateRange className='text-3xl text-[#553283]' />
                                <span className='mt-3 mb-1 text-sm text-gray-500 inline-block'>Job Posted:</span>
                                <h3> 14 Jun, 2021 </h3>
                            </div>
                            <div>
                                <RiTimerLine className='text-3xl text-[#553283]' />
                                <span className='mt-3 mb-1 text-sm text-gray-500 inline-block'>Job expire in:</span>
                                <h3> 14 Jun, 2021 </h3>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M4.8335 22.6924L16.8335 29.6924L28.8335 22.6924" stroke="#553283" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.8335 16.6924L16.8335 23.6924L28.8335 16.6924" stroke="#553283" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.8335 10.6924L16.8335 17.6924L28.8335 10.6924L16.8335 3.69238L4.8335 10.6924Z" stroke="#553283" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className='mt-3 mb-1 text-sm text-gray-500 inline-block'>Job Level:</span>
                                <h3> Executive</h3>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M5.5 8.69238V24.6924C5.5 25.2228 5.71071 25.7315 6.08579 26.1066C6.46086 26.4817 6.96957 26.6924 7.5 26.6924H27.5C27.7652 26.6924 28.0196 26.587 28.2071 26.3995C28.3946 26.212 28.5 25.9576 28.5 25.6924V11.6924C28.5 11.4272 28.3946 11.1728 28.2071 10.9853C28.0196 10.7977 27.7652 10.6924 27.5 10.6924H7.5C6.96957 10.6924 6.46086 10.4817 6.08579 10.1066C5.71071 9.73152 5.5 9.22282 5.5 8.69238ZM5.5 8.69238C5.5 8.16195 5.71071 7.65324 6.08579 7.27817C6.46086 6.9031 6.96957 6.69238 7.5 6.69238H24.5" stroke="#553283" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23.5 18.6924C23.5 18.9685 23.2761 19.1924 23 19.1924C22.7239 19.1924 22.5 18.9685 22.5 18.6924C22.5 18.4162 22.7239 18.1924 23 18.1924C23.2761 18.1924 23.5 18.4162 23.5 18.6924Z" fill="#09091B" stroke="#553283" stroke-width="2" />
                                </svg>
                                <span className='mt-3 mb-1 text-sm text-gray-500 inline-block'>Seniority</span>
                                <h3> {`>`} 2 Years</h3>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.5 21.0806V8.75351C26.5 8.41898 26.148 8.20141 25.8488 8.35101L21.3232 10.6138C21.2225 10.6641 21.1066 10.6749 20.9984 10.644L12.0016 8.07348C11.8934 8.04255 11.7775 8.05332 11.6768 8.10367L6.74875 10.5677C6.5963 10.6439 6.5 10.7997 6.5 10.9702V23.2973C6.5 23.6318 6.85204 23.8494 7.15125 23.6998L11.6768 21.437C11.7775 21.3867 11.8934 21.3759 12.0016 21.4068L20.9984 23.9773C21.1066 24.0082 21.2225 23.9975 21.3232 23.9471L26.2512 21.4831C26.4037 21.4069 26.5 21.2511 26.5 21.0806Z" stroke="#553283" stroke-width="2" />
                                    <path d="M21.1665 24.0257V10.6924" stroke="#553283" stroke-width="2" />
                                    <path d="M11.8335 21.3587V8.02539" stroke="#553283" stroke-width="2" />
                                </svg>
                                <span className='mt-3 mb-1 text-sm text-gray-500 inline-block'>Location</span>
                                <h3> Dhaka, Bangladesh</h3>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <rect x="4.5" y="8.69238" width="24" height="16" rx="2" stroke="#553283" stroke-width="2" />
                                    <path d="M7.1665 12.6924H11.1665" stroke="#553283" stroke-width="2" stroke-linecap="round" />
                                    <path d="M21.8335 20.6924H25.8335" stroke="#553283" stroke-width="2" stroke-linecap="round" />
                                    <circle cx="16.5002" cy="16.6921" r="2.66667" stroke="#553283" stroke-width="2" />
                                </svg>
                                <span className='mt-3 mb-1 text-sm text-gray-500 inline-block'>Salary</span>
                                <h3> €10,000 - €12,000</h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <Modal
                title="Apply Job: UIX Designer"
                visible={isModalOpen}   // The modal visibility is controlled by this state
                // onOk={handleOk}        // The function triggered when the OK button is clicked
                onCancel={handleCancel} // The function triggered when the Cancel button is clicked
                footer={null}


            >

                <div>
                    <h2 className='mb-2 font-semibold '>Cover Letter</h2>
                    <Dragger  >
                        <div>
                            <img className='w-12 mb-3 mx-auto' src="/Images/upload.png" alt="" />
                        </div>
                        <p className=" !text-[#777]">Drag your file(s) to start uploading</p>
                        <div>
                            <button className='cursor-pointer py-2 px-8 border-2 border-[#553283] font-semibold mt-3 text-[#553283] rounded-lg'>Browse files</button>
                        </div>
                    </Dragger>
                </div>
                <br />
                <div>
                    <h2 className='mb-2 font-semibold '>Short Video</h2>
                    <Dragger  >
                        <div>
                            <img className='w-12 mb-3 mx-auto' src="/Images/upload.png" alt="" />
                        </div>
                        <p className=" !text-[#777]">Drag your file(s) to start uploading</p>
                        <div>
                            <button className='cursor-pointer py-2 px-8 border-2 border-[#553283] font-semibold mt-3 text-[#553283] rounded-lg'>Browse files</button>
                        </div>
                    </Dragger>
                </div>

                <div className='mt-5'>
                    <button onClick={handleCancel} className='hover:bg-[#553283] hover:text-white duration-300 cursor-pointer py-2 px-8 border-2 border-[#553283] font-semibold w-full text-[#553283] rounded-lg'>Apply Now</button>
                </div>
            </Modal>

            <MeetTheTeam />
            <JoinWithUsApply />

        </div>
    );
}

export default Page;
