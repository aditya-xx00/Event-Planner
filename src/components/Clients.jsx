import React from 'react';

const Clients = () => {
    const clients = [
        { name: 'Simple', logo: '/public/images/client1.png' },
        { name: 'm', logo: '/public/images/client2.png' },
        { name: 'b/eventful', logo: '/public/images/client3.png' },
        { name: 'Parties', logo: '/public/images/client4.png' },
        { name: 'Design', logo: '/public/images/client5.png' },
        { name: 'Green Wood', logo: '/public/images/client6.png' },
    ];

    return (
        <section className="py-16 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-semibold text-accent sm:text-4xl font-serif" style={{ fontFamily: "Poppins, sans-serif", color: "#190A40" }}>
                    Our Clients
                </h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto" style={{ fontFamily: "Poppins, sans-serif", color: "#190A40" }}>
                    Our clients inspire us — and we turn their vision into unforgettable experiences.
                </p>

                <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                    {clients.map((client, index) => (
                        <div key={index} className="col-span-1 flex justify-center items-center p-8 bg-red-50 rounded-lg hover:shadow-md transition-shadow">
                            <img
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className="w-full h-auto max-h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    // Fallback to text if image fails to load
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<div class="text-2xl font-bold text-accent opacity-70 font-serif">${client.name}</div>`;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
