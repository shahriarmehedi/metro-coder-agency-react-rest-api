import React from 'react';
import { motion } from 'framer-motion';
import ProcessSection from '../../ProcessSection/ProcessSection';
import HeroSection from '../HeroSection/HeroSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import './Home.css'
// //////////////////// HOME PAGE /////////////////////
const Home = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="custom-bg text-white">
            <HeroSection></HeroSection>
            <ServicesSection></ServicesSection>
            <ProcessSection></ProcessSection>
        </motion.div>
    );
};

export default Home;