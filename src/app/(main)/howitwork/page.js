import React from 'react';

const Page = () => {
    return (
        <div className='w-[90%] mx-auto my-10'>
            <div className='max-w-[550px] mx-auto text-center my-10'>
                <h2 className='text-5xl font-medium mb-3'>How it works</h2>
                <p>Easily set up your company, build your team, and post jobs to find top talent</p>
            </div>

            <div className='flex lg:justify-between justify-center items-center lg:items-start lg:flex-row flex-col gap-5 py-10 '>
                <div className='max-w-32 text-center'>
                    <img src="/Images/howItWork/Frame1.png" alt="" />
                    <h2 className='font-semibold my-2'>Select Role</h2>
                    <p>Choose "Company" and get access to employer features.</p>
                </div>
                <div className='lg:mt-14'>
                    <img className='lg:block hidden' src="/Images/howItWork/FrameLine1.png" alt="" />
                    <img className='block lg:hidden' src="/Images/howItWork/FrameLine3.png" alt="" />
                </div>
                <div className='max-w-32 text-center'>
                    <img src="/Images/howItWork/Frame2.png" alt="" />
                    <h2 className='font-semibold my-2'>Setup Profile</h2>
                    <p>Fill in company details, upload a logo, and establish your brand.</p>
                </div>
                <div className='lg:mt-14'>
                    <img className='lg:block hidden' src="/Images/howItWork/FrameLine2.png" alt="" />
                    <img className='block lg:hidden' src="/Images/howItWork/FrameLine3.png" alt="" />
                </div>
                <div className='max-w-32 text-center'>
                    <img src="/Images/howItWork/Frame3.png" alt="" />
                    <h2 className='font-semibold my-2'>Setup Team</h2>
                    <p>Add team members and assign roles for recruitment management.</p>
                </div>
            </div>
            <div className='flex items-center justify-center lg:justify-end lg:mr-12'>
                <img src="/Images/howItWork/FrameLine3.png" alt="" />
            </div>
            <div className='flex lg:justify-between justify-center items-center lg:items-start lg:flex-row flex-col gap-5 py-10 '>
                <div className='max-w-32 text-center'>
                    <img src="/Images/howItWork/Frame5.png" alt="" />
                    <h2 className='font-semibold my-2'>Find Talents</h2>
                    <p>Find the perfect match for the role of your company</p>
                </div>
                <div className='lg:mt-14'>
                    <img className='rotate-180 lg:block hidden' src="/Images/howItWork/FrameLine2.png" alt="" />
                    <img className='block lg:hidden' src="/Images/howItWork/FrameLine3.png" alt="" />
                </div>
                <div className='max-w-32 text-center'>
                    <img src="/Images/howItWork/Frame6.png" alt="" />
                    <h2 className='font-semibold my-2'>List Jobs</h2>
                    <p>Create and post job openings to attract qualified candidates.</p>
                </div>
                <div className='lg:mt-14'>
                    <img className='rotate-180 lg:block hidden' src="/Images/howItWork/FrameLine1.png" alt="" />
                    <img className='block lg:hidden' src="/Images/howItWork/FrameLine3.png" alt="" />
                </div>

                <div className='max-w-32 text-center'>
                    <img src="/Images/howItWork/Frame4.png" alt="" />
                    <h2 className='font-semibold my-2'>Setup Culture</h2>
                    <p>Showcase your company values, work environment, and vision.</p>
                </div>
            </div>

        </div>
    );
}

export default Page;
