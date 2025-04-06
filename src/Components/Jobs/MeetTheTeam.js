'use client';

import React from 'react';

const MeetTheTeam = () => {

    const handleVideoClick = (videoId, index) => {
        const iframe = document.getElementById(`iframe-${index}`);
        const thumbnail = document.getElementById(`thumbnail-${index}`);
        const src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

        // Hide the thumbnail and show the iframe with the video
        thumbnail.style.display = 'none';
        iframe.src = src;
        iframe.classList.remove('hidden');
    };

    return (
        <div className='p-5 border border-[#553283] rounded-lg bg-[#fffff9] my-10'>
            <h1 className='text-2xl font-semibold'>{`>>`} Meet The Team</h1>
            <div className="md:flex gap-6 mt-6 space-y-5 md:space-y-0">
                <div className="relative md:w-1/2 h-60 md:h-96 border-4 border-[#553283] rounded-lg overflow-hidden">
                    <div
                        id="thumbnail-1"
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => handleVideoClick('dQw4w9WgXcQ', 1)}
                    >
                        <img
                            src="/Images/Jobs/jobDetails/meetTeam-video1.png"
                            alt="Custom Thumbnail"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl opacity-75 transition-opacity duration-300 w-20 h-20 flex items-center justify-center bg-black rounded-full p-2">
                            &#9654;
                        </div>
                    </div>
                    <iframe
                        id="iframe-1"
                        className="absolute top-0 left-0 w-full h-full hidden"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="relative md:w-1/2 h-60 md:h-96 border-4 border-[#553283] rounded-lg overflow-hidden">
                    <div
                        id="thumbnail-2"
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => handleVideoClick('V-_O7nl0Ii0', 2)}
                    >
                        <img
                            src="/Images/Jobs/jobDetails/meetTeam-video2.png"
                            alt="Custom Thumbnail"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl opacity-75 transition-opacity duration-300 w-20 h-20 flex items-center justify-center bg-black rounded-full p-2">
                            &#9654;
                        </div>
                    </div>
                    <iframe
                        id="iframe-2"
                        className="absolute top-0 left-0 w-full h-full hidden"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;
