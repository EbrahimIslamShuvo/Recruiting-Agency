import React from 'react';
import Hero from './Component/Hero';
import WhyChooseUS from './Component/WhyChooseUS';
import OurService from './Component/OurService';
import Project from './Component/Project';
import RT from './Component/RT';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <WhyChooseUS></WhyChooseUS>
            <OurService></OurService>
            <Project></Project>
            <RT></RT>
        </div>
    );
};

export default Home;