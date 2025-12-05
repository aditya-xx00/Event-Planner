import React from 'react';

const Welcome = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-base text-secondary font-semibold tracking-wide uppercase" data-aos="fade-up">About Us</h2>
                <p className="mt-2 font-semibold text-3xl leading-8 sm:text-4xl" style={{ fontFamily: "Poppins, sans-serif", color: "#190A40" }} data-aos="fade-up">
                    Welcome to FunZio
                </p>
                <p className="mt-6 max-w-5xl text-xl font-light mx-auto" style={{ color: "#190A40" }} data-aos="fade-up">
                    Welcome to FunZio, your party and decoration planner in Prayagraj, Uttar Pradesh, India. Experience our friendly service, feedback-oriented approach, and enjoy a free consultation for your next event. Let's make your celebrations memorable together with FunZio!
                </p>

                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        '/public/images/copy1.jpg',
                        '/public/images/copy2.webp',
                        '/public/images/copy3.webp',
                        '/public/images/copy6.jpg',
                        '/public/images/copy7.jpg',
                        '/public/images/copy4.jpg',
                        '/public/images/image9.jpg',
                        '/public/images/copy5.jpg',
                    ].map((img, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1 group" data-aos="fade-up" data-aos-offset="200" >
                            <img
                                src={img}
                                alt={`Event ${index + 1}`}
                                className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Welcome;
