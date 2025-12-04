import React from 'react';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Clients from '../components/Clients';

const Home = () => {
    return (
        <div className="animate-fade-in">
            <Hero />
            <Welcome />
            <Clients />
        </div>
    );
};

export default Home;
