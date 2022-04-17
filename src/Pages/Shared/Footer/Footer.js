import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='bg-dark d-flex justify-content-around align-content-end'>
            <p className='py-3'><small className='text-white'>Copyright &copy; {year} Hero Gym and Fitness.All Rights Reserved</small></p>
        </div>
    );
};

export default Footer;