import React from 'react';
import CakeGrid from '../components/CakeGrid';

const Services = () => {
    return (
        <div className="bg-primary min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-accent sm:text-5xl font-serif mb-4">Our Services</h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500">
                        From magical birthday parties to exquisite custom cakes, we bring your dreams to life.
                    </p>
                </div>

                {/* Service Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        { title: "Birthday Party Celebration", desc: "Make birthdays feel magical! Fun themes, colourful decor & every tiny detail done your way." },
                        { title: "Anniversary Party Celebration", desc: "Celebrate your journey with sweet moments, warm lights, and a setting that reflects your story." },
                        { title: "Customized Decor & Styling", desc: "Elevate your event with exquisite decor and styling, personalized to reflect your unique vision." }
                    ].map((service, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <h3 className="text-xl font-bold text-accent mb-4 font-serif">{service.title}</h3>
                            <p className="text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Cake Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-accent font-serif mb-4">Customized Cake Making 🎂</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                        pure veg custom cakes designed to match your theme and taste perfectly.
                    </p>
                    <CakeGrid />
                </div>
            </div>
        </div>
    );
};

export default Services;
