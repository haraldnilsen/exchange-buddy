import React from 'react'
import { NavLink } from "react-router-dom";

interface Props {
  text: string;
}

const DropdownComponent: React.FC<Props> = ({ text }) => {
    return (
        <ul className='absolute bg-d-green z-10 mt-1 py-2 w-40 rounded-md shadow-lg'>
            <li className='px-4 py-2 hover:bg-pink-200 hover:text-white'>
                <NavLink to="/profile">{text}</NavLink>
            </li>
            <li className='px-4 py-2 hover:bg-pink-200 hover:text-white'>
                <NavLink to="/settings">{text}</NavLink>
            </li>
        </ul>
    );
};

export default DropdownComponent;