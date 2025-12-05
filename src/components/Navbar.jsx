import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronUp } from 'lucide-react';
import funzioLogo from '../assets/funzio-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showContactInfo, setShowContactInfo] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Booking', path: '/booking' },
        { name: 'Gallery', path: '/gallery' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-primary shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src={funzioLogo} alt="FunZio Logo" className="h-13" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-secondary border-b-2 border-secondary'
                                    : 'text-accent hover:text-secondary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowContactInfo(true)}
                            onMouseLeave={() => setShowContactInfo(false)}
                        >
                            <Link
                                to="/contact"
                                className="bg-green-300 text-white px-4 py-2 font-medium hover:bg-green-400 transition-all transform hover:scale-105 flex items-center gap-2"
                            >
                                CONTACT US
                                <ChevronUp className={`h-4 w-4 transition-transform ${showContactInfo ? 'rotate-180' : ''}`} />
                            </Link>

                            {/* Hover Dropdown */}
                            {showContactInfo && (
                                <div className="absolute top-full right-0 mt-0.5 bg-white shadow-lg rounded-lg p-4 min-w-[200px] border border-gray-200">
                                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                                        <Phone className="h-4 w-4" />
                                        <a href="tel:+919044201220" className="hover:text-green-400">
                                            9044201220
                                        </a>
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        FunZio
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-accent hover:text-secondary focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-secondary bg-red-50'
                                    : 'text-accent hover:text-secondary hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
