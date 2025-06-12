import React, { useEffect } from 'react';
import NavBar from './Component/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Root = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // optional: animation duration
            once: false,      // optional: animate only once
        });
    }, []);
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;