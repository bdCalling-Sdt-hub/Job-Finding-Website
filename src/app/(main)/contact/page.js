import React from "react";
import { HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";

const Page = () => {
    return (
        <div className="py-20 w-[90%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-semibold">
                    <span className="text-[#7ed957]">Connect</span> With Us
                </h3>
                <p className="text-sm text-gray-600">
                    Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
                    molestie vel, ornare non id blandit netus.
                </p>
                <div>
                    <label className="font-semibold" htmlFor="name">
                        Name
                    </label>
                    <input
                        placeholder="Enter your name"
                        className="mt-2 w-full p-2 border border-[#553283] rounded-md focus:outline-none bg-white"
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div>
                    <label className="font-semibold" htmlFor="email">
                        Email
                    </label>
                    <input
                        placeholder="Enter your email"
                        className="mt-2 w-full p-2 border border-[#553283] rounded-md focus:outline-none bg-white"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div>
                    <label className="font-semibold" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        placeholder="Enter your message"
                        className="mt-2 w-full p-2 border border-[#553283] rounded-md focus:outline-none bg-white"
                        name="message"
                        id="message"
                    />
                </div>
                <div>
                    <button className="cursor-pointer w-full p-2 bg-[#553283] font-semibold text-white rounded-md">
                        Send
                    </button>
                </div>
                {/* Contact Info */}
                <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex items-center gap-3">
                        <HiOutlineMailOpen className="text-3xl" />
                        <div>
                            <h2 className="text-sm leading-2">Email</h2>
                            <span className="text-xs text-gray-400">tKd0u@example.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <HiOutlinePhone className="text-3xl" />
                        <div>
                            <h2 className="text-sm leading-2">Phone</h2>
                            <span className="text-xs text-gray-400">123 456 789</span>
                        </div>
                    </div>
                </div>
            </form>
            {/* Contact Image */}
            <div className="flex items-center justify-center md:justify-end">
                <img
                    className="w-4/5 md:w-3/5"
                    src="/Images/Contact/ContactPage.png"
                    alt="Contact"
                />
            </div>
        </div>
    );
};

export default Page;