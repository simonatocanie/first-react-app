import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import { useState } from "react";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home')

    const checkActiveClass = (link) => {
        if (activeLink === link) {
            return styles.active;
        }

        return '';
    }

    return (
        <ul>
            <li><Link className={checkActiveClass('home')} to='/' onClick={() => setActiveLink('home')}>Home</Link></li>
            <li><Link className={checkActiveClass('calculator')} to='/calculator' onClick={() => setActiveLink('calculator')}>Calculator</Link></li>
        </ul>
    );
}
export default Navbar;