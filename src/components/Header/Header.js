import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const active = ({ isActive }) => {
        return {
            color: isActive ? 'green' : '',
        }
    }

    return (
        <nav className='py-3'>
            <NavLink style={active} to="/home">Home</NavLink>
            <NavLink style={active} to="/reviews">Reviews</NavLink>
            <NavLink style={active} to="/dashboard">Dashboard</NavLink>
            <NavLink style={active} to="/blogs">Blogs</NavLink>
            <NavLink style={active} to="/about">About</NavLink>
        </nav >
    );
};

export default Header;