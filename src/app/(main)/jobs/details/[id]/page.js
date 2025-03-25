import Link from 'next/link';
import React from 'react';
import { CiLinkedin, CiLocationOn, CiMoneyBill } from 'react-icons/ci';
import { FaAngleLeft, FaRegBookmark, FaWhatsapp } from 'react-icons/fa';
import { RiFileEditLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { BiLinkAlt } from "react-icons/bi";
import { LiaFacebookSquare } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";


const Page = () => {
    return (
        <div className='w-[90%] mx-auto py-10'>
            <Link className='flex items-center gap-1 mb-5' href="/jobs/all-jobs"><FaAngleLeft className='text-xl' />Back </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='col-span-2'>
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

                        <div className='mt-10 text-[#3f3f3fee] flex items-center justify-between'>
                            <div>
                                <p className='mb-2'>Posted : 3 days ago</p>
                                <p>Application Deadline: 12 February, 2025</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <button className="py-3 cursor-pointer px-8 font-semibold text-[#553283] block border-2 rounded-lg border-[#553283] hover:bg-[#553283] hover:text-white duration-500">
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
                            <div className='flex items-center gap-2 '>
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
                <div className='col-span-1 '>
                    <div className='bg-[#fffff9] p-5 border border-[#553283] rounded-md'>
                        <div className='flex items-center gap-3'>
                            <img className='w-20' src="/Images/Jobs/PopulerSearch/companyLogo.png" alt="" />
                            <h3 className='text-2xl font-semibold'>Brac International</h3>
                        </div>
                        <div className='grid grid-cols-3 gap-2 my-5'>
                            <img className='w-full' src="/Images/Jobs/jobDetails/Rectangle 22.png" alt="" />
                            <img className='w-full' src="/Images/Jobs/jobDetails/Rectangle 23.png" alt="" />
                            <img className='w-full' src="/Images/Jobs/jobDetails/Rectangle 24.png" alt="" />
                            <img className='w-full' src="/Images/Jobs/jobDetails/Rectangle 25.png" alt="" />
                            <img className='w-full' src="/Images/Jobs/jobDetails/Rectangle 26.png" alt="" />
                            <img className='w-full' src="/Images/Jobs/jobDetails/Rectangle 27.png" alt="" />
                        </div>
                        <div className='flex items-center justify-center gap-5'>
                            <button className='cursor-pointer py-3 px-10 rounded-full bg-[#7ed957] text-white font-semibold'>View Company </button>
                            <button className='cursor-pointer flex items-center justify-between gap-2 py-3 px-10 rounded-full border-[#553283] border text-[#553283] font-semibold'> <span className='bg-[#7ed957] text-white w-6 h-6 flex items-center justify-center text-sm rounded-full'>9+</span> All Jobs</button>
                        </div>


                        <div className='my-10'>
                            <div className="grid grid-cols-2 gap-3">
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



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
