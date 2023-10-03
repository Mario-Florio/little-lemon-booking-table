import littleLemonLogo from "../little-lemon-logos/Asset 16@4x.png";

function Nav() {
    return(
        <nav className="navbar">
            <a href="/"><img src={littleLemonLogo} width="250" alt="Little Lemon Logo"/></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;