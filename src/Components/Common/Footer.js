import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#dcf8d2] py-10 ">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8">
                {/* General Section */}
                <div>
                    <img className="w-32" src="/Images/Auth/logo2.png" alt="" />
                    <p className="my-5 text-sm leading-[1.6]">Your journey to career success starts here. Explore top job opportunities, connect with leading companies, and gain the insights you need to thrive.</p>
                    <div className="mt-10 flex items-center gap-5">
                        <AiOutlineFacebook className="text-3xl cursor-pointer text-[#553283]" />
                        {/* <AiOutlineTwitter /> */}
                        <AiOutlineInstagram className="text-3xl cursor-pointer text-[#553283]" />
                        <AiOutlineLinkedin className="text-3xl cursor-pointer text-[#553283]" />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">General</h3>
                    <ul className="space-y-2">
                        <li className="text-sm flex items-center gap-2 my-5 cursor-pointer hover:gap-4 duration-300"> <FaChevronRight /> About Us</li>
                        <li className="text-sm flex items-center gap-2 my-5 cursor-pointer hover:gap-4 duration-300"> <FaChevronRight /> How It Works</li>
                        <Link href="/privacypolicy" className="text-sm flex items-center gap-2 my-5 cursor-pointer hover:gap-4 duration-300"> <FaChevronRight /> Privacy Policy</Link>
                        <Link href="/termsofservice" className="text-sm flex items-center gap-2 my-5 cursor-pointer hover:gap-4 duration-300"> <FaChevronRight /> Terms of Service</Link>
                        <Link href="/blog" className="text-sm flex items-center gap-2 my-5 cursor-pointer hover:gap-4 duration-300"> <FaChevronRight /> Blog</Link>
                    </ul>
                </div>
                {/* For Companies & Job Seekers */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">For Companies</h3>
                    <ul className="space-y-2">
                        <li className="text-sm flex items-center gap-2 my-5 cursor-pointer hover:gap-4 duration-300"> <FaChevronRight /> Why Karma</li>
                        <li className="text-sm flex items-center gap-2 my-5 cursor-pointer hover:gap-4 duration-300"> <FaChevronRight /> Explore Companies</li>
                        <li className="text-sm flex items-center gap-2 my-5 cursor-pointer hover:gap-4 duration-300"> <FaChevronRight /> Pricing</li>
                        <li className="text-sm flex items-center gap-2 my-5 cursor-pointer hover:gap-4 duration-300"> <FaChevronRight /> Resources</li>
                    </ul>
                </div>
                {/* for job seekers */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">For Job Seekers</h3>
                    <ul className="space-y-2">
                        <li className="text-sm flex items-center gap-2 my-5 cursor-pointer hover:gap-4 duration-300"> <FaChevronRight /> Browse Jobs</li>
                        <Link href="/contact" className="text-sm flex items-center gap-2 my-5 cursor-pointer hover:gap-4 duration-300"> <FaChevronRight /> Contact Us</Link>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <form>
                    <h3 className="text-lg font-semibold mb-3">SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <p className="text-sm my-3">
                        Stay updated with the latest job opportunities and career insights.
                    </p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 mb-3 text-black right-0 focus:outline-0 border rounded"
                    />
                    <button className="bg-[#553283] hover:bg-[#7d54b3] cursor-pointer text-white px-4 py-2 rounded w-full">
                        Subscribe
                    </button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
