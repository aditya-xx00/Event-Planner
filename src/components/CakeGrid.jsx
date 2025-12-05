import React from 'react';
import cakes from '../data/cakes.json';

const CakeGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakes.map((cake) => (
                <div key={cake.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay={cake.id * 50}>
                    <div className="relative h-64">
                        <img
                            src={cake.image}
                            alt={cake.name}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-secondary font-bold shadow-sm">
                            {cake.price}
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-accent font-serif mb-2">{cake.name}</h3>
                        <p className="text-gray-600 mb-4">{cake.description}</p>
                        <button className="w-full bg-secondary text-white py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                            Order Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CakeGrid;
