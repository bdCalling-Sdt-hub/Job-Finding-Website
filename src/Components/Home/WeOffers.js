import React from 'react';

const WeOffers = () => {
    return (
        <div className='bg-gray-100'>
            <div className="w-[90%] mx-auto ">
                <div className="py-10">
                    <h2 className="md:text-4xl text-2xl font-bold text-center pb-5 border-b border-gray-500">Discover Companies</h2>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 md:gap-10 gap-5 py-10">
                    <div className='space-y-5'>
                        <div className='text-center bg-white shadow rounded-xl py-10 min-h-[150px] flex items-center justify-center'>
                            <p>Curated Job <br />
                                Opportunities</p>
                        </div>
                        <div>
                            <img className='w-full' src="/Images/Home/weoffer-1.png" alt="" />
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <div>
                            <img className='w-full' src="/Images/Home/weoffer-2.png" alt="" />
                        </div>
                        <div className='text-center bg-white shadow rounded-xl py-10 min-h-[150px] flex items-center justify-center'>
                            <p>Company Insights</p>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <div className='text-center bg-white shadow rounded-xl py-10 min-h-[150px] flex items-center justify-center'>
                            <p>Career Resources</p>
                        </div>
                        <div>
                            <img className='w-full' src="/Images/Home/weoffer-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeOffers;
