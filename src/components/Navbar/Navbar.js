import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" className="brand">NotesByVlad</NavLink> {/* Brand as a link to Home */}
            <ul>
                <li>
                    <NavLink to="/" 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={e => e.currentTarget.classList.contains('active') && e.preventDefault()}>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills" 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={e => e.currentTarget.classList.contains('active') && e.preventDefault()}>
                    Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={e => e.currentTarget.classList.contains('active') && e.preventDefault()}>
                    Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/passions" 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={e => e.currentTarget.classList.contains('active') && e.preventDefault()}>
                    Passions
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/funexperiments" 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={e => e.currentTarget.classList.contains('active') && e.preventDefault()}>
                    Fun Experiments
                    </NavLink>
                </li>
                </ul>
        </nav>
    );
}

export default Navbar;