import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext( AuthContext );
    const theme = isLightTheme ? light : dark;
    return ( 
        <nav style={{ background: theme.ui, color: theme.syntax}}>
            <h1>Sphinx</h1>
            <div onClick={toggleAuth}>
            { isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
            <li>Home</li>
    N     <li>Contact</li>
            <li>Services</li>
            </ul>
        </nav>   
    );
}
export default Navbar;
