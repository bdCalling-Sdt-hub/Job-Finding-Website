import React from 'react';

const Testomonial = () => {
    return (
        <div className='bg-[#fffff9] border border-[#e0e0e0] rounded-lg shadow-md p-5 mt-10'>
            <h1 className='text-3xl font-semibold'>Our Take</h1>
            <p className='my-5 text-[#777]'>Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
            <div className='flex items-center gap-5 mt-5 mb-2  '>
                <img className='w-10 h-10 rounded-full' src="/Images/Jobs/jobDetails/meetTeam-video2.png" alt="" />
                <div>
                    <h2 className='font-semibold'>John Doe</h2>
                    <p>Co-Founder</p>
                </div>
            </div>
        </div>
    );
}

export default Testomonial;
