import "./Hero.css";
import heroImg from "./hero.jpg";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="home__header">
            <section>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/reservations">Reserve a Table</Link>
            </section>
            <img src={heroImg} alt="Waiter holding dish of food."/>
        </header>
    );
}

export default Header;