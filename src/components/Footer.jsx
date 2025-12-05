import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { MessageCircle } from 'lucide-react'; // WhatsApp icon

const Footer = () => {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <img src="/src/assets/funzio-logo.png" alt="FunZio Logo" className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
                        </Link>
                        <p className="text-gray-600 leading-relaxed" style={{ color: "#190A40" }}>
                            Transforming your vision into unforgettable celebrations.
                            We create memories that last a lifetime with elegance and creativity.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.instagram.com/kirtipandey21199/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors"><MessageCircle className="h-5 w-5" /></a>
                            <a href="https://www.facebook.com/funzio.events" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 md:ml-auto md:w-auto" >
                        <h3 className="font-serif text-lg font-bold text-accent" style={{ color: "#190A40" }}>Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-600" style={{ color: "#190A40" }}>
                                <MapPin className="h-5 w-5 text-secondary" />
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Kalindipuram,+Prayagraj,+Uttar+Pradesh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-secondary transition-colors cursor-pointer"
                                >
                                    Kalindipuram, Prayagraj, Uttar Pradesh
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-600" style={{ color: "#190A40" }}>
                                <Phone className="h-5 w-5 text-secondary" />
                                <a href="tel:+919044201220" className="hover:text-secondary transition-colors">
                                    +91-9044201220
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-600" style={{ color: "#190A40" }}>
                                <Mail className="h-5 w-5 text-secondary" />
                                <a href="mailto:funzioo99@gmail.com" className="hover:text-secondary transition-colors">
                                    funzioo99@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Aditya Kushwaha. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
