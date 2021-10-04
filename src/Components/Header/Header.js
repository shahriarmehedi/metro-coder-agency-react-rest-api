import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const [showmenu, setShowmenu] = useState(false);

    let menu
    if (showmenu) {
        menu =
            <div className="fixed bg-gray-900 top-0 left-0 w-4/5 h-full transition duration-500 shadow z-50">
                <h1 className="pt-10"><NavLink to="/home" activeStyle={{
                    fontWeight: "bold",
                    color: "#34D399"
                }}><button className="py-3 ">HOME</button></NavLink></h1>
                <h1 className="pt-10"><NavLink to="/about" activeStyle={{
                    fontWeight: "bold",
                    color: "#34D399"
                }}><button className="py-3 ">ABOUT</button></NavLink></h1>
                <h1 className="pt-10"><NavLink to="/services" activeStyle={{
                    fontWeight: "bold",
                    color: "#34D399"
                }}><button className="py-3 ">SERVICES</button></NavLink></h1>
                <h1 className="pt-10"><NavLink to="/contact" activeStyle={{
                    fontWeight: "bold",
                    color: "#34D399"
                }}><button className="py-3 ">CONTACT</button></NavLink></h1>
            </div>

    }

    return (
        <div>
            <nav className="custom-bg text-white mx-auto overflow-x-hidden">
                <ul className="flex justify-between my-5 items-center">
                    <li className="px-10 lg:pl-20 py-3 text-2xl font-bold"><a href="/home"><img src="https://raw.githubusercontent.com/shahriarmehedi/simple-nav/main/logo-4.png" alt="" /></a></li>
                    <li onClick={() => setShowmenu(!showmenu)} className="md:hidden text-2xl px-5"><i className="fas fa-bars"></i>
                        {menu}</li>
                    <div className="hidden md:flex">
                        <li className="mx-5 hover:text-green-400"><NavLink to="/home" activeStyle={{
                            fontWeight: "bold",
                            color: "#34D399"
                        }}><button className="py-3 hover:text-green-400 transition duration-300">HOME</button></NavLink>
                        </li>

                        <li className="mx-5 hover:text-green-400 transition duration-300"><NavLink to="/about" activeStyle={{
                            fontWeight: "bold",
                            color: "#34D399"
                        }}><button className="py-3 ">ABOUT</button></NavLink> </li>

                        <li className="mx-5 hover:text-green-400 transition duration-300"> <NavLink to="/services" activeStyle={{
                            fontWeight: "bold",
                            color: "#34D399"
                        }}><button className="py-3 ">SERVICES</button></NavLink> </li>

                        <li className="lg:mx-10 lg:px-8 hidden md:flex"> <NavLink to="/contact"><button
                            className="px-8 py-3  bg-green-400 custom-bg-font rounded text-gray-800 hover:bg-white transition duration-300">CONTACT</button></NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Header;





