import React from 'react';
import { NavLink } from 'react-router-dom';
import './ServicesSection.css'

/////////////////////////// SERVICES IN HOMEPAGE /////////////////////

const ServicesSection = () => {
    return (
        <div className="custom-bg2">
            <section className="w-5/6 lg:container mx-auto text-center ">
                <h1 className="mb-5 pt-20 text-center text-3xl font-bold text-green-400">SKILL DEVELOPING SERVICES</h1>
                <p className="mb-20 text-gray-400">Our main services of education includes these major categories.</p>
                <div className="flex flex-col lg:flex-row">
                    <div className="mx-auto">
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:px-20 py-5 rounded mb-5">
                            <div
                                className="transform hover:-translate-y-3 to-hover text-center secondary-bg hover:bg-green-400 hover:text-gray-800 transition duration-300 rounded">
                                <img className="w-full rounded-t" src="https://raw.githubusercontent.com/shahriarmehedi/simple-nav/main/web.png" alt="" />
                                <h3 className="to-change text-xl lg:text-2xl font-bold mt-7 mb-3 text-green-400">Web Development</h3>
                                <p className="mb-7">We produce next generation web developer</p>
                            </div>
                            <div
                                className="transform hover:-translate-y-3 to-hover text-center secondary-bg hover:bg-green-400 hover:text-gray-800 transition duration-300 rounded">
                                <img className="w-full rounded-t" src="https://raw.githubusercontent.com/shahriarmehedi/simple-nav/main/app.png" alt="" />
                                <h3 className="to-change text-xl lg:text-2xl font-bold mb-3 mt-7 text-green-400">App Development
                                </h3>
                                <p className="mb-7">Native & cross platform app development</p>
                            </div>
                            <div
                                className="transform hover:-translate-y-3 to-hover text-center secondary-bg hover:bg-green-400 hover:text-gray-800 transition duration-300 rounded">
                                <img className="w-full rounded-t" src="https://raw.githubusercontent.com/shahriarmehedi/simple-nav/main/ui_ux.png" alt="" />
                                <h3 className="to-change text-xl lg:text-2xl font-bold mb-3 mt-7 text-green-400">UI/UX Design
                                </h3>
                                <p className="mb-7">Modern web and app interface design</p>
                            </div>
                            <div
                                className="transform hover:-translate-y-3 to-hover text-center secondary-bg hover:bg-green-400 hover:text-gray-800 transition duration-300 rounded">
                                <img className="w-full rounded-t" src="https://raw.githubusercontent.com/shahriarmehedi/simple-nav/main/seo.png" alt="" />
                                <h3 className="to-change text-xl lg:text-2xl font-bold mb-3 mt-7 text-green-400">SEO
                                </h3>
                                <p className="mb-7">Search Engine Optimization Specialist</p>
                            </div>
                        </div>
                        <button className="px-8 py-3 mt-10 mb-20 bg-green-400 custom-bg-font rounded hover:bg-white text-gray-800 transition duration-300 "> <NavLink to="/services">SEE ALL SERVICES</NavLink></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesSection;