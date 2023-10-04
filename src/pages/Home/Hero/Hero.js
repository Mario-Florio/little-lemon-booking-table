import "./Hero.css";
import heroImg from "./hero.jpg";

function Header() {
    return(
        <header className="home__header">
            <section>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a href="/reservations">Reserve a Table</a>
            </section>
            <img src={heroImg} alt="Waiter holding dish of food."/>
        </header>
    );
}

export default Header;