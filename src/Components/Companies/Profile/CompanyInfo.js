import React from 'react';
import Slider from 'react-slick';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanyInfo = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,  // Show only one slide at a time
        slidesToScroll: 1,  // Scroll one slide at a time
        centerMode: false,  // Disable centerMode to have consistent slide display
        focusOnSelect: true,
        dots: true,  // Enable pagination dots
        arrows: false,  // Hide arrows if you don't want next/prev buttons
    };

    return (
        <div className="company-info-slider-container my-20">
            <Slider {...settings}>
                <div className="company-card p-10 border border-[#E0E0E0] rounded-lg !flex items-center justify-between">
                    <div className="text-center flex-1">
                        <h3 className="font-semibold text-lg">Founding Year</h3>
                        <p className="text-2xl font-bold">2016</p>
                    </div>

                    <div className="border-l-2 border-green-500 h-16 mx-4"></div>

                    <div className="text-center flex-1">
                        <h3 className="font-semibold text-lg">Total Employees</h3>
                        <p className="text-2xl font-bold">1,200</p>
                    </div>

                    <div className="border-l-2 border-green-500 h-16 mx-4"></div>

                    <div className="text-center flex-1">
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="text-2xl font-bold">Nicosia, Cyprus</p>
                    </div>
                </div>



                {/* Add more slides if needed */}
                <div className="company-card p-10 border border-[#E0E0E0] rounded-lg !flex justify-between items-center">
                    <div className="text-center flex-1">
                        <h3 className="font-semibold text-lg">Founding Year</h3>
                        <p className="text-2xl font-bold">2018</p>
                    </div>
                    <div className="border-l-2 border-green-500 h-16 mx-4"></div>
                    <div className="text-center flex-1">
                        <h3 className="font-semibold text-lg">Total Employees</h3>
                        <p className="text-2xl font-bold">900</p>
                    </div>
                    <div className="border-l-2 border-green-500 h-16 mx-4"></div>
                    <div className="text-center flex-1">
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="text-2xl font-bold">London, UK</p>
                    </div>
                </div>
                <div className="company-card p-10 border border-[#E0E0E0] rounded-lg !flex justify-between items-center">
                    <div className="text-center flex-1">
                        <h3 className="font-semibold text-lg">Founding Year</h3>
                        <p className="text-2xl font-bold">2015</p>
                    </div>
                    <div className="border-l-2 border-green-500 h-16 mx-4"></div>
                    <div className="text-center flex-1">
                        <h3 className="font-semibold text-lg">Total Employees</h3>
                        <p className="text-2xl font-bold">800</p>
                    </div>
                    <div className="border-l-2 border-green-500 h-16 mx-4"></div>
                    <div className="text-center flex-1">
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="text-2xl font-bold">Berlin, Germany</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default CompanyInfo;
