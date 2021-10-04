import React from 'react';
import { NavLink } from 'react-router-dom';

/////////////////////  PROCESSS SECTION IN HOMEPAGE  //////////////////////


const ProcessSection = () => {
    return (
        <div>
            <section className="text-gray-400 custom-bg body-font">
                <div className="container px-5 pb-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="mb-5 pt-20 text-center text-3xl font-bold text-green-400">OUR TEACHING PROCESS</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">We have enhanced teaching process that will develop your skill from beginning to the advanced level. We are offering a nice organized process listed bellow.</p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="secondary-bg rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Understanding concepts first</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="secondary-bg rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Practicing more & more</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="secondary-bg rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Moving through challenges</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="secondary-bg rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Enhance creativity</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="secondary-bg rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Self assesment</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="secondary-bg rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Problem solving habit</span>
                            </div>
                        </div>
                    </div>
                    <button className="flex mx-auto mt-16 text-gray-800 bg-green-400 border-0 py-2 px-8 focus:outline-none hover:bg-white transition duration-300 rounded text-lg"><NavLink to="/contact">CONTACT US</NavLink></button>
                </div>
            </section>
        </div>
    );
};

export default ProcessSection;