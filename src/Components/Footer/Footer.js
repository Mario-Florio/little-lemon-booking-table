import "./Footer.css";
import littleLemonLogo from "../../little-lemon-logos/Asset 20@4x.png";

function Footer() {
    return(
        <footer>
            <nav>
                <a href="/"><img src={littleLemonLogo} width="100" alt="Little Lemon Logo"/></a>
            </nav>
            <nav>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
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
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Twitter</a></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;