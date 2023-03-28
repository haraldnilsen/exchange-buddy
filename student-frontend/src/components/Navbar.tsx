import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Menu from "../icons/Menu";
import Close from "../icons/Close";
import Button3d from "../icons/Button3d";

const Navbar: React.FC = (props) => {

    let [ open, setOpen ] = useState(false);
        
    return(
        <>
            <div className='shadow-md w-full fixed top-0 left-0 z-50'>
                <div id="navbar" className='md:flex items-center justify-between bg-d-green py-4 md:px-10 px-7 h-24 shadow-md'>
                    <div className='cursor-pointer flex items-center ml-8'>
                        <NavLink to="/">
                            <img alt='logo' className='w-32 h-26 ml-8 color-pink-400' src={require("../images/logo.png")} />
                        </NavLink>
                    </div>
                    <div onClick={() => setOpen(!open)}>
                    {
                        open
                        ? <Close />
                        : <Menu />
                    }
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-18 absolute md:static bg-d-green md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0
                         pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                        <li className='md:ml-8 text-xl h-10'>

                        </li>
                        <li className='md:ml-8 text-xl'>
                            <NavLink to="/faq">
                                <p className='text-pink-200 hover:text-pink-400 duration-500'>FAQ</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <NavLink to="/about">
                                <p className='text-pink-200 hover:text-pink-400 duration-500'>About Us</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <NavLink to="/search">
                                <p className='text-pink-200 hover:text-pink-400 duration-500'>Find Buddy</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7'>
                            <NavLink to="/register">
                                <Button3d text="Register" />
                            </NavLink>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7'>
                            <NavLink to="/login">
                                <Button3d text="Login" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;