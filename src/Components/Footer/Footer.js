import "./Footer.css";
import littleLemonLogo from "../../little-lemon-logos/Asset 20@4x.png";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="footer">
            <nav>
                <a href="/"><img src={littleLemonLogo} width="100" alt="Little Lemon Logo"/></a>
            </nav>
            <nav>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link>Order Online</Link></li>
                    <li><Link>Login</Link></li>
                </ul>
            </nav>
            <section>
                <h3>Contact</h3>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </section>
            <section>
                <h3>Social Media Links</h3>
                <ul>
                    <li><span>Facebook</span></li>
                    <li><span>Twitter</span></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;