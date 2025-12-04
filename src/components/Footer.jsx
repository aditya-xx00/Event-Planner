import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl font-bold text-accent">FunZio</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Transforming your vision into unforgettable celebrations.
                            We create memories that last a lifetime with elegance and creativity.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-bold text-accent">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-600">
                                <MapPin className="h-5 w-5 text-secondary" />
                                <span>123 Celebration Lane, Party City, PC 12345</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-600">
                                <Phone className="h-5 w-5 text-secondary" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-600">
                                <Mail className="h-5 w-5 text-secondary" />
                                <span>hello@funzio.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-bold text-accent">Newsletter</h3>
                        <p className="text-gray-600">Subscribe to get the latest updates and offers.</p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary"
                            />
                            <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} FunZio Event Planners. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
