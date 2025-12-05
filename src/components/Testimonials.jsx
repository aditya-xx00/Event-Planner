import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Refresh AOS animations when slide changes
        if (window.AOS) {
            window.AOS.refresh();
        }
    }, [currentIndex]);

    const testimonials = [
        {
            quote: "I don't just plan events — I shape memories that stay in the heart forever",
            name: "Kirti Pandey"
        },
        {
            quote: "Memories in the making — let us turn your vision into a celebration of a lifetime",
            name: "Jyoti Pandey"
        },
        {
            quote: "From smiles to surprises, I craft every detail to make your celebration truly meaningful",
            name: "Ashish Pandey"
        },
        {
            quote: "Great celebrations aren’t planned — they’re felt",
            name: "Riya Jaiswal"
        },
        {
            quote: "From your vision to every tiny detail, I turn your your thoughts into reality",
            name: "Aditya Kushwaha"
        }
    ];

    const handlePrevious = () => {
        if (isAnimating) return;
        setDirection('left');
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setDirection('right');
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToSlide = (index) => {
        if (isAnimating) return;
        setDirection(index > currentIndex ? 'right' : 'left');
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <section className="py-12 bg-[#E8DED2]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-center min-h-[180px]">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 sm:left-5 p-3 rounded-full border-2 border-gray-400 bg-transparent hover:bg-white hover:border-gray-600 transition-all duration-300 z-10"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    {/* Quote Content with Sliding Animation */}
                    <div className="overflow-hidden w-full">
                        <div
                            key={currentIndex}
                            className={`max-w-3xl mx-auto px-12 sm:px-20 text-center ${direction === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'
                                }`}
                        >
                            <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-6 animate-fadeInUp-delay-200">
                                {testimonials[currentIndex].quote}
                            </blockquote>
                            <p className="text-sm sm:text-base font-normal text-gray-800 animate-fadeInUp-delay-400" style={{ fontFamily: "Poppins, sans-serif" }}>
                                {testimonials[currentIndex].name}
                            </p>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 sm:right-5 p-3 rounded-full border-2 border-gray-400 bg-transparent hover:bg-white hover:border-gray-600 transition-all duration-300 z-10"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center space-x-2 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-gray-300 scale-110'
                                : 'border-2 border-gray-300 bg-transparent hover:border-gray-400'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
