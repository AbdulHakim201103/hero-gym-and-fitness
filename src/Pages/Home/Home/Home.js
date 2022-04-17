import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner'
import Service from '../Service/Service'
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Pricing></Pricing>
            <Service></Service>
        </div>
    );
};

export default Home;