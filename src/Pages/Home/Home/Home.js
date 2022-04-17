import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner'
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Pricing></Pricing>
            <Services></Services>
        </div>
    );
};

export default Home;