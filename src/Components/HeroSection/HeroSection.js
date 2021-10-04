import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeroSection.css'
// ///////////////////////   HERO SECTION ON HOMEPAGE   ///////////////////////
const HeroSection = () => {
    return (
        <div>
            <section className="container mx-auto text-left px-10 py-20  mb-20">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-10 leading-normal"> Digital Skills for Life
                        </h1>
                        <p className="">Make it work, make it right, make it fast.</p>
                        <button
                            className="px-8 py-3 mt-10 bg-green-400 custom-bg-font rounded hover:bg-white text-gray-800 transition duration-300 "><NavLink to="/services">START YOUR JOURNEY</NavLink></button>
                    </div>
                    <div>
                        <img className="py-10 lg:py-0" src="https://raw.githubusercontent.com/shahriarmehedi/simple-nav/main/hero-img2.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;