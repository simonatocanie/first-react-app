import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <ul>
            <li><Link className="active" to='/'>Home</Link></li>
            <li><Link to='/calculator'>Calculator</Link></li>
        </ul>
    );
}
export default Navbar;