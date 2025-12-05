import React from 'react';

const Gallery = () => {
    const images = [
        "../src/assets/as.jpg",
        "../src/assets/choti didi.jpg",
        "https://images.unsplash.com/photo-1530103862676-de3c9a59af38?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533294160622-d5fece3e080d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=800&q=80"
    ];

    return (
        <div className="bg-primary min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-accent sm:text-5xl font-serif mb-4" data-aos="fade-down" style={{ color: "#190A40" }}>Our Gallery</h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500" data-aos="fade-up" style={{ color: "#190A40" }}>
                        A glimpse into the magical moments we've created.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((src, idx) => (
                        <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay={idx * 30}>
                            <img
                                src={src}
                                alt={`Gallery ${idx + 1}`}
                                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
