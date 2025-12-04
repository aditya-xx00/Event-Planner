import React from 'react';
import { Link } from 'react-router-dom';
import partyImage from '../assets/birthday1.jpg';

const Hero = () => {
    return (
        <div className="relative bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Image Section - Left Side */}
                    <div className="order-2 lg:order-1">
                        <img
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover rounded-lg"
                            src={partyImage}
                            alt="Party decoration"
                        />
                    </div>

                    {/* Text Section - Right Side */}
                    <div className="order-1 lg:order-2 px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                        <h1
                            className="text-3xl sm:text-5xl md:text-5xl "
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 500,
                                color: "#190A40"
                            }}
                        >
                            Event Party Planner
                        </h1>

                        <p className="mt-6 text-base sm:mt-6 sm:text-lg md:mt-8 md:text-lg font-light" style={{ color: "#190A40" }}>
                            Transform your event into a remarkable experience with our party planning and decoration services. Our team will meticulously craft every detail, from decor to entertainment, ensuring that your party is a standout occasion that will be memorable for everyone.
                        </p>
                        <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-5 justify-center">
                            <Link
                                to="/booking"
                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-opacity-90 md:py-2 md:text-lg md:px-5 transition-transform transform hover:scale-105"
                            >
                                BOOK NOW
                            </Link>
                            <Link
                                to="/gallery"
                                className="flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-secondary bg-red-50 hover:bg-red-100 md:py-2 md:text-lg md:px-5"
                            >
                                View Gallery
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
