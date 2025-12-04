import React from 'react';

const Booking = () => {
    return (
        <div className="bg-primary min-h-screen py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-accent sm:text-5xl font-serif mb-4">Book Online Now</h1>
                    <p className="text-xl text-gray-500">
                        Request an appointment to get a call back from our expert planners.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                                <select className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary bg-white">
                                    <option>Birthday Party Planning</option>
                                    <option>Wedding Anniversary</option>
                                    <option>Custom Cake Order</option>
                                    <option>Event Decoration</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 1234567890"
                                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                                    <input type="date" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                                    <input type="time" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                                <textarea rows="3" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" placeholder="Any specific requirements?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                                Request Appointment
                            </button>
                        </form>
                    </div>
                    <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 text-center">
                            We will confirm your appointment via email or phone within 24 hours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
