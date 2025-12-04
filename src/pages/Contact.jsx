import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-primary min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-accent sm:text-5xl font-serif mb-4">Contact Us</h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500">
                        We'd love to hear from you. Let's plan your next big event together!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-accent font-serif mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-red-50 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-accent">Phone</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                    <p className="text-sm text-gray-500">Mon-Fri 9am-6pm</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-red-50 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-accent">Email</h3>
                                    <p className="text-gray-600">hello@funzio.com</p>
                                    <p className="text-sm text-gray-500">Online support 24/7</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-red-50 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-accent">Office</h3>
                                    <p className="text-gray-600">123 Celebration Lane, Party City, PC 12345</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows="4" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" placeholder="Tell us about your event..."></textarea>
                            </div>
                            <button type="submit" className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                                <Send className="h-4 w-4 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
