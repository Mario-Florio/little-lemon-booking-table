import "./Nav.css";
import littleLemonLogo from "../../little-lemon-logos/Asset 16@4x.png";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav className="navbar">
            <a href="/"><img src={littleLemonLogo} width="250" alt="Little Lemon Logo"/></a>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><span>About</span></li>
                <li><span>Menu</span></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><span>Order Online</span></li>
                <li><span>Login</span></li>
            </ul>
        </nav>
    );
}

export default Nav;