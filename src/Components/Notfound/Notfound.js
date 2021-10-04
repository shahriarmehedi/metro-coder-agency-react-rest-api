import React from 'react';
import { NavLink } from 'react-router-dom';
import './Notfound.css'
import { motion } from 'framer-motion';

const Notfound = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="custom-bg mx-auto">
            <h1 className="pt-4 text-white text-lg lg:text-3xl font-semibold">OOOPSS !</h1>
            <h2 className="py-2 text-white text-2xl lg:text-5xl font-bold">Page not found</h2>
            <img className="py-3 mx-auto" src="https://raw.githubusercontent.com/shahriarmehedi/simple-nav/main/404.png" alt="" />
            <button className="mt-7 py-3 px-8 mb-20 bg-green-400 rounded text-gray-800 hover:bg-white transition duration-300"><NavLink to="/home">BACK TO HOME</NavLink></button>
        </motion.div>
    );
};

export default Notfound;