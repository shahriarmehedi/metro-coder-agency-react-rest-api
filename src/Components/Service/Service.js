import React from 'react';

const Service = (props) => {

    const { picture, name, text } = props.service

    return (
        <div className="transform hover:-translate-y-3 to-hover text-center secondary-bg transition duration-300 rounded w-full mx-auto">
            <img className="mx-auto w-full rounded-t" src={picture} alt="" />
            <h1 className="px-5 pt-5 text-2xl font-bold text-green-400">{name}</h1>
            <h2 className="px-5 pt-5 text-gray-400">{text}</h2>
            <button className="px-8 py-3 mt-10 mb-8 bg-green-400 custom-bg-font rounded hover:bg-white text-gray-800 transition duration-300">ENROLL NOW</button>
        </div>
    );
};

export default Service;