import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://shahriarmehedi.github.io/simple-nav/data1.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    //////////////////////////////  SERVICES PAGE  ////////////////////////

    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }} className="custom-bg">
            <h1 className=" pt-10 text-center text-3xl font-bold text-green-400">OUR ONLINE COURSES</h1>
            <p className="text-gray-400 pt-5">Our main services includes these online courses.</p>
            <div className="w-5/6 custom-bg xl:px-36 2xl:px-48 py-5 lg:py-28 text-white grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

        </motion.div>
    );
};

export default Services;