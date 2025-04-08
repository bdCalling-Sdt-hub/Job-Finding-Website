import Link from 'next/link';
import React from 'react';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const NewCompanies = () => {

    const companies = [
        {
            id: 1,
            name: "TechNova Solutions",
            location: "Dhaka, Bangladesh",
            employees: "200-500 Employee",
            description:
                "AI won’t replace designers, but designers who use AI will replace those who don’t. Similar to how calculators were once thought to replace.",
            jobs: 20,
            image: "/Images/Home/companies.png",
        },
        {
            id: 2,
            name: "InnoTech Systems",
            location: "Chittagong, Bangladesh",
            employees: "100-300 Employee",
            description:
                "Innovation drives the future. Our AI-powered solutions help businesses scale faster than ever.",
            jobs: 15,
            image: "/Images/Home/companies.png",
        },
        {
            id: 3,
            name: "CodeFusion Labs",
            location: "Sylhet, Bangladesh",
            employees: "50-200 Employee",
            description:
                "Empowering developers with AI-driven tools for seamless software development.",
            jobs: 12,
            image: "/Images/Home/companies.png",
        },
    ];

    return (
        <div className='w-[90%] mx-auto py-10'>
            <h2 className='md:text-3xl text-2xl font-semibold  my-5'>New Companies</h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 md:gap-10 ">
                {companies?.map((company, index) => (
                    <div key={company.id} className="">
                        <div className="p-5 border border-[#6a40a1] rounded-xl h-full">
                            <div className="relative mb-5">
                                <img className="w-full" src={company.image} alt={company.name} />
                                <span className="absolute -bottom-6 right-8 bg-[#f5eff7] px-8 py-3 rounded-md text-[#553283]">
                                    {company.jobs} Jobs
                                </span>
                            </div>
                            <h2 className="text-xl font-medium">{company.name}</h2>
                            <p className="text-gray-800 flex items-center gap-2 my-5"><FaMapMarkerAlt />{company.location}</p>
                            <p className="text-gray-800 flex items-center gap-2 my-5"><FaUsers />{company.employees}</p>

                            <p className=" text-[#2b2b2b6e]">{company.description}</p>

                            <button className="mt-3 text-[#7ed957] border border-[#7ed957] cursor-pointer hover:bg-[#7ed957] hover:text-white transition px-8 py-3 rounded-md font-semibold">Follow</button>
                        </div>



                    </div>
                ))}

            </div>

            <div className="mt-5 flex items-center justify-center">
                <Link href="/companies/all-companies" className="px-10 duration-500  py-3 w-full md:w-auto  border border-[#553283] cursor-pointer text-center rounded-full bg-[#553283] text-white transition font-medium shadow-sm">All Companies</Link>
            </div>


        </div>
    );
}

export default NewCompanies;
