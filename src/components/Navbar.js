import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>My Portfolio</h1>
            <ul>
                <li><a href='#hero'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;