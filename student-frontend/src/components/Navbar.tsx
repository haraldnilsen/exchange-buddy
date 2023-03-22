import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Menu from "../icons/Menu";
import Close from "../icons/Close";
import Button3d from "../icons/Button3d";

const Navbar: React.FC = (props) => {

    let [ open, setOpen ] = useState(false);

    const navbar = document.getElementById("navbar");
    if(navbar != null)
        navbar.style.backgroundColor = "FF9A00"
        
    return(
        <>
            <div className='shadow-md w-full fixed top-0 left-0 z-50'>
                <div id="navbar" className='md:flex items-center justify-between bg-d-green py-4 md:px-10 px-7 h-24 shadow-md'>
                    <div className='cursor-pointer flex items-center ml-8'>
                        <NavLink to="/">
                            {/* ADD LOGO HER */}
                            {/* <img alt='logo' className='w-20 h-20' src={require("../images/ss-logo.png")} /> */}
                            logo
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
                            <NavLink to="/gallery">
                                <p className='text-pink-200 hover:text-pink-400 duration-500'>faq</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <NavLink to="/newsletter">
                                <p className='text-pink-200 hover:text-pink-400 duration-500'>search</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7'>
                            <NavLink to="/register">
                                <Button3d text="register" />
                            </NavLink>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7'>
                            <NavLink to="/login">
                                <Button3d text="login" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;